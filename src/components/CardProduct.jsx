import { Link } from "react-router-dom"

// swiper react
import {Swiper, SwiperSlide} from 'swiper/react'
// By default Swiper React uses core version of Swiper (without any additional modules)
// If you want to use additional modules, you have to install them first
// import {pagination, scrollbar, etc} from 'swiper/modules'
import 'swiper/css'
// import 'swiper/css/pagination'
// import 'swiper/css/scrollbar'

import Rating from "./Rating"
import Tag from "./Tag"
import Price from "./Price"
import Product1 from '../assets/media/detail-product1.jpg'

const CardProduct = ({id, productName, description, rating, basePrice, discountPrice, price, image, handleDetails, tag }) => {
  return (
    <div className="relative flex justify-center w-fit h-fit">
      <div>
        <img className="w-44 h-44 sm:w-56 sm:h-56 object-cover" src={image ? image : Product1}/>
      </div>
      {
        tag &&
      <div className="absolute left-2 top-2">
        <Tag text={tag}/>
      </div>
      }
      <div className="absolute w-11/12 h-44 sm:h-52 bg-white top-[85%] p-1.5 sm:p-2 flex flex-col gap-1.5 shadow-md">
        <h1 className="font-semibold text-sm sm:text-base" id="product-name">
          {productName}
        </h1>
        <p className=" text-[0.6rem] sm:text-[0.7rem] text-[#4F5665] h-14 sm:h-12 flex items-start overflow-hidden ">
          {description}
        </p>
        <div className="flex-1 flex flex-col justify-center gap-2 sm:gap-1 ">
        {rating !== 0 && <Rating rating={rating}/>}
        <Price basePrice={basePrice} discountPrice={discountPrice} price={price}/>
        </div>
        <div className=" flex flex-col sm:flex-row items-end justify-end gap-1 sm:gap-2">
          <Link to={`/products/${id}`} onClick={handleDetails ? () => handleDetails(id) : undefined}  className=" text-white w-full  bg-gradient-to-br from-[#7E6363] to-black rounded-md text-xs sm:text-sm py-1 active:scale-95 transition-all flex justify-center">
            See Detail
          </Link>
          {/* <Link to={`/products/${id}`} onClick={handleDetails ? () => handleDetails(id) : undefined} className="w-full sm:flex-1 border border-[#7E6363] text-[#7E6363] p-[0.21rem] rounded-md flex justify-center items-center active:scale-95 transition-all">
            <FiShoppingCart color="#7E6363" className="h-4 sm:h-5" />
          </Link> */}
        </div>
      </div>
    </div>
  )
}

// export const CardProduct2 = ({id, productName, description, rating, basePrice, discountPrice, price, image, images, handleDetails, tag }) => {
//   new Swiper('.swiper', {
//     effect: 'cards',
//     grabCursor: true
//   })

//   return (
//     <div className="swiper relative flex justify-center w-44 h-44 sm:w-56 sm:h-56">
//       <div className="swiper-wrapper">
//         <div className="swiper-slide rounded-md shadow-lg" style={{
//           backgroundImage: `url('${image ? image : Product1}')`,
//           backgroundPosition: "center",
//           backgroundSize: "cover"
//           }}></div>
//         {images.map((img) => {
//           return (
//             <div className="swiper-slide rounded-md shadow-lg" key={img.id} style={{
//               backgroundImage: `url('${img.imageUrl}')`,
//               backgroundPosition: "center",
//               backgroundSize: "cover"
//               }}></div>
//           )
//         })}
//       </div>
//       {/*
//       {
//         tag &&
//       <div className="absolute left-2 top-2">
//         <Tag text={tag}/>
//       </div>
//       }
//       <div className="absolute w-11/12 h-44 sm:h-52 bg-white top-[85%] p-1.5 sm:p-2 flex flex-col gap-1.5 shadow-md">
//         <h1 className="font-semibold text-sm sm:text-base" id="product-name">
//           {productName}
//         </h1>
//         <p className=" text-[0.6rem] sm:text-[0.7rem] text-[#4F5665] h-14 sm:h-12 flex items-start overflow-hidden ">
//           {description}
//         </p>
//         <div className="flex-1 flex flex-col justify-center gap-2 sm:gap-1 ">
//         {rating !== 0 && <Rating rating={rating}/>}
//         <Price basePrice={basePrice} discountPrice={discountPrice} price={price}/>
//         </div>
//         <div className=" flex flex-col sm:flex-row items-end justify-end gap-1 sm:gap-2">
//           <Link to={`/products/${id}`} onClick={handleDetails ? () => handleDetails(id) : undefined}  className=" text-white w-full  bg-gradient-to-br from-[#7E6363] to-black rounded-md text-xs sm:text-sm py-1 active:scale-95 transition-all flex justify-center">
//             See Detail
//           </Link>
//         </div>
//       </div>
//       */}
//     </div>
//   )
// }

export const CardProduct2 = ({id, productName, description, rating, basePrice, discountPrice, price, image, images, handleDetails, tag }) => {
  return (
    <>
      <div className="swiper relative flex justify-center w-44 h-44 sm:w-56 sm:h-56">
        <div className="swiper-wrapper">
          <div className="swiper-slide rounded-md shadow-lg" style={{
            backgroundImage: `url('${image ? image : Product1}')`,
            backgroundPosition: "center",
            backgroundSize: "cover"
            }}></div>
          {images.map((img) => {
            return (
              <div className="swiper-slide rounded-md shadow-lg" key={img.id} style={{
                backgroundImage: `url('${img.imageUrl}')`,
                backgroundPosition: "center",
                backgroundSize: "cover"
                }}></div>
            )
          })}
        </div>
        {/*
        {
          tag &&
        <div className="absolute left-2 top-2">
          <Tag text={tag}/>
        </div>
        }
        <div className="absolute w-11/12 h-44 sm:h-52 bg-white top-[85%] p-1.5 sm:p-2 flex flex-col gap-1.5 shadow-md">
          <h1 className="font-semibold text-sm sm:text-base" id="product-name">
            {productName}
          </h1>
          <p className=" text-[0.6rem] sm:text-[0.7rem] text-[#4F5665] h-14 sm:h-12 flex items-start overflow-hidden ">
            {description}
          </p>
          <div className="flex-1 flex flex-col justify-center gap-2 sm:gap-1 ">
          {rating !== 0 && <Rating rating={rating}/>}
          <Price basePrice={basePrice} discountPrice={discountPrice} price={price}/>
          </div>
          <div className=" flex flex-col sm:flex-row items-end justify-end gap-1 sm:gap-2">
            <Link to={`/products/${id}`} onClick={handleDetails ? () => handleDetails(id) : undefined}  className=" text-white w-full  bg-gradient-to-br from-[#7E6363] to-black rounded-md text-xs sm:text-sm py-1 active:scale-95 transition-all flex justify-center">
              See Detail
            </Link>
          </div>
        </div>
        */}
      </div>

      <Swiper
        spaceBetween={50}
      >

      </Swiper>
    </>
  )
}

export default CardProduct
