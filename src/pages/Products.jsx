import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ButtonSwipe from "../components/ButtonSwipe";
import PageIndicator from "../components/PageIndicator";
import PageNavigation from "../components/PageNavigation";
import CardProduct from "../components/CardProduct";
import GreenKuponStiker from "../assets/media/stiker-kupon-hijau.png";
import YellowKuponStiker from "../assets/media/stiker-kupon-kuning.png";
import Info from "../components/Info";
import LoadingCardProduct from "../components/LoadingCardProduct";


import axios from "axios";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { FiList, FiSearch } from "react-icons/fi";


// filter start
const CheckBox = ({label, value, name}) => {
  return (
      <label className="flex gap-2 sm:gap-3">
      <input
        type="radio"
        name={name}
        value={value}
      />
      <div className="text-xs sm:text-sm">{label}</div>
    </label>
  )
}

const FilterProduct = ({ filterBy }) => {
  const [category, setCategory] = useState([
    {
      label: "Favorite Product",
      value: "favorite product",
      name: "category"
    },
    {
      label: "Coffee",
      value: "coffee",
      name: "category"
    },
    {
      label: "Non Coffee",
      value: "non coffee",
      name: "category"
    },
    {
      label: "Foods",
      value: "foods",
      name: "category"
    },
    {
      label: "Add-On",
      value: "add on",
      name: "category"
    }
  ])

  const [sortBy, setSortBy] = useState([
    // {
    //   label: "Buy1Get1",
    //   value: "buy1get1",
    //   name: "sortBy"
    // },
    // {
    //   label: "Flashsale",
    //   value: "flashsale",
    //   name: "sortBy"
    // },
    // {
    //   label: "Birthday Package",
    //   value: "birthday package",
    //   name: "sortBy"
    // },
    {
      label: "Latest Products",
      value: "createdAt",
      name: "sortBy"
    },
    {
      label: "Name",
      value: "name",
      name: "sortBy"
    },
    {
      label: "Cheap",
      value: "basePrice",
      name: "sortBy"
    },
  ])

  return (
    <div className="flex flex-col gap-3 text-xs">
      <h4 className="font-semibold text-xs sm:text-sm">{filterBy}</h4>
      {filterBy === "Category" ? 
        category.map((item, index) => (
          <CheckBox key={index}
          label={item.label}
          value={item.value}
          name={item.name}
          />
        ))
      : sortBy.map((item, index) => (
        <CheckBox key={index}
        label={item.label}
        value={item.value}
        name={item.name}
        />
      ))
      }
    </div>
  )
}

const Filter = ({mobile, handleFilter}) => {
    return (
        <form onSubmit={handleFilter} className={`flex flex-col gap-4 ${mobile? "bg-black p-4 text-white rounded-xl" : ''}`}>
        <div className="flex justify-between">
          <h4 className="font-semibold text-xs sm:text-sm">Filter</h4>
          <button
            className="font-semibold text-xs sm:text-sm active:scale-95 transition-all"
            type="reset"
          >
            Reset Filter
          </button>
        </div>

        {!mobile ?
        <div className="flex flex-col gap-1">
          <label className="font-semibold text-sm " htmlFor="search-product">
            Search
          </label>
          <input
            name="searchKey"
            className="rounded text-xs sm:text-sm p-1 outline-none text-black placeholder:text-black"
            id="search-product"
            type="text"
            placeholder="Search Your Product"
          />
        </div> : ''}
        
        <FilterProduct filterBy="Category"/>
        <FilterProduct filterBy="SortBy"/>

        {/* <div className="flex flex-col gap-1">
          <label className="text-sm font-semibold" htmlFor="range-price">
            Range Price
          </label>
          <input id="range-price" type="range"/>
        </div> */}

        <button
          className="border border-white text-white rounded p-2 text-xs font-semibold active:scale-95 transition-all"
          type="submit"
        >
          Apply Filter
        </button>
      </form>
    )
}
// filter end




const Kupon = ({ title, description, klaim, bg }) => {
  return (
    <div
      className={`flex ${
        bg == "green" ? "bg-[#88B788]" : "bg-[#F5C361]"
      } rounded-2xl items-center pl-2 w-64 sm:w-72 h-20 sm:h-auto`}
    >
      <div>
        <img
          className="h-20 sm:h-24 translate-y-1"
          src={klaim ? GreenKuponStiker : YellowKuponStiker}
        />
      </div>
      <div className="flex flex-col gap-1">
        <div className={`flex flex-col ${klaim ? "gap-0" : "gap-3"}`}>
          <h5 className="text-xs sm:text-sm font-bold">{title}</h5>
          <p className="text-[0.7rem] sm:text-xs">{description}</p>
        </div>
        {klaim ? (
          <p className="text-[0.7rem] sm:text-xs text-white">Klaim Kupon</p>
        ) : (
          ""
        )}
      </div>
    </div>
  )
}




