const Data = ({value, text}) => {
  return (
    <>
      <h1 className="text-[#ff8906] text-2xl sm:text-4xl font-semibold">{value}+</h1>
      <p className="text-white text-xs sm:text-sm">{text}</p>
    </>
  );
};

export default Data