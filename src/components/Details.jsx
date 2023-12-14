import Tag from "../components/Tag";
import { FiThumbsUp, FiShoppingCart, FiPlus, FiMinus } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import OptionVariety from '../components/OptionVariety'
import { useState } from "react";
import { Link } from "react-router-dom"
import Price from "./Price";

const Details = ({productName,rating, review, description}) => {
  const stars = [];
  for (let i = 1; i <= parseInt(rating); i++) {
    stars.push(i);
  }

  const [quantity, setQuantity] = useState(1)
  const increment = () => {
    setQuantity(quantity + 1)
  }

  const decrement = () => {
    if(quantity == 1){
      setQuantity(1)
    }else{
      setQuantity(quantity - 1)
    }
  }

  return (
    <div className="flex-1 flex flex-col gap-2 h-5/6">
      <Tag text="FLASHSALE!" />
      <h1 className="text-xl sm:text-3xl font-bold">{productName}</h1>
      <Price basePrice="20" discountPrice="10"/>
      <div className="flex items-center gap-2 sm:gap-4">
        <div className="flex items-center gap-2 sm:gap-4">
          {stars.map((index) => (
            <FaStar key={index} color="orange" />
          ))}
        </div>
        <p className="text-[#4F5665] text-xs sm:text-sm" id="rating-number">
          {rating}.0
        </p>
      </div>
      <div className="flex items-center divide-[#4F5665] divide-x-2 w-[15rem] sm:w-3/5 text-sm text-[#4F5665]">
        <p className="w-[35%] text-xs sm:text-sm">{review}+ Review</p>
        {parseInt(rating) >= 4 ?
        <div className="flex-1 flex gap-2 sm:gap-4 justify-center items-center">
          <p className="text-xs sm:text-sm">Recommendation</p>
          <FiThumbsUp size={18} color="#FF8906" />
        </div>
        : ''
        }
      </div>
      <p className="text-xs sm:text-sm">{description}</p>

      <div className="flex items-center">
        <button onClick={decrement}
          id="decrement"
          className="border border-[#FF8906] bg-white rounded-sm w-4 h-4 sm:h-6 sm:w-6 flex items-center justify-center translate-x-1 active:scale-95 transition-all"
        >
          <FiMinus/>
        </button>
        <div className="border border-[#E8E8E8] w-9 sm:w-12 flex justify-center items-center rounded-sm">
          <h1 id="quantity" className="text-xs sm:text-sm sm:py-[0.1rem]">
            {quantity}
          </h1>
        </div>
        <button onClick={increment}
          id="increment"
          className="bg-[#FF8906] rounded-sm w-4 h-4 sm:h-6 sm:w-6 flex items-center justify-center translate-x-[-0.25rem] active:scale-95 transition-all"
        >
          <FiPlus/>
        </button>
      </div>

      <OptionVariety option="Choose Size"/>
      <OptionVariety option="Hot/Ice?"/>
      
      <div to="checkout" className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-3 sm:mt-4">
        <Link
          to="/checkout"
          className="flex-1 text-xs sm:text-sm bg-[#FF8906] rounded py-1.5 active:scale-95 transition-all flex justify-center"
        >
          Buy
        </Link>
        <Link to="/checkout" className="flex-1 flex justify-center gap-2 sm:gap-4 text-[#FF8906] border border-[#FF8906] rounded py-1.5 active:scale-95 transition-all">
          <FiShoppingCart size={20}/>
          <p className="text-xs sm:text-sm">add to cart</p>
        </Link>
      </div>
    </div>
  );
};

export default Details;
