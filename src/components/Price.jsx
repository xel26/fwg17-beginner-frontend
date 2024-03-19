const Price = ({basePrice, discountPrice, price}) => {
  return (
    <div className="flex items-center gap-4">
      {price ? (
        <h1 className="text-black font-semibold text-xs sm:text-base">IDR {parseInt(price).toLocaleString('id')}</h1>
      ):
      <>
      <h1 className="text-red-600 text-[0.6rem] sm:text-xs font-semibold line-through">IDR {parseInt(basePrice).toLocaleString('id')}</h1>
      <h1 className="text-black font-semibold text-xs sm:text-base">IDR {parseInt(discountPrice).toLocaleString('id')}</h1>
      </>
    }

    </div>
  )
}

export default Price