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

const Checkout = () => {
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
                <button className="flex items-center justify-center gap-2 bg-[#FF8906] rounded-md active:scale-95 transition-all p-1.5 sm:p-2">
                  <FiPlus />
                  <h5 className="text-xs">Add Menu</h5>
                </button>
              </div>

              <div className="order flex flex-col gap-3 sm:gap-5 overflow-y-auto max-h-[22rem] sm:max-h-[21rem]">
                <CardProductOrder
                  productName="Hazelnut Latte"
                  quantity="2"
                  size="Regular"
                  variant="Ice"
                  delivery="Dine in"
                  basePrice="20.000"
                  discountPrice="10.000"
                  image={Product1}
                />

                <CardProductOrder
                  productName="Hazelnut Latte"
                  quantity="2"
                  size="Regular"
                  variant="Ice"
                  delivery="Dine in"
                  basePrice="20.000"
                  discountPrice="10.000"
                  image={Product2}
                />

                <CardProductOrder
                  productName="Hazelnut Latte"
                  quantity="2"
                  size="Regular"
                  variant="Ice"
                  delivery="Dine in"
                  basePrice="20.000"
                  discountPrice="10.000"
                  image={Product3}
                />

                <CardProductOrder
                  productName="Hazelnut Latte"
                  quantity="2"
                  size="Regular"
                  variant="Ice"
                  delivery="Dine in"
                  basePrice="20.000"
                  discountPrice="10.000"
                  image={Product4}
                />
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
