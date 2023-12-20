import { useState, useEffect } from "react";
import axios from "axios";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import CardProduct from "../components/CardProduct";
import PageNavigation from "../components/PageNavigation";
import Details from "../components/Details";
import Product1 from "../assets/media/home-product1.jpg";
import Product2 from "../assets/media/home-product2.jpg";
import Product3 from "../assets/media/home-product3.jpg";

const ProductDetails = () => {
  const [products, setProducts] = useState([
    {
      productName:"Affogato",
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
      productName:"French Fries",
      description:"You can explore the menu that we provide with fun and have their own taste and make your day better.",
      rating:"4",
      basePrice:"30.000",
      discountPrice:"25.000",
      image: Product3
    }
  ])

  const [dataProducts, setDataProducts] = useState()
  const [totalPage, setTotalPage] = useState()
  const listAllProducts = async () => {
    try {
      const {data} = await axios.get("http://localhost:8888/products?limit=3")
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
      const {data} = await axios.get(`http://localhost:8888/products?limit=3&page=${page}`)
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
    <body className="flex flex-col items-center gap-8">
      <Navbar />

      <section className="h-fit sm:h-screen w-5/6 flex flex-col sm:flex-row items-center mt-20 sm:mt-8 gap-4 ">
        <div className="w-full sm:flex-1 flex flex-col items-center gap-2 sm:gap-4 h-96 sm:h-5/6">
          <div className="bg-[url('../assets/media/detail-product1.jpg')] w-full h-72 sm:h-80 bg-center bg-cover"></div>

          <div className="flex-1 flex justify-between gap-4 w-full">
            <div className="flex-1 bg-[url('../assets/media/detail-product1.jpg')] bg-center bg-cover"></div>
            <div className="flex-1 bg-[url('../assets/media/detail-product2.jpg')] bg-center bg-cover"></div>
            <div className="flex-1 bg-[url('../assets/media/detail-product3.jpg')] bg-center bg-cover"></div>
          </div>
        </div>

        <Details
          productName="Hazelnut Latte"
          rating="5"
          review="200"
          description="
        Cold brewing is a method of brewing that combines ground coffee and
        cool water and uses time instead of heat to extract the flavor. It
        is brewed in small batches and steeped for as long as 48 hours."
        />
      </section>

      <div className="h-fit sm:h-screen flex flex-col justify-center items-center w-5/6 gap-4 mb-8 sm:mb-0">
        <h1 className="w-full text-xl text-center sm:text-start sm:text-4xl">
          Recommendation <span className="text-[#8E6447]">For You</span>
        </h1>

        <div className="flex justify-center gap-4 sm:gap-12 mb-44 w-md sm:w-fit flex-wrap gap-y-48">
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

        <PageNavigation totalPage={totalPage} pageHandle={pageNavigator}/>
      </div>

      <Footer />
    </body>
  );
};

export default ProductDetails;
