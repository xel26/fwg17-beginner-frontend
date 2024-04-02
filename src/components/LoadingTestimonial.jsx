import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const LoadingTestimonial = () => {
    return (
        <div className="flex flex-col sm:flex-row w-5/6 gap-4">
        <div className="flex flex-col items-center gap-4">
          <p className="sm:hidden">TESTIMONIAL</p>
          <div> <Skeleton className="w-full sm:w-[30rem] h-72 sm:h-80"/> </div>
        </div>
  
        <div className="flex flex-col gap-4 w-full sm:w-[30rem]">
          <p className="hidden sm:block"> <Skeleton className="w-28 h-5"/> </p>
          <h1> <Skeleton className="text-2xl sm:text-4xl w-80"/></h1>
          <p> <Skeleton className="w-52 h-5"/> </p>
          <p> <Skeleton className="text-sm sm:text-base h-16"/> </p>
          <p> <Skeleton className="w-52 h-5"/> </p>
  
          <div className="flex items-center gap-2">
            <div> <Skeleton circle className="h-7 w-7 sm:h-8 sm:w-8"/> </div>
            <div> <Skeleton circle className="h-7 w-7 sm:h-8 sm:w-8"/> </div>
          </div>
          <p> <Skeleton className="w-16 h-2"/> </p>
        </div>
      </div>
    )
}

export default LoadingTestimonial