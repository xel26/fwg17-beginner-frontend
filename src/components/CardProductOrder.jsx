import { FiXCircle } from "react-icons/fi"

import Tag from '../components/Tag'
import Price from "./Price"
import Product1 from "../assets/media/detail-product1.jpg";
import { useDispatch } from "react-redux";
import { removeProduct } from "../redux/reducers/product";

const CardProductOrder = ({id, productName, quantity, size, variant, image, basePrice, discountPrice, tag}) => {
  const dispatch = useDispatch()

  const deleteProduct = (id) => {
    console.log(id)
    dispatch(removeProduct(id))
  }
  
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
          <div className={`flex divide-x text-xs sm:text-sm text-[#4F5665] divide-[#4F5665] ${variant ? 'w-44 sm:w-48' : 'w-24 sm:w-32'} whitespace-nowrap`}>
            <p className="flex-1">{quantity}pcs</p>
            <p className="flex-1 flex justify-center px-2">{size}</p>
            {variant &&
            <p className="flex-1 flex justify-center ">{variant}</p>
            }
          </div>
          <Price basePrice={parseInt(basePrice)} discountPrice={parseInt(discountPrice)}/>
          {document.URL.endsWith('checkout') &&
          <button onClick={() => deleteProduct(id)}  type='button'className="delete absolute text-[#D00000] top-2 right-2 sm:top-auto sm:right-4 active:scale-90 transition-all">
            <FiXCircle className="delete h-4" />
          </button>
          }
        </div>
      </div>
    )
}

export default CardProductOrder