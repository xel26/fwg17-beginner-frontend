import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import CardProductOrder from '../components/CardProductOrder'
import { FiUser, FiMapPin, FiPhoneCall, FiCreditCard, FiTruck, FiRefreshCcw } from "react-icons/fi"
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import moment from 'moment'
import { useSelector } from 'react-redux'
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import CardProductOrderLoading from "../components/CardProductOrderLoading"
import propTypes from "prop-types"


const ListOrderInformation = ({field, value, color}) => {
    return (
        <div className="flex justify-between py-3">
        <div className="flex gap-3 text-[#4F5665] items-center">
        {
          field == "Full Name" ? (
            <FiUser color="#4F5665"/>
          ): field == "Address" ? (
            <FiMapPin color="#4F5665"/>
          ): field == "Phone" ? (
            <FiPhoneCall color="#4F5665"/>
          ): field == "Payment Method" ? (
            <FiCreditCard color="#4F5665"/>
          ): field == "Shipping" ? (
            <FiTruck color="#4F5665"/>
          ): field == "Status" ? (
          <FiRefreshCcw color="#4F5665"/>
          ): ''
        }
          <p className="text-xs sm:text-base">{field}</p>
        </div>
        <h5 className={`font-bold text-xs sm:text-base ${color === "white" ? 'text-white' : ''} ${color?  `text-[${color}]`: ''} ${field == "Status" ? " text-[0.6rem] sm:text-xs bg-gradient-to-br from-[#7E6363] to-black py-1 px-2 rounded-full flex items-center" : ''}`}>
          {field == "Total Transaksi" ? `Idr ${value.toLocaleString('id')}` : value}
        </h5>
      </div>
    )
}


ListOrderInformation.propTypes = {
  field: propTypes.string,
  value: propTypes.string,
  color: propTypes.string
}



const OrderDetails = () => {
  // const products = useSelector(state => state.product.data)
  const {id} = useParams()
  const [dataDetails, setDataDetails] = useState()
  const [dataProducts, setDataProducts] = useState()
  const countDataProducts = [1, 2]

  const date = dataDetails && moment(dataDetails.createdAt)

  const token = useSelector(state => state.auth.token)
  const dataCustomer = useSelector(state => state.profile.data)

  const getDetailsOrder = async () => {
    try {
      const {data} = await axios.get(`${import.meta.env.VITE_SERVER_URL}/history-order/${id}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })

      setDataDetails(data.results)

      const {data: dataProducts} = await axios.get(`${import.meta.env.VITE_SERVER_URL}/history-order/products?orderId=${id}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      setDataProducts(dataProducts.results)


    } catch (error) {
      console.log(error)
    }
  }
 
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    })

    getDetailsOrder()
  }, [])


    return (
      <body className="flex flex-col items-center">
        <Navbar />

        <div className="flex flex-col gap-2 w-5/6 mt-20 sm:mt-24 mb-6">
          {dataDetails ? (
            <h1 className="text-xl sm:text-3xl">
              Order{" "}
              <span className="font-bold">
                #{dataDetails.orderNumber}
              </span>
            </h1>
          ) : (
            <Skeleton className="text-xl sm:text-3xl w-48 sm:w-72"/>
          )}

          {date ? (
          <p className="text-[#4F5665] text-xs sm:text-sm">
            {date.format("D").padStart(2, "0")}{" "}
            {date.format("MMMM")} {date && date.format("YYYY")} at{" "}
            {date.format("LT")}
          </p>
          ) : (
            <Skeleton className='text-[#4F5665] text-xs sm:text-sm w-36 sm:w-40'/>
          )}
        </div>

        <div className="w-5/6 flex flex-col sm:flex-row gap-4 h-fit sm:h-96 mb-16">
          <div className="w-full sm:w-7/12 flex flex-col gap-2 sm:gap-6">
            { dataCustomer && dataDetails ? (
            <h1 className="font-semibold text-base sm:text-xl">
              Order Information
            </h1>
            ) : (
              <Skeleton className='text-base sm:text-xl w-36 sm:w-40'/>
            )}

            <div className="flex flex-col divide-y">
              {dataCustomer && dataDetails ? (
                <ListOrderInformation
                field="Full Name"
                value={dataDetails.fullName}
              />
              ):(
                <div className='w-full py-2 sm:py-3'>
                  <Skeleton className='text-base'/>
                </div>
              )}
              
              {dataCustomer && dataDetails ? (
              <ListOrderInformation
                field="Address"
                value={dataDetails.deliveryAddress}
              />
              ):(
                <div className='w-full py-2 sm:py-3'>
                  <Skeleton className='text-base'/>
                </div>
              )}
              
              {dataCustomer && dataDetails ? (
              <ListOrderInformation
                field="Phone"
                value={dataCustomer.phoneNumber}
              />
              ):(
                <div className='w-full py-2 sm:py-3'>
                  <Skeleton className='text-base'/>
                </div>
              )}
              
              {dataCustomer && dataDetails ? (
                <ListOrderInformation field="Payment Method" value="cash" />
              ):(
                <div className='w-full py-2 sm:py-3'>
                  <Skeleton className='text-base'/>
                </div>
              )}
              
              {dataCustomer && dataDetails ? (
                  <ListOrderInformation
                  field="Shipping"
                  value={dataDetails.deliveryShipping}
                />
              ):(
                <div className='w-full py-2 sm:py-3'>
                  <Skeleton className='text-base'/>
                </div>
              )}
              
              {dataCustomer && dataDetails ? (
                  <ListOrderInformation
                  field="Status"
                  value={dataDetails.status}
                  color="white"
                />
              ):(
                <div className='w-full py-2 sm:py-3'>
                  <Skeleton className='text-base '/>
                </div>
              )}
              
              {dataCustomer && dataDetails ? (
                  <ListOrderInformation
                  field="Total Transaksi"
                  value={parseInt(dataDetails.subtotal)}
                  color="#7E6363"
                />
              ):(
                <div className='w-full py-2 sm:py-3'>
                  <Skeleton className='text-base '/>
                </div>
              )}
            </div>
          </div>

          <div className="w-full sm:flex-1 flex flex-col gap-4">
            {dataCustomer && dataDetails ? (
              <h4 className="font-semibold">Your Order</h4>
            ):(
              <Skeleton className='text-base w-24'/>
            )}

            <div className="flex flex-col gap-3 overflow-y-auto max-h-[23rem] sm:max-h-[22rem]">
             

              {dataProducts && dataCustomer && dataDetails ?
                dataProducts.map((product, index) => (
                  <CardProductOrder
                    key={index}
                    productName={product.productName}
                    quantity={product.quantity}
                    size={product.size}
                    variant={product.variant}
                    basePrice={product.basePrice}
                    discountPrice={product.basePrice - product.discount}
                    tag={product.tag}
                    image={product.image}
                  />
                )) : countDataProducts.map((_, index) => {
                  return <CardProductOrderLoading key={index}/>
                })
                }

            </div>
          </div>
        </div>

        <Footer />
      </body>
    );
}

export default OrderDetails