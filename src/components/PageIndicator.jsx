const PageIndicator = ({totalPage, currentPage}) => {
  console.log(totalPage)
  const pageIndicator = []
  for(let i = 1; i <= parseInt(totalPage); i++){
    pageIndicator.push(i)
  }

    return (
        <div className="flex gap-1">
          {pageIndicator.map((item) => (
            <button key={item} className={`${item === currentPage && 'bg-[#FF8906] w-8'} bg-[#E8E8E8] w-2 h-2 rounded-md transition-all`}></button>
          ))}
      </div>
    )
}

export default PageIndicator