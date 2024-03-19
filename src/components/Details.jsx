import axios from "axios"
import { FiThumbsUp, FiShoppingCart, FiPlus, FiMinus } from "react-icons/fi"
import { useState } from "react"
import { Link } from "react-router-dom"

import { useDispatch, useSelector } from "react-redux"

import Price from "./Price"
import Rating from "./Rating"
import Tag from "../components/Tag"
import OptionVariety from "./OptionVariety"
import Info from "./Info"


const Details = ({id, productName, rating, review, description, basePrice, discountPrice, price, tag, isRecommended, variants, handleAddToCart, addToCart }) => {
  const dataProfile = useSelector(state => state.profile.data)
  const token = useSelector(state => state.auth.token)

  // quantity start
  const [quantity, setQuantity] = useState(1)
  const mininum = quantity <= 1
  const maximum = quantity >= 10

  const increment = () => {
    setQuantity(quantity + 1)
  }

  const decrement = () => {
    setQuantity(quantity - 1)
  }
  // quantity end


  // variant start
  const [dataSize, setDataSize] = useState()
  const [dataVariant, setDataVariant] = useState()

  const getDataSize = async (size) => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}/data-size?size=${size}`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        }
      )
      setDataSize(data.results)
    } catch (error) {
      console.log(error)
    }
  }


    const getDataVariant = async (variant) => {
      try {
        const {data} = await axios.get(`${import.meta.env.VITE_SERVER_URL}/data-variant?name=${variant}`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        })
        setDataVariant(data.results)
      } catch (error) {
        console.log(error)
      }
    }

    
  const [size, setSize] = useState()
  const [variant, setVariant] = useState()

     const handleCheckbox = (event) => {
      if (event.target.checked) {
        if (event.target.name == "size") {
          setSize(event.target.value)
          getDataSize(event.target.value)
        } else {
          setVariant(event.target.value)
          getDataVariant(event.target.value)
        }
      }
    }
  // variant end



  return (
    <div
      className="w-full sm:flex-1 flex flex-col gap-3 sm:gap-[0.45rem] h-5/6 "
    >
      <div
        className={`${addToCart ? "block" : "hidden"} absolute left-4 top-20 sm:left-[48rem] sm:top-16 w-full z-50`}
      >
        <Info message={`success add to cart. . . place your order now !`} />
      </div>

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
        <h1 className="text-[#7E6363] text-xs sm:text-sm">
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
              color="#7E6363"
              className="translate-y-[-3px] text-lg sm:text-xl"
            />
          </div>
        )}
      </div>
      <p className="flex-1 flex items-center text-xs sm:text-sm">
        {description}
      </p>

      <div className=" flex items-center ">
        <button
          onClick={decrement}
          disabled={mininum || !token}
          className={`disabled:border-gray-300 disabled:active:scale-100 border-[#7E6363] active:scale-95"
          border bg-white rounded-sm w-4 h-4 sm:h-6 sm:w-6 flex items-center justify-center translate-x-1 transition-all`}
        >
          <FiMinus
            className={`text-xs sm:text-base disabled:text-black text-[#7E6363]`}
          />
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
          disabled={maximum || !token}
          className={`disabled:bg-gray-300 disabled:active:scale-100 bg-gradient-to-br from-[#7E6363] to-black active:scale-95
          rounded-sm w-4 h-4 sm:h-6 sm:w-6 flex items-center justify-center translate-x-[-0.25rem] transition-all`}
        >
          <FiPlus
            className={`text-xs sm:text-base disabled:text-black text-white`}
          />
        </button>
      </div>

      <OptionVariety
        option="Choose Size"
        onChange={handleCheckbox}
        size={size}
      />

      {variants[0].id !== null && (
        <OptionVariety
          option="Hot/Ice?"
          onChange={handleCheckbox}
          variant={variant}
          variantsProduct={variants}
        />
      )}

      <div className=" flex items-end sm:flex-row gap-3 sm:gap-4 mt-3 sm:mt-4">
        {/* <Link
          to="/checkout"
          className="flex-1 text-white text-xs sm:text-sm bg-gradient-to-br from-[#7E6363] to-black rounded py-1.5 active:scale-95 transition-all flex justify-center"
        >
          Buy
        </Link> */}
        <button
          onClick={() => handleAddToCart(quantity, size, variant, dataSize && dataSize, dataVariant && dataVariant, id)}
          disabled={!token  || !size || !variant}
          className={`overflow-hidden flex-1 flex justify-center gap-2 sm:gap-4 bg-gradient-to-br from-[#7E6363] disabled:from-white to-black disabled:to-white text-white disabled:text-[#7E6363] disabled:border disabled:border-[#7E6363] disabled:transition-none active:scale-95 rounded py-1.5 transition-all
          disabled:active:scale-100 bg-black
          `}
        >
          <FiShoppingCart className="text-sm sm:text-lg"/>
          <p className="text-xs sm:text-sm">add to cart</p>
        </button>
      </div>
    </div>
  )
}

export default Details
