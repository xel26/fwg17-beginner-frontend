import axios from "axios";
import { FiThumbsUp, FiShoppingCart, FiPlus, FiMinus } from "react-icons/fi";
import { useState } from "react";
import { Link } from "react-router-dom";

import Price from "./Price";
import Rating from "./Rating";
import Tag from "../components/Tag";

const OptionList = ({variety, name, onChange, checked}) => {

  return (
      <label type="button" className={`flex-1 flex justify-center border border-[#E8E8E8]  text-[0.65rem] sm:text-xs text-[#4F5665] focus:text-black  rounded py-1 sm:py-1.5 transition-all`}>
      {variety}
      <input onChange={onChange}  type="radio" name={name} value={variety}/>
    </label>
    )
}


const OptionVariety = ({option, onChange, checked}) => {
  return (
      <div className="flex flex-col gap-1">
      <h4 className="font-semibold text-[0.7rem] sm:text-xs">{option}</h4>
      <div className="flex justify-between gap-2 sm:gap-4">
      {option == "Choose Size" ?(
          <>
          <OptionList variety="Regular" name="size" onChange={onChange} checked={checked}/>
          <OptionList variety="Medium" name="size" onChange={onChange} checked={checked}/>
          <OptionList variety="Large" name="size" onChange={onChange} checked={checked}/>
          </>
      ) : option == "Hot/Ice?" ? (
          <>
          <OptionList variety="Cold" name="variant" onChange={onChange} checked={checked}/>
          <OptionList variety="Hot" name="variant" onChange={onChange} checked={checked}/>
          </>
      ) :
      <>
      <OptionList variety="Dine In" name="delivery" onChange={onChange} checked={checked}/>
      <OptionList variety="Door Delivery" name="delivery" onChange={onChange} checked={checked}/>
      <OptionList variety="Pick Up" name="delivery" onChange={onChange} checked={checked}/>
      </>
      }
      </div>
    </div>
  )
}


const Details = ({ productName, rating, review, description, basePrice, discountPrice, price, tag, isRecommended, handleAddToCart }) => {
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
  const [checked, setChecked] = useState(false);

  const [size, setSize] = useState("Regular");
  const [priceSize, setPriceSize] = useState();

  const [variant, setVariant] = useState("Hot");
  const [priceVariant, setPriceVariant] = useState();

  const [delivery, setDelivery] = useState("Dine In");

  const getPriceSize = async (size) => {
    try {
      const { data } = await axios.get(
        `http://localhost:8888/additional-price-size?name=${size}`
      );
      setPriceSize(data.results.additionalPrice);
    } catch (error) {
      console.log(error);
    }
  };


    const getPriceVariant = async (variant) => {
      try {
        const {data} = await axios.get(`http://localhost:8888/additional-price-variant?name=${variant}`)
        setPriceVariant(data.results.additionalPrice)
      } catch (error) {
        console.log(error)
      }
    }

  const handleCheckbox = (event) => {
    setChecked(!checked);

    if (event.target.checked) {
      if (event.target.name == "size") {
        setSize(event.target.value);
        getPriceSize(event.target.value);
      } else if (event.target.name == "variant") {
        setVariant(event.target.value);
        getPriceVariant(event.target.value)
      } else {
        setDelivery(event.target.value);
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
        checked={checked}
      />
      <OptionVariety
        option="Hot/Ice?"
        onChange={handleCheckbox}
        checked={checked}
      />
      <OptionVariety
        option="Delivery"
        onChange={handleCheckbox}
        checked={checked}
      />

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
        <button
          onClick={() => handleAddToCart(quantity, size, variant, delivery, priceSize && priceSize, priceVariant && priceVariant)}
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
