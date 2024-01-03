const PageIndicator = (totalPage) => {
  const pageIndicator = []
  for(let i = 1; i <= parseInt(totalPage); i++){
    pageIndicator.push(i)
  }

    return (
        <div className="flex gap-1">
          {/* {pageIndicator.map((index) => (
            <button key={index} className="page-indicator focus:bg-[#FF8906] focus:w-8 bg-[#E8E8E8] w-2 h-2 rounded-md transition-all"></button>
          ))} */}

          <button className="page-indicator focus:bg-[#FF8906] focus:w-8 bg-[#E8E8E8] w-2 h-2 rounded-md transition-all"></button>
          <button className="page-indicator focus:bg-[#FF8906] focus:w-8 bg-[#E8E8E8] w-2 h-2 rounded-md transition-all"></button>
          <button className="page-indicator focus:bg-[#FF8906] focus:w-8 bg-[#E8E8E8] w-2 h-2 rounded-md transition-all"></button>
          <button className="page-indicator focus:bg-[#FF8906] focus:w-8 bg-[#E8E8E8] w-2 h-2 rounded-md transition-all"></button>
        
      </div>
    )
}

export default PageIndicator