const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [display, setDisplay] =useState(false)

  const [kupon, setKupon] = useState([
    {
      klaim:true,
      title:"HAPPY MOTHER'S DAY!",
      description:`Get one of our favorite menu \n for free!`,
      bg:"green",
    },
    {
      klaim:true,
      title:"HAPPY MOTHER'S DAY!",
      description:`Get one of our favorite menu \n for free!`,
      bg:"green",
    },
    {
      klaim:true,
      title:"HAPPY MOTHER'S DAY!",
      description:`Get one of our favorite menu \n for free!`,
      bg:"green",
    },
    {
      klaim:true,
      title:"HAPPY MOTHER'S DAY!",
      description:`Get one of our favorite menu \n for free!`,
      bg:"green",
    },
    {
      klaim:false,
      title:`Get a cup of coffee for free \n on sunday morning`,
      description:"Only at 7 to 9 AM",
      bg:"yellow"
    }
  ])

  const [mobileFilter, setMobileFilter] = useState(false)
  const filterMobile = () => {
    setMobileFilter(!mobileFilter)
  }

  const [dataProducts, setDataProducts] = useState(false)
  const [totalPage, setTotalPage] = useState()
  const [nextPage, setNextPage] = useState()
  const [prevPage, setPrevPage] = useState()
  const [currentPage, setCurrentPage] = useState(1)
  const [queryParameter, setQueryParameter] = useState()
  const [error, setError] = useState(false)


  const CountProducts = [1, 2, 3, 4, 5, 6]

  const listAllProducts = async () => {
    try {
      const {data} = await axios.get(`${import.meta.env.VITE_SERVER_URL}/products`)
      setTotalPage(data.pageInfo.totalPage)
      setNextPage(data.pageInfo.nextPage)
      setPrevPage(data.pageInfo.prevPage)
      setCurrentPage(data.pageInfo.currentPage)
      setDataProducts(data.results)
    } catch (error) {
      console.log(error)
    }
  }


  const searchProduct = async (event) => {
    setDataProducts(false)

    if (event){
      event.preventDefault()
      searchParams.delete("searchKey")
      searchParams.delete("page")
    }

    mobileFilter && setMobileFilter(false)


    window.scrollTo({
      top: 450,
      left: 0,
      behavior: "smooth",
    })
    
    const form = new URLSearchParams()

    if (event){
      const searchKey = event.target.searchKey
      const category = event.target.category && Array.from(event.target.category)
      const sortBy = event.target.sortBy && Array.from(event.target.sortBy)
      
      if(searchKey){
        form.append("searchKey", searchKey.value)
        searchParams.delete("category")
        searchParams.delete("sortBy")

        searchParams.set('searchKey', searchKey.value)
        setSearchParams(searchParams)
      }
      
      category &&
      category.map((checkBox) => {
        if (checkBox.checked) {
          form.append("category", checkBox.value)
          searchParams.set('category', checkBox.value)
          setSearchParams(searchParams)
        }
      })
      
      sortBy &&
      sortBy.map((checkBox) => {
        if (checkBox.checked) {
          form.append("sortBy", checkBox.value)
          searchParams.set('sortBy', checkBox.value)
          setSearchParams(searchParams)
        }
      })
    }
    
    const queryParams = form.toString()
    
    try {
      const {data} = await axios.get(`${import.meta.env.VITE_SERVER_URL}/products?${searchParams.size !== 0 ? searchParams : queryParams}`)
      setTotalPage(data.pageInfo.totalPage)
      setNextPage(data.pageInfo.nextPage)
      setPrevPage(data.pageInfo.prevPage)
      setCurrentPage(data.pageInfo.currentPage)
      setDataProducts(data.results)
      setQueryParameter(queryParams)

      if (event && event.target.searchKey){
        event.target.searchKey.value = ''
      }
    } catch (err) {
      console.log(err.response.data.message)

      if (event && event.target.searchKey){
        event.target.searchKey.value = ''
      }

      setError(true)
      setDataProducts(false)
      
      setTimeout(() => {
        setError(false)
        listAllProducts()
      }, 4000)
    }
  }



  const pageNavigator = async (page) => {
    setDataProducts(false)

    window.scrollTo({
      top: 450,
      left: 0,
      behavior: "smooth",
    })

    searchParams.set("page", page)
    setSearchParams(searchParams)

    try {
      if(queryParameter){
        const {data} = await axios.get(`${import.meta.env.VITE_SERVER_URL}/products?${queryParameter}&page=${page}`)
        setDataProducts(data.results)
        setNextPage(data.pageInfo.nextPage)
        setPrevPage(data.pageInfo.prevPage)
        setCurrentPage(data.pageInfo.currentPage)
        setTotalPage(data.pageInfo.totalPage)

      }else{
        const {data} = await axios.get(`${import.meta.env.VITE_SERVER_URL}/products?page=${page}`)
        setDataProducts(data.results)
        setNextPage(data.pageInfo.nextPage)
        setPrevPage(data.pageInfo.prevPage)
        setCurrentPage(data.pageInfo.currentPage)
        setTotalPage(data.pageInfo.totalPage)
        
      }
    } catch (error) {
      console.log(error)
    }
  }


  const nextPageNavigator = async () => {
    setDataProducts(false)

    window.scrollTo({                           // note: bug saat ke halaman terakhir
      top: 450,
      left: 0,
      behavior: "smooth",
    })

    searchParams.set("page", nextPage)
    setSearchParams(searchParams)
    
    try {
      if(queryParameter){
        const {data} = await axios.get(`${import.meta.env.VITE_SERVER_URL}/products?${queryParameter}&page=${nextPage}`)
        setDataProducts(data.results)
        setNextPage(data.pageInfo.nextPage)
        setPrevPage(data.pageInfo.prevPage)
        setCurrentPage(data.pageInfo.currentPage)
        setTotalPage(data.pageInfo.totalPage)
        
      }else{
        const {data} = await axios.get(`${import.meta.env.VITE_SERVER_URL}/products?page=${nextPage}`)
        setDataProducts(data.results)
        setNextPage(data.pageInfo.nextPage)
        setPrevPage(data.pageInfo.prevPage)
        setCurrentPage(data.pageInfo.currentPage)
        setTotalPage(data.pageInfo.totalPage)

      }
    } catch (error) {
      console.log(error)
    }
  }

  
  const prevPageNavigator = async () => {
    setDataProducts(false)

    window.scrollTo({                           // note: bug saat ke halaman terakhir
      top: 450,
      left: 0,
      behavior: "smooth",
    })

    searchParams.set("page", prevPage)
    setSearchParams(searchParams)
    
    try {
      if(queryParameter){
        const {data} = await axios.get(`${import.meta.env.VITE_SERVER_URL}/products?${queryParameter}&page=${prevPage}`)

        setDataProducts(data.results)
        setNextPage(data.pageInfo.nextPage)
        setPrevPage(data.pageInfo.prevPage)
        setCurrentPage(data.pageInfo.currentPage)
        setTotalPage(data.pageInfo.totalPage)
        
      }else{
        const {data} = await axios.get(`${import.meta.env.VITE_SERVER_URL}/products?page=${prevPage}`)
        setDataProducts(data.results)
        setNextPage(data.pageInfo.nextPage)
        setPrevPage(data.pageInfo.prevPage)
        setCurrentPage(data.pageInfo.currentPage)
        setTotalPage(data.pageInfo.totalPage)
      }
    } catch (error) {
      console.log(error)
    }
  }


  useEffect(() => {
    window.scrollTo({
      top: 450,
      left: 0,
      behavior: "smooth",
    })

    setDisplay(true)

    if (searchParams.size !== 0) {
      searchProduct()
    }else{
      listAllProducts()
    }
  }, [])

  return (
    <div className="flex flex-col items-center gap-6 sm:gap-12">
      <Navbar />

      <header className="hidden sm:flex items-center bg-[url('../assets/media/header-product-page.jpg')] bg-center w-full h-72 mt-12">
        <h1
          className={`text-white text-5xl transition-all duration-1000 ${
            display ? "ml-28 opacity-100 " : "-ml-32 opacity-0 "
          }`}
        >
          We Provide Good Coffee and Healthy <br />
          Meals
        </h1>
      </header>

      <section className="sm:hidden flex w-full justify-center gap-4 mt-20 ">
        <div className="w-5/6 flex justify-between gap-2 ">
          <label
            htmlFor="find-product"
            className="w-11/12 flex gap-2 border border-[#DEDEDE] rounded-md p-2"
          >
            <form
              onSubmit={searchProduct}
              className="flex gap-2 items-center  w-full"
              id="search-by-name"
            >
              <FiSearch
                color="#4F5665"
                size={18}
                className="active:scale-90 transition-all"
              />
              <input
                name="searchKey"
                className="text-[#4F5665] outline-none bg-transparent text-xs w-full"
                type="text"
                placeholder="Find Product"
              />
              <button className="hidden" type="submit"></button>
            </form>
          </label>

          <button
            onClick={filterMobile}
            className=" bg-gradient-to-br from-[#7E6363] to-black rounded-md p-2 w-fit flex items-center  justify-center active:scale-95 transition-all"
          >
            <FiList size={20} color="white" />
          </button>
        </div>
      </section>

      <section
        className={`${
          mobileFilter ? "flex" : "hidden"
        } sm:hidden absolute h-fit w-5/6 z-40 top-32 justify-end`}
      >
        <Filter mobile={true} handleFilter={searchProduct} />
      </section>

      {/* <section className="flex flex-col w-full items-center gap-4 overflow-hidden ">
        <div className="w-5/6 flex justify-between ">
          <h1 className="text-2xl sm:text-3xl">
            Today <span className="text-[#8E6447]">Promo</span>
          </h1>

          <div className="hidden sm:flex gap-2 ">
            <ButtonSwipe handleNextPage={handleSlideLeft}/>
          </div>
        </div>

        
        <div className={`w-fit flex gap-10  translate-x-[${position}rem]`}>
          {kupon.map((item, index) => (
            <Kupon
              key={index}
              klaim={item.klaim}
              title={item.title}
              description={item.description}
              bg={item.bg}
            />
          ))}
        </div>

        <div className="w-5/6 bg-red-400">
          <PageIndicator totalPage="4"/> 
        </div>
      </section> */}

      <section className="w-full flex flex-col items-center gap-12">
        <div className="flex items-center gap-2 w-full px-6">
          <hr className="hidden sm:block border-2 border-[#7E6363] flex-1 rounded" />

          <div className="flex flex-col items-center gap-2 sm:gap-4">
            <h1 className="text-2xl sm:text-5xl font-medium text-center px-4 sm:px-0">
              Our <span className="text-[#7E6363]">Products</span>
            </h1>
            <p className="text-[#4f5665] text-center text-xs sm:text-base max-w-lg px-4 sm:px-0">
              You can explore the menu that we provide with fun and have their
              own taste and make your day better.
            </p>
          </div>

          <hr className="hidden sm:block border-2 border-[#7E6363] flex-1 rounded" />
        </div>
        {/* <h1 className="w-5/6 text-2xl sm:text-3xl">
          Our <span className="text-[#8E6447]">Product</span>
        </h1> */}

        <div className="w-full px-2 sm:px-0 sm:w-5/6 flex justify-center gap-4">
          <aside className="hidden sm:block w-1/4 bg-black rounded-xl h-fit p-4 text-white">
            <Filter handleFilter={searchProduct} />
          </aside>

          <main className="flex flex-col items-end sm:flex-1 ">
            <div className="flex justify-center w-full ">
              <div className="flex flex-wrap justify-center gap-x-4 sm:gap-x-20 gap-y-44 sm:gap-y-52 mb-44 sm:mb-52 max-w-xl">
              <div
              className={`${error ? "block" : "hidden"}  absolute left-4 top-20 sm:left-[36rem] sm:top-24 w-full z-40`}
            >
              <Info
                message={`product not found. . . let's explore other choices!`}
              />
            </div>

                {dataProducts ?
                  dataProducts.map((product) =>
                    product.discount == 0 ? (
                      <CardProduct
                        key={product.id}
                        id={product.id}
                        productName={product.name}
                        description={product.description}
                        rating={product.rating}
                        price={product.basePrice}
                        image={product.image}
                        tag={product.tag}
                      />
                    ) : (
                      <CardProduct
                        key={product.id}
                        id={product.id}
                        productName={product.name}
                        description={product.description}
                        rating={product.rating}
                        basePrice={product.basePrice}
                        discountPrice={product.basePrice - product.discount}
                        image={product.image}
                        tag={product.tag}
                      />
                    )
                  ): CountProducts.map((_, index) => {
                    return (
                      <LoadingCardProduct key={index}/>
                    )
                  })}
              </div>
            </div>

            {dataProducts && 
              <PageNavigation
                totalPage={totalPage}
                pageHandle={pageNavigator}
                nextPageHandle={nextPageNavigator}
                prevPageHandle={prevPageNavigator}
                currentPage={currentPage}
              />
            }
          </main>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Products
