import { Link } from "react-router-dom";
import ProductImage from "../assets/media/detail-product3.jpg"
import { FiShoppingCart } from "react-icons/fi";

const HomeCardProduct = ({productName, description, price}) => {
  return (
    <div className="relative flex justify-center w-fit">
      <div>
        <img
          className="w-44 sm:w-56"
          src={ProductImage}
        />
      </div>
      <div className="absolute w-11/12 bg-white shadow-md top-36 sm:top-44 p-2 flex flex-col gap-1 sm:gap-2">
        <h1 className="font-semibold text-sm sm:text-base" id="product-name">{productName}</h1>
        <p className="text-[0.6rem] sm:text-[0.7rem] text-[#4F5665]">{description}</p>
        <h1 className="text-[#FF8906] font-semibold text-sm sm:text-base" id="product-price">IDR {price}.000</h1>
        <div className="flex flex-col sm:flex-row items-center gap-2">
          <Link to="/product-details" className="w-full sm:w-9/12 bg-[#FF8906] rounded-md text-xs sm:text-sm py-1 active:scale-95 transition-all flex justify-center">
            Buy
          </Link>
          <Link to="/product-details" className="w-full sm:flex-1 border border-[#FF8906] text-[#FF8906] p-[0.21rem] rounded-md flex justify-center items-center active:scale-95 transition-all">
            <FiShoppingCart color="#FF8906" className="h-4 sm:h-5"/>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeCardProduct;