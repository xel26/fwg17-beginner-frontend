import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Product = () => {
  return (
    <wrap className="flex flex-col items-center gap-6 sm:gap-12">
      <Navbar bg="#0B090921" />
      <header className="hidden sm:flex items-center bg-[url('../assets/media/header-product-page.jpg')] bg-center w-full h-72 mt-12">
        <h1 className="text-white text-5xl ml-28">
          We Provide Good Coffee and Healthy <br />
          Meals
        </h1>
      </header>

      <section className="sm:hidden flex w-full justify-center gap-4 mt-20">
        <div className="w-5/6 flex justify-between gap-2">
          <div className="w-11/12 flex gap-2 border border-[#DEDEDE] rounded-md p-2">
            <form className="flex items-center" id="search-by-name">
              <button className="flex items-center" type="submit">
                <i
                  className="h-4 text-[#4F5665] active:scale-90 transition-all"
                  data-feather="search"
                ></i>
              </button>
              <input
                className="text-[#4F5665] outline-none bg-transparent text-xs w-full"
                type="text"
                placeholder="Find Product"
              />
            </form>
          </div>

          <button
            id="btn-filter"
            className="bg-[#FF8906] rounded-md p-1 w-fit flex items-center active:scale-95 transition-all"
          >
            <i className="h-5" data-feather="list"></i>
          </button>
        </div>
      </section>

      <section
        id="filter-option"
        className="hidden sm:hidden absolute top-10 h-fit w-5/6 z-40 top-32 flex justify-end"
      >
        <form className="bg-black p-4 text-white flex flex-col gap-4 rounded-xl">
          <div className="flex justify-between">
            <h4 className="font-semibold text-sm">Filter</h4>
            <button
              className="font-semibold text-sm active:scale-95 transition-all"
              type="reset"
            >
              Reset Filter
            </button>
          </div>

          <div className="flex flex-col gap-3 text-xs">
            <h4 className="font-semibold text-sm">Category</h4>
            <div className="flex gap-3">
              <input
                type="checkbox"
                name="category"
                id="favorite-product"
                value="Favorite Product"
              />
              <label for="favorite-product">Favorite Product</label>
            </div>

            <div className="flex gap-3">
              <input
                type="checkbox"
                name="category"
                id="coffee"
                value="coffee"
              />
              <label for="coffee">Coffee</label>
            </div>

            <div className="flex gap-3">
              <input
                type="checkbox"
                name="category"
                id="non-coffee"
                value="non-coffee"
              />
              <label for="non-coffee">Non Coffee</label>
            </div>

            <div className="flex gap-3">
              <input type="checkbox" name="category" id="foods" value="foods" />
              <label for="foods">Foods</label>
            </div>

            <div className="flex gap-3">
              <input
                type="checkbox"
                name="category"
                id="add-on"
                value="add-on"
              />
              <label for="add-on">Add-On</label>
            </div>
          </div>

          <div className="flex flex-col gap-3 text-xs">
            <h4 className="font-semibold text-sm">Sort By</h4>
            <div className="flex gap-3">
              <input
                type="checkbox"
                name="category"
                id="buy1get1"
                value="buy1get1"
              />
              <label for="buy1get1">Buy1get1</label>
            </div>

            <div className="flex gap-3">
              <input
                type="checkbox"
                name="category"
                id="flashsale"
                value="flashsale"
              />
              <label for="flashsale">Flashsale</label>
            </div>

            <div className="flex gap-3">
              <input
                type="checkbox"
                name="category"
                id="birthday-package"
                value="birthday-package"
              />
              <label for="birthday-package">Birthday Package</label>
            </div>

            <div className="flex gap-3">
              <input type="checkbox" name="category" id="cheap" value="cheap" />
              <label for="cheap">Cheap</label>
            </div>
          </div>

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
      </section>

      <section className="flex flex-col w-full items-center gap-4 overflow-x-hidden">
        <div className="w-5/6 flex justify-between">
          <h1 className="text-2xl sm:text-3xl">
            Today <span className="text-[#8E6447]">Promo</span>
          </h1>

          <div className="hidden sm:flex gap-2">
            <button
              id="prev"
              className="flex justify-center items-center focus:bg-[#FF8906] bg-[#E8E8E8] rounded-full h-8 w-8 active:scale-90 transition-all"
            >
              <i className="h-5" data-feather="arrow-left"></i>
            </button>

            <button
              id="next"
              className="flex justify-center items-center focus:bg-[#FF8906] bg-[#E8E8E8] rounded-full h-8 w-8 active:scale-90 transition-all"
            >
              <i className="h-5" data-feather="arrow-right"></i>
            </button>
          </div>
        </div>

        <div className="w-fit flex gap-10">
          <div className="flex bg-[#88B788] rounded-2xl items-center pl-2 w-64 sm:w-72 h-20 sm:h-auto">
            <div>
              <img
                className="h-20 sm:h-24 translate-y-1"
                src="./assets/stiker-kupon-hijau.png"
                alt=""
              />
            </div>
            <div className="flex flex-col gap-1">
              <div>
                <h5 className="text-xs sm:text-sm font-bold">
                  HAPPY MOTHER'S DAY!
                </h5>
                <p className="text-[0.7rem] sm:text-xs">
                  Get one of our favorite menu <br />
                  for free!
                </p>
              </div>
              <p className="text-[0.7rem] sm:text-xs text-white">Klaim Kupon</p>
            </div>
          </div>

          <div className="flex bg-[#88B788] rounded-2xl items-center pl-2 w-64 sm:w-72 h-20 sm:h-auto">
            <div>
              <img
                className="h-20 sm:h-24 translate-y-1"
                src="./assets/stiker-kupon-hijau.png"
                alt=""
              />
            </div>
            <div className="flex flex-col gap-1">
              <div>
                <h5 className="text-xs sm:text-sm font-bold">
                  HAPPY MOTHER'S DAY!
                </h5>
                <p className="text-[0.7rem] sm:text-xs">
                  Get one of our favorite menu <br />
                  for free!
                </p>
              </div>
              <p className="text-[0.7rem] sm:text-xs text-white">Klaim Kupon</p>
            </div>
          </div>

          <div className="flex bg-[#88B788] rounded-2xl items-center pl-2 w-64 sm:w-72 h-20 sm:h-auto">
            <div>
              <img
                className="h-20 sm:h-24 translate-y-1"
                src="./assets/stiker-kupon-hijau.png"
                alt=""
              />
            </div>
            <div className="flex flex-col gap-1">
              <div>
                <h5 className="text-xs sm:text-sm font-bold">
                  HAPPY MOTHER'S DAY!
                </h5>
                <p className="text-[0.7rem] sm:text-xs">
                  Get one of our favorite menu <br />
                  for free!
                </p>
              </div>
              <p className="text-[0.7rem] sm:text-xs text-white">Klaim Kupon</p>
            </div>
          </div>

          <div className="flex bg-[#88B788] rounded-2xl items-center pl-2 w-64 sm:w-72 h-20 sm:h-auto">
            <div>
              <img
                className="h-20 sm:h-24 translate-y-1"
                src="./assets/stiker-kupon-hijau.png"
                alt=""
              />
            </div>
            <div className="flex flex-col gap-1">
              <div>
                <h5 className="text-xs sm:text-sm font-bold">
                  HAPPY MOTHER'S DAY!
                </h5>
                <p className="text-[0.7rem] sm:text-xs">
                  Get one of our favorite menu <br />
                  for free!
                </p>
              </div>
              <p className="text-[0.7rem] sm:text-xs text-white">Klaim Kupon</p>
            </div>
          </div>

          <div className="flex bg-[#F5C361] rounded-2xl items-center pl-2 w-64 sm:w-72 h-20 sm:h-auto">
            <div>
              <img
                className="h-20 sm:h-24 translate-y-1"
                src="./assets/stiker-kupon-kuning.png"
                alt=""
              />
            </div>
            <div className="flex flex-col gap-3">
              <h5 className="text-xs sm:text-sm font-bold">
                Get a cup of coffee for free <br />
                on sunday morning
              </h5>
              <p className="text-[0.7rem] sm:text-xs">Only at 7 to 9 AM</p>
            </div>
          </div>
        </div>

        <div className="w-5/6">
          <div className="flex gap-1">
            <button className="page-indicator focus:bg-[#FF8906] focus:w-8 bg-[#DDE0E4] w-2 h-2 rounded-md transition-all focus:outline-none"></button>
            <button className="page-indicator focus:bg-[#FF8906] focus:w-8 bg-[#DDE0E4] w-2 h-2 rounded-md transition-all"></button>
            <button className="page-indicator focus:bg-[#FF8906] focus:w-8 bg-[#DDE0E4] w-2 h-2 rounded-md transition-all"></button>
            <button className="page-indicator focus:bg-[#FF8906] focus:w-8 bg-[#DDE0E4] w-2 h-2 rounded-md transition-all"></button>
          </div>
        </div>
      </section>

      <section className="w-full flex flex-col items-center gap-4">
        <h1 className="w-5/6 text-2xl sm:text-3xl">
          Our <span className="text-[#8E6447]">Product</span>
        </h1>

        <div className="w-full px-2 sm:px--0 sm:w-5/6 flex gap-4">
          <aside className="hidden sm:block w-1/4 bg-black rounded-xl h-fit p-4 text-white">
            <form className="flex flex-col gap-4">
              <div className="flex justify-between">
                <h4 className="font-semibold text-sm">Filter</h4>
                <button
                  className="font-semibold text-sm active:scale-95 transition-all"
                  type="reset"
                >
                  Reset Filter
                </button>
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-semibold text-sm" for="search-product">
                  Search
                </label>
                <input
                  className="rounded text-xs p-2"
                  id="search-product"
                  type="text"
                  placeholder="Search Your Product"
                />
              </div>

              <div className="flex flex-col gap-3 text-xs">
                <h4 className="font-semibold text-sm">Category</h4>
                <div className="flex gap-3">
                  <input
                    type="checkbox"
                    name="category"
                    id="favorite-product"
                    value="Favorite Product"
                  />
                  <label for="favorite-product">Favorite Product</label>
                </div>

                <div className="flex gap-3">
                  <input
                    type="checkbox"
                    name="category"
                    id="coffee"
                    value="coffee"
                  />
                  <label for="coffee">Coffee</label>
                </div>

                <div className="flex gap-3">
                  <input
                    type="checkbox"
                    name="category"
                    id="non-coffee"
                    value="non-coffee"
                  />
                  <label for="non-coffee">Non Coffee</label>
                </div>

                <div className="flex gap-3">
                  <input
                    type="checkbox"
                    name="category"
                    id="foods"
                    value="foods"
                  />
                  <label for="foods">Foods</label>
                </div>

                <div className="flex gap-3">
                  <input
                    type="checkbox"
                    name="category"
                    id="add-on"
                    value="add-on"
                  />
                  <label for="add-on">Add-On</label>
                </div>
              </div>

              <div className="flex flex-col gap-3 text-xs">
                <h4 className="font-semibold text-sm">Sort By</h4>
                <div className="flex gap-3">
                  <input
                    type="checkbox"
                    name="category"
                    id="buy1get1"
                    value="buy1get1"
                  />
                  <label for="buy1get1">Buy1get1</label>
                </div>

                <div className="flex gap-3">
                  <input
                    type="checkbox"
                    name="category"
                    id="flashsale"
                    value="flashsale"
                  />
                  <label for="flashsale">Flashsale</label>
                </div>

                <div className="flex gap-3">
                  <input
                    type="checkbox"
                    name="category"
                    id="birthday-package"
                    value="birthday-package"
                  />
                  <label for="birthday-package">Birthday Package</label>
                </div>

                <div className="flex gap-3">
                  <input
                    type="checkbox"
                    name="category"
                    id="cheap"
                    value="cheap"
                  />
                  <label for="cheap">Cheap</label>
                </div>
              </div>

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
          </aside>

          <main className="flex flex-col items-end sm:flex-1">
            <div className="relative flex justify-center w-full">
              <div className=" flex flex-wrap justify-center gap-x-4 sm:gap-x-20 gap-y-44 mb-48 max-w-xl">
                <div className="relative flex justify-center w-fit h-fit">
                  <div>
                    <img
                      className="w-48 sm:w-60"
                      src="./assets/detail-product1.jpg"
                      alt=""
                    />
                  </div>
                  <div className="absolute bg-[#D00000] text-white rounded-3xl text-xs p-1.5 left-2 top-2">
                    <h1>FLASH SALE!</h1>
                  </div>
                  <div className="absolute w-11/12 bg-white top-[85%] p-1.5 sm:p-2 flex flex-col gap-2">
                    <h1
                      className="font-semibold text-sm sm:text-base"
                      id="product-name"
                    >
                      Hazelnut Latte
                    </h1>
                    <p className="text-[0.6rem] sm:text-[0.7rem] text-[#4F5665]">
                      You can explore the menu that we provide with fun and have
                      their own taste and make your day better.
                    </p>
                    <div className="flex items-center gap-2 sm:gap-4">
                      <div className="flex items-center gap-2 sm:gap-4">
                        <div>
                          <img
                            className="w-3 sm:w-auto"
                            src="/assets/star.png"
                          />
                        </div>
                        <div>
                          <img
                            className="w-3 sm:w-auto"
                            src="/assets/star.png"
                          />
                        </div>
                        <div>
                          <img
                            className="w-3 sm:w-auto"
                            src="/assets/star.png"
                          />
                        </div>
                        <div>
                          <img
                            className="w-3 sm:w-auto"
                            src="/assets/star.png"
                          />
                        </div>
                        <div>
                          <img
                            className="w-3 sm:w-auto"
                            src="/assets/star.png"
                          />
                        </div>
                      </div>
                      <p
                        className="text-[#4F5665] text-xs sm:text-sm"
                        id="rating-number"
                      >
                        5.0
                      </p>
                    </div>
                    <div className="flex items-center gap-4">
                      <h1 className="text-[#D00000] text-[0.6rem] sm:text-xs font-semibold line-through">
                        IDR 20.000
                      </h1>
                      <h1
                        className="text-[#FF8906] font-semibold text-xs sm:text-base"
                        id="product-price"
                      >
                        IDR 10.000
                      </h1>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2">
                      <a
                        href="./detail-product.html"
                        className=" w-full sm:w-9/12 bg-[#FF8906] rounded-md text-xs sm:text-sm py-1 active:scale-95 transition-all flex justify-center"
                      >
                        Buy
                      </a>
                      <button className="w-full sm:flex-1 border border-[#FF8906] text-[#FF8906] p-[0.21rem] rounded-md flex justify-center items-center active:scale-95 transition-all">
                        <i
                          className="h-4 sm:h-5"
                          data-feather="shopping-cart"
                        ></i>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="relative flex justify-center w-fit h-fit">
                  <div>
                    <img
                      className="w-48 sm:w-60"
                      src="./assets/home-product1.jpg"
                      alt=""
                    />
                  </div>
                  <div className="absolute bg-[#D00000] text-white rounded-3xl text-xs p-1.5 left-2 top-2">
                    <h1>FLASH SALE!</h1>
                  </div>
                  <div className="absolute w-11/12 bg-white top-[85%] p-1.5 sm:p-2 flex flex-col gap-2">
                    <h1
                      className="font-semibold text-sm sm:text-base"
                      id="product-name"
                    >
                      Hazelnut Latte
                    </h1>
                    <p className="text-[0.6rem] sm:text-[0.7rem] text-[#4F5665]">
                      You can explore the menu that we provide with fun and have
                      their own taste and make your day better.
                    </p>
                    <div className="flex items-center gap-2 sm:gap-4">
                      <div className="flex items-center gap-2 sm:gap-4">
                        <div>
                          <img
                            className="w-3 sm:w-auto"
                            src="/assets/star.png"
                          />
                        </div>
                        <div>
                          <img
                            className="w-3 sm:w-auto"
                            src="/assets/star.png"
                          />
                        </div>
                        <div>
                          <img
                            className="w-3 sm:w-auto"
                            src="/assets/star.png"
                          />
                        </div>
                        <div>
                          <img
                            className="w-3 sm:w-auto"
                            src="/assets/star.png"
                          />
                        </div>
                        <div>
                          <img
                            className="w-3 sm:w-auto"
                            src="/assets/star.png"
                          />
                        </div>
                      </div>
                      <p
                        className="text-[#4F5665] text-xs sm:text-sm"
                        id="rating-number"
                      >
                        5.0
                      </p>
                    </div>
                    <div className="flex items-center gap-4">
                      <h1 className="text-[#D00000] text-[0.6rem] sm:text-xs font-semibold line-through">
                        IDR 20.000
                      </h1>
                      <h1
                        className="text-[#FF8906] font-semibold text-xs sm:text-base"
                        id="product-price"
                      >
                        IDR 10.000
                      </h1>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2">
                      <button className=" w-full sm:w-9/12 bg-[#FF8906] rounded-md text-xs sm:text-sm py-1 active:scale-95 transition-all">
                        Buy
                      </button>
                      <button className="w-full sm:flex-1 border border-[#FF8906] text-[#FF8906] p-[0.21rem] rounded-md flex justify-center items-center active:scale-95 transition-all">
                        <i
                          className="h-4 sm:h-5"
                          data-feather="shopping-cart"
                        ></i>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="relative flex justify-center w-fit h-fit">
                  <div>
                    <img
                      className="w-48 sm:w-60"
                      src="./assets/detail-product2.jpg"
                      alt=""
                    />
                  </div>
                  <div className="absolute bg-[#D00000] text-white rounded-3xl text-xs p-1.5 left-2 top-2">
                    <h1>FLASH SALE!</h1>
                  </div>
                  <div className="absolute w-11/12 bg-white top-[85%] p-1.5 sm:p-2 flex flex-col gap-2">
                    <h1
                      className="font-semibold text-sm sm:text-base"
                      id="product-name"
                    >
                      Hazelnut Latte
                    </h1>
                    <p className="text-[0.6rem] sm:text-[0.7rem] text-[#4F5665]">
                      You can explore the menu that we provide with fun and have
                      their own taste and make your day better.
                    </p>
                    <div className="flex items-center gap-2 sm:gap-4">
                      <div className="flex items-center gap-2 sm:gap-4">
                        <div>
                          <img
                            className="w-3 sm:w-auto"
                            src="/assets/star.png"
                          />
                        </div>
                        <div>
                          <img
                            className="w-3 sm:w-auto"
                            src="/assets/star.png"
                          />
                        </div>
                        <div>
                          <img
                            className="w-3 sm:w-auto"
                            src="/assets/star.png"
                          />
                        </div>
                        <div>
                          <img
                            className="w-3 sm:w-auto"
                            src="/assets/star.png"
                          />
                        </div>
                        <div>
                          <img
                            className="w-3 sm:w-auto"
                            src="/assets/star.png"
                          />
                        </div>
                      </div>
                      <p
                        className="text-[#4F5665] text-xs sm:text-sm"
                        id="rating-number"
                      >
                        5.0
                      </p>
                    </div>
                    <div className="flex items-center gap-4">
                      <h1 className="text-[#D00000] text-[0.6rem] sm:text-xs font-semibold line-through">
                        IDR 20.000
                      </h1>
                      <h1
                        className="text-[#FF8906] font-semibold text-xs sm:text-base"
                        id="product-price"
                      >
                        IDR 10.000
                      </h1>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2">
                      <button className=" w-full sm:w-9/12 bg-[#FF8906] rounded-md text-xs sm:text-sm py-1 active:scale-95 transition-all">
                        Buy
                      </button>
                      <button className="w-full sm:flex-1 border border-[#FF8906] text-[#FF8906] p-[0.21rem] rounded-md flex justify-center items-center active:scale-95 transition-all">
                        <i
                          className="h-4 sm:h-5"
                          data-feather="shopping-cart"
                        ></i>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="relative flex justify-center w-fit h-fit">
                  <div>
                    <img
                      className="w-48 sm:w-60"
                      src="./assets/detail-product3.jpg"
                      alt=""
                    />
                  </div>
                  <div className="absolute bg-[#D00000] text-white rounded-3xl text-xs p-1.5 left-2 top-2">
                    <h1>FLASH SALE!</h1>
                  </div>
                  <div className="absolute w-11/12 bg-white top-[85%] p-1.5 sm:p-2 flex flex-col gap-2">
                    className
                    <h1
                      className="font-semibold text-sm sm:text-base"
                      id="product-name"
                    >
                      Hazelnut Latte
                    </h1>
                    <p className="text-[0.6rem] sm:text-[0.7rem] text-[#4F5665]">
                      You can explore the menu that we provide with fun and have
                      their own taste and make your day better.
                    </p>
                    <div className="flex items-center gap-2 sm:gap-4">
                      <div className="flex items-center gap-2 sm:gap-4">
                        <div>
                          <img
                            className="w-3 sm:w-auto"
                            src="/assets/star.png"
                          />
                        </div>
                        <div>
                          <img
                            className="w-3 sm:w-auto"
                            src="/assets/star.png"
                          />
                        </div>
                        <div>
                          <img
                            className="w-3 sm:w-auto"
                            src="/assets/star.png"
                          />
                        </div>
                        <div>
                          <img
                            className="w-3 sm:w-auto"
                            src="/assets/star.png"
                          />
                        </div>
                        <div>
                          <img
                            className="w-3 sm:w-auto"
                            src="/assets/star.png"
                          />
                        </div>
                      </div>
                      <p
                        className="text-[#4F5665] text-xs sm:text-sm"
                        id="rating-number"
                      >
                        5.0
                      </p>
                    </div>
                    <div className="flex items-center gap-4">
                      <h1 className="text-[#D00000] text-[0.6rem] sm:text-xs font-semibold line-through">
                        IDR 20.000
                      </h1>
                      <h1
                        className="text-[#FF8906] font-semibold text-xs sm:text-base"
                        id="product-price"
                      >
                        IDR 10.000
                      </h1>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2">
                      <button className=" w-full sm:w-9/12 bg-[#FF8906] rounded-md text-xs sm:text-sm py-1 active:scale-95 transition-all">
                        Buy
                      </button>
                      <button className="w-full sm:flex-1 border border-[#FF8906] text-[#FF8906] p-[0.21rem] rounded-md flex justify-center items-center active:scale-95 transition-all">
                        <i
                          className="h-4 sm:h-5"
                          data-feather="shopping-cart"
                        ></i>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="relative flex justify-center w-fit h-fit">
                  <div>
                    <img
                      className="w-48 sm:w-60"
                      src="./assets/home-product2.jpg"
                      alt=""
                    />
                  </div>
                  <div className="absolute bg-[#D00000] text-white rounded-3xl text-xs p-1.5 left-2 top-2">
                    <h1>FLASH SALE!</h1>
                  </div>
                  <div className="absolute w-11/12 bg-white top-[85%] p-1.5 sm:p-2 flex flex-col gap-2">
                    <h1
                      className="font-semibold text-sm sm:text-base"
                      id="product-name"
                    >
                      Hazelnut Latte
                    </h1>
                    <p className="text-[0.6rem] sm:text-[0.7rem] text-[#4F5665]">
                      You can explore the menu that we provide with fun and have
                      their own taste and make your day better.
                    </p>
                    <div className="flex items-center gap-2 sm:gap-4">
                      <div className="flex items-center gap-2 sm:gap-4">
                        <div>
                          <img
                            className="w-3 sm:w-auto"
                            src="/assets/star.png"
                          />
                        </div>
                        <div>
                          <img
                            className="w-3 sm:w-auto"
                            src="/assets/star.png"
                          />
                        </div>
                        <div>
                          <img
                            className="w-3 sm:w-auto"
                            src="/assets/star.png"
                          />
                        </div>
                        <div>
                          <img
                            className="w-3 sm:w-auto"
                            src="/assets/star.png"
                          />
                        </div>
                        <div>
                          <img
                            className="w-3 sm:w-auto"
                            src="/assets/star.png"
                          />
                        </div>
                      </div>
                      <p
                        className="text-[#4F5665] text-xs sm:text-sm"
                        id="rating-number"
                      >
                        5.0
                      </p>
                    </div>
                    <div className="flex items-center gap-4">
                      <h1 className="text-[#D00000] text-[0.6rem] sm:text-xs font-semibold line-through">
                        IDR 20.000
                      </h1>
                      <h1
                        className="text-[#FF8906] font-semibold text-xs sm:text-base"
                        id="product-price"
                      >
                        IDR 10.000
                      </h1>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2">
                      <button className=" w-full sm:w-9/12 bg-[#FF8906] rounded-md text-xs sm:text-sm py-1 active:scale-95 transition-all">
                        Buy
                      </button>
                      <button className="w-full sm:flex-1 border border-[#FF8906] text-[#FF8906] p-[0.21rem] rounded-md flex justify-center items-center active:scale-95 transition-all">
                        <i
                          className="h-4 sm:h-5"
                          data-feather="shopping-cart"
                        ></i>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="relative flex justify-center w-fit h-fit">
                  <div>
                    <img
                      className="w-48 sm:w-60"
                      src="./assets/home-product1.jpg"
                      alt=""
                    />
                  </div>
                  <div className="absolute bg-[#D00000] text-white rounded-3xl text-xs p-1.5 left-2 top-2">
                    <h1>FLASH SALE!</h1>
                  </div>
                  <div className="absolute w-11/12 bg-white top-[85%] p-1.5 sm:p-2 flex flex-col gap-2">
                    <h1
                      className="font-semibold text-sm sm:text-base"
                      id="product-name"
                    >
                      Hazelnut Latte
                    </h1>
                    <p className="text-[0.6rem] sm:text-[0.7rem] text-[#4F5665]">
                      You can explore the menu that we provide with fun and have
                      their own taste and make your day better.
                    </p>
                    <div className="flex items-center gap-2 sm:gap-4">
                      <div className="flex items-center gap-2 sm:gap-4">
                        <div>
                          <img
                            className="w-3 sm:w-auto"
                            src="/assets/star.png"
                          />
                        </div>
                        <div>
                          <img
                            className="w-3 sm:w-auto"
                            src="/assets/star.png"
                          />
                        </div>
                        <div>
                          <img
                            className="w-3 sm:w-auto"
                            src="/assets/star.png"
                          />
                        </div>
                        <div>
                          <img
                            className="w-3 sm:w-auto"
                            src="/assets/star.png"
                          />
                        </div>
                        className
                        <div>
                          <img
                            className="w-3 sm:w-auto"
                            src="/assets/star.png"
                          />
                        </div>
                        className
                      </div>
                      <p
                        className="text-[#4F5665] text-xs sm:text-sm"
                        id="rating-number"
                      >
                        5.0
                      </p>
                    </div>
                    <div className="flex items-center gap-4">
                      <h1 className="text-[#D00000] text-[0.6rem] sm:text-xs font-semibold line-through">
                        IDR 20.000
                      </h1>
                      <h1
                        className="text-[#FF8906] font-semibold text-xs sm:text-base"
                        id="product-price"
                      >
                        IDR 10.000
                      </h1>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2">
                      <button className=" w-full sm:w-9/12 bg-[#FF8906] rounded-md text-xs sm:text-sm py-1 active:scale-95 transition-all">
                        Buy
                      </button>
                      <button className="w-full sm:flex-1 border border-[#FF8906] text-[#FF8906] p-[0.21rem] rounded-md flex justify-center items-center active:scale-95 transition-all">
                        <i
                          className="h-4 sm:h-5"
                          data-feather="shopping-cart"
                        ></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center gap-2 w-full">
              <button className="indicator-page flex justify-center items-center bg-[#E8E8E8] text-[#A0A3BD] focus:bg-[#FF8906] focus:text-black active:scale-90 transition-all text-xs sm:text-sm rounded-full h-6 w-6 sm:h-8 sm:w-8 focus:outline-none">
                <h3>1</h3>
              </button>

              <button className="indicator-page flex justify-center items-center text-[#A0A3BD] text-xs sm:text-sm bg-[#E8E8E8] focus:bg-[#FF8906] focus:text-black active:scale-90 transition-all rounded-full h-6 w-6 sm:h-8 sm:w-8">
                <h3>2</h3>
              </button>

              <button className="indicator-page flex justify-center items-center text-[#A0A3BD] text-xs sm:text-sm bg-[#E8E8E8] focus:bg-[#FF8906] focus:text-black active:scale-90 transition-all rounded-full h-6 w-6 sm:h-8 sm:w-8">
                <h3>3</h3>
              </button>

              <button className="indicator-page flex justify-center items-center text-[#A0A3BD] text-xs sm:text-sm bg-[#E8E8E8] focus:bg-[#FF8906] focus:text-black active:scale-90 transition-all rounded-full h-6 w-6 sm:h-8 sm:w-8">
                <h3>4</h3>
              </button>

              <button
                id="btn-next"
                className="flex justify-center items-center bg-[#FF8906] rounded-full h-6 w-6 sm:h-8 sm:w-8 active:scale-90 transition-all"
              >
                <i
                  className="text-white h-4 sm:h-auto"
                  data-feather="arrow-right"
                ></i>
              </button>
            </div>
          </main>
        </div>
      </section>

      <Footer />
    </wrap>
  );
};

export default Product;
