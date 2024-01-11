const PageIndicator = ({totalPage, currentPage}) => {
  const pageIndicator = []
  for(let i = 1; i <= parseInt(totalPage); i++){
    pageIndicator.push(i)
  }

    return (
        <div className="flex gap-1">
          {pageIndicator.map((item) => {
            let display = item >= currentPage - 2 && item <= currentPage + 2
            return ( display &&
              <button key={item} className={`${item === currentPage && 'bg-[#A87C7C] w-8'} bg-[#E8E8E8] w-2 h-2 rounded-md transition-all`}></button>
            )
          })}
      </div>
    )
}

export default PageIndicator