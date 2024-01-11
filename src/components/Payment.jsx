import BRI from "../assets/media/BRI.png"
import DANA from "../assets/media/DANA.png"
import BCA from "../assets/media/BCA.png"
import gopay from "../assets/media/gopay.png"
import ovo from "../assets/media/ovo.png"
import PayPal from "../assets/media/paypal.png"

import { useNavigate } from "react-router-dom"
import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import { resetProducts } from "../redux/reducers/product"
import { resetTotal } from "../redux/reducers/totalOrder"
import { resetShipping } from "../redux/reducers/deliveryShipping"

import { useState, useEffect } from "react"

const PaymentList = ({list, idr}) => {
  return (
    <div className="flex justify-between">
      <h5 className="text-[#4F5665] font-semibold text-xs sm:text-base">
        {list}
      </h5>
      <h5 className="font-semibold text-xs sm:text-base">Idr.{idr.toLocaleString('id')}</h5>
    </div>
  );
};

const Payment = () => {
  const token = useSelector(state => state.auth.token)
  const products = useSelector(state => state.product.data)
  const totalOrder = useSelector(state => state.totalOrder.total)
  const shipping = useSelector(state => state.deliveryShipping.shipping)

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const checkoutAction = async (event) => {
    event.preventDefault();

    const form = new URLSearchParams();
    form.append("products", JSON.stringify(products))
    form.append("deliveryShipping", shipping)

    try {
      const {data} = await axios.post(`http://localhost:8888/checkout`, form.toString(), {
        headers: {
          'Authorization' : `Bearer ${token}`
        }
      })

      console.log(data)
      console.log(data.results.id)
  
      dispatch(resetProducts())
      dispatch(resetTotal())
      dispatch(resetShipping())
      navigate('/history-order')

    } catch (error) {
      console.log(error)
    }
  }

    return (
        <div className="flex-1 h-fit flex flex-col">
        <div className="flex pt-1 h-12 font-semibold">
          <h4>Total</h4>
        </div>
        <div className="payment-summary bg-[#E8E8E84D] p-3 text-sm flex flex-col gap-4">
            <PaymentList list="order" idr={totalOrder}/>
            <PaymentList list="Delivery" idr={5000}/>
            <PaymentList list="Tax" idr={4000}/>

          <hr/>

          <PaymentList list="Sub Total" idr={totalOrder + 5000 + 4000}/>

        <button onClick={checkoutAction} className="bg-[#3E3232] w-full rounded-md text-xs sm:text-sm py-1.5 active:scale-95 transition-all flex justify-center">Checkout</button>
          <p className="text-xs text-[#4F5665]">We Accept</p>

          <div className="flex flex-wrap justify-between gap-2 items-center">
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
          </div>

          <p className="text-xs text-[#4F5665]">*Get Discount if you pay with Bank Central Asia</p>
        </div>
      </div>
    )
}

export default Payment