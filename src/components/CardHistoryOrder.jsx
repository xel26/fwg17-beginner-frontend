import ProductImage from "../assets/media/detail-product3.jpg"
import { Link } from "react-router-dom"

const CardHistoryOrder = ({numberOrder, date, total, statusDelivery}) => {
    return (
        <div className="flex gap-4 items-center p-2 bg-[#E8E8E84D] text-sm">
        <div className="hidden sm:block w-28">
          <img src={ProductImage} />
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
                Idr {total}.000
              </h5>
            </div>

            <div className="flex flex-col gap-2 text-[#4F5665]">
              <div className="flex items-center gap-1">
                <i className="h-3.5 w-fit" data-feather="refresh-ccw"></i>
                <p className="text-xs sm:text-base">Status</p>
              </div>
              <h5
                className="font-semibold text-[#FF8906] text-xs bg-[#FF890633] p-1.5 rounded-3xl translate-y-[-0.3rem] w-fit text-sm"
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

export default CardHistoryOrder