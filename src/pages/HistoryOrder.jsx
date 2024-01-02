import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import PageNavigation from "../components/PageNavigation";
import {
  FiMessageSquare,
  FiAlignRight,
  FiCalendar,
  FiChevronDown,
} from "react-icons/fi";
import Button from "../components/Button";
import Product1 from "../assets/media/detail-product1.jpg";
import Product2 from "../assets/media/detail-product2.jpg";
import Product3 from "../assets/media/detail-product3.jpg";
import Product4 from "../assets/media/home-product1.jpg";
import { Link } from "react-router-dom"
import { useState } from "react";

const CardHistoryOrder = ({numberOrder, date, total, statusDelivery, image}) => {
    return (
        <div className="flex gap-4 items-center p-2 bg-[#E8E8E84D] text-sm">
        <div className="hidden sm:block w-28">
          <img src={image} />
        </div>

        <div className="flex-1 flex flex-col gap-4">
          <div
            className="grid grid-cols-2 place-content-between gap-y-6 sm:flex justify-between"
          >
            <div className="flex flex-col gap-2 text-[#4F5665]">
              <div className="flex items-center gap-1">
                <i className="h-3.5 w-fit" data-feather="coffee"></i>
                <p className="text-xs sm:text-base">No. Order</p>
              </div>
              <h5 className="font-semibold text-black text-xs sm:text-base">
               {numberOrder}
              </h5>
            </div>

            <div className="flex flex-col gap-2 text-[#4F5665]">
              <div className="flex items-center gap-1">
                <i className="h-3.5 w-fit" data-feather="calendar"></i>
                <p className="text-xs sm:text-base">Date</p>
              </div>
              <h5 className="font-semibold text-black text-xs sm:text-base">
                {date}
              </h5>
            </div>

            <div className="flex flex-col gap-2 text-[#4F5665]">
              <div className="flex items-center gap-1">
                <i className="h-3.5 w-fit" data-feather="repeat"></i>
                <p className="text-xs sm:text-base">Total</p>
              </div>
              <h5 className="font-semibold text-black text-xs sm:text-base">
                Idr {total}
              </h5>
            </div>

            <div className="flex flex-col gap-2 text-[#4F5665]">
              <div className="flex items-center gap-1">
                <i className="h-3.5 w-fit" data-feather="refresh-ccw"></i>
                <p className="text-xs sm:text-base">Status</p>
              </div>
              <h5
                className="font-semibold text-[#FF8906] text-xs bg-[#FF890633] p-1.5 rounded-3xl translate-y-[-0.3rem] w-fit"
              >
                {statusDelivery}
              </h5>
            </div>
          </div>

          <Link to="/order-details" className="text-[#FF8906] underline text-xs sm:text-base"
            >Views Order Detail
            </Link>
        </div>
      </div>
    )
}

const HistoryOrder = () => {
  const [token, setToken] = useState(window.localStorage.getItem('token'))

  const [card, setCard] = useState([
    {
      numberOrder:"#12354-09893",
      date:"23 January 2023",
      total:"40.000",
      statusDelivery:"On Progress",
      image:Product1
    },
    {
      numberOrder:"#54321-0989",
      date:"24 January 2023",
      total:"60.000",
      statusDelivery:"Sending Goods",
      image:Product2
    },
    {
      numberOrder:"#54321-9890",
      date:"25 January 2023",
      total:"65.000",
      statusDelivery:"Finish Order",
      image:Product3
    },
    {
      numberOrder:"#12345-9890",
      date:"26 January 2023",
      total:"35.000",
      statusDelivery:"On Progress",
      image:Product4
    },
  ])

  return (
    <body className="flex flex-col items-center gap-6 sm:gap-10">
      <Navbar token={token} setToken={setToken}/>

      <div className="header flex justify-between sm:justify-start w-5/6 mt-20 sm:mt-24 gap-8 items-end">
        <h1 className="text-2xl sm:text-4xl font-semibold">History Order</h1>
        <div className="bg-[#E8E8E8] w-7 h-6 sm:w-8 sm:h-7 flex items-center justify-center">
          <p>2</p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row w-5/6 gap-4">
        <div className="sm:w-2/3 flex flex-col gap-8 sm:gap-10">
          <div className="flex flex-col-reverse sm:flex-row gap-y-4 sm:gap-12 justify-between">
            <div className="flex flex-col items-start gap-2 w-fit sm:w-auto sm:flex-row sm:justify-between sm:gap-4 bg-[#E8E8E899] p-1.5 sm:p-3">
              <button className="focus:bg-white bg-transparen p-1 text-xs sm:text-base font-semibold transition-all">
                On Progress
              </button>
              <button className="focus:bg-white bg-transparen p-1 text-xs sm:text-base font-semibold transition-all">
                Sending Goods
              </button>
              <button className="focus:bg-white bg-transparen p-1 text-xs sm:text-base font-semibold transition-all">
                Finish Order
              </button>
            </div>

            <div className="relative w-fit sm:w-auto flex items-center justify-center bg-[#E8E8E899] p-1.5 sm:p-3 gap-2 font-semibold">
              <FiCalendar />
              <h4 className="text-xs sm:text-base">January 2023</h4>
              <FiChevronDown />
            </div>
          </div>

          <div className="flex flex-col gap-4 h-fit sm:h-[33.5rem]">
            {
              card.map((item, index) => (
                <CardHistoryOrder
                key={index}
                numberOrder={item.numberOrder}
                date={item.date}
                total={item.total}
                statusDelivery={item.statusDelivery}
                image={item.image}
              />
              ))
            }
          </div>

          <PageNavigation />
        </div>

        <div className="flex-1 flex flex-col gap-2 border border-[#E8E8E8] h-fit p-2 mt-4 sm:mt-0">
          <div className="relative bg-black rounded-2xl w-fit p-1.5 flex items-center justify-center">
            <FiMessageSquare color="white" size={25} />
            <FiAlignRight className="absolute top-2.5 text-[#FF8906] h-3" />
          </div>
          <h4 className="text-[#4F5665] font-bold text-sm">Send Us Message</h4>
          <p className="text-[#4F5665] text-xs">
            if your unable to find answer or find your product quickly, please
            describe your problem and tell us. we will give you solution.
          </p>
          <Button destination="#" value="Send Message" py="1.5" />
        </div>
      </div>

      <Footer />
    </body>
  );
};

export default HistoryOrder;
