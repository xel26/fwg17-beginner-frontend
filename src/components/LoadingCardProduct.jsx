import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const LoadingCardProduct = ({key}) => {
  return (
    <div key={key} className="relative flex justify-center w-fit h-fit">
      <div>
        <Skeleton className="w-44 h-44 sm:w-56 sm:h-56"/>
      </div>
      
      <div className="absolute w-11/12 h-44 sm:h-52 bg-white top-[85%] p-1.5 sm:p-2 flex flex-col gap-0 sm:gap-1.5 shadow-md">
        <p>
          <Skeleton className="text-sm sm:text-base w-24 sm:w-32"/>
        </p>
        <p>
          <Skeleton className="text-[0.6rem] sm:text-[0.7rem] h-10"/>
        </p>
        <div className="flex-1 flex flex-col justify-center gap-0.5 sm:gap-2 ">
        <div> <Skeleton className="text-sm sm:text-base w-24 sm:w-32"/> </div>

        <div> <Skeleton className="text-xs w-24 sm:w-32"/> </div>
        
        <div className="flex flex-col sm:flex-row items-end justify-end gap-1 sm:gap-2">
            <div className="w-full">
                <Skeleton className="rounded-md text-xs sm:text-sm py-1" />
                {/* <Link to={`/products/${id}`} onClick={handleDetails ? () => handleDetails(id) : undefined} className="w-full sm:flex-1 border border-[#7E6363] text-[#7E6363] p-[0.21rem] rounded-md flex justify-center items-center active:scale-95 transition-all">
                <FiShoppingCart color="#7E6363" className="h-4 sm:h-5" />
                </Link> */}
            </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default LoadingCardProduct