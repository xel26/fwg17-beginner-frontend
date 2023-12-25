import { FiArrowLeft } from 'react-icons/fi'
import { FiArrowRight } from 'react-icons/fi'

const ButtonSwipe = ({handleNextPage, handlePrevPage, nextDisable, prevDisable}) => {
    return (
      <>
        <button onClick={handlePrevPage} disabled={prevDisable}  className={`${prevDisable? '' : 'active:bg-[#FF8906] active:scale-90'} flex justify-center items-center  bg-[#E8E8E8] rounded-full h-8 w-8 transition-all`}>
          <FiArrowLeft size={20}/>
        </button>

        <button onClick={handleNextPage} disabled={nextDisable}  className={`${nextDisable? '' : 'active:bg-[#FF8906] active:scale-90'} flex justify-center items-center bg-[#E8E8E8] rounded-full h-8 w-8 transition-all`}>
          <FiArrowRight size={20}/>
        </button>
      </>
    )
}

export default ButtonSwipe