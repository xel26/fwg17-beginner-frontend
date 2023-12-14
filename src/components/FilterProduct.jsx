import CheckBox from "../components/CheckBox";

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

export default FilterProduct;
