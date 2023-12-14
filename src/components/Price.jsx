const Price = ({basePrice, discountPrice}) => {
  return (
    <div className="flex items-center gap-4">
      <h1 className="text-[#D00000] text-[0.6rem] sm:text-xs font-semibold line-through">
        IDR {basePrice}.000
      </h1>
      <h1 className="text-[#FF8906] font-semibold text-xs sm:text-base">
        IDR {discountPrice}.000
      </h1>
    </div>
  );
};

export default Price