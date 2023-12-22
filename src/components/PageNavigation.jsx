
import { FiArrowRight } from "react-icons/fi";

const PageNavigation = ({totalPage, pageHandle, nextPageHandle, handleDisable}) => {
  const pages = []
  for(let i = 1; i <= totalPage; i++){
    pages.push(i)
  }


  const page = document.querySelectorAll('.page')
  const handleClick = (event) => {
    page.forEach(item => {
      item.classList.remove("bg-[#FF8906]", "text-black")
    })

    event.target.classList.add("bg-[#FF8906]", "text-black")
    pageHandle(event.target.innerText)
  }



  return (
    <div className="flex justify-center gap-2 w-full">
      {
        pages.map((item, index) => (
          <button onClick={handleClick} key={index} className={`page flex justify-center items-center bg-[#E8E8E8] text-[#A0A3BD] active:scale-90 transition-all text-xs sm:text-sm rounded-full h-6 w-6 sm:h-8 sm:w-8`}>
          {item}
        </button>
        ))
      }

      <button disabled={handleDisable} onClick={nextPageHandle} className={`${handleDisable ? 'bg-[#E8E8E8] text-[#A0A3BD]' : 'bg-[#FF8906] text-white active:scale-90 '}  flex justify-center items-center  rounded-full h-6 w-6 sm:h-8 sm:w-8 transition-all`}>
        <FiArrowRight size={20} className="sm:h-auto"/>
      </button>
    </div>
  );
};

export default PageNavigation