import OptionList from '../components/OptionList'

const OptionVariety = ({option}) => {
    return (
        <div className="flex flex-col gap-2">
        <h4 className={`font-semibold ${option == "Delivery" ? "text-xs sm:text-sm" : "text-xs sm:text-auto"}`}>{option}</h4>
        <div className="flex justify-between gap-4">
        {option == "Choose Size" ?(
            <>
            <OptionList variety="Regular"/>
            <OptionList variety="Medium"/>
            <OptionList variety="Large"/>
            </>
        ) : option == "Hot/Ice?" ? (
            <>
            <OptionList variety="Cold"/>
            <OptionList variety="Hot"/>
            </>
        ) :
        <>
        <OptionList variety="Dine In"/>
        <OptionList variety="Door Delivery"/>
        <OptionList variety="Pick Up"/>
        </>
        }
        </div>
      </div>
    )
}

export default OptionVariety