import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import OptionVariety from '../components/OptionVariety'


const Checkout = () => {
    return (
        <body className="flex flex-col items-center">

      <Navbar/>


        <div className="flex flex-col px-4 w-full sm:w-5/6 mt-20 sm:mt-24 mb-10 sm:mb-16 gap-4">
          <h1 className="text-2xl sm:text-3xl font-semibold">Payment Details</h1>
    
              <form className="flex flex-col sm:flex-row gap-4">
              <div className="flex flex-col w-full sm:w-7/12 gap-6 sm:gap-16">
                <div className="flex flex-col gap-4">
                  <div className="flex justify-between">
                    <h4 className="font-semibold">Your Order</h4>
                    <button className="flex items-center bg-[#FF8906] rounded-md active:scale-95 transition-all">
                      <i className="h-3 sm:h-4" data-feather="plus"></i>
                      <h5 className="text-xs p-1.5 sm:p-2">Add Menu</h5>
                    </button>
                  </div>
    
                  <div className="order flex flex-col gap-3 sm:gap-5 overflow-y-auto max-h-[22rem] sm:max-h-[21rem]">
                    <div className="relative flex items-center gap-2 sm:gap-4 bg-[#E8E8E84D] p-2">
                      <div className="">
                        <img className="w-24 sm:w-36" src="./assets/home-product1.jpg" />
                      </div>
                      <div className="flex-1 flex flex-col gap-2 sm:gap-3 justify-center">
                        <div className="bg-[#D00000] text-white rounded-3xl text-[0.6rem] sm:text-xs p-1 sm:p-1.5 w-fit">
                          <h1>FLASH SALE!</h1>
                        </div>
                        <h4 className="font-bold text-xs sm:text-base">Hazelnut Latte</h4>
                        <div className="flex divide-x text-xs sm:text-sm text-[#4F5665] divide-[#4F5665] w-48 sm:w-60">
                          <p className="pr-3">2pcs</p>
                          <p className="flex-1 flex justify-center">Regular</p>
                          <p className="flex justify-center px-3">Ice</p>
                          <p className="flex-1 flex justify-center">Dine in</p>
                        </div>
                        <div className="flex items-center gap-4">
                          <h1 className="text-[#D00000] text-[0.6rem] sm:text-xs font-semibold line-through">IDR 40.000</h1>
                          <h1 className="text-[#FF8906] font-semibold text-xs sm:text-base" id="product-price">IDR 10.000</h1>
                        </div>
                        <button className="absolute text-[#D00000] top-2 right-2 sm:top-auto sm:right-4">
                          <i className="delete h-4" data-feather="x-circle"></i>
                        </button>
                      </div>
                    </div>
    
                    <div className="relative flex items-center gap-2 sm:gap-4 bg-[#E8E8E84D] p-2">
                      <div className="">
                        <img className="w-24 sm:w-36" src="./assets/home-product2.jpg" />
                      </div>
                      <div className="flex-1 flex flex-col gap-2 sm:gap-3 justify-center">
                        <div className="bg-[#D00000] text-white rounded-3xl text-[0.6rem] sm:text-xs p-1 sm:p-1.5 w-fit">
                          <h1>FLASH SALE!</h1>
                        </div>
                        <h4 className="font-bold text-xs sm:text-base">Hazelnut Latte</h4>
                        <div className="flex divide-x text-xs sm:text-sm text-[#4F5665] divide-[#4F5665] w-48 sm:w-60">
                          <p className="pr-3">2pcs</p>
                          <p className="flex-1 flex justify-center">Regular</p>
                          <p className="flex justify-center px-3">Ice</p>
                          <p className="flex-1 flex justify-center">Dine in</p>
                        </div>
                        <div className="flex items-center gap-4">
                          <h1 className="text-[#D00000] text-[0.6rem] sm:text-xs font-semibold line-through">IDR 40.000</h1>
                          <h1 className="text-[#FF8906] font-semibold text-xs sm:text-base" id="product-price">IDR 10.000</h1>
                        </div>
                        <button className="delete absolute text-[#D00000] top-2 right-2 sm:top-auto sm:right-4">
                          <i className="delete h-4" data-feather="x-circle"></i>
                        </button>
                      </div>
                    </div>
    
                    <div className="relative flex items-center gap-2 sm:gap-4 bg-[#E8E8E84D] p-2">
                      <div className="">
                        <img className="w-24 sm:w-36" src="./assets/home-product3.jpg" />
                      </div>
                      <div className="flex-1 flex flex-col gap-2 sm:gap-3 justify-center">
                        <div className="bg-[#D00000] text-white rounded-3xl text-[0.6rem] sm:text-xs p-1 sm:p-1.5 w-fit">
                          <h1>FLASH SALE!</h1>
                        </div>
                        <h4 className="font-bold text-xs sm:text-base">Hazelnut Latte</h4>
                        <div className="flex divide-x text-xs sm:text-sm text-[#4F5665] divide-[#4F5665] w-48 sm:w-60">
                          <p className="pr-3">2pcs</p>
                          <p className="flex-1 flex justify-center">Regular</p>
                          <p className="flex justify-center px-3">Ice</p>
                          <p className="flex-1 flex justify-center">Dine in</p>
                        </div>
                        <div className="flex items-center gap-4">
                          <h1 className="text-[#D00000] text-[0.6rem] sm:text-xs font-semibold line-through">IDR 40.000</h1>
                          <h1 className="text-[#FF8906] font-semibold text-xs sm:text-base" id="product-price">IDR 10.000</h1>
                        </div>
                        <button className="delete absolute text-[#D00000] top-2 right-2 sm:top-auto sm:right-4">
                          <i className="delete h-4" data-feather="x-circle"></i>
                        </button>
                      </div>
                    </div>
    
                    <div className="relative flex items-center gap-2 sm:gap-4 bg-[#E8E8E84D] p-2">
                      <div className="">
                        <img className="w-24 sm:w-36" src="./assets/detail-product1.jpg" />
                      </div>
                      <div className="flex-1 flex flex-col gap-2 sm:gap-3 justify-center">
                        <div className="bg-[#D00000] text-white rounded-3xl text-[0.6rem] sm:text-xs p-1 sm:p-1.5 w-fit">
                          <h1>FLASH SALE!</h1>
                        </div>
                        <h4 className="font-bold text-xs sm:text-base">Hazelnut Latte</h4>
                        <div className="flex divide-x text-xs sm:text-sm text-[#4F5665] divide-[#4F5665] w-48 sm:w-60">
                          <p className="pr-3">2pcs</p>
                          <p className="flex-1 flex justify-center">Regular</p>
                          <p className="flex justify-center px-3">Ice</p>
                          <p className="flex-1 flex justify-center">Dine in</p>
                        </div>
                        <div className="flex items-center gap-4">
                          <h1 className="text-[#D00000] text-[0.6rem] sm:text-xs font-semibold line-through">IDR 40.000</h1>
                          <h1 className="text-[#FF8906] font-semibold text-xs sm:text-base" id="product-price">IDR 10.000</h1>
                        </div>
                        <button className="delete absolute text-[#D00000] top-2 right-2 sm:top-auto sm:right-4">
                          <i className="delete h-4" data-feather="x-circle"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
    
                <div className="flex flex-col justify-center gap-4">
                  <h2 className="text-lg sm:text-xl font-semibold">Payment Info & Delivery</h2>
                  
                  <div className="flex flex-col gap-2">
                    <label
                      className="text-[#0b132a] font-semibold text-xs sm:text-sm"
                      for="email"
                      >Email</label
                    >
                    <div className="flex border border-[#dedede] rounded-lg p-2 gap-3 items-center">
                      <i className="text-[#4F5665] h-4" data-feather="mail"></i>
                      <input
                        className="w-full outline-none text-xs sm:text-sm bg-transparent"
                        id="email"
                        type="email"
                        placeholder="Enter Your Email"
                      />
                    </div>
                  </div>
    
                  <div className="flex flex-col gap-2">
                    <label
                      className="text-[#0b132a] font-semibold text-xs sm:text-sm"
                      for="full-name"
                      >Full Name
                      </label>
                    <div className="flex border border-[#dedede] rounded-lg p-2 gap-3 items-center">
                      <i className="text-[#4F5665] h-4" data-feather="user"></i>
                      <input
                        className="w-full outline-none text-xs sm:text-sm  bg-transparent"
                        id="full-name"
                        type="text"
                        placeholder="Enter Your Full Name"
                      />
                    </div>
                  </div>
    
                  <div className="flex flex-col gap-2">
                    <label
                      className="text-[#0b132a] font-semibold text-xs sm:text-sm "
                      for="address"
                      >Address</label
                    >
                    <div className="flex border border-[#dedede] rounded-lg p-2 gap-3 items-center">
                      <i className="text-[#4F5665] h-4" data-feather="map-pin"></i>
                      <input
                        className="w-full outline-none text-xs sm:text-sm  bg-transparent"
                        id="address"
                        type="text"
                        placeholder="Enter Your Address"
                      />
                    </div>
                  </div>
                  
                <OptionVariety option="Delivery"/>
                </div>


              </div>
    
              <div className="flex-1 h-fit flex flex-col">
                <div className="flex pt-1 h-12 font-semibold">
                  <h4>Total</h4>
                </div>
                <div className="payment-summary bg-[#E8E8E84D] p-3 text-sm flex flex-col gap-4">
                  <div className="flex justify-between">
                    <h5 className="text-[#4F5665] font-semibold text-xs sm:text-base">Order</h5>
                    <h5 className="font-semibold text-xs sm:text-base">Idr.40.000</h5>
                  </div>
    
                  <div className="flex justify-between">
                    <h5 className="text-[#4F5665] font-semibold text-xs sm:text-base">Delivery</h5>
                    <h5 className="font-semibold text-xs sm:text-base">Idr.0</h5>
                  </div>
    
                  <div className="flex justify-between">
                    <h5 className="text-[#4F5665] font-semibold text-xs sm:text-base">Tax</h5>
                    <h5 className="font-semibold text-xs sm:text-base">Idr.4000</h5>
                  </div>
    
                  <hr/>
    
                  <div className="flex justify-between">
                    <h5 className="text-[#4F5665] font-semibold text-xs sm:text-base">Sub Total</h5>
                    <h5 className="font-semibold text-xs sm:text-base">Idr.44.000</h5>
                  </div>
    
                  <a href="./history-order.html" className="bg-[#FF8906] w-full rounded-md text-xs sm:text-sm py-1.5 active:scale-95 transition-all flex justify-center">Checkout</a>
    
                  <p className="text-xs text-[#4F5665]">We Accept</p>
    
                  <div className="flex flex-wrap justify-between gap-2 items-center">
                    <div>
                      <img src="./assets/BRI.png" />
                    </div>
    
                    <div>
                      <img src="./assets/DANA.png" />
                    </div>
    
                    <div>
                      <img src="./assets/BCA.png" />
                    </div>
    
                    <div>
                      <img src="./assets/gopay.png" />
                    </div>
    
                    <div>
                      <img src="./assets/ovo.png" />
                    </div>
    
                    <div>
                      <img src="./assets/paypal.png" />
                    </div>
                  </div>
    
                  <p className="text-xs text-[#4F5665]">*Get Discount if you pay with Bank Central Asia</p>
                </div>
              </div>
            </form>
    
        </div>

      <Footer/>
      </body>
    )
}

export default Checkout