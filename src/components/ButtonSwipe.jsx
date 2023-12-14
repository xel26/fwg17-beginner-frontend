import { FiArrowLeft } from 'react-icons/fi'
import { FiArrowRight } from 'react-icons/fi'

const ButtonSwipe = ({bg}) => {
    return (
      <>
        <button id="prev" className={`flex justify-center items-center  focus:bg-[#FF8906] bg-[#E8E8E8] rounded-full h-8 w-8 active:scale-90 transition-all`}>
          <FiArrowLeft size={20}/>
        </button>

        <button id="next" className="flex justify-center items-center  focus:bg-[#FF8906] bg-[#E8E8E8] rounded-full h-8 w-8 active:scale-90 transition-all">
          <FiArrowRight size={20}/>
        </button>
      </>
    )
}

export default ButtonSwipe