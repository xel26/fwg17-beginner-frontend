import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ButtonSwipe from "../components/ButtonSwipe";
import PageIndicator from "../components/PageIndicator";
import PageNavigation from "../components/PageNavigation";
import CardProduct from "../components/CardProduct";
import Filter from "../components/Filter";
import { FiList, FiSearch } from "react-icons/fi";
import GreenKuponStiker from "../assets/media/stiker-kupon-hijau.png";
import YellowKuponStiker from "../assets/media/stiker-kupon-kuning.png";
import Product1 from '../assets/media/detail-product1.jpg'
import Product2 from '../assets/media/detail-product2.jpg'
import Product3 from '../assets/media/detail-product3.jpg'
import Product4 from '../assets/media/home-product1.jpg'
import Product5 from '../assets/media/home-product2.jpg'
import Product6 from '../assets/media/home-product3.jpg'
import { useEffect, useState } from "react";
import axios from "axios";

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
  );
};

const Products = () => {
  
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

  const [products, setProducts] = useState([
    {
      productName:"Hazelnut Latte",
      description:"You can explore the menu that we provide with fun and have their own taste and make your day better.",
      rating:"5",
      basePrice:"20.000",
      discountPrice:"10.000",
      image: Product1
    },
    {
      productName:"Latte",
      description:"You can explore the menu that we provide with fun and have their own taste and make your day better.",
      rating:"4",
      basePrice:"25.000",
      discountPrice:"15.000",
      image: Product2
    },
    {
      productName:"Cappuccino",
      description:"You can explore the menu that we provide with fun and have their own taste and make your day better.",
      rating:"4",
      basePrice:"30.000",
      discountPrice:"25.000",
      image: Product3
    },
    {
      productName:"Mochacino",
      description:"You can explore the menu that we provide with fun and have their own taste and make your day better.",
      rating:"5",
      basePrice:"35.000",
      discountPrice:"30.000",
      image: Product4
    },
    {
      productName:"Affogato",
      description:"You can explore the menu that we provide with fun and have their own taste and make your day better.",
      rating:"4",
      basePrice:"25.000",
      discountPrice:"20.000",
      image: Product5
    },
    {
      productName:"French Fries",
      description:"You can explore the menu that we provide with fun and have their own taste and make your day better.",
      rating:"3",
      basePrice:"20.000",
      discountPrice:"15.000",
      image: Product6
    },
  ])

  const [mobileFilter, setMobileFilter] = useState(false)
  const filterMobile = () => {
    setMobileFilter(!mobileFilter)
  };

  const [dataProducts, setDataProducts] = useState()
  const [totalPage, setTotalPage] = useState()
  const listAllProducts = async () => {
    try {
      const {data} = await axios.get("http://localhost:8888/products")
      console.log(data)
      console.log(data.results)
      console.log(data.pageInfo.totalPage)
      setTotalPage(data.pageInfo.totalPage)
      setDataProducts(data.results)
    } catch (error) {
      console.log(error)
    }
  }

  const pageNavigator = async (page) => {
    try {
      const {data} = await axios.get(`http://localhost:8888/products?page=${page}`)
      setDataProducts(data.results)
      setTotalPage(data.pageInfo.totalPage)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
      listAllProducts()
      console.log(dataProducts)
  }, [])

  return (
    <div className="flex flex-col items-center gap-6 sm:gap-12">
      <Navbar bg="#0B090921" />
      <header className="hidden sm:flex items-center bg-[url('../assets/media/header-product-page.jpg')] bg-center w-full h-72 mt-12">
        <h1 className="text-white text-5xl ml-28">
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
              className="flex gap-2 items-center  w-full"
              id="search-by-name"
            >
              <FiSearch
                color="#4F5665"
                size={18}
                className="active:scale-90 transition-all"
              />
              <input
                id="find-product"
                className="text-[#4F5665] outline-none bg-transparent text-xs w-full"
                type="text"
                placeholder="Find Product"
              />
              <button className="hidden" type="submit"></button>
            </form>
          </label>

          <button
            onClick={filterMobile}
            className=" bg-[#FF8906] rounded-md p-2 w-fit flex items-center  justify-center active:scale-95 transition-all"
          >
            <FiList size={20} />
          </button>
        </div>
      </section>

      <section
        className={`${mobileFilter ? 'flex' : 'hidden'} sm:hidden absolute h-fit w-5/6 z-40 top-32 justify-end`}
      >
        <Filter mobile={true} />
      </section>

      <section className="flex flex-col w-full items-center gap-4 overflow-x-hidden">
        <div className="w-5/6 flex justify-between">
          <h1 className="text-2xl sm:text-3xl">
            Today <span className="text-[#8E6447]">Promo</span>
          </h1>

          <div className="hidden sm:flex gap-2">
            <ButtonSwipe />
          </div>
        </div>

        <div className="w-fit flex gap-10">
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

        <div className="w-5/6">
          <PageIndicator/>
        </div>
      </section>

      <section className="w-full flex flex-col items-center gap-4">
        <h1 className="w-5/6 text-2xl sm:text-3xl">
          Our <span className="text-[#8E6447]">Product</span>
        </h1>

        <div className="w-full px-2 sm:px-0 sm:w-5/6 flex gap-4">
          <aside className="hidden sm:block w-1/4 bg-black rounded-xl h-fit p-4 text-white">
            <Filter />
          </aside>

          <main className="flex flex-col items-end sm:flex-1">
            <div className="relative flex justify-center w-full">
              <div className=" flex flex-wrap justify-center gap-x-4 sm:gap-x-20 gap-y-48 sm:gap-y-44 mb-48 max-w-xl">
                { dataProducts &&
                  dataProducts.map((product) => (
                    <CardProduct
                    key={product.id}
                    productName={product.name}
                    description={product.description}
                    rating='5'
                    basePrice={product.basePrice}
                    discountPrice={product.basePrice - product.discount}
                    image={Product1}
                  />
                  ))
                }
                {/* {
                  products.map((product, index) => (
                    <CardProduct
                      key={index}
                      productName={product.productName}
                      description={product.description}
                      rating={product.rating}
                      basePrice={product.basePrice}
                      discountPrice={product.discountPrice}
                      image={product.image}
                    />
                  ))
                } */}
              </div>
            </div>

            <PageNavigation totalPage={totalPage} pageHandle={pageNavigator}/>
          </main>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;
