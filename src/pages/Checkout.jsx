import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import CardProductOrder from "../components/CardProductOrder";
import Payment from "../components/Payment";
import InputForm from "../components/InputForm";
import { FiPlus } from "react-icons/fi";
import Product1 from "../assets/media/detail-product1.jpg";
import Product2 from "../assets/media/detail-product2.jpg";
import Product3 from "../assets/media/detail-product3.jpg";
import Product4 from "../assets/media/home-product1.jpg";
import { useState } from "react";
import { Link } from "react-router-dom";

const Checkout = () => {
  const [products, setProducts] = useState([
    {
      productName:"Hazelnut Latte",
      quantity:"2",
      size:"Regular",
      variant:"Ice",
      delivery:"Dine in",
      basePrice:"20.000",
      discountPrice:"10.000",
      image:Product1
    },
    {
      productName:"Latte",
      quantity:"1",
      size:"Small",
      variant:"Ice",
      delivery:"Door Delivery",
      basePrice:"25.000",
      discountPrice:"20.000",
      image:Product2
    },
    {
      productName:"Cappucino",
      quantity:"2",
      size:"Regular",
      variant:"Hot",
      delivery:"Dine in",
      basePrice:"30.000",
      discountPrice:"25.000",
      image:Product3
    },
    {
      productName:"Affogato",
      quantity:"3",
      size:"Medium",
      variant:"Ice",
      delivery:"Pick Up",
      basePrice:"20.000",
      discountPrice:"15.000",
      image:Product4
    }
  ])
  
  return (
    <body className="flex flex-col items-center">
      <Navbar />

      <div className="flex flex-col px-4 w-full sm:w-5/6 mt-20 sm:mt-24 mb-10 sm:mb-16 gap-4">
        <h1 className="text-2xl sm:text-3xl font-semibold">Payment Details</h1>

        <form className="flex flex-col sm:flex-row gap-4">
          <div className="flex flex-col w-full sm:w-7/12 gap-6 sm:gap-16">
            <div className="flex flex-col gap-4">
              <div className="flex justify-between">
                <h4 className="font-semibold">Your Order</h4>
                <Link to='/products' className="flex items-center justify-center gap-2 bg-[#FF8906] rounded-md active:scale-95 transition-all p-1.5 sm:p-2">
                  <FiPlus />
                  <h5 className="text-xs">Add Menu</h5>
                </Link>
              </div>

              <div className="order flex flex-col gap-3 sm:gap-5 overflow-y-auto max-h-[22rem] sm:max-h-[21rem]">
                {
                  products.map((product, index) => (
                    <CardProductOrder
                    key={index}
                    productName={product.productName}
                    quantity={product.quantity}
                    size={product.size}
                    variant={product.variant}
                    delivery={product.delivery}
                    basePrice={product.basePrice}
                    discountPrice={product.discountPrice}
                    image={product.image}
                  />
                  ))
                }
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
              />
              <InputForm
                name="full-name"
                label="Full Name"
                type="text"
                placeholder="Enter Your Full Name"
              />
              <InputForm
                name="address"
                label="Address"
                type="text"
                placeholder="Enter Your Address"
              />
            </div>
          </div>

          <Payment />
        </form>
      </div>

      <Footer />
    </body>
  );
};

export default Checkout;
