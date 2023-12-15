import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import PageNavigation from "../components/PageNavigation";
import CardHistoryOrder from "../components/CardHistoryOrder";
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

const HistoryOrder = () => {
  const card = [1, 2, 3, 4];
  return (
    <body className="flex flex-col items-center gap-6 sm:gap-10">
      <Navbar />

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
            <CardHistoryOrder
              numberOrder="#12354-09893"
              date="23 January 2023"
              total="40.000"
              statusDelivery="On Progress"
              image={Product1}
            />

            <CardHistoryOrder
              numberOrder="#12354-09893"
              date="23 January 2023"
              total="40.000"
              statusDelivery="On Progress"
              image={Product2}
            />

            <CardHistoryOrder
              numberOrder="#12354-09893"
              date="23 January 2023"
              total="40.000"
              statusDelivery="On Progress"
              image={Product3}
            />

            <CardHistoryOrder
              numberOrder="#12354-09893"
              date="23 January 2023"
              total="40.000"
              statusDelivery="On Progress"
              image={Product4}
            />
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
