const OptionList = ({variety}) => {
    return (
        <button type="button" className="flex-1 flex justify-center border focus:border-[#FF8906] border-[#E8E8E8] text-xs sm:text-sm text-[#4F5665] focus:text-black  rounded py-1 sm:py-1.5 transition-all">
        {variety}
      </button>
      )
}

export default OptionList