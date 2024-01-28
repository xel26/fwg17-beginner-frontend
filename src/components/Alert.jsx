import { FiAlertCircle, FiCheckCircle } from 'react-icons/fi'

const Alert = ({showAlert, isSuccess, message}) => {
    return (
        <div className={`
        ${showAlert ? 'block' : 'hidden '}
        ${isSuccess ? 'border border-[#004536] text-[#0b3028]' : 'border-red-900 text-red-950'} 
         fixed bg-white border rounded flex items-center gap-2 p-1 sm:p-2 shadow-lg max-w-md transition-all duration-500 text-xs sm:text-sm mx-3 sm:mx-0
        `}>
          <div className={`${isSuccess ? 'bg-gradient-to-br from-[#04d0a4] to-black' : 'bg-gradient-to-br from-[#ff0000] to-black'} text-white  p-1 rounded text-base sm:text-lg flex items-center justify-center`}>
            {isSuccess? (
              <FiCheckCircle/>
              ): (
              <FiAlertCircle/>
            )}
          </div>
          <p>{message}</p>
        </div>
    )
}

export default Alert