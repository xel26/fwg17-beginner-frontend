import { Link } from "react-router-dom"
import { useState, useEffect } from "react";
import axios from "axios";
import moment from 'moment';
import {
  FiMessageSquare,
  FiAlignRight,
} from "react-icons/fi";

import { useSelector } from "react-redux";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import PageNavigation from "../components/PageNavigation";
import Button from "../components/Button";
import defaultHistoryOrder from "../assets/media/default-history-order.jpg";
import CardHistoryOrder from "../components/CardHistoryOrder";
import Info from '../components/Info'
import Alert from "../components/Alert";

const optionFilter = ["On Progress", "Sending Goods", "Finish Order"]


const HistoryOrder = () => {
const [totalPage, setTotalPage] = useState()
  const [nextPage, setNextPage] = useState()
  const [prevPage, setPrevPage] = useState()
  const[currentPage, setCurrentPage] = useState()
  const [filter, setFilter] = useState()
  const [disable, setDisable] = useState(false)
  const [orders, setOrders] = useState()
  const [totalData, setTotalData] = useState(0)
  const [errorMessage, setErrorMessage] = useState()
  const [error, setError] = useState(true)

  const token = useSelector(state => state.auth.token)

  const dataOrders = async () => {
    try {
      const {data} = await axios.get(`${import.meta.env.VITE_SERVER_URL}/orders`, {
        headers: {
          'Authorization' : `Bearer ${token}`
        }
      })
      console.log(data && data)
      setOrders(data.results)
      setTotalPage(data.pageInfo.totalPage)
      setNextPage(data.pageInfo.nextPage)
      setPrevPage(data.pageInfo.prevPage);
      setTotalData(data.pageInfo.totalData)
      setCurrentPage(data.pageInfo.currentPage)
      setFilter(null)
      setError(false)

    } catch ({response:{data:{message}}}) {
      console.log(message)
      setErrorMessage(message)
      setError(true)
    }
  }


  const filterStatus = async (event) => {
    const filterStatus = event.target.innerText
    

    try {
      const {data} = await axios.get(`${import.meta.env.VITE_SERVER_URL}/orders?status=${filterStatus}`, {
        headers : {
          'Authorization' : `Bearer ${token}`
        }
      })
   
      setOrders(data.results)
      setTotalPage(data.pageInfo.totalPage)
      setNextPage(data.pageInfo.nextPage)
      setPrevPage(data.pageInfo.prevPage);
      setCurrentPage(data.pageInfo.currentPage)
      setTotalData(data.pageInfo.totalData)
      setFilter(filterStatus)
      setError(false)

      if (data.pageInfo.nextPage === null) {
        setDisable(true);
      } else {
        setDisable(false);
      }

    } catch ({response:{data:{message}}}) {
      setErrorMessage(message)
      setError(true)
      setOrders(null)
      setFilter(filterStatus)
      
    }
  }


  const pageNavigator = async (page) => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });

    try {
      if (filter) {
        const { data } = await axios.get(
          `${import.meta.env.VITE_SERVER_URL}/orders?page=${page}&status=${filter}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(data);
        setOrders(data.results);
        setNextPage(data.pageInfo.nextPage);
        setPrevPage(data.pageInfo.prevPage);
        setCurrentPage(data.pageInfo.currentPage)

        if (data.pageInfo.nextPage === null) {
          setDisable(true);
        } else {
          setDisable(false);
        }
      } else {
        const { data } = await axios.get(
          `${import.meta.env.VITE_SERVER_URL}/orders?page=${page}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(data);
        setOrders(data.results);
        setNextPage(data.pageInfo.nextPage);
        setPrevPage(data.pageInfo.prevPage);
        setCurrentPage(data.pageInfo.currentPage)

        if (data.pageInfo.nextPage === null) {
          setDisable(true);
        } else {
          setDisable(false);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };


  const nextPageNavigator = async () => {
    window.scrollTo({
      // note: bug saat ke halaman terakhir
      top: 0,
      left: 0,
      behavior: "smooth",
    });

    try {
      if (filter) {
        const { data } = await axios.get(
          `${import.meta.env.VITE_SERVER_URL}/orders?page=${nextPage}&status=${filter}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(data);
        setOrders(data.results);
        setNextPage(data.pageInfo.nextPage);
        setPrevPage(data.pageInfo.prevPage);
        setCurrentPage(data.pageInfo.currentPage)

        if (data.pageInfo.nextPage === null) {
          setDisable(true);
        } else {
          setDisable(false);
        }
      } else {
        const { data } = await axios.get(
          `${import.meta.env.VITE_SERVER_URL}/orders?page=${nextPage}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(data);
        setOrders(data.results);
        setNextPage(data.pageInfo.nextPage);
        setPrevPage(data.pageInfo.prevPage);
        setCurrentPage(data.pageInfo.currentPage)

        if (data.pageInfo.nextPage === null) {
          setDisable(true);
        } else {
          setDisable(false);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };


  const prevPageNavigator = async () => {
    window.scrollTo({
      // note: bug saat ke halaman terakhir
      top: 0,
      left: 0,
      behavior: "smooth",
    });

    try {
      if (filter) {
        const { data } = await axios.get(
          `${import.meta.env.VITE_SERVER_URL}/orders?page=${prevPage}&status=${filter}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(data);
        setOrders(data.results);
        setNextPage(data.pageInfo.nextPage);
        setPrevPage(data.pageInfo.prevPage);
        setCurrentPage(data.pageInfo.currentPage)

        if (data.pageInfo.nextPage === null) {
          setDisable(true);
        } else {
          setDisable(false);
        }
      } else {
        const { data } = await axios.get(
          `${import.meta.env.VITE_SERVER_URL}/orders?page=${prevPage}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(data);
        setOrders(data.results);
        setNextPage(data.pageInfo.nextPage);
        setPrevPage(data.pageInfo.prevPage);
        setCurrentPage(data.pageInfo.currentPage)

        if (data.pageInfo.nextPage === null) {
          setDisable(true);
        } else {
          setDisable(false);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };


  const [showAlert, setShowAlert] = useState()
  const handleSendMessage = (event) => {
    event.preventDefault()
    setShowAlert(true)

    setTimeout(() => {
      setShowAlert(false)
    }, 6000);
  }

  useEffect(() => {
    dataOrders()
  }, [])


  return (
    <body className="flex flex-col items-center gap-6 sm:gap-10">
      <Navbar />

      <div className="header flex justify-between sm:justify-start w-5/6 mt-20 sm:mt-24 gap-8 items-end">
        <h1 className="text-2xl sm:text-4xl font-semibold">History Order</h1>
        <div className="bg-[#E8E8E8] w-7 h-6 sm:w-8 sm:h-7 flex items-center justify-center">
          <p>{totalData}</p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row w-5/6 gap-4">
        <div className="sm:w-2/3 flex flex-col gap-8 sm:gap-10">
          <div className="flex flex-col-reverse sm:flex-row gap-y-4 sm:gap-12 justify-between">
            <div className="flex gap-0 w-fit sm:w-auto justify-between sm:gap-4 bg-[#E8E8E899] p-1.5 sm:p-3">
              {optionFilter.map((item, index) => (
                <button
                  key={index}
                  onClick={filterStatus}
                  className={`${
                    filter == item ? "bg-white" : "bg-transparen"
                  }  p-1 text-xs sm:text-base font-semibold transition-all`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* <label className="relative w-fit sm:w-auto flex items-center justify-center bg-[#E8E8E899] p-1.5 sm:p-3 gap-2 font-semibold">
              <FiCalendar />
              <h4 className="text-xs sm:text-base">January 2023</h4>
              <FiChevronDown />
              <input className="outline-none bg-transparent" type="month" name="date"/>
            </label> */}
          </div>

          <div
            className={`flex flex-col gap-4 h-fit ${
              error ? "pb-12" : "pb-0"
            }`}
          >
            <div className={`${error ? "block " : "hidden"} z-50 `}>
              <Info
                message={`${filter ? `No order history under the '${filter}' status currently!` : 'No order for all status currently!'}`}
              />
            </div>

            {orders &&
              orders.map((order) => (
                <CardHistoryOrder
                  key={order.id}
                  id={order.id}
                  orderNumber={order.orderNumber}
                  date={`${moment(order.createdAt)
                    .format("D")
                    .padStart(2, "0")} ${moment(order.createdAt).format(
                    "MMMM"
                  )} ${moment(order.createdAt).format("YYYY")}`}
                  total={parseInt(order.subtotal)}
                  statusDelivery={order.status}
                  image={defaultHistoryOrder}
                />
              ))}
          </div>

          {!error && (
            <PageNavigation
              totalPage={totalPage}
              pageHandle={pageNavigator}
              nextPageHandle={nextPageNavigator}
              prevPageHandle={prevPageNavigator}
              handleDisable={disable}
              currentPage={currentPage}
            />
          )}
        </div>

        <div className="relative flex-1 flex flex-col gap-2 border border-[#E8E8E8] h-fit p-2 mt-4 sm:mt-0">
          <div className="absolute -top-20 -left-6 sm:-left-14 z-50 ">
          <Alert
            showAlert={showAlert} isSuccess={false}
            message="Sorry, could not send the message for now. This feature is currently unavailable !"
          />
          </div>

          <div className="relative bg-black rounded-2xl w-fit p-1.5 flex items-center justify-center">
            <FiMessageSquare color="white" size={25} />
            <FiAlignRight className="absolute top-2.5 text-[#A87C7C] h-3" />
          </div>
          <h4 className="text-[#4F5665] font-bold text-sm">Send Us Message</h4>
          <p className="text-[#4F5665] text-xs">
            if your unable to find answer or find your product quickly, please
            describe your problem and tell us. we will give you solution.
          </p>
          <Button
            handleSubmit={handleSendMessage}
            value="Send Message"
            py="1.5"
          />
        </div>
      </div>

      <Footer />
    </body>
  );
};

export default HistoryOrder;
