
const Button = ({value, py, handleSubmit}) => {
  return (
<button onClick={handleSubmit ? handleSubmit : undefined} type="submit" className={`bg-[#FF8906] w-full rounded-md text-xs sm:text-sm py-${py} active:scale-95 transition-all flex justify-center`}>{value}</button>
  );
};

export default Button