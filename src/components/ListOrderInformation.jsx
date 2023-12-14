import { FiUser, FiMapPin, FiPhoneCall, FiCreditCard, FiTruck, FiRefreshCcw } from "react-icons/fi"

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
        <h5 className={`font-bold text-xs sm:text-base ${color? `text-[${color}]`: ''} ${field == "Status" ? " text-[0.6rem] sm:text-xs bg-[#00A70033] py-1 px-2 rounded-full flex items-center" : ''}`}>
          {field == "Total Transaksi" ? `Idr ${value}.000` : value}
        </h5>
      </div>
    )
}

export default ListOrderInformation