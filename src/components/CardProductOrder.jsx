import { FiXCircle } from "react-icons/fi"

import Tag from '../components/Tag'
import Price from "./Price"
import Product1 from "../assets/media/detail-product1.jpg";

const CardProductOrder = ({productName, quantity, size, variant, delivery, image, basePrice, discountPrice, tag}) => {
  
    return (
        <div className="relative flex items-center gap-2 sm:gap-4 bg-[#E8E8E84D] p-2">
        <div className="">
          <img className="w-24 h-24 sm:h-36 sm:w-36 object-cover" src={image ? `http://localhost:8888/uploads/products/${image}`: Product1} />
        </div>
        <div className="flex-1 flex flex-col gap-2 sm:gap-3 justify-center">
          <div>
            <Tag text={tag? tag: 'FLASHSALE'}/>
          </div>
          <h4 className="font-bold text-xs sm:text-base">{productName}</h4>
          <div className="flex divide-x text-xs sm:text-sm text-[#4F5665] divide-[#4F5665] w-48 sm:w-60 whitespace-nowrap ">
            <p className="flex-1">{quantity}pcs</p>
            <p className="flex-1 flex justify-center px-2">{size}</p>
            <p className="flex-1 flex justify-center">{variant}</p>
            <p className="flex-1 flex justify-center pl-2">{delivery}</p>
          </div>
          <Price basePrice={parseInt(basePrice)} discountPrice={discountPrice}/>
          <button  type='button'className="delete absolute text-[#D00000] top-2 right-2 sm:top-auto sm:right-4 active:scale-90 transition-all">
            <FiXCircle className="delete h-4" />
          </button>
        </div>
      </div>
    )
}

export default CardProductOrder