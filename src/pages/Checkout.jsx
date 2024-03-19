import { Link } from "react-router-dom"
import { FiPlus } from "react-icons/fi"

import { useDispatch, useSelector } from "react-redux"
import { setShipping } from "../redux/reducers/deliveryShipping"
import { setEmail } from "../redux/reducers/emailCustomer"
import { setFullName } from "../redux/reducers/FullNameCustomer"
import { setDeliveryAddress } from "../redux/reducers/deliveryAddress"
import { useEffect } from "react"


import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import CardProductOrder from "../components/CardProductOrder"
import Payment from "../components/Payment"
import InputForm from "../components/InputForm"
import OptionVariety from "../components/OptionVariety"
import Info from "../components/Info"



const Checkout = () => {
  const profile = useSelector(state => state.profile.data)
  const products = useSelector(state => state.products.data)
  const sizeProducts = useSelector(state => state.sizeProducts.sizes)
  const variantProduct = useSelector(state => state.variantProducts.variants)
  const quantityProducts = useSelector(state => state.quantityProducts.quantities)

  const dispatch = useDispatch()


  const handleCheckbox = (event) => {
    if (event.target.checked) {
      dispatch(setShipping(event.target.value))
    }
  }

  const setDataCustomer = (event) => {
    if(event.target.name == "email"){
      dispatch(setEmail(event.target.value))
    }else if(event.target.name == "full-name"){
      dispatch(setFullName(event.target.value))
    }else{
      dispatch(setDeliveryAddress(event.target.value))
    }
  }

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    })
  }, [])

  return (
    <body className="flex flex-col items-center">
      <Navbar />

      <div className="flex flex-col px-4 w-full sm:w-5/6 mt-20 sm:mt-24 mb-10 sm:mb-16 gap-4 ">
        <h1 className="text-2xl sm:text-3xl font-semibold">Payment Details</h1>

        <form className="flex flex-col sm:flex-row gap-4 ">
          <div className="flex flex-col w-full sm:w-7/12 gap-6 sm:gap-16">
            <div className="flex flex-col gap-4">
              <div className="flex justify-between">
                <div className={`${products.length == 0 || !profile.address ? 'block ': 'hidden'} `}>
                  <Info message={!profile.address ? "please add your address to create an order" : "empty cart. . . let's create a coffee moment !"} />
                </div>
                <h4 className="font-semibold">
                  {products.length != 0 && "Your Order"}
                </h4>
                <Link
                  to="/products"
                  className="flex items-center justify-center gap-2 text-white bg-gradient-to-b from-[#7E6363] to-black rounded-md active:scale-95 transition-all p-1.5 sm:p-2 h-fit"
                >
                  <FiPlus />
                  <h5 className="text-xs">Add Menu</h5>
                </Link>
              </div>

              <div className="order flex flex-col gap-3 sm:gap-5 overflow-y-auto max-h-[22rem] sm:max-h-[21rem]">
                {products &&
                  products.map((product, index) => (
                    <CardProductOrder
                      key={index}
                      id={product.id}
                      index={index}
                      productName={product.name}
                      quantity={quantityProducts[index]}
                      size={sizeProducts[index]}
                      variant={variantProduct[index]}
                      delivery={product.delivery}
                      basePrice={product.basePrice}
                      discountPrice={product.basePrice - product.discount}
                      image={product.image}
                      tag={product.tag}
                    />
                  ))}
              </div>
            </div>

            <div className="flex flex-col justify-center gap-4">
              <h2 className="text-lg sm:text-xl font-semibold">
                Payment Info & Delivery
              </h2>
              <InputForm
                name="email"
                label="Email"
                type="email"
                placeholder="Enter Your Email"
                onChange={setDataCustomer}
              />
              <InputForm
                name="full-name"
                label="Full Name"
                type="text"
                placeholder="Enter Your Full Name"
                onChange={setDataCustomer}
              />
              <InputForm
                name="address"
                label="Address"
                type="text"
                placeholder="Enter Your Address"
                onChange={setDataCustomer}
              />
              <OptionVariety option="Delivery" onChange={handleCheckbox} />
            </div>
          </div>

          <Payment />
        </form>
      </div>

      <Footer />
    </body>
  )
}

export default Checkout
