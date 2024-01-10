import axios from "axios";
import { FiThumbsUp, FiShoppingCart, FiPlus, FiMinus } from "react-icons/fi";
import { useState } from "react";
import { Link } from "react-router-dom";

import { setShipping } from "../redux/reducers/deliveryShipping";
import { useDispatch, useSelector } from "react-redux";

import Price from "./Price";
import Rating from "./Rating";
import Tag from "../components/Tag";


export const OptionVariety = ({option, onChange, size, variant, variantsProduct}) => {
  const sizes = ["Regular", "Medium", "Large"]
  const variants = ["Cold", "Hot"]
  const shippingMethod = ["Dine In", "Door Delivery", "Pick Up"]

  const deliveryShipping = useSelector(state => state.deliveryShipping.shipping)

  return (
      <div className="flex flex-col gap-1">
      <h4 className={`font-semibold ${option == "Delivery" ? 'text-xs sm:text-sm' : 'text-[0.7rem] sm:text-xs'}`}>{option}</h4>
      <div className="flex justify-between gap-2 sm:gap-4">
      {option == "Choose Size" ?(
        sizes.map((value, index) => (
          <label key={index} type="button" className={`${value == size ? 'border-[#FF8906]' : 'border-[#E8E8E8]'} flex-1 flex justify-center border  text-[0.65rem] sm:text-xs text-[#4F5665] focus:text-black  rounded py-1 sm:py-1.5 transition-all`}>
          {value}
          <input onChange={onChange}  type="radio" name={"size"} value={value} className="hidden"/>
        </label>
        ))
      ) : option == "Hot/Ice?" ? (
        variantsProduct.map((item, index) => (
          <label key={index} type="button" className={`${item.name == variant ? 'border-[#FF8906]' : 'border-[#E8E8E8]'} flex-1 flex justify-center border  text-[0.65rem] sm:text-xs text-[#4F5665] focus:text-black  rounded py-1 sm:py-1.5 transition-all`}>
          {item.name}
          <input onChange={onChange}  type="radio" name={"variant"} value={item.name} className="hidden"/>
        </label>
      ))
      ) :
      shippingMethod.map((value, index) => (
        <label key={index} type="button" className={`${value == deliveryShipping ? 'border-[#FF8906]' : 'border-[#E8E8E8]'} flex-1 flex justify-center border border-[#E8E8E8]  text-[0.65rem] sm:text-xs text-[#4F5665] focus:text-black  rounded py-1 sm:py-1.5 transition-all`}>
        {value}
        <input onChange={onChange}  type="radio" name={"delivery"} value={value} className="hidden"/>
      </label>
      ))
      }
      </div>
    </div>
  )
}


