import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ButtonSwipe from "../components/ButtonSwipe";
import PageIndicator from "../components/PageIndicator";
import Kupon from "../components/Kupon";
import PageNavigation from "../components/PageNavigation";
import CardProduct from "../components/CardProduct";
import Filter from "../components/Filter";
import { FiList, FiSearch } from "react-icons/fi";

const Product = () => {
  const products = [1, 2, 3, 4, 5, 6];
  const GreenKupon = [1, 2, 3, 4];
  return (
    <wrap className="flex flex-col items-center gap-6 sm:gap-12">
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
            id="btn-filter"
            className=" bg-[#FF8906] rounded-md p-2 w-fit flex items-center  justify-center active:scale-95 transition-all"
          >
            <FiList size={20} />
          </button>
        </div>
      </section>

      <section
        id="filter-option"
        className="hidden sm:hidden absolute h-fit w-5/6 z-40 top-32 flex justify-end"
      >
        <Filter mobile />
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
          {GreenKupon.map((index) => (
            <Kupon
              key={index}
              title="HAPPY MOTHER'S DAY!"
              description={`Get one of our favorite menu \n for free!`}
              klaim
              bg="#88B788"
            />
          ))}
          <Kupon
            title={`Get a cup of coffee for free \n on sunday morning`}
            description="Only at 7 to 9 AM"
            bg="#F5C361"
          />
        </div>

        <div className="w-5/6">
          <PageIndicator />
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
              <div className=" flex flex-wrap justify-center gap-x-4 sm:gap-x-20 gap-y-44 mb-48 max-w-xl">
                {products.map((index) => (
                  <CardProduct
                    key={index}
                    productName=" Hazelnut Latte"
                    description="You can explore the menu that we provide with fun and have their own taste and make your day better."
                    rating="5"
                    basePrice="20"
                    discountPrice="10"
                  />
                ))}
              </div>
            </div>

            <PageNavigation />
          </main>
        </div>
      </section>

      <Footer />
    </wrap>
  );
};

export default Product;
