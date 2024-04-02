import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setProduct } from "../redux/reducers/products";
import { setTotal } from "../redux/reducers/totalOrder";
import { setSize } from "../redux/reducers/sizeProducts";
import { setVariant } from "../redux/reducers/variantProducts";
import {
  setQuantity,
  updateQuantity,
} from "../redux/reducers/quantityProducts";
import { setId } from "../redux/reducers/productsId";
import { updateTotal } from "../redux/reducers/totalOrder";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import CardProduct from "../components/CardProduct";
import PageNavigation from "../components/PageNavigation";
import Details from "../components/Details";
import { setDetailProduct } from "../redux/reducers/detailProduct";
import Skeleton from "react-loading-skeleton";

const ProductDetails = () => {
  const products = useSelector((state) => state.products.data)
  const sizeProduct = useSelector((state) => state.sizeProducts.sizes)
  const variantProduct = useSelector((state) => state.variantProducts.variants)

  const dispatch = useDispatch()
  const [mainImage, setMainImage] = useState()

  // details product start
  const { id } = useParams()
  const [infoProduct, setInfoProduct] = useState()
  // console.log(infoProduct)

  const dataDetails = async (productId) => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    })

    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}/product/${
          productId ? productId : id
        }`
      )

      dispatch(setDetailProduct(data.results))
      setInfoProduct(data.results)
      setMainImage(data.results.image)
    } catch (error) {
      console.log(error)
    }
  }
  // details product end

  // add to redux start
  const [successAddToCart, setSuccessAddToCart] = useState(false)
  const addToCart = (quantity, size, variant, dataSize, dataVariant, id) => {
    const total =
      (infoProduct.basePrice -
        infoProduct.discount +
        (dataSize ? dataSize.additionalPrice : 0) +
        (dataVariant ? dataVariant.additionalPrice : 0)) *
      quantity;

      let isProductExist = false
      
      if (products.length){
        products.forEach((product, index) => {
          if (
            product.id === id &&
            sizeProduct[index] === size &&
            variantProduct[index] === variant
          ) {
            dispatch(updateQuantity({ index, quantity }))
            dispatch(updateTotal({ index, total }))
            isProductExist = true
            return
          }
        })


        if(!isProductExist){
          dispatch(setProduct({
            ...infoProduct,
            size,
            variant
          }))
          dispatch(setTotal(total))
          dispatch(setSize(size))
          dispatch(setVariant(variant))
          dispatch(setQuantity(quantity))
          dispatch(setId(id))
        }

      } else {
        dispatch(setProduct({
          ...infoProduct,
          size,
          variant
        }))
        dispatch(setTotal(total))
        dispatch(setSize(size))
        dispatch(setVariant(variant))
        dispatch(setQuantity(quantity))
        dispatch(setId(id))
      }


    setTimeout(() => {
      setSuccessAddToCart(true)
    }, 500)

    setTimeout(() => {
      setSuccessAddToCart(false)
    }, 4000)

    // navigate('/checkout')
  }
  // add to redux end

  // recommendation products start
  const [dataProducts, setDataProducts] = useState()
  const [totalPage, setTotalPage] = useState()
  const [nextPage, setNextPage] = useState()
  const [prevPage, setprevPage] = useState()
  const [disable, setDisable] = useState(false)
  const [currentPage, setCurrentPage] = useState()

  const recommendProducts = async () => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}/products`,
        {
          params: {
            limit: 3,
            isRecommended: true,
          },
        }
      )

      setDataProducts(data.results)
      setCurrentPage(data.pageInfo.currentPage)
      setTotalPage(data.pageInfo.totalPage)
      setNextPage(data.pageInfo.nextPage)
    } catch (error) {
      console.log(error)
    }
  }

  const pageNavigator = async (page) => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}/products`,
        {
          params: {
            limit: 3,
            page,
            isRecommended: true,
          },
        }
      )

      setDataProducts(data.results)
      setNextPage(data.pageInfo.nextPage)
      setprevPage(data.pageInfo.prevPage)
      setCurrentPage(data.pageInfo.currentPage)

      if (data.pageInfo.nextPage === null) {
        setDisable(true)
      } else {
        setDisable(false)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const nextPageNavigator = async () => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}/products`,
        {
          params: {
            limit: 3,
            page: nextPage,
            isRecommended: true,
          },
        }
      )

      setDataProducts(data.results)
      setNextPage(data.pageInfo.nextPage)
      setprevPage(data.pageInfo.prevPage)
      setCurrentPage(data.pageInfo.currentPage)

      if (data.pageInfo.nextPage === null) {
        setDisable(true)
      } else {
        setDisable(false)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const prevPageNavigator = async () => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}/products`,
        {
          params: {
            limit: 3,
            page: prevPage,
            isRecommended: true,
          },
        }
      )

      setDataProducts(data.results)
      setNextPage(data.pageInfo.nextPage)
      setprevPage(data.pageInfo.prevPage)
      setCurrentPage(data.pageInfo.currentPage)

      if (data.pageInfo.nextPage === null) {
        setDisable(true)
      } else {
        setDisable(false)
      }
    } catch (error) {
      console.log(error)
    }
  }
  // recommendation products end

  const clickImage = (event) => {
    const url = event.target.style.backgroundImage;
    const prefix = "url";
    const imageUrl = url.slice(prefix.length).replaceAll(/[()"]/g, "")
    setMainImage(imageUrl)
  }

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    })

    recommendProducts()

    dataDetails()
  }, [])

  return (
    <body className="flex flex-col items-center gap-8">
      <Navbar />

      <section className="h-fit sm:h-screen w-5/6 flex flex-col sm:flex-row items-center mt-20 sm:mt-8 gap-4 ">
        <div className="w-full sm:flex-1 flex flex-col items-center gap-2 h-96 sm:h-5/6">
          {infoProduct && (
            <div
              style={{
                backgroundImage: `url('${mainImage}')`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
              className={`w-full sm:w-5/6 h-72 sm:h-[22.5rem]`}
            ></div>
          )}

          <div className="flex-1 flex justify-between gap-2 w-full sm:w-5/6">
            {infoProduct &&
              infoProduct.productImages.map((item) => (
                <div
                  onClick={clickImage}
                  key={item.id}
                  style={{
                    backgroundImage: `url('${item.imageUrl}')`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}
                  className={`flex-1 w-full h-full active:scale-95 transition-all duration-300`}
                ></div>
              ))}
          </div>
        </div>

        {infoProduct && infoProduct.discount == 0 ? (
          <Details
            id={infoProduct.id}
            productName={infoProduct.name}
            rating={infoProduct.rating}
            review={infoProduct.review}
            description={infoProduct.description}
            price={infoProduct.basePrice}
            tag={infoProduct.tag}
            isRecommended={infoProduct.isRecommended}
            variants={infoProduct.variantsProduct}
            handleAddToCart={addToCart}
            addToCart={successAddToCart}
          />
        ) : (
          infoProduct && (
            <Details
              id={infoProduct.id}
              productName={infoProduct.name}
              rating={infoProduct.rating}
              review={infoProduct.review}
              description={infoProduct.description}
              basePrice={infoProduct.basePrice}
              discountPrice={infoProduct.basePrice - infoProduct.discount}
              tag={infoProduct.tag}
              isRecommended={infoProduct.isRecommended}
              variants={infoProduct.variantsProduct}
              handleAddToCart={addToCart}
              addToCart={successAddToCart}
            />
          )
        )}
      </section>

      <div className="h-fit sm:h-screen flex flex-col justify-center items-center w-5/6 gap-4 mb-4 sm:mb-0">
        <h1 className="w-full text-xl text-center sm:text-start sm:text-4xl">
          Recommendation <span className="text-[#8E6447]">For You</span>
        </h1>

        <div className="flex justify-center gap-4 sm:gap-12 mb-44 sm:mb-52 w-md sm:w-fit flex-wrap gap-y-44">
          {infoProduct && dataProducts
            ? dataProducts.map((product) =>
                product.discount == 0 ? (
                  <CardProduct
                    id={product.id}
                    key={product.id}
                    productName={product.name}
                    description={product.description}
                    rating={product.rating}
                    price={product.basePrice}
                    image={product.image}
                    handleDetails={dataDetails}
                    tag={product.tag}
                  />
                ) : (
                  <CardProduct
                    id={product.id}
                    key={product.id}
                    productName={product.name}
                    description={product.description}
                    rating={product.rating}
                    basePrice={product.basePrice}
                    discountPrice={product.basePrice - product.discount}
                    image={product.image}
                    handleDetails={dataDetails}
                    tag={product.tag}
                  />
                )
              )
            : ""}
        </div>

        {infoProduct && (
          <PageNavigation
            totalPage={totalPage}
            pageHandle={pageNavigator}
            nextPageHandle={nextPageNavigator}
            prevPageHandle={prevPageNavigator}
            handleDisable={disable}
            currentPage={currentPage}
          />
        )}
      </div>

      <Footer />
    </body>
  )
}

export default ProductDetails;
