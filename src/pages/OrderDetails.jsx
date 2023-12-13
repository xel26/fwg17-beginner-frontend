import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const OrderDetails = () => {
    return (
        <body className="flex flex-col items-center">
            
      <Navbar/>


        <div className="flex flex-col gap-2 w-5/6 mt-20 sm:mt-24 mb-6">
          <h1 className="text-xl sm:text-3xl">
            Order <span className="font-bold">#12354-09893</span>
          </h1>
          <p className="text-[#4F5665] text-xs sm:text-sm">21 March 2023 at 10:30 AM</p>
        </div>
    
        <div className="w-5/6 flex flex-col sm:flex-row gap-4 h-fit sm:h-96 mb-16">
          <div className="w-full sm:flex-1 flex flex-col gap-6">
            <h1 className="font-semibold text-base sm:text-xl">Order Information</h1>
    
            <div className="flex flex-col divide-y">
              <div className="flex justify-between py-3">
                <div className="flex gap-3 text-[#4F5665] items-center">
                  <i className="h-5" data-feather="user"></i>
                  <p className="text-xs sm:text-base">Full Name</p>
                </div>
                <h5 className="font-bold text-xs sm:text-base">
                  Ghaluh Wizard Anggoro
                </h5>
              </div>
    
              <div className="flex justify-between py-3">
                <div className="flex gap-3 text-[#4F5665] items-center">
                  <i className="h-4" data-feather="map-pin"></i>
                  <p className="text-xs sm:text-base">Address</p>
                </div>
                <h5 className="font-bold text-xs sm:text-base">Griya bandung indah</h5>
              </div>
    
              <div className="flex justify-between py-3">
                <div className="flex gap-3 text-[#4F5665] items-center">
                  <i className="h-4" data-feather="phone-call"></i>
                  <p className="text-xs sm:text-base">Phone</p>
                </div>
                <h5 className="font-bold text-xs sm:text-base">082116304338</h5>
              </div>
    
              <div className="flex justify-between py-3">
                <div className="flex gap-3 text-[#4F5665] items-center">
                  <i className="h-4" data-feather="credit-card"></i>
                  <p className="text-xs sm:text-base">Payment Method</p>
                </div>
                <h5 className="font-bold text-xs sm:text-base">Cash</h5>
              </div>
    
              <div className="flex justify-between py-3">
                <div className="flex gap-3 text-[#4F5665] items-center">
                  <i className="h-4" data-feather="truck"></i>
                  <p className="text-xs sm:text-base text-xs sm:text-base">Shipping</p>
                </div>
                <h5 className="font-bold text-xs sm:text-base">Dine In</h5>
              </div>
    
              <div className="flex justify-between py-3">
                <div className="flex gap-3 text-[#4F5665] items-center">
                  <i className="h-4" data-feather="refresh-ccw"></i>
                  <p className="text-xs sm:text-base">Status</p>
                </div>
                <h5
                  className="font-bold text-[#00A700] text-[0.6rem] sm:text-xs bg-[#00A70033] py-1 px-2 rounded-full flex items-center"
                >
                  Done
                </h5>
              </div>
    
              <div className="flex justify-between py-3">
                <p className="text-[#4F5665] text-xs sm:text-base">Total Transaksi</p>
                <h5 className="font-bold text-[#FF8906] text-xs sm:text-base">
                  Idr 40.000
                </h5>
              </div>
            </div>
          </div>
    
          <div className="flex flex-col gap-4">
            <h4 className="font-semibold">Your Order</h4>
    
            <div className="flex flex-col gap-3 sm:gap-5 overflow-y-auto max-h-[22rem] sm:max-h-[21rem]">
              <div className="relative flex items-center gap-2 sm:gap-4 bg-[#E8E8E84D] p-2">
                <div className="">
                  <img className="w-24 sm:w-36" src="./assets/home-product1.jpg" />
                </div>
                <div className="flex-1 flex flex-col gap-2 sm:gap-3 justify-center">
                  <div
                    className="bg-[#D00000] text-white rounded-3xl text-[0.6rem] sm:text-xs p-1 sm:p-1.5 w-fit"
                  >
                    <h1>FLASH SALE!</h1>
                  </div>
                  <h4 className="font-bold text-xs sm:text-base">Hazelnut Latte</h4>
                  <div
                    className="flex divide-x text-xs sm:text-sm text-[#4F5665] divide-[#4F5665] w-48 sm:w-60"
                  >
                    <p className="pr-3">2pcs</p>
                    <p className="flex-1 flex justify-center">Regular</p>
                    <p className="flex justify-center px-3">Ice</p>
                    <p className="flex-1 flex justify-center">Dine in</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <h1
                      className="text-[#D00000] text-[0.6rem] sm:text-xs font-semibold line-through"
                    >
                      IDR 40.000
                    </h1>
                    <h1
                      className="text-[#FF8906] font-semibold text-xs sm:text-base"
                      id="product-price"
                    >
                      IDR 10.000
                    </h1>
                  </div>
                </div>
              </div>
    
              <div className="relative flex items-center gap-2 sm:gap-4 bg-[#E8E8E84D] p-2">
                <div className="">
                  <img className="w-24 sm:w-36" src="./assets/detail-product3.jpg" />
                </div>
                <div className="flex-1 flex flex-col gap-2 sm:gap-3 justify-center">
                  <div
                    className="bg-[#D00000] text-white rounded-3xl text-[0.6rem] sm:text-xs p-1 sm:p-1.5 w-fit"
                  >
                    <h1>FLASH SALE!</h1>
                  </div>
                  <h4 className="font-bold text-xs sm:text-base">Hazelnut Latte</h4>
                  <div
                    className="flex divide-x text-xs sm:text-sm text-[#4F5665] divide-[#4F5665] w-48 sm:w-60"
                  >
                    <p className="pr-3">2pcs</p>
                    <p className="flex-1 flex justify-center">Regular</p>
                    <p className="flex justify-center px-3">Ice</p>
                    <p className="flex-1 flex justify-center">Dine in</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <h1
                      className="text-[#D00000] text-[0.6rem] sm:text-xs font-semibold line-through"
                    >
                      IDR 40.000
                    </h1>
                    <h1
                      className="text-[#FF8906] font-semibold text-xs sm:text-base"
                      id="product-price"
                    >
                      IDR 10.000
                    </h1>
                  </div>
                </div>
              </div>
    
              <div className="relative flex items-center gap-2 sm:gap-4 bg-[#E8E8E84D] p-2">
                <div className="">
                  <img className="w-24 sm:w-36" src="./assets/detail-product1.jpg" />
                </div>
                <div className="flex-1 flex flex-col gap-2 sm:gap-3 justify-center">
                  <div
                    className="bg-[#D00000] text-white rounded-3xl text-[0.6rem] sm:text-xs p-1 sm:p-1.5 w-fit">
                    <h1>FLASH SALE!</h1>
                  </div>
                  <h4 className="font-bold text-xs sm:text-base">Hazelnut Latte</h4>
                  <div
                    className="flex divide-x text-xs sm:text-sm text-[#4F5665] divide-[#4F5665] w-48 sm:w-60">
                    <p className="pr-3">2pcs</p>
                    <p className="flex-1 flex justify-center">Regular</p>
                    <p className="flex justify-center px-3">Ice</p>
                    <p className="flex-1 flex justify-center">Dine in</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <h1
                      className="text-[#D00000] text-[0.6rem] sm:text-xs font-semibold line-through">
                      IDR 40.000
                    </h1>
                    <h1
                      className="text-[#FF8906] font-semibold text-xs sm:text-base"
                      id="product-price">
                      IDR 10.000
                    </h1>
                  </div>
                </div>
              </div>
    
              <div className="relative flex items-center gap-2 sm:gap-4 bg-[#E8E8E84D] p-2">
                <div className="">
                  <img className="w-24 sm:w-36" src="./assets/detail-product2.jpg" />
                </div>
                <div className="flex-1 flex flex-col gap-2 sm:gap-3 justify-center">
                  <div
                    className="bg-[#D00000] text-white rounded-3xl text-[0.6rem] sm:text-xs p-1 sm:p-1.5 w-fit">
                    <h1>FLASH SALE!</h1>
                  </div>
                  <h4 className="font-bold text-xs sm:text-base">Hazelnut Latte</h4>
                  <div
                    className="flex divide-x text-xs sm:text-sm text-[#4F5665] divide-[#4F5665] w-48 sm:w-60">
                    <p className="pr-3">2pcs</p>
                    <p className="flex-1 flex justify-center">Regular</p>
                    <p className="flex justify-center px-3">Ice</p>
                    <p className="flex-1 flex justify-center">Dine in</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <h1
                      className="text-[#D00000] text-[0.6rem] sm:text-xs font-semibold line-through">
                      IDR 40.000
                    </h1>
                    <h1
                      className="text-[#FF8906] font-semibold text-xs sm:text-base"
                      id="product-price">
                      IDR 10.000
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      <Footer/>
      </body>
    )
}

export default OrderDetails