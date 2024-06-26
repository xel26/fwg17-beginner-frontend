
const Button = ({value, py, handleSubmit, isProcessing}) => {
  return (
<button disabled={isProcessing} onClick={handleSubmit ? handleSubmit : undefined} type="submit" className={`bg-gradient-to-br from-[#7E6363] to-black text-white w-full rounded-md text-xs sm:text-sm py-${py} active:scale-95 transition-all flex justify-center
disabled:transition-none disabled:active:scale-100`}>{value}</button>
  )
}

export default Button