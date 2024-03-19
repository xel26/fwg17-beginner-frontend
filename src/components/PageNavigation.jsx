
import { FiArrowLeft, FiArrowRight } from "react-icons/fi"

const PageNavigation = ({totalPage, pageHandle, nextPageHandle, prevPageHandle, currentPage}) => {
  const pages = []
  for(let i = 1; i <= totalPage; i++){
    pages.push(i)
  }
  
  const handleClick = (event) => {
    pageHandle(event.target.innerText)
  }



  return (
    <div className={`flex justify-center gap-2 w-full`}>
      {currentPage > 1 &&
        <button  onClick={prevPageHandle} className={`bg-gradient-to-br from-[#7E6363] to-black text-white active:scale-90  flex justify-center items-center  rounded-full h-7 w-7 sm:h-8 sm:w-8 transition-all`}>
            <FiArrowLeft className="sm:h-auto text-md sm:text-xl"/>
        </button>
      }

      {
        pages.map((item, index) => {
          let display = item >= currentPage - 1 && item <= currentPage + 1
          return ( display &&
            <button onClick={handleClick} key={index} className={`${currentPage == item ? "bg-gradient-to-br from-[#7E6363] to-black text-white" : "bg-[#E8E8E8] text-black"} page flex justify-center items-center text-[#A0A3BD] active:scale-90 transition-all text-sm sm:text-lg rounded-full h-7 w-7 sm:h-8 sm:w-8`}>
              {item}
            </button>
          )
        })
      }

      {currentPage !== totalPage &&
      <button onClick={nextPageHandle} className={`bg-gradient-to-br from-[#7E6363] to-black text-white active:scale-90  flex justify-center items-center  rounded-full h-7 w-7 sm:h-8 sm:w-8 transition-all`}>
        <FiArrowRight className="sm:h-auto text-lg sm:text-xl"/>
      </button>
      }
    </div>
  )
}

export default PageNavigation