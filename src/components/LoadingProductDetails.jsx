import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const LoadingProductDetails = () => {
    return (
        <div className="w-full sm:flex-1 flex flex-col gap-2.5 sm:gap-4 h-5/6 ">
  
        <div> <Skeleton className="rounded-3xl text-[0.6rem] sm:text-xs p-1.5 w-16 sm:w-20"/> </div>

        <h1> <Skeleton className="text-xl sm:text-3xl w-44 sm:w-60 mt-1 sm:mt-0"/> </h1>

        <div> <Skeleton className="text-xs sm:text-base w-32 sm:w-48"/> </div>

        <div> <Skeleton className="text-xs sm:text-base w-32 sm:w-48"/> </div>

        <div> <Skeleton className="text-xs sm:text-sm w-32 sm:w-48"/> </div>
        
        <p> <Skeleton className="text-xs sm:text-sm h-20"/> </p>
  
        <div> <Skeleton className="text-xs sm:text-sm w-14 sm:w-20"/> </div>
  
        <div className="flex justify-between gap-2 sm:gap-4">
            <div className="w-full"> <Skeleton className="text-xs sm:text-base"/> </div>
            <div className="w-full"> <Skeleton className="text-xs sm:text-base"/> </div>
            <div className="w-full"> <Skeleton className="text-xs sm:text-base"/> </div>
        </div>
  
        <div className="flex justify-between gap-2 sm:gap-4">
            <div className="w-full"> <Skeleton className="text-xs sm:text-base"/> </div>
            <div className="w-full"> <Skeleton className="text-xs sm:text-base"/> </div>
            <div className="w-full"> <Skeleton className="text-xs sm:text-base"/> </div>
        </div>
  
        <div className=" flex items-end sm:flex-row gap-3 sm:gap-4 mt-3 sm:mt-4">
          {/* <Link
            to="/checkout"
            className="flex-1 text-white text-xs sm:text-sm bg-gradient-to-br from-[#7E6363] to-black rounded py-1.5 active:scale-95 transition-all flex justify-center"
          >
            Buy
          </Link> */}

          <div className="w-full"> <Skeleton className={`rounded py-1.5`}/> </div>
        </div>
      </div>
    )
}

export default LoadingProductDetails