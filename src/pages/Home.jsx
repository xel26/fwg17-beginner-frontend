import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Home = () => {
    return (
        <wrap className="font relative flex flex-col items-center">

      <Navbar/>


        <button id="chat-icon" className="fixed flex justify-center items-center right-6 bottom-6 sm:right-12 sm:bottom-12 bg-[#ff8906] rounded-full p-1 w-10 h-10 sm:p-2 sm:w-12 sm:h-12 z-50 active:scale-90 transition">
          <i data-feather="message-circle"></i>
        </button>
    
        <div id="chat-box" className="hidden fixed w-60 h-80 sm:w-72 sm:h-96 rounded-xl sm:rounded-2xl flex flex-col bg-white top-24 sm:right-24 z-50">
          <div className="flex border-t-[0.8rem] sm:border-t-[1rem] border-[#FF8906] rounded-tr-xl rounded-tl-xl sm:rounded-tr-2xl sm:rounded-tl-2xl pl-4 gap-4 py-2">
            <div>
              <img className=" w-12 h-12 sm:w-16 sm:h-16 rounded-full" src="https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=800" />
            </div>
            <div className="admin-support">
              <h1 className="font-bold text-sm sm:text-base">Maria Angela</h1>
              <h1 className="text-[#FF8906] text-sm sm:text-base">Admin Support</h1>
            </div>
          </div>
    
          <hr className="border border-[#E8E8E8]" />
    
          <div className="p-2 flex flex-col gap-2 h-48 sm:h-56">
            <div className="flex items-center gap-2 sm:gap-4">
              <div>
                <img className="w-6 h-6 sm:w-8 sm:h-8 rounded-full" src="https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=800" />
              </div>
              <p className="text-[0.6rem] sm:text-xs text-[#4F5665] bg-[#E8E8E84D] rounded-md p-1 sm:p-2">Halo, Ada yang bisa kami bantu?</p>
          </div>
    
          <div className="flex items-center justify-end gap-2 sm:gap-4">
            <p className="text-[0.6rem] sm:text-xs text-[#4F5665]  bg-[#E8E8E84D] rounded-md p-1 sm:p-2">Saya kesulitan mencari kopi</p>
            <div>
              <img className="w-6 h-6 sm:w-8 sm:h-8 rounded-full" src="https://images.pexels.com/photos/573299/pexels-photo-573299.jpeg?auto=compress&cs=tinysrgb&w=800" />
            </div>
        </div>
          </div>
    
          <div className="flex-1 flex items-center justify-center px-2 gap-2">
            <input className="w-4/5 rounded-md text-[0.6rem] sm:text-xs p-1.5 sm:p-2 sm:p-3 border border-[#DEDEDE] outline-none" type="text" placeholder="Masukan Pesan Anda" />
            <div className="flex-1 flex justify-center items-center bg-[#FF8906] rounded-md p-1.5 sm:p-2">
              <i className="h-4 sm:h-5" data-feather="send"></i>
            </div>
          </div>
      </div>


        <section className="flex flex-col-reverse sm:flex-row h-[64rem] sm:h-screen w-full">
          <div className="flex h-fit py-16 sm:py-0 sm:h-screen sm:flex-1 justify-center items-center bg-gradient-to-b from-[#323436] to-[#0B0909]">
            <div className="flex flex-col gap-6 max-w-md h-fit px-4 sm:px-0">
              <h1 id="header" className="text-2xl sm:text-5xl text-white font-medium">Start Your Day with <br/> Coffee and Good <br/> Meals</h1>
              <p id="description" className="text-white text-xs sm:text-sm w-11/12">
                We provide high quality beans, good taste, and healthy meals made by
                love just for you. Start your day with us for a bigger smile!
              </p>
              <a href="./product.html" className="relative w-fit bg-[#ff8906] py-2 px-3 rounded-md text-xs sm:text-sm font-semibold active:scale-95 transition-all overflow-hidden">
                <h1>Get Started</h1>
                {/* <span id="btn-get-started" className="absolute top-0 right-0 w-full h-full bg-[#ff8906] transition-all duration-1000 delay-1000"></span> */}
              </a>
              <div className="flex divide-x-2">
                <div className="flex-1 flex">
                  <div className="flex flex-col sm:gap-2  w-5/6">
                    <h1 id="staff" className="text-[#ff8906] text-2xl sm:text-4xl font-semibold">90+</h1>
                    <p className="text-white text-xs sm:text-sm">Staff</p>
                  </div>
                </div>
    
                <div className="flex-1 flex justify-center">
                  <div className="flex flex-col items-center sm:gap-2 w-5/6">
                    <h1 id="stores" className="text-[#ff8906] text-2xl sm:text-4xl font-semibold">30+</h1>
                    <p className="text-white text-xs sm:text-sm">Stores</p>
                  </div>
                </div>
    
                <div className="flex-1 flex justify-end">
                  <div className="flex flex-col items-end sm:gap-2 w-5/6">
                    <h1 id="customer" className="text-[#ff8906] text-2xl sm:text-4xl font-semibold">800+</h1>
                    <p className="text-white text-xs sm:text-sm">Customer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
    
          <div className="flex-1 bg-[url('../assets/media/bg-home.jpg')] bg-center"></div>
        </section>


        <section id="section" className="flex flex-col-reverse sm:flex-row w-full h-[64rem] sm:h-screen">
            <div className="h-fit py-16 sm:py-0 sm:h-screen sm:flex-1  flex items-center">
              <div className="flex flex-col ml-8 sm:ml-28 gap-4 h-fit max-w-lg">
                  <div id="provide-header"  className="flex items-center gap-4">
                    <hr className="border-[#ff8906] border-2 sm:border-4 h-14"/>
                    <h1 className="text-2xl sm:text-5xl font-medium">
                      We Provide <span className="text-[#8E6447]">Good <br /> Coffee</span> and
                      <span className="text-[#8E6447]">Healthy Meals</span>
                    </h1>
                  </div>className
                  <p id="provide-description" className="text-sm text-[#4F5665]">
                    You can explore the menu that we provide with fun and have their
                    own <br /> taste and make your day better.
                  </p>
                  <div id="list-provide" className="flex flex-col gap-4">
                    <div className="flex gap-4">
                      <div className="bg-[#2FAB73] rounded-full text-white w-fit h-fit">
                        <i className="h-5 w-fit" data-feather="check-circle"></i>
                      </div>
                      <p className="text-sm text-[#4F5665]">High quality beans</p>
                    </div>
      
                    <div className="flex gap-4">
                      <div className="bg-[#2FAB73] rounded-full text-white w-fit h-fit">
                        <i className="h-5 w-fit" data-feather="check-circle"></i>
                      </div>
                      <p className="text-sm text-[#4F5665]">Healthy meals, you can request the ingredients</p>
                    </div>
      
                    <div className="flex gap-4">
                      <div className="bg-[#2FAB73] rounded-full text-white w-fit h-fit">
                        <i className="h-5 w-fit" data-feather="check-circle"></i>
                      </div>
                      <p className="text-sm text-[#4F5665]">Free member card with a minimum purchase of IDR 200.000.</p>
                    </div>
      
                    <div className="flex gap-4">
                      <div className="bg-[#2FAB73] rounded-full text-white w-fit h-fit">
                        <i className="h-5 w-fit" data-feather="check-circle"></i>
                      </div>
                      <p className="text-sm text-[#4F5665]">Chat with our staff to get better experience for ordering</p>
                    </div>
                  </div>
              </div>
            </div>
      
              <div className="bg-[url('../assets/media/staff-image.jpg')] flex-1 bg-center bg-cover"></div>
        </section>


        <section className="h-fit sm:h-screen flex flex-col items-center sm:pt-10 w-full sm:w-5/6 gap-6 sm:gap-12">
          <div className="flex flex-col items-center gap-2 sm:gap-4">
            <h1 className="text-2xl text-center sm:text-5xl font-medium sm:mb-2 px-4">Here is People's <span className="text-[#8E6447]">Favorite</span></h1>
            <hr className="border-[#ff8906] border-2 sm:border-4 w-16"/>
            <p className="text-[#4f5665] text-xs sm:text-base text-center px-4">
              Let's choose and have a bit taste of poeple's favorite. It might be
              yours too!
            </p>
          </div>
    
          <div className="gap-y-44 gap-x-6 flex flex-wrap justify-center mb-44 sm:gap-6 w-fit mx-6 sm:mx-0 sm:px-6">
            <div className="relative flex justify-center w-fit">
              <div>
                <img className="w-44 sm:w-56" src="./assets/detail-product1.jpg" alt="" />
              </div>
              <div className="absolute w-11/12 bg-white shadow-md top-36 sm:top-44 p-2 flex flex-col gap-1 sm:gap-2">
                <h1 className="font-semibold text-sm sm:text-base" id="product-name">Hazelnut Latte</h1>
                <p className="text-[0.6rem] sm:text-[0.7rem] text-[#4F5665]">
                  You can explore the menu that we provide with fun and have their
                  own taste and make your day better.
                </p>
                <h1 className="text-[#FF8906] font-semibold text-sm sm:text-base" id="product-price">IDR 20.000</h1>
                <div className="flex flex-col sm:flex-row items-center gap-2">
                  <button className="w-full sm:w-9/12 bg-[#FF8906] rounded-md text-xs sm:text-sm py-1 active:scale-95 transition-all">Buy</button>
                  <button className="w-full sm:flex-1 border border-[#FF8906] text-[#FF8906] p-[0.21rem] rounded-md flex justify-center items-center active:scale-95 transition-all">
                    <i className="h-4 sm:h-5" data-feather="shopping-cart"></i>
                  </button>
                </div>
              </div>
            </div>
    
            <div className="relative flex justify-center w-fit">
              <div>
                <img className="w-44 sm:w-56" src="./assets/home-product2.jpg" alt="" />
              </div>
              <div className="absolute w-11/12 bg-white shadow-md top-36 sm:top-44 p-2 flex flex-col gap-1 sm:gap-2">
                <h1 className="font-semibold text-sm sm:text-base" id="product-name">Hazelnut Latte</h1>
                <p className="text-[0.6rem] sm:text-[0.7rem] text-[#4F5665]">
                  You can explore the menu that we provide with fun and have their
                  own taste and make your day better.
                </p>
                <h1 className="text-[#FF8906] font-semibold text-sm sm:text-base" id="product-price">IDR 20.000</h1>
                <div className="flex flex-col sm:flex-row items-center gap-2">
                  <button className="w-full sm:w-9/12 bg-[#FF8906] rounded-md text-xs sm:text-sm py-1 active:scale-95 transition-all">Buy</button>
                  <button className="w-full sm:flex-1 border border-[#FF8906] text-[#FF8906] p-[0.21rem] rounded-md flex justify-center items-center active:scale-95 transition-all">
                    <i className="h-4 sm:h-5" data-feather="shopping-cart"></i>
                  </button>
                </div>
              </div>
            </div>
    
            <div className="relative flex justify-center w-fit">
              <div>
                <img className="w-44 sm:w-56" src="./assets/home-product3.jpg" alt="" />
              </div>
              <div className="absolute w-11/12 bg-white shadow-md top-36 sm:top-44 p-2 flex flex-col gap-1 sm:gap-2">
                <h1 className="font-semibold text-sm sm:text-base" id="product-name">Hazelnut Latte</h1>
                <p className="text-[0.6rem] sm:text-[0.7rem] text-[#4F5665]">
                  You can explore the menu that we provide with fun and have their
                  own taste and make your day better.
                </p>
                <h1 className="text-[#FF8906] font-semibold text-sm sm:text-base" id="product-price">IDR 20.000</h1>
                <div className="flex flex-col sm:flex-row items-center gap-2">
                  <button className="w-full sm:w-9/12 bg-[#FF8906] rounded-md text-xs sm:text-sm py-1 active:scale-95 transition-all">Buy</button>
                  <button className="w-full sm:flex-1 border border-[#FF8906] text-[#FF8906] p-[0.21rem] rounded-md flex justify-center items-center active:scale-95 transition-all">
                    <i className="h-4 sm:h-5" data-feather="shopping-cart"></i>
                  </button>
                </div>
              </div>
            </div>
    
            <div className="relative flex justify-center w-fit">
              <div>
                <img className="w-44 sm:w-56" src="./assets/home-product1.jpg" alt="" />
              </div>
              <div className="absolute w-11/12 bg-white shadow-md top-36 sm:top-44 p-2 flex flex-col gap-1 sm:gap-2">
                <h1 className="font-semibold text-sm sm:text-base" id="product-name">Hazelnut Latte</h1>
                <p className="text-[0.6rem] sm:text-[0.7rem] text-[#4F5665]">
                  You can explore the menu that we provide with fun and have their
                  own taste and make your day better.
                </p>
                <h1 className="text-[#FF8906] font-semibold text-sm sm:text-base" id="product-price">IDR 20.000</h1>
                <div className="flex flex-col sm:flex-row items-center gap-2">
                  <button className="w-full sm:w-9/12 bg-[#FF8906] rounded-md text-xs sm:text-sm py-1 active:scale-95 transition-all">Buy</button>
                  <button className="w-full sm:flex-1 border border-[#FF8906] text-[#FF8906] p-[0.21rem] rounded-md flex justify-center items-center active:scale-95 transition-all">
                    <i className="h-4 sm:h-5" data-feather="shopping-cart"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>


        <section className="h-fit py-6 sm:h-screen flex flex-col items-center justify-center w-full bg-[#E8E8E84D] gap-12">
            <div className="flex flex-col items-center gap-2 sm:gap-4">
              <h1 className="text-2xl sm:text-5xl font-medium text-center px-4 sm:px-0"><span className="text-[#8E6447]">Visit Our Store</span> in the Spot on the Map Below</h1>
              <hr className="border-[#ff8906] border-2 sm:border-4 w-16"/>
              <p className="text-[#4f5665] text-center text-xs sm:text-base max-w-lg px-4 sm:px-0">
                You can explore the menu that we provide with fun and have their own
                taste and make your day better.
              </p>
            </div>
    
            <div className="flex justify-center">
              <img className="w-3/5 hidden sm:block" src="../assets/media/home-map.png" />
              <img className="sm:hidden" src="./assets/map-responsive.png" />
            </div>
        </section>


        <section className="flex justify-center items-center bg-gradient-to-b from-[#323436] to-[#0B0909] w-full h-fit py-6 sm:h-fit sm:py-12">
          <div className="flex flex-col sm:flex-row w-5/6 gap-4">
            <div className="flex flex-col items-center gap-4">
              <p className="text-white sm:hidden">TESTIMONIAL</p>
              <img className="w-full sm:w-[30rem]" src="./assets/home-customer-image1.jpg" alt="" />
            </div>
            
            <div className="flex flex-col gap-4 w-full sm:w-[30rem]">
              <p className="text-white hidden sm:block">TESTIMONIAL</p>
              <h1 className="text-white text-2xl sm:text-4xl border-l-4 border-[#FF8906] pl-4">Viezh Robert</h1>
              <p className="text-[#FF8906]">Manager Coffe Shop</p>
              <p className="text-white text-sm sm:text-base">
                “Wow... I am very happy to spend my whole day here. the Wi-fi is good,
                and the coffee and meals tho. I like it here!! Very recommended!
              </p>
              <div className="flex items-center gap-4">
                <div className="flex gap-4">
                  <div>
                    <img src="/assets/star.png" />
                  </div>
                  <div>
                    <img src="/assets/star.png" />
                  </div>
                  <div>
                    <img src="/assets/star.png" />
                  </div>
                  <div>
                    <img src="/assets/star.png" />
                  </div>
                  <div>
                    <img src="/assets/star.png" />
                  </div>
                </div>
                <p className="text-white" id="rating-number">5.0</p>
              </div>
    
              <div className="flex gap-2">
                <button id="prev" className="flex justify-center items-center bg-white rounded-full h-8 w-8 active:scale-90 transition-all">
                  <i className="h-5" data-feather="arrow-left"></i>
                </button>
    
                <button id="next" className="flex justify-center items-center bg-[#FF8906] rounded-full h-8 w-8 active:scale-90 transition-all">
                  <i className="h-5"  data-feather="arrow-right"></i>
                </button>
              </div>
    
              <div className="flex gap-1">
                <button className="page-indicator focus:bg-[#FF8906] focus:w-8 bg-white w-2 h-2 rounded-md transition-all"></button>
                <button className="page-indicator focus:bg-[#FF8906] focus:w-8 bg-white w-2 h-2 rounded-md transition-all"></button>
                <button className="page-indicator focus:bg-[#FF8906] focus:w-8 bg-white w-2 h-2 rounded-md transition-all"></button>
                <button className="page-indicator focus:bg-[#FF8906] focus:w-8 bg-white w-2 h-2 rounded-md transition-all"></button>
              </div>
            </div>
          </div>
        </section>


      <Footer/>
      </wrap>
    )
}

export default Home