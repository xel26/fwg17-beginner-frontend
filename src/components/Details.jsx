import Tag from "../components/Tag";
import { FiThumbsUp, FiShoppingCart, FiPlus, FiMinus } from "react-icons/fi";
import { useState } from "react";
import { Link } from "react-router-dom";
import Price from "./Price";
import Rating from "./Rating";

const OptionList = ({variety}) => {
  return (
      <button type="button" className="flex-1 flex justify-center border focus:border-[#FF8906] border-[#E8E8E8] text-[0.65rem] sm:text-xs text-[#4F5665] focus:text-black  rounded py-1 sm:py-1.5 transition-all">
      {variety}
    </button>
    )
}


const OptionVariety = ({option}) => {
  return (
      <div className="flex flex-col gap-1">
      <h4 className="font-semibold text-[0.7rem] sm:text-xs">{option}</h4>
      <div className="flex justify-between gap-4">
      {option == "Choose Size" ?(
          <>
          <OptionList variety="Regular"/>
          <OptionList variety="Medium"/>
          <OptionList variety="Large"/>
          </>
      ) : option == "Hot/Ice?" ? (
          <>
          <OptionList variety="Cold"/>
          <OptionList variety="Hot"/>
          </>
      ) :
      <>
      <OptionList variety="Dine In"/>
      <OptionList variety="Door Delivery"/>
      <OptionList variety="Pick Up"/>
      </>
      }
      </div>
    </div>
  )
}


const Details = ({ productName, rating, review, description }) => {

  const [quantity, setQuantity] = useState(1);
  const mininum = quantity <= 1
  const maximum = quantity >= 10
  const increment = () => {
    setQuantity(quantity + 1);
  };

  const decrement = () => {
    if (mininum) {
      setQuantity(1);
    } else {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="flex-1 flex flex-col gap-3 sm:gap-[0.45rem] h-5/6 ">
      <Tag text="FLASHSALE!" />
      <h1 className="text-xl sm:text-3xl font-bold">{productName}</h1>
      <Price basePrice="20.000" discountPrice="10.000" />
      <Rating rating="5"/>
      <div className="flex items-center divide-[#4F5665] divide-x-2 w-[15rem] sm:w-3/5 text-sm text-[#4F5665]">
        <p className="w-[35%] text-xs sm:text-sm">{review}+ Review</p>
        {parseInt(rating) >= 4 ? (
          <div className="flex-1 flex gap-2 sm:gap-4 justify-center items-center ">
            <p className="text-xs sm:text-sm">Recommendation</p>
            <FiThumbsUp color="#FF8906" className="translate-y-[-3px] text-lg sm:text-xl"/>
          </div>
        ) : (
          ''
        )}
      </div>
      <p className="text-xs sm:text-sm">{description}</p>

      <div className="flex items-center">
        <button
          onClick={decrement}
          disabled={mininum}
          className={`${mininum ? 'border-gray-300 active:scale-100' : 'border-[rgb(255,137,6)] active:scale-95'} border bg-white rounded-sm w-4 h-4 sm:h-6 sm:w-6 flex items-center justify-center translate-x-1 transition-all`}
        >
          <FiMinus className="text-xs sm:text-base"/>
        </button>
        <div className="border border-[#E8E8E8] w-9 sm:w-12 flex justify-center items-center rounded-sm">
          <h1 id="quantity" className="text-xs sm:text-sm sm:py-[0.1rem]">
            {quantity}
          </h1>
        </div>
        <button
          onClick={increment}
          disabled={maximum}
          className={`${maximum? 'bg-gray-300 active:scale-100' : 'bg-[#FF8906] active:scale-95'}  rounded-sm w-4 h-4 sm:h-6 sm:w-6 flex items-center justify-center translate-x-[-0.25rem] transition-all`}
        >
          <FiPlus className="text-xs sm:text-base"/>
        </button>
      </div>

      <OptionVariety option="Choose Size" />
      <OptionVariety option="Hot/Ice?" />
      <OptionVariety option="Delivery"/>

      <div
        to="checkout"
        className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-3 sm:mt-4"
      >
        <Link
          to="/checkout"
          className="flex-1 text-xs sm:text-sm bg-[#FF8906] rounded py-1.5 active:scale-95 transition-all flex justify-center"
        >
          Buy
        </Link>
        <Link
          to="/checkout"
          className="flex-1 flex justify-center gap-2 sm:gap-4 text-[#FF8906] border border-[#FF8906] rounded py-1.5 active:scale-95 transition-all"
        >
          <FiShoppingCart size={20} />
          <p className="text-xs sm:text-sm">add to cart</p>
        </Link>
      </div>
    </div>
  );
};

export default Details;
