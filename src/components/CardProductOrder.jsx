import { FiXCircle } from "react-icons/fi"

import Tag from '../components/Tag'
import Price from "./Price"
import Product1 from "../assets/media/detail-product1.jpg"
import { useDispatch } from "react-redux"
import { removeProduct } from "../redux/reducers/products"
import { removeTotal } from "../redux/reducers/totalOrder"
import { removeSize } from "../redux/reducers/sizeProducts"
import { removeVariant } from "../redux/reducers/variantProducts"
import { removeQuantity } from "../redux/reducers/quantityProducts"
import { removeId } from "../redux/reducers/productsId"

const CardProductOrder = ({id, index, productName, quantity, size, variant, image, basePrice, discountPrice, tag}) => {
  const dispatch = useDispatch()

  const deleteProduct = (id, index, size, variant) => {
    console.log(id, index, size, variant)
    
    dispatch(removeProduct({id, size, variant}))
    dispatch(removeTotal(index))
    dispatch(removeSize(index))
    dispatch(removeVariant(index))
    dispatch(removeQuantity(index))
    dispatch(removeId(index))
  }
  
    return (
        <div className="relative flex items-center gap-2 sm:gap-4 bg-[#E8E8E84D] p-2">
        <div className="">
          <img className="w-20 h-20 sm:h-36 sm:w-36 object-cover" src={image ? image : Product1} />
        </div>

        <div className="flex flex-col gap-1 sm:gap-3 justify-center">
          {tag &&
          <div>
            <Tag text={tag}/>
          </div>
          }
          <h4 className="font-bold text-xs sm:text-base">{productName}</h4>
          <div className={`flex divide-x text-xs sm:text-sm text-[#4F5665] divide-[#4F5665] ${variant ? 'w-44 sm:w-52' : 'w-24 sm:w-32'} whitespace-nowrap`}>
            <p className="flex-1">{quantity}pcs</p>
            <p className="flex-1 flex justify-center px-2">{size}</p>
            {variant &&
            <p className="flex-1 flex justify-center pl-2">{variant}</p>
            }
          </div>
          <Price basePrice={parseInt(basePrice)} discountPrice={parseInt(discountPrice)}/>
          {document.URL.endsWith('checkout') &&
          <button onClick={() => deleteProduct(id, index, size, variant)}  type='button'className="delete absolute text-[#D00000] top-2 right-2 sm:top-auto sm:right-4 active:scale-90 transition-all">
            <FiXCircle className="delete h-4" />
          </button>
          }
        </div>
      </div>
    )
}

export default CardProductOrder