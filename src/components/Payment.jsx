import BRI from "../assets/media/BRI.png"
import DANA from "../assets/media/DANA.png"
import BCA from "../assets/media/BCA.png"
import gopay from "../assets/media/gopay.png"
import ovo from "../assets/media/ovo.png"
import PayPal from "../assets/media/paypal.png"

import Info from "./Info"

import axios from "axios"
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { resetProducts } from "../redux/reducers/products"
import { resetTotal } from "../redux/reducers/totalOrder"
import { resetShipping } from "../redux/reducers/deliveryShipping"
import { resetSizes } from "../redux/reducers/sizeProducts"
import { resetVariants } from "../redux/reducers/variantProducts"
import { resetQuantities } from "../redux/reducers/quantityProducts"
import { resetId } from "../redux/reducers/productsId"
import { resetEmail } from "../redux/reducers/emailCustomer"
import { resetFullName } from "../redux/reducers/FullNameCustomer"
import { resetdeliveryAddress } from "../redux/reducers/deliveryAddress"
import { useState } from "react"


const PaymentList = ({list, idr}) => {
  return (
    <div className="flex justify-between">
      <h5 className="text-[#4F5665] font-semibold text-xs sm:text-base">
        {list}
      </h5>
      <h5 className="font-semibold text-xs sm:text-base">Idr.{idr.toLocaleString('id')}</h5>
    </div>
  )
}

const Payment = () => {
  const profile = useSelector(state => state.profile.data)
  const token = useSelector(state => state.auth.token)
  const products = useSelector(state => state.products.data)

  const productId = useSelector(state => state.productsId.id)
  const sizeProduct = useSelector(state => state.sizeProducts.sizes)
  const variantProduct = useSelector(state => state.variantProducts.variants)
  const quantityProduct = useSelector(state => state.quantityProducts.quantities)
  const shipping = useSelector(state => state.deliveryShipping.shipping)
  const deliveryAddress = useSelector(state => state.deliveryAddress.deliveryAddress)
  const fullName = useSelector(state => state.fullNameCustomer.fullName)
  const email = useSelector(state => state.emailCustomer.email)

  const totalOrder = useSelector(state => state.totalOrder.total).reduce((prev, curr) => prev + curr, 0)
  const tax = Math.round(totalOrder * 0.025)

  const [OrderSuccess, setOrderSuccess] = useState()

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const checkoutAction = async (event) => {
    event.preventDefault()

    const form = new URLSearchParams()
    form.append("productId", productId)
    form.append("sizeProduct", sizeProduct)
    form.append("variantProduct", variantProduct)
    form.append("quantityProduct", quantityProduct)
    form.append("deliveryShipping", shipping)
    form.append("deliveryAddress", deliveryAddress)
    form.append("fullName", fullName)
    form.append("email", email)

    try {
      await axios.post(`${import.meta.env.VITE_SERVER_URL}/checkout`, form.toString(), {
        headers: {
          'Authorization' : `Bearer ${token}`
        }
      })

      setTimeout(() => {
        setOrderSuccess(true)
      }, 1000)
      
      setTimeout(() => {
        setOrderSuccess(false)

        dispatch(resetProducts())
        dispatch(resetTotal())
        dispatch(resetShipping())
        dispatch(resetSizes())
        dispatch(resetVariants())
        dispatch(resetQuantities())
        dispatch(resetId())
        dispatch(resetEmail())
        dispatch(resetFullName())
        dispatch(resetdeliveryAddress())

        navigate('/history-order')
      }, 5000)

    } catch (error) {
      console.log(error)
    }
  }


    return (
      <div className=" flex-1 h-fit flex flex-col">
        <div className={`${OrderSuccess ? "block " : "hidden"} absolute left-2 sm:left-96 top-24`}>
          <Info message="order placed successfully... have a coffee day!" />
        </div>

        <div className="flex pt-1 h-12 font-semibold">
          <h4>Total</h4>
        </div>
        <div className="payment-summary bg-[#E8E8E84D] p-3 text-sm flex flex-col gap-4">
          <PaymentList list="order" idr={totalOrder} />
          <PaymentList list="Delivery" idr={5000} />
          <PaymentList list="Tax" idr={tax} />

          <hr />

          <PaymentList list="Sub Total" idr={totalOrder + 5000 + tax} />

          <button
            disabled={!products.length || !profile.address}
            onClick={checkoutAction}
            className="bg-gradient-to-b from-[#7E6363] to-black text-white w-full rounded-md text-xs sm:text-sm py-1.5 active:scale-95 disabled:active:scale-100 transition-all flex justify-center"
          >
            Checkout
          </button>
          {/* <p className="text-xs text-[#4F5665]">We Accept</p> */}

          {/* <div className="flex flex-wrap justify-between gap-2 items-center">
            <div>
              <img src={BRI} />
            </div>

            <div>
              <img src={DANA} />
            </div>

            <div>
              <img src={BCA} />
            </div>

            <div>
              <img src={gopay} />
            </div>

            <div>
              <img src={ovo} />
            </div>

            <div>
              <img src={PayPal} />
            </div>
          </div> */}

          {/* <p className="text-xs text-[#4F5665]">
            *Get Discount if you pay with Bank Central Asia
          </p> */}
        </div>
      </div>
    )
}

export default Payment