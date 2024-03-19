import { useSelector } from "react-redux"


const OptionVariety = ({option, onChange, size, variant, variantsProduct}) => {
    const sizes = [
      {
        name: "Regular",
        addPrice: 0,
      },
      {
        name: "Medium",
        addPrice: 3000,
      },
      {
        name: "Large",
        addPrice: 5000,
      },
    ]

    const shippingMethod = ["Dine In", "Door Delivery", "Pick Up"]
  
    const deliveryShipping = useSelector(state => state.deliveryShipping.shipping)
    const token = useSelector(state => state.auth.token)
  
    return (
        <div className="  flex flex-col gap-1">
        <h4 className={`font-semibold ${option == "Delivery" ? 'text-xs sm:text-sm' : 'text-[0.7rem] sm:text-xs'}`}>{option}</h4>
        <div className="flex justify-between gap-2 sm:gap-4">
        {option == "Choose Size" ?(
          sizes.map((item, index) => (
            <label key={index} type="button" className={`${item.name == size ? 'border-[#7E6363]' : 'border-[#E8E8E8]'} relative flex-1 flex justify-center border  text-[0.65rem] sm:text-xs text-[#4F5665] focus:text-black  rounded py-1 sm:py-1.5 transition-all`}>
            {item.name}
            <input disabled={!token} required onChange={onChange}  type="radio" name={"size"} value={item.name} className="hidden"/>
            <div  className="absolute top-0 left-0 font-bold bg-gradient-to-br from-[#7E6363] to-black w-full h-full opacity-0  hover:opacity-100 transition-all duration-700 rounded text-white flex justify-center items-center">
              <p>+ Rp.{item.addPrice.toLocaleString('id')}</p>
            </div>
          </label>
          ))
        ) : option == "Hot/Ice?" ? (
          variantsProduct.map((item, index) => (
            <label  key={index} type="button" className={`${item.name == variant ? ' border-[#7E6363]' : 'border-[#E8E8E8]'} bg-white relative overflow-hidden flex-1 flex justify-center border  text-[0.65rem] sm:text-xs text-[#4F5665] focus:text-black  rounded py-1 sm:py-1.5 transition-all`}>
            {item.name}
            <input disabled={!token} required onChange={onChange}  type="radio" name={"variant"} value={item.name} className="hidden"/>
            <div  className="absolute top-0 left-0 font-bold bg-gradient-to-br from-[#7E6363] to-black w-full h-full opacity-0  hover:opacity-100 transition-all duration-700 rounded text-white flex justify-center items-center">
              <p>+ Rp.{item.additionalPrice.toLocaleString('id')}</p>
            </div>
          </label>
        ))
        ) :
        shippingMethod.map((value, index) => (
          <label key={index} type="button" className={`${value == deliveryShipping ? 'border-[#7E6363]' : 'border-[#E8E8E8]'} flex-1 flex justify-center border  text-[0.65rem] sm:text-xs text-[#4F5665] focus:text-black  rounded py-1 sm:py-1.5 transition-all`}>
          {value}
          <input disabled={!token} required onChange={onChange}  type="radio" name={"delivery"} value={value} className="hidden"/>
        </label>
        ))
        }
        </div>
      </div>
    )
  }

  export default OptionVariety