const Details = ({ productName, rating, review, description, basePrice, discountPrice, price, tag, isRecommended, variants, handleAddToCart }) => {
  // quantity start
  const [quantity, setQuantity] = useState(1);
  const mininum = quantity <= 1;
  const maximum = quantity >= 10;

  const increment = () => {
    setQuantity(quantity + 1);
  };

  const decrement = () => {
    setQuantity(quantity - 1);
  };
  // quantity end


  // variant start
  const dispatch = useDispatch()
  
  const [checked, setChecked] = useState(false);

  const [size, setSize] = useState();
  const [dataSize, setDataSize] = useState();

  const [variant, setVariant] = useState();
  const [dataVariant, setDataVariant] = useState();

  const getDataSize = async (size) => {
    try {
      const { data } = await axios.get(
        `http://localhost:8888/data-size?name=${size}`
      );
      setDataSize(data.results);
    } catch (error) {
      console.log(error);
    }
  };


    const getDataVariant = async (variant) => {
      try {
        const {data} = await axios.get(`http://localhost:8888/data-variant?name=${variant}`)
        setDataVariant(data.results)
      } catch (error) {
        console.log(error)
      }
    }

     const handleCheckbox = (event) => {
      if (event.target.checked) {
        if (event.target.name == "size") {
          setSize(event.target.value);
          getDataSize(event.target.value);
        } else {
          setVariant(event.target.value);
          getDataVariant(event.target.value)
        }
      }
    };
  // variant end

  return (
    <div className="w-full sm:flex-1 flex flex-col gap-3 sm:gap-[0.45rem] h-5/6 ">
      {tag && <Tag text={tag} />}
      <h1 className="flex items-center text-xl sm:text-3xl font-bold">
        {productName}
      </h1>
      <Price
        basePrice={basePrice}
        discountPrice={discountPrice}
        price={price}
      />
      {rating ? (
        <Rating rating={rating} />
      ) : (
        <h1 className="text-[#FF8906] text-xs sm:text-sm">
          be the first to rate
        </h1>
      )}
      <div className="flex gap-2 items-center divide-[#4F5665] divide-x-2 w-fit text-sm text-[#4F5665]">
        {review != "0" ? (
          <p className="flex-1 text-xs sm:text-sm">{review} Review</p>
        ) : (
          <h1 className="text-[#4F5665] text-xs sm:text-sm">
            be the first to review
          </h1>
        )}
        {isRecommended && (
          <div className="pl-2 flex gap-2 sm:gap-4 justify-center items-center ">
            <p className="text-xs sm:text-sm ">Recommendation</p>
            <FiThumbsUp
              color="#FF8906"
              className="translate-y-[-3px] text-lg sm:text-xl"
            />
          </div>
        )}
      </div>
      <p className="flex-1 flex items-center text-xs sm:text-sm">
        {description}
      </p>

      <div className="flex-1 flex items-center">
        <button
          onClick={decrement}
          disabled={mininum}
          className={`${
            mininum
              ? "border-gray-300"
              : "border-[rgb(255,137,6)] active:scale-95"
          } border bg-white rounded-sm w-4 h-4 sm:h-6 sm:w-6 flex items-center justify-center translate-x-1 transition-all`}
        >
          <FiMinus className="text-xs sm:text-base" />
        </button>
        <div className="border border-[#E8E8E8] w-9 sm:w-12 flex justify-center items-center rounded-sm">
          <h1
            id="quantity"
            className="text-[0.65rem] sm:text-sm sm:py-[0.1rem]"
          >
            {quantity}
          </h1>
        </div>
        <button
          onClick={increment}
          disabled={maximum}
          className={`${
            maximum ? "bg-gray-300" : "bg-[#FF8906] active:scale-95"
          }  rounded-sm w-4 h-4 sm:h-6 sm:w-6 flex items-center justify-center translate-x-[-0.25rem] transition-all`}
        >
          <FiPlus className="text-xs sm:text-base" />
        </button>
      </div>

      <OptionVariety
        option="Choose Size"
        onChange={handleCheckbox}
        size={size}
      />

      {variants[0].id !== null &&
      <OptionVariety
        option="Hot/Ice?"
        onChange={handleCheckbox}
        variant={variant}
        variantsProduct={variants}
      />
      }

      <div
        to="checkout"
        className="flex-1 flex items-end sm:flex-row gap-3 sm:gap-4 mt-3 sm:mt-4"
      >
        <Link
          to="/checkout"
          className="flex-1 text-xs sm:text-sm bg-[#FF8906] rounded py-1.5 active:scale-95 transition-all flex justify-center"
        >
          Buy
        </Link>
        <button
          onClick={() => handleAddToCart(quantity, size, variant, dataSize && dataSize, dataVariant && dataVariant)}
          className="flex-1 flex justify-center gap-2 sm:gap-4 text-[#FF8906] border border-[#FF8906] rounded py-1.5 active:scale-95 transition-all"
        >
          <FiShoppingCart size={20} />
          <p className="text-xs sm:text-sm">add to cart</p>
        </button>
      </div>
    </div>
  );
};

export default Details;
