import Tag from '../components/Tag'
import { FiXCircle } from "react-icons/fi"
import ProductImage from "../assets/media/home-product1.jpg"
import Price from "./Price"

const CardProductOrder = ({productName, quantity, size, variant, delivery}) => {
    return (
        <div className="relative flex items-center gap-2 sm:gap-4 bg-[#E8E8E84D] p-2">
        <div className="">
          <img className="w-24 sm:w-36" src={ProductImage} />
        </div>
        <div className="flex-1 flex flex-col gap-2 sm:gap-3 justify-center">
          <div>
            <Tag text="FLASHSALE!"/>
          </div>
          <h4 className="font-bold text-xs sm:text-base">{productName}</h4>
          <div className="flex divide-x text-xs sm:text-sm text-[#4F5665] divide-[#4F5665] w-48 sm:w-60">
            <p className="pr-3">{quantity}pcs</p>
            <p className="flex-1 flex justify-center">{size}</p>
            <p className="flex justify-center px-3">{variant}</p>
            <p className="flex-1 flex justify-center">{delivery}</p>
          </div>
          <Price basePrice="20" discountPrice="10"/>
          <button className="absolute text-[#D00000] top-2 right-2 sm:top-auto sm:right-4">
            <FiXCircle className="delete h-4" />
          </button>
        </div>
      </div>
    )
}

export default CardProductOrder