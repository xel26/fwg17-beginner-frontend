import FilterProduct from "../components/FilterProduct";

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
          <label className="font-semibold text-sm" for="search-product">
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
          <label className="text-sm font-semibold" for="range-price">
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