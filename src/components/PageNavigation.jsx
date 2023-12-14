import { FiArrowRight } from "react-icons/fi";

const PageNavigation = () => {
  return (
    <div className="flex justify-center gap-2 w-full">
      <button className="indicator-page flex justify-center items-center bg-[#E8E8E8] text-[#A0A3BD] focus:bg-[#FF8906] focus:text-black active:scale-90 transition-all text-xs sm:text-sm rounded-full h-6 w-6 sm:h-8 sm:w-8">
        <h3>1</h3>
      </button>

      <button className="indicator-page flex justify-center items-center text-[#A0A3BD] text-xs sm:text-sm bg-[#E8E8E8] focus:bg-[#FF8906] focus:text-black active:scale-90 transition-all rounded-full h-6 w-6 sm:h-8 sm:w-8">
        <h3>2</h3>
      </button>

      <button className="indicator-page flex justify-center items-center text-[#A0A3BD] text-xs sm:text-sm bg-[#E8E8E8] focus:bg-[#FF8906] focus:text-black active:scale-90 transition-all rounded-full h-6 w-6 sm:h-8 sm:w-8">
        <h3>3</h3>
      </button>

      <button className="indicator-page flex justify-center items-center text-[#A0A3BD] text-xs sm:text-sm bg-[#E8E8E8] focus:bg-[#FF8906] focus:text-black active:scale-90 transition-all rounded-full h-6 w-6 sm:h-8 sm:w-8">
        <h3>4</h3>
      </button>

      <button id="btn-next" className="flex justify-center items-center bg-[#FF8906] rounded-full h-6 w-6 sm:h-8 sm:w-8 active:scale-90 transition-all">
        <FiArrowRight size={20} className="text-white sm:h-auto"/>
      </button>
    </div>
  );
};

export default PageNavigation