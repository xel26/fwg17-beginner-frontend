import { FiArrowLeft } from 'react-icons/fi'
import { FiArrowRight } from 'react-icons/fi'

const ButtonSwipe = ({handleNextPage, handlePrevPage, nextDisable, prevDisable}) => {
    return (
      <>
        <button onClick={handlePrevPage} disabled={prevDisable}  className={`${prevDisable? 'bg-[#E8E8E8]' : 'bg-[#7E6363] active:scale-90'} text-white flex justify-center items-center  rounded-full h-7 w-7 sm:h-8 sm:w-8 transition-all`}>
          <FiArrowLeft className={`text-md sm:text-xl ${prevDisable ? 'text-black' : 'text-white'}`}/>
        </button>

        <button onClick={handleNextPage} disabled={nextDisable}  className={`${nextDisable? 'bg-[#E8E8E8]' : 'bg-[#7E6363] active:scale-90'} text-white flex justify-center items-center  rounded-full h-7 w-7 sm:h-8 sm:w-8 transition-all`}>
          <FiArrowRight className={`text-md sm:text-xl ${nextDisable ? 'text-black' : 'text-white'}`}/>
        </button>
      </>
    )
}

export default ButtonSwipe