import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import CardProductOrder from '../components/CardProductOrder'
import { FiUser, FiMapPin, FiPhoneCall, FiCreditCard, FiTruck, FiRefreshCcw } from "react-icons/fi"
import Product1 from "../assets/media/detail-product1.jpg";
import Product2 from "../assets/media/detail-product2.jpg";
import Product3 from "../assets/media/detail-product3.jpg";
import Product4 from "../assets/media/home-product1.jpg";
import { useState } from 'react';

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
          {field == "Total Transaksi" ? `Idr ${value}` : value}
        </h5>
      </div>
    )
}

const OrderDetails = () => {
  const [orderInformation, setOrderInformation] = useState([
    {
      field:"Full Name",
      value:"Ghaluh Wizard Anggoro"
    },
    {
      field:"Address",
      value:"Griya bandung indah"
    },
    {
      field:"Phone",
      value:"082116304338"
    },
    {
      field:"Payment Method",
      value:"Cash"
    },
    {
      field:"Shipping",
      value:"Dine In"
    },
    {
      field:"Status",
      value:"Done",
      color:"green"
      // color:"#00A700"
    },
    {
      field:"Total Transaksi",
      value:"40.000",
      color:"#FF8906"
    },
  ])

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
            
      <Navbar/>


        <div className="flex flex-col gap-2 w-5/6 mt-20 sm:mt-24 mb-6">
          <h1 className="text-xl sm:text-3xl">
            Order <span className="font-bold">#12354-09893</span>
          </h1>
          <p className="text-[#4F5665] text-xs sm:text-sm">21 March 2023 at 10:30 AM</p>
        </div>
    
        <div className="w-5/6 flex flex-col sm:flex-row gap-4 h-fit sm:h-96 mb-16">
          <div className="w-full sm:w-7/12 flex flex-col gap-6">
            <h1 className="font-semibold text-base sm:text-xl">Order Information</h1>
    
            <div className="flex flex-col divide-y">
              {
                orderInformation.map((list, index) => (
                  <ListOrderInformation 
                  key={index}
                  field={list.field} 
                  value={list.value}
                  color={list.color}/>
                ))
              }
            </div>
          </div>
    
          <div className="w-full sm:flex-1 flex flex-col gap-4">
            <h4 className="font-semibold">Your Order</h4>
    
            <div className="flex flex-col gap-3 sm:gap-5 overflow-y-auto max-h-[22rem] sm:max-h-[21rem]">
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
        </div>

      <Footer/>
      </body>
    )
}

export default OrderDetails