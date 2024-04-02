import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiCheckCircle } from "react-icons/fi";
import { useSelector } from "react-redux";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Map from "../assets/media/home-map.png";
import MapMobile from "../assets/media/map-mobile.png";
import Testimonial from "../components/Testimonial";
import CardProduct from "../components/CardProduct";
import LoadingTestimonial from "../components/LoadingTestimonial"
import LoadingCardProduct from "../components/LoadingCardProduct";

const Data = ({ value, text }) => {
  return (
    <div>
      <div
        className={`text-white text-2xl sm:text-4xl font-semibold flex justify-between ${
          text == "Staff" || text == "Stores"
            ? "w-12 sm:w-[4.5rem]"
            : "w-16 sm:w-24"
        }`}
      >
        <h1>{value}</h1>
        <p>+</p>
      </div>
      <p className="text-white text-xs sm:text-sm">{text}</p>
    </div>
  );
};

const ListProvide = ({ text }) => {
  return (
    <div className="flex gap-4">
      <div className="bg-gradient-to-br from-[#7E6363] to-black rounded-full text-white w-fit h-fit">
        <FiCheckCircle className="sm:h-5 w-fit" />
      </div>
      <p className="text-xs sm:text-sm text-[#4F5665]">{text}</p>
    </div>
  );
};

// recommendation products start
export const recommendProducts = async (setData) => {
  try {
    const { data } = await axios.get(
      `${import.meta.env.VITE_SERVER_URL}/products`,
      {
        params: {
          limit: setData.limit,
          isRecommended: true,
        },
      }
    );

    setData.setDataProducts(data.results);
    setData.setCurrentPage && setData.setCurrentPage(data.pageInfo.currentPage);
    setData.setTotalPage && setData.setTotalPage(data.pageInfo.totalPage);
    setData.setNextPage && setData.setNextPage(data.pageInfo.nextPage);
  } catch (error) {
    console.log(error);
  }
};
// recommendation products end

