const Button = ({value}) => {
  return (
    <button
      className="bg-[#ff8906] rounded-md p-2 text-base text-[#0b132a] font-medium active:scale-95 transition-all duration-400"
      type="submit"
    >
      {value}
    </button>
  );
};

export default Button