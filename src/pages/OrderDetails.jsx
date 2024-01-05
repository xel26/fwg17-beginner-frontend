import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import CardProductOrder from '../components/CardProductOrder'
import { FiUser, FiMapPin, FiPhoneCall, FiCreditCard, FiTruck, FiRefreshCcw } from "react-icons/fi"
import Product1 from "../assets/media/detail-product1.jpg";
import Product2 from "../assets/media/detail-product2.jpg";
import Product3 from "../assets/media/detail-product3.jpg";
import Product4 from "../assets/media/home-product1.jpg";
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';
import { useSelector } from 'react-redux';

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
        <h5 className={`font-bold text-xs sm:text-base ${color == "green" ? `text-[#00A700]` : ''} ${color?  `text-[${color}]`: ''} ${field == "Status" ? " text-[0.6rem] sm:text-xs bg-[#00A70033] py-1 px-2 rounded-full flex items-center" : ''}`}>
          {field == "Total Transaksi" ? `Idr ${value.toLocaleString('id')}` : value}
        </h5>
      </div>
    )
}

const OrderDetails = () => {
  const {id} = useParams()
  const [dataDetails, setDataDetails] = useState()
  const date = dataDetails && moment(dataDetails.createdAt)

  const token = useSelector(state => state.auth.token)
  const dataCustomer = useSelector(state => state.profile.data)

  const getDetailsOrder = async () => {
    try {
      const {data} = await axios.get(`http://localhost:8888/order/${id}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      console.log(data.results)
      setDataDetails(data.results)
    } catch (error) {
      console.log(error)
    }
  }
 
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });

    getDetailsOrder()
  }, [])

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

        <div className="flex flex-col gap-2 w-5/6 mt-20 sm:mt-24 mb-6">
          <h1 className="text-xl sm:text-3xl">
            Order <span className="font-bold">#{dataDetails && dataDetails.orderNumber}</span>
          </h1>
          <p className="text-[#4F5665] text-xs sm:text-sm">
            {date && date.format('D').padStart(2, '0')} {date && date.format('MMMM')} {date && date.format('YYYY')} at {date && date.format('LT')}
          </p>
        </div>

        <div className="w-5/6 flex flex-col sm:flex-row gap-4 h-fit sm:h-96 mb-16">
          <div className="w-full sm:w-7/12 flex flex-col gap-6">
            <h1 className="font-semibold text-base sm:text-xl">
              Order Information
            </h1>

            <div className="flex flex-col divide-y">
              {dataCustomer && dataDetails && (
                <>
                  <ListOrderInformation
                    field="Full Name"
                    value={dataCustomer.fullName}
                  />

                  <ListOrderInformation
                    field="Address"
                    value={dataCustomer.address}
                  />

                  <ListOrderInformation
                    field="Phone"
                    value={dataCustomer.phoneNumber}
                  />

                  <ListOrderInformation
                    field="Payment Method"
                    value="cash"
                  />

                  <ListOrderInformation
                    field="Shipping"
                    value="Dine In"
                  />

                  <ListOrderInformation
                    field="Status"
                    value={dataDetails.status}
                    color="green"
                  />

                  <ListOrderInformation
                    field="Total Transaksi"
                    value={dataDetails.total}
                    color="#FF8906"
                  />
                </>
              )}
            </div>
          </div>

          <div className="w-full sm:flex-1 flex flex-col gap-4">
            <h4 className="font-semibold">Your Order</h4>

            <div className="flex flex-col gap-3 sm:gap-5 overflow-y-auto max-h-[22rem] sm:max-h-[21rem]">
              {products.map((product, index) => (
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
              ))}
            </div>
          </div>
        </div>

        <Footer />
      </body>
    );
}

export default OrderDetails