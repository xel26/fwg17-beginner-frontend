import { FiArrowLeft } from 'react-icons/fi'
import { FiArrowRight } from 'react-icons/fi'

const ButtonSwipe = ({handleNextPage, handlePrevPage, nextDisable, prevDisable}) => {
    return (
      <>
        <button onClick={handlePrevPage} disabled={prevDisable}  className={`${prevDisable? '' : 'bg-[#FF8906] active:scale-90'} flex justify-center items-center  bg-[#E8E8E8] rounded-full h-7 w-7 sm:h-8 sm:w-8 transition-all`}>
          <FiArrowLeft className='text-md sm:text-xl'/>
        </button>

        <button onClick={handleNextPage} disabled={nextDisable}  className={`${nextDisable? '' : 'bg-[#FF8906] active:scale-90'} flex justify-center items-center bg-[#E8E8E8] rounded-full h-7 w-7 sm:h-8 sm:w-8 transition-all`}>
          <FiArrowRight className='text-md sm:text-xl'/>
        </button>
      </>
    )
}

export default ButtonSwipe