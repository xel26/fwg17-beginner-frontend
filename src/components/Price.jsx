const Price = ({basePrice, discountPrice, price}) => {
  return (
    <div className="flex items-center gap-4">
      {price ? (
        <h1 className="text-[#FF8906] font-semibold text-xs sm:text-base">IDR {price}</h1>
      ):
      <>
      <h1 className="text-[#D00000] text-[0.6rem] sm:text-xs font-semibold line-through">IDR {basePrice}</h1>
      <h1 className="text-[#FF8906] font-semibold text-xs sm:text-base">IDR {discountPrice}</h1>
      </>
    }

    </div>
  );
};

export default Price