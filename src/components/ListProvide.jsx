import { FiCheckCircle } from 'react-icons/fi'

const ListProvide = ({text}) => {
    return (
        <div className="flex gap-4">
        <div className="bg-[#2FAB73] rounded-full text-white w-fit h-fit">
          <FiCheckCircle className="h-5 w-fit"/>
        </div>
        <p className="text-sm text-[#4F5665]">{text}</p>
      </div>
    )
}

export default ListProvide