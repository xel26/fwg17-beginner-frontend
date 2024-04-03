import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const CardProductOrderLoading = ({index}) => {
    return (
        <div key={index} className="relative flex items-center gap-2 sm:gap-4 bg-[#E8E8E84D] p-2">
        <div className="">
          <Skeleton className="w-20 h-20 sm:h-36 sm:w-36"/>
        </div>
        <div className="flex-1 flex flex-col sm:gap-3 justify-center">
          <div>
            <Skeleton className="rounded-3xl text-[0.6rem] sm:text-xs p-1 w-14 sm:w-20 "/>
          </div>
          <Skeleton className="text-xs sm:text-base"/>
          <div className="flex justify-between gap-2 sm:gap-4">
            <div className="w-full"> <Skeleton className="text-xs sm:text-base"/> </div>
            <div className="w-full"> <Skeleton className="text-xs sm:text-base"/> </div>
            <div className="w-full"> <Skeleton className="text-xs sm:text-base"/> </div>
        </div>
          <Skeleton className="text-xs sm:text-base"/>
        </div>
      </div>
    )
}

export default CardProductOrderLoading