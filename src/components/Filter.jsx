const CheckBox = ({label, value, name}) => {
  return (
      <div className="flex gap-3">
      <input
        type="checkbox"
        name={name}
        id={value}
        value={value}
      />
      <label htmlFor={value}>{label}</label>
    </div>
  )
}

const FilterProduct = ({ filterBy }) => {
  return (
    <div className="flex flex-col gap-3 text-xs">
      <h4 className="font-semibold text-sm">{filterBy}</h4>
      <CheckBox label={filterBy == "Category" ? "Favorite Product" : "Buy1Get1"} value={filterBy == "Category" ? "favorite-product" : "buy1get1"} name={filterBy.toLowerCase()}/>
      <CheckBox label={filterBy == "Category" ? "Coffee" : "Flashsale"} value={filterBy == "Category" ? "coffee" : "flashsale"} name={filterBy.toLowerCase()}/>
      <CheckBox label={filterBy == "Category" ? "Non Coffee" : "Birthday Package"} value={filterBy == "Category" ? "non-coffee" : "birthday-package"} name={filterBy.toLowerCase()}/>
      <CheckBox label={filterBy == "Category" ? "Foods" : "Cheap"} value={filterBy == "Category" ? "foods" : "cheap"} name={filterBy.toLowerCase()}/>
      {filterBy == "Category" ? <CheckBox label="Add-On" value="add-on" name={filterBy.toLowerCase()} /> : ''}
    </div>
  );
};

const Filter = ({mobile}) => {
    return (
        <form className={`flex flex-col gap-4 ${mobile? "bg-black p-4 text-white rounded-xl" : ''}`}>
        <div className="flex justify-between">
          <h4 className="font-semibold text-sm">Filter</h4>
          <button
            className="font-semibold text-sm active:scale-95 transition-all"
            type="reset"
          >
            Reset Filter
          </button>
        </div>

        {!mobile ?
        <div className="flex flex-col gap-1">
          <label className="font-semibold text-sm" htmlFor="search-product">
            Search
          </label>
          <input
            className="rounded text-xs p-2 outline-none text-black"
            id="search-product"
            type="text"
            placeholder="Search Your Product"
          />
        </div> : ''}
        
        <FilterProduct filterBy="Category"/>
        <FilterProduct filterBy="SortBy"/>

        <div className="flex flex-col gap-1">
          <label className="text-sm font-semibold" htmlFor="range-price">
            Range Price
          </label>
          <input id="range-price" type="range" />
        </div>

        <button
          className="bg-[#FF8906] rounded p-2 text-xs text-black font-semibold active:scale-95 transition-all"
          type="submit"
        >
          Apply Filter
        </button>
      </form>
    )
}

export default Filter