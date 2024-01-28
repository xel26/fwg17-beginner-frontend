import { FiCoffee } from "react-icons/fi"

const Info = ({message}) => {
    return(
        <div className="fixed border border-[#443a3a] text-[#443a3a] text-xs sm:text-sm p-1 sm:p-2 rounded shadow-lg bg-white flex justify-center items-center gap-2 ">
        <div className="bg-gradient-to-br from-[#7E6363] to-black p-1 rounded flex justify-center items-center text-white text-base sm:text-lg">
          <FiCoffee/>
        </div>
        <p>{message}</p>
      </div>
    )
}

export default Info