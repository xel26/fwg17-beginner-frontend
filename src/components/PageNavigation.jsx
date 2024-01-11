
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const PageNavigation = ({totalPage, pageHandle, nextPageHandle, prevPageHandle, handleDisable, currentPage}) => {
  const pages = []
  for(let i = 1; i <= totalPage; i++){
    pages.push(i)
  }
  
  const handleClick = (event) => {
    pageHandle(event.target.innerText)
  }



  return (
    <div className="flex justify-center gap-2 w-full">
      {currentPage > 1 &&
        <button  onClick={prevPageHandle} className={`bg-[#A87C7C] text-white active:scale-90  flex justify-center items-center  rounded-full h-6 w-6 sm:h-8 sm:w-8 transition-all`}>
            <FiArrowLeft className="sm:h-auto text-md sm:text-xl"/>
        </button>
      }

      {
        pages.map((item, index) => {
          let display = item >= currentPage - 1 && item <= currentPage + 1
          return ( display &&
            <button onClick={handleClick} key={index} className={`${currentPage == item && "bg-[#A87C7C] text-white"} page flex justify-center items-center bg-[#E8E8E8] text-[#A0A3BD] active:scale-90 transition-all text-xs sm:text-sm rounded-full h-6 w-6 sm:h-8 sm:w-8`}>
              {item}
            </button>
          )
        })
      }

      <button disabled={handleDisable} onClick={nextPageHandle} className={`${handleDisable ? 'bg-[#E8E8E8] text-[#A0A3BD]' : 'bg-[#A87C7C] text-white active:scale-90 '}  flex justify-center items-center  rounded-full h-6 w-6 sm:h-8 sm:w-8 transition-all`}>
        <FiArrowRight className="sm:h-auto text-md sm:text-xl"/>
      </button>
    </div>
  );
};

export default PageNavigation