const Home = () => {
  const token = useSelector((state) => state.auth.token);

  // const [chatBox, setChatBox] = useState(false)

  // animasi landing page start
  const [display, setDisplay] = useState(false);
  // animasi landing page end

  // animasi provide page start
  const [listProvide, setListProvide] = useState([
    {
      text: "High quality beans",
    },
    {
      text: "Healthy meals, you can request the ingredients",
    },
    {
      text: "Free member card with a minimum purchase of IDR 200.000.",
    },
    {
      text: "Chat with our staff to get better experience for ordering",
    },
  ]);

  // const [show, setShow] = useState(false)
  // const provideSection = useRef()
  // window.addEventListener('scroll', () => {                               // note: belum menggunakan useEffect dan belum paham useRef()
  //   const top = window.scrollY
  //   const offsetTop = provideSection.current.offsetTop - 500
  //   const offsetHeight = provideSection.current.offsetHeight

  //   if(top >= offsetTop && top < offsetTop + offsetHeight){
  //     setShow(true)
  //   }
  // })
  // animasi provide page end

  const [dataProducts, setDataProducts] = useState(false);

  // testimonial start
  const [dataTesti, setDataTesti] = useState(false);
  const [prevPage, setPrevPage] = useState();
  const [nextPage, setNextPage] = useState();
  const [prevDisable, setPrevDisable] = useState(false);
  const [nextDisable, setNextDisable] = useState(false);
  const [totalPage, setTotalPage] = useState();
  const [currentPage, setCurrentPage] = useState(1);


  
  const testi = async () => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}/testimonial?limit=1`
      );

      setDataTesti(data.results);
      setPrevPage(data.pageInfo.prevPage);
      setNextPage(data.pageInfo.nextPage);
      setTotalPage(data.pageInfo.totalPage);
      setCurrentPage(data.pageInfo.currentPage);
      if (data.pageInfo.prevPage == null) {
        setPrevDisable(true);
      } else if (data.pageInfo.nextPage == null) {
        setNextDisable(true);
      } else {
        setPrevDisable(false);
        setNextDisable(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const next = async () => {
    setDataTesti(false)

    try {
      const { data } = await axios.get(
        `${
          import.meta.env.VITE_SERVER_URL
        }/testimonial?limit=1&page=${nextPage}`
      );

      setDataTesti(data.results);
      setPrevPage(data.pageInfo.prevPage);
      setNextPage(data.pageInfo.nextPage);
      setCurrentPage(data.pageInfo.currentPage);
      if (data.pageInfo.prevPage == null) {
        setPrevDisable(true);
      } else if (data.pageInfo.nextPage == null) {
        setNextDisable(true);
      } else {
        setPrevDisable(false);
        setNextDisable(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const prev = async () => {
    setDataTesti(false)

    try {
      const { data } = await axios.get(
        `${
          import.meta.env.VITE_SERVER_URL
        }/testimonial?limit=1&page=${prevPage}`
      );

      setDataTesti(data.results);
      setPrevPage(data.pageInfo.prevPage);
      setNextPage(data.pageInfo.nextPage);
      setCurrentPage(data.pageInfo.currentPage);
      if (data.pageInfo.prevPage == null) {
        setPrevDisable(true);
      } else if (data.pageInfo.nextPage == null) {
        setNextDisable(true);
      } else {
        setPrevDisable(false);
        setNextDisable(false);
      }
    } catch (error) {
      console.log(error);
    }
  };
  // testimonial end

  const CountRecommendProducts = [1, 2, 3, 4]

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });

    setDisplay(true);

    recommendProducts({
      setDataProducts,
      limit: 4,
    });

    testi();
  }, []);

  return (
    <div className="font relative flex flex-col items-center">
      <Navbar home={true} />

      {/* <button
        onClick={() => setChatBox(!chatBox)}
        className="fixed flex justify-center items-center text-white right-6 bottom-6 sm:right-12 sm:bottom-12 bg-gradient-to-br from-[#7E6363] to-black rounded-full p-1 w-10 h-10 sm:p-2 sm:w-12 sm:h-12 z-50 active:scale-90 transition"
      >
        <FiMessageCircle size={25} />
      </button> */}

      {/* <div
        className={`${
          !chatBox ? "hidden" : "flex"
        } fixed w-60 h-80 sm:w-72 sm:h-96 rounded-xl sm:rounded-2xl flex-col bg-white top-24 sm:right-24 z-50`}
      >
        <div className="flex border-t-[0.8rem] sm:border-t-[1rem] border-[#7E6363] rounded-tr-xl rounded-tl-xl sm:rounded-tr-2xl sm:rounded-tl-2xl pl-4 gap-4 py-2">
          <div>
            <img
              className=" w-10 h-10 sm:w-14 sm:h-14 rounded-full"
              src="https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=800"
            />
          </div>
          <div className="admin-support">
            <h1 className="font-bold text-sm sm:text-base">Maria Angela</h1>
            <h1 className="text-[#7E6363] text-sm sm:text-base">
              Admin Support
            </h1>
          </div>
        </div>

        <hr className="border border-[#E8E8E8]" />

        <div className="p-2 flex flex-col gap-2 h-48 sm:h-56">
          <div className="flex items-center gap-2 sm:gap-4">
            <div>
              <img
                className="w-6 h-6 sm:w-8 sm:h-8 rounded-full"
                src="https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=800"
              />
            </div>
            <p className="text-[0.6rem] sm:text-xs text-[#4F5665] bg-[#E8E8E84D] rounded-md p-1 sm:p-2">
              Halo, Ada yang bisa kami bantu?
            </p>
          </div>

          <div className="flex items-center justify-end gap-2 sm:gap-4">
            <p className="text-[0.6rem] sm:text-xs text-[#4F5665]  bg-[#E8E8E84D] rounded-md p-1 sm:p-2">
              Saya kesulitan mencari kopi
            </p>
            <div>
              <img
                className="w-6 h-6 sm:w-8 sm:h-8 rounded-full"
                src="https://images.pexels.com/photos/573299/pexels-photo-573299.jpeg?auto=compress&cs=tinysrgb&w=800"
              />
            </div>
          </div>
        </div>

        <div className="flex-1 flex items-center justify-center px-2 gap-2">
          <input
            className="w-4/5 rounded-md text-[0.6rem] sm:text-xs p-1.5 sm:p-2 border border-[#DEDEDE] outline-none"
            type="text"
            placeholder="Masukan Pesan Anda"
          />
          <div className="flex-1 text-white flex justify-center items-center bg-gradient-to-br from-[#7E6363] to-black rounded-md p-1 sm:p-1.5 active:scale-95 transition-all">
            <FiSend size={20} />
          </div>
        </div>
      </div> */}

      <section className="flex flex-col-reverse sm:flex-row h-[64rem] sm:h-screen w-full">
        <div className="flex h-fit py-16 sm:py-0 sm:h-screen sm:flex-1 justify-center items-center bg-gradient-to-b from-[#3E3232] to-black">
          <div className="flex flex-col gap-6 max-w-md h-fit px-4 sm:px-0">
            <h1
              className={`text-2xl sm:text-5xl text-white font-medium transition-all duration-1000 
            ${display ? "ml-0 opacity-100 " : "-ml-12 opacity-0 "}`}
            >
              Start Your Day with <br /> Coffee and Good <br /> Meals
            </h1>
            <p
              id="description"
              className={`text-white text-xs sm:text-sm w-11/12 transition-all duration-1000 delay-500 ${
                display ? "ml-0 opacity-100 " : "-ml-12 opacity-0 "
              }`}
            >
              We provide high quality beans, good taste, and healthy meals made
              by love just for you. Start your day with us for a bigger smile!
            </p>

            <Link
              to={token ? "/products" : "/login"}
              className={`relative text-white bg-gradient-to-br from-[#7E6363] to-black py-2 px-3 rounded-md text-xs sm:text-sm font-semibold active:scale-95 transition-all overflow-hidden max-w-fit duration-1000 delay-1000 ${
                display ? "opacity-100 " : "opacity-0 "
              }`}
            >
              <p>Get Started</p>
            </Link>
            <div className="flex divide-x-2">
              <div className="flex-1 flex">
                <div className="flex flex-col sm:gap-2  w-5/6">
                  <Data value="90" text="Staff" />
                </div>
              </div>

              <div className="flex-1 flex justify-center">
                <div className="flex flex-col items-center sm:gap-2 w-5/6">
                  <Data value="30" text="Stores" />
                </div>
              </div>

              <div className="flex-1 flex justify-end">
                <div className="flex flex-col items-end sm:gap-2 w-5/6">
                  <Data value="800" text="Customer" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 bg-[url('../assets/media/bg-home.jpg')] bg-center bg-cover bg-no-repeat"></div>
      </section>

      <section className="flex flex-col-reverse sm:flex-row w-full h-[64rem] sm:h-screen ">
        <div className="h-fit py-16 sm:py-0 px-4 sm:px-0 sm:h-screen sm:flex-1 flex items-center justify-center sm:justify-normal">
          <div className="flex flex-col sm:ml-28 gap-4 h-fit max-w-lg ">
            <div className={`flex items-center gap-4`}>
              <hr className="border-[#7E6363] border-2 sm:border-4 h-14" />
              <h1 className="text-2xl sm:text-5xl font-medium">
                We Provide{" "}
                <span className="text-[#7E6363]">
                  Good <br /> Coffee
                </span>{" "}
                and{" "}
                <span className="text-[#7E6363]">
                  Healthy <br /> Meals
                </span>
              </h1>
            </div>
            <p className={`text-xs sm:text-sm text-[#4F5665]`}>
              You can explore the menu that we provide with fun and have their
              own <br /> taste and make your day better.
            </p>
            <div id="list-provide" className={`flex flex-col gap-4`}>
              {listProvide.map((item, index) => (
                <ListProvide key={index} text={item.text} />
              ))}
            </div>
          </div>
        </div>

        <div className="bg-[url('../assets/media/staff-image.jpg')] flex-1 bg-center bg-cover"></div>
      </section>

      <section className="h-fit sm:h-screen flex flex-col items-center sm:pt-10 w-full sm:w-5/6 gap-6 sm:gap-12">
        <div className="flex flex-col items-center gap-2 sm:gap-4">
          <h1
            className={`relative text-2xl text-center sm:text-5xl font-medium sm:mb-2 px-4`}
          >
            Here is People's <span className="text-[#7E6363]">Favorite</span>
          </h1>
          <hr className="border-[#7E6363] border-2 sm:border-4 w-16" />
          <p className="text-[#4f5665] text-xs sm:text-base text-center px-4">
            Let's choose and have a bit taste of poeple's favorite. It might be
            yours too!
          </p>
        </div>

        <div className="gap-y-44 gap-x-6 flex flex-wrap justify-center mb-44 sm:gap-6 w-fit mx-6 sm:mx-0">
          {dataProducts ?
            dataProducts.map((product) => (
              <CardProduct
                id={product.id}
                key={product.id}
                productName={product.name}
                description={product.description}
                rating={product.rating}
                price={product.basePrice}
                image={product.image}
                tag={product.tag}
              />
            )) : CountRecommendProducts.map((_, index) => {
              return (
                <LoadingCardProduct key={index}/>
              )
            })}
        </div>
      </section>

      <section className="h-fit py-6 mt-10 sm:h-screen flex flex-col items-center justify-center w-full bg-[#E8E8E84D] gap-12">
        <div className="flex flex-col items-center gap-2 sm:gap-4">
          <h1 className="text-2xl sm:text-5xl font-medium text-center px-4 sm:px-0">
            <span className="text-[#7E6363]">Visit Our Store</span> in the Spot
            on the Map Below
          </h1>
          <hr className="border-[#7E6363] border-2 sm:border-4 w-16" />
          <p className="text-[#4f5665] text-center text-xs sm:text-base max-w-lg px-4 sm:px-0">
            You can explore the menu that we provide with fun and have their own
            taste and make your day better.
          </p>
        </div>

        <div className="flex justify-center">
          <img className="w-3/5 hidden sm:block" src={Map} />
          <img className="sm:hidden" src={MapMobile} />
        </div>
      </section>

      <section className="flex justify-center items-center bg-gradient-to-b from-[#3E3232] to-black w-full sm:h-96 py-6 sm:py-12">
        {dataTesti ? (
          <Testimonial
            fullName={dataTesti[0].fullName}
            role={dataTesti[0].role}
            feedback={dataTesti[0].feedback}
            rate={dataTesti[0].rate}
            image={dataTesti[0].image}
            handleNextPage={next}
            handlePrevPage={prev}
            nextDisable={nextDisable}
            prevDisable={prevDisable}
            totalPage={totalPage}
            currentPage={currentPage}
          />
        ) : <LoadingTestimonial/>}
      </section>

      <Footer />
    </div>
  );
};

export default Home;
