import { Link } from "react-router-dom"
import propTypes from "prop-types"


const CardHistoryOrder = ({id, orderNumber, date, total, statusDelivery, image}) => {
    return (
        <div className="flex gap-4 items-center p-2 bg-[#E8E8E84D] text-sm">
        <div className="hidden sm:block w-28">
          <img src={image} className="h-28 w-full object-cover object-center"/>
        </div>

        <div className="flex-1 flex flex-col gap-2 sm:gap-4">
          <div
            className="grid grid-cols-2 place-content-between gap-y-4 sm:flex justify-between"
          >
            <div className="flex flex-col gap-1 sm:gap-2 text-[#4F5665]">
              <div className="flex items-center gap-1">
                <i className="h-3.5 w-fit" data-feather="coffee"></i>
                <p className="text-xs sm:text-base">No. Order</p>
              </div>
              <h5 className="font-semibold text-black text-xs sm:text-base">
               #{orderNumber}
              </h5>
            </div>

            <div className="flex flex-col gap-1 sm:gap-2 text-[#4F5665]">
              <div className="flex items-center gap-1">
                <i className="h-3.5 w-fit" data-feather="calendar"></i>
                <p className="text-xs sm:text-base">Date</p>
              </div>
              <h5 className="font-semibold text-black text-xs sm:text-base">
                {date}
              </h5>
            </div>

            <div className="flex flex-col gap-1 sm:gap-2 text-[#4F5665]">
              <div className="flex items-center gap-1">
                <i className="h-3.5 w-fit" data-feather="repeat"></i>
                <p className="text-xs sm:text-base">Total</p>
              </div>
              <h5 className="font-semibold text-black text-xs sm:text-base">
                Idr {total.toLocaleString('id')}
              </h5>
            </div>

            <div className="flex flex-col gap-1 sm:gap-2 text-[#4F5665]">
              <div className="flex items-center gap-1">
                <i className="h-3.5 w-fit" data-feather="refresh-ccw"></i>
                <p className="text-xs sm:text-base">Status</p>
              </div>
              <h5
                className="font-semibold text-white text-xs bg-gradient-to-br from-[#7E6363] to-black p-1.5 rounded-3xl translate-y-[-0.2rem] w-fit"
              >
                {statusDelivery}
              </h5>
            </div>
          </div>

          <Link to={`/order-details/${id}`} className="text-[#7E6363] underline text-xs sm:text-base"
            >Views Order Detail
            </Link>
        </div>
      </div>
    )
}


CardHistoryOrder.propTypes = {
  id: propTypes.number,
  orderNumber: propTypes.number,
  date: propTypes.string,
  total: propTypes.number,
  statusDelivery: propTypes.string,
  image: propTypes.string
}


export default CardHistoryOrder