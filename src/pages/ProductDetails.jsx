import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const ProductDetails = () => {
    return (
        <body className="flex flex-col items-center gap-8">

        <Navbar/>


          <section className="h-fit sm:h-screen w-5/6 flex flex-col sm:flex-row items-center mt-20 sm:mt-8 gap-4">
            <div className="w-full sm:flex-1 flex flex-col items-center gap-2 sm:gap-4 h-96 sm:h-5/6">
              <div className="bg-[url('../assets/media/detail-product4.jpg')] w-full h-72 sm:h-80 bg-bottom bg-cover"></div>
    
              <div className="flex-1 flex justify-between gap-4 w-full">
                <div className="flex-1 bg-[url('../assets/media/detail-product1.jpg')] bg-center bg-cover"></div>
                <div className="flex-1 bg-[url('../assets/media/detail-product2.jpg')] bg-center bg-cover"></div>
                <div className="flex-1 bg-[url('../assets/media/detail-product3.jpg')] bg-center bg-cover"></div>
              </div>
            </div>
    
            <div className="flex-1 flex flex-col gap-2 h-5/6">
              <div className="bg-[#D00000] text-white rounded-3xl text-xs sm:text-sm p-1.5 left-2 top-2 w-fit">
                <h1>FLASH SALE!</h1>
              </div>
              <h1 className="text-xl sm:text-3xl font-bold">Hazelnut Latte</h1>
              <div className="flex items-center gap-4">
                <h1 className="text-[#D00000] text-[0.6rem] sm:text-xs font-semibold line-through">IDR 20.000</h1>
                <h1 className="text-[#FF8906] font-semibold text-xs sm:text-base" id="product-price">IDR 10.000</h1>
              </div>
              <div className="flex items-center gap-2 sm:gap-4">
                <div className="flex items-center gap-2 sm:gap-4">
                  <div>
                    <img className="w-3 sm:w-auto" src="/assets/star.png" />
                  </div>
                  <div>
                    <img className="w-3 sm:w-auto" src="/assets/star.png" />
                  </div>
                  <div>
                    <img className="w-3 sm:w-auto" src="/assets/star.png" />
                  </div>
                  <div>
                    <img className="w-3 sm:w-auto" src="/assets/star.png" />
                  </div>
                  <div>
                    <img className="w-3 sm:w-auto" src="/assets/star.png" />
                  </div>
                </div>
                <p className="text-[#4F5665] text-xs sm:text-sm" id="rating-number">5.0</p>
              </div>
              <div className="flex items-center divide-[#4F5665] divide-x-2 w-[15rem] sm:w-3/5 text-sm text-[#4F5665]">
                <p className="w-[35%] text-xs sm:text-sm">200+ Review</p>
                <div className="flex-1 flex gap-2 sm:gap-4 justify-center items-center">
                  <p className="text-xs sm:text-sm">Recommendation</p>
                  <i className="text-[#FF8906] h-4 sm:h-auto" data-feather="thumbs-up"></i>
                </div>
              </div>
              <p className="text-xs sm:text-sm">
                Cold brewing is a method of brewing that combines ground coffee and
                cool water and uses time instead of heat to extract the flavor. It
                is brewed in small batches and steeped for as long as 48 hours.
              </p>
    
              <div className="flex items-center">
                <button id="decrement" className="border border-[#FF8906] bg-white rounded-sm w-4 h-4 sm:h-6 sm:w-6 flex items-center translate-x-1 active:scale-95 transition-all">
                  <i className="h-3 sm:h-4" data-feather="minus"></i>
                </button>
                <div className="border border-[#E8E8E8] w-9 sm:w-12 flex justify-center items-center rounded-sm">
                  <h1 id="quantity" className="text-xs sm:text-sm sm:py-[0.1rem]">1</h1>
                </div>
                <button id="increment" className="bg-[#FF8906] rounded-sm w-4 h-4 sm:h-6 sm:w-6 flex items-center translate-x-[-0.25rem] active:scale-95 transition-all">
                  <i className="h-3 sm:h-4" data-feather="plus"></i>
                </button>
              </div>
    
              <div className="flex flex-col gap-2">
                <h4 className="font-semibold text-xs sm:text-auto">Choose Size</h4>
                <div className="flex justify-between gap-4">
                  <button id="regular" className="regular flex-1 flex justify-center border focus:border-[#FF8906] border-[#E8E8E8] text-xs sm:text-sm text-[#4F5665] focus:text-black rounded py-1 sm:py-1.5 transition-all">Regular</button>
                  <button className="flex-1 flex justify-center border focus:border-[#FF8906] border-[#E8E8E8] text-xs sm:text-sm text-[#4F5665] focus:text-black  rounded py-1 sm:py-1.5 transition-all">Medium</button>
                  <button className="flex-1 flex justify-center border focus:border-[#FF8906] border-[#E8E8E8] text-xs sm:text-sm text-[#4F5665] focus:text-black  py-1 sm:py-1.5 transition-all">Large</button>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <h4 className="font-semibold text-xs sm:text-auto">Hot/Ice?</h4>
                <div className="flex justify-between gap-4">
                  <button className="flex-1 flex justify-center text-xs sm:text-sm border focus:border-[#FF8906] focus:text-black border-[#E8E8E8] text-[#4F5665] rounded py-1 sm:py-1.5 transition-all">Cold</button>
                  <button className="flex-1 flex justify-center text-xs sm:text-sm border focus:border-[#FF8906] focus:text-black border-[#E8E8E8] text-[#4F5665] rounded py-1 sm:py-1.5 transition-all">Hot</button>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-3 sm:mt-4">
                <a href="./checkout.html" className="flex-1 text-xs sm:text-sm bg-[#FF8906] rounded py-1.5 active:scale-95 transition-all flex justify-center">Buy</a>
                <button className="flex-1 flex justify-center gap-2 sm:gap-4 text-[#FF8906] border border-[#FF8906] rounded py-1.5 active:scale-95 transition-all">
                  <i className="text-[#FF8906] h-4 sm:h-auto" data-feather="shopping-cart"></i>
                  <p className="text-xs sm:text-sm">add to cart</p>
                </button>
              </div>
            </div>
          </section>


            <div className="h-fit sm:h-screen flex flex-col justify-center items-center w-5/6 gap-4 mb-8 sm:mb-0">
              <h1 className="w-full text-xl text-center sm:text-start sm:text-4xl">Recommendation <span className="text-[#8E6447]">For You</span></h1>
      
              <div className="flex justify-center gap-4 sm:gap-12 mb-44 w-md sm:w-fit flex-wrap gap-y-44">
                <div className="relative flex justify-center w-fit h-fit">
                  <div>
                    <img className=" w-48 sm:w-60" src="./assets/home-product1.jpg" alt="" />
                  </div>
                  <div className="absolute bg-[#D00000] text-white rounded-3xl text-xs p-1.5 left-2 top-2">
                    <h1>FLASH SALE!</h1>
                  </div>
                  <div className="absolute w-11/12 bg-white top-[85%] p-1.5 sm:p-2 flex flex-col gap-2">
                    <h1 className="font-semibold text-sm sm:text-base" id="product-name">Hazelnut Latte</h1>
                    <p className="text-[0.6rem] sm:text-[0.7rem] text-[#4F5665]">
                      You can explore the menu that we provide with fun and have their
                      own taste and make your day better.
                    </p>
                    <div className="flex items-center gap-2 sm:gap-4">
                      <div className="flex items-center gap-2 sm:gap-4">
                        <div>
                          <img className="w-3 sm:w-auto" src="/assets/star.png" />
                        </div>
                        <div>
                          <img className="w-3 sm:w-auto" src="/assets/star.png" />
                        </div>
                        <div>
                          <img className="w-3 sm:w-auto" src="/assets/star.png" />
                        </div>
                        <div>
                          <img className="w-3 sm:w-auto" src="/assets/star.png" />
                        </div>
                        <div>
                          <img className="w-3 sm:w-auto" src="/assets/star.png" />
                        </div>
                      </div>
                      <p className="text-[#4F5665] text-xs sm:text-sm" id="rating-number">5.0</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <h1 className="text-[#D00000] text-[0.6rem] sm:text-xs font-semibold line-through">IDR 20.000</h1>
                      <h1 className="text-[#FF8906] font-semibold text-xs sm:text-base" id="product-price">IDR 10.000</h1>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2">
                      <button className=" w-full sm:w-9/12 bg-[#FF8906] rounded-md text-xs sm:text-sm py-1 active:scale-95 transition-all">Buy</button>
                      <button className="w-full sm:flex-1 border border-[#FF8906] text-[#FF8906] p-[0.21rem] rounded-md flex justify-center items-center active:scale-95 transition-all">
                        <i className="h-4 sm:h-5" data-feather="shopping-cart"></i>
                      </button>
                    </div>
                  </div>
                </div>
      
                <div className="relative flex justify-center w-fit h-fit">
                  <div>
                    <img className=" w-48 sm:w-60" src="./assets/detail-product1.jpg" alt="" />
                  </div>
                  <div className="absolute bg-[#D00000] text-white rounded-3xl text-xs p-1.5 left-2 top-2">
                    <h1>FLASH SALE!</h1>
                  </div>
                  <div className="absolute w-11/12 bg-white top-[85%] p-1.5 sm:p-2 flex flex-col gap-2">
                    <h1 className="font-semibold text-sm sm:text-base" id="product-name">Hazelnut Latte</h1>
                    <p className="text-[0.6rem] sm:text-[0.7rem] text-[#4F5665]">
                      You can explore the menu that we provide with fun and have their
                      own taste and make your day better.
                    </p>
                    <div className="flex items-center gap-2 sm:gap-4">
                      <div className="flex items-center gap-2 sm:gap-4">
                        <div>
                          <img className="w-3 sm:w-auto" src="/assets/star.png" />
                        </div>
                        <div>
                          <img className="w-3 sm:w-auto" src="/assets/star.png" />
                        </div>
                        <div>
                          <img className="w-3 sm:w-auto" src="/assets/star.png" />
                        </div>
                        <div>
                          <img className="w-3 sm:w-auto" src="/assets/star.png" />
                        </div>
                        <div>
                          <img className="w-3 sm:w-auto" src="/assets/star.png" />
                        </div>
                      </div>
                      <p className="text-[#4F5665] text-xs sm:text-sm" id="rating-number">5.0</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <h1 className="text-[#D00000] text-[0.6rem] sm:text-xs font-semibold line-through">IDR 20.000</h1>
                      <h1 className="text-[#FF8906] font-semibold text-xs sm:text-base" id="product-price">IDR 10.000</h1>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2">
                      <button className=" w-full sm:w-9/12 bg-[#FF8906] rounded-md text-xs sm:text-sm py-1 active:scale-95 transition-all">Buy</button>
                      <button className="w-full sm:flex-1 border border-[#FF8906] text-[#FF8906] p-[0.21rem] rounded-md flex justify-center items-center active:scale-95 transition-all">
                        <i className="h-4 sm:h-5" data-feather="shopping-cart"></i>
                      </button>
                    </div>
                  </div>
                </div>
      
                <div className="relative hidden sm:flex justify-center w-fit h-fit">
                  <div>
                    <img className=" w-48 sm:w-60" src="./assets/detail-product3.jpg" alt="" />
                  </div>
                  <div className="absolute bg-[#D00000] text-white rounded-3xl text-xs p-1.5 left-2 top-2">
                    <h1>FLASH SALE!</h1>
                  </div>
                  <div className="absolute w-11/12 bg-white top-[85%] p-1.5 sm:p-2 flex flex-col gap-2">
                    <h1 className="font-semibold text-sm sm:text-base" id="product-name">Hazelnut Latte</h1>
                    <p className="text-[0.6rem] sm:text-[0.7rem] text-[#4F5665]">
                      You can explore the menu that we provide with fun and have their
                      own taste and make your day better.
                    </p>
                    <div className="flex items-center gap-2 sm:gap-4">
                      <div className="flex items-center gap-2 sm:gap-4">
                        <div>
                          <img className="w-3 sm:w-auto" src="/assets/star.png" />
                        </div>
                        <div>
                          <img className="w-3 sm:w-auto" src="/assets/star.png" />
                        </div>
                        <div>
                          <img className="w-3 sm:w-auto" src="/assets/star.png" />
                        </div>
                        <div>
                          <img className="w-3 sm:w-auto" src="/assets/star.png" />
                        </div>
                        <div>
                          <img className="w-3 sm:w-auto" src="/assets/star.png" />
                        </div>
                      </div>
                      <p className="text-[#4F5665] text-xs sm:text-sm" id="rating-number">5.0</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <h1 className="text-[#D00000] text-[0.6rem] sm:text-xs font-semibold line-through">IDR 20.000</h1>
                      <h1 className="text-[#FF8906] font-semibold text-xs sm:text-base" id="product-price">IDR 10.000</h1>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2">
                      <button className=" w-full sm:w-9/12 bg-[#FF8906] rounded-md text-xs sm:text-sm py-1 active:scale-95 transition-all">Buy</button>
                      <button className="w-full sm:flex-1 border border-[#FF8906] text-[#FF8906] p-[0.21rem] rounded-md flex justify-center items-center active:scale-95 transition-all">
                        <i className="h-4 sm:h-5" data-feather="shopping-cart"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
      
              <div className="flex justify-center gap-2">
                <button
                  className="page-indicator flex justify-center items-center bg-[#E8E8E8] text-[#A0A3BD] focus:bg-[#FF8906] focus:text-black focus:outline-[#FF8906] active:scale-90 transition-all text-xs sm:text-sm rounded-full h-6 w-6 sm:h-8 sm:w-8">
                  <h3>1</h3>
                </button>
    
                <button
                  className="page-indicator flex justify-center items-center text-[#A0A3BD] text-xs sm:text-sm bg-[#E8E8E8] focus:bg-[#FF8906] focus:text-black active:scale-90 transition-all rounded-full h-6 w-6 sm:h-8 sm:w-8">
                  <h3>2</h3>
                </button>
    
                <button
                  className="page-indicator flex justify-center items-center text-[#A0A3BD] text-xs sm:text-sm bg-[#E8E8E8] focus:bg-[#FF8906] focus:text-black active:scale-90 transition-all rounded-full h-6 w-6 sm:h-8 sm:w-8">
                  <h3>3</h3>
                </button>
    
                <button
                  className="page-indicator flex justify-center items-center text-[#A0A3BD] text-xs sm:text-sm bg-[#E8E8E8] focus:bg-[#FF8906] focus:text-black active:scale-90 transition-all rounded-full h-6 w-6 sm:h-8 sm:w-8">
                  <h3>4</h3>
                </button>
    
                <button id="btn-next"
                  className="flex justify-center items-center bg-[#FF8906] rounded-full h-6 w-6 sm:h-8 sm:w-8 active:scale-90 transition-all">
                  <i
                    className="text-white h-4 sm:h-auto"
                    data-feather="arrow-right"
                  ></i>
                </button>
              </div>
            </div>


      <Footer/>
        
      </body>
    )
}

export default ProductDetails