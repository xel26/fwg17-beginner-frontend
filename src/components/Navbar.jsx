import { Link } from "react-router-dom";
import CupCoffee from "../assets/media/cup-coffee-icon-white.png";
import TextLogo from "../assets/media/text-logo-white.png";
import { FiShoppingCart, FiMenu, FiSearch, FiUser } from "react-icons/fi";
import { useEffect, useState } from "react";

const LinkNav = ({mobile, destination, value, handlective}) => {
  return (
      <Link
      to={destination}
      className={` text-white ${!mobile ? 'hidden sm:block' : ''} ${handlective ? 'border-b-2 border-[#ff8906]' : ''}`}
    >
      {value}
    </Link>
  )
}

const Navbar = ({ unAuthenticated }) => {

  const [navMobile, setNavMobile] = useState(false)
  const [navSearch, setNavSearch] = useState(false)
  const [homeActive, setHomeActive] = useState(false)
  const [productActive, setProductActive] = useState(false)



  useEffect(() => {
    if(document.URL.endsWith('home')){
      setHomeActive(true)
      setProductActive(false)
    }else{
      setHomeActive(false)
      setProductActive(true)                                      // note: product belum active saat di klik
    }
  })

  return (
    <nav
      className={`fixed w-full h-fit py-3 sm:py-0 sm:h-14 flex flex-col gap-4 items-center ${
        unAuthenticated ? "bg-[#0B090921]" : "bg-black"
      } z-50`}
    >
      <div className="flex justify-between items-center sm:h-full w-5/6">
        <div className="flex gap-12">
          <div className="flex gap-4">
            <div>
              <img src={CupCoffee} />
            </div>
            <div>
              <img src={TextLogo} />
            </div>
          </div>
          <div className="flex gap-12">
            <LinkNav destination="/home" value="Home" handlective={homeActive}/>
            <LinkNav destination="/products" value="Product" handleActive={productActive}/>
          </div>
        </div>

        <div className="relative flex items-center gap-5 sm:w-[32rem] justify-end">
          <form
            className={`${!navSearch ? 'hidden' : 'flex'} absolute items-center ${unAuthenticated ? 'left-12' : 'left-[11.5rem]'} border border-white rounded w-60 py-1 px-1.5 transition-all`}
          >
            <input
              className="bg-transparent text-white placeholder-white text-base w-52 flex px-1 outline-none "
              type="text"
              placeholder="search"
            />
            <button className="hidden" type="submit"></button>
          </form>
          <FiSearch onClick={() => setNavSearch(!navSearch)}
            color="white"
            className="text-2xl text-white hidden sm:block z-50 active:scale-90 transition-all cursor-pointer"
          />
          <Link to="/checkout">
            <FiShoppingCart
              color="white"
              className="text-2xl text-white active:scale-90 transition-all"
            />
          </Link>

          <FiMenu onClick={() => setNavMobile(!navMobile)}
            className="text-2xl sm:hidden text-white active:scale-90 transition-all"
          />
          {unAuthenticated ? (
            <>
              <Link
                to="/login"
                className="text-white border border-white py-2 px-3 text-sm rounded hidden sm:block active:scale-95 transition-all"
                id="sign-in"
              >
                Sign In
              </Link>
              <Link
                to="/register"
                className="bg-[#ff8906] py-2 px-3 text-sm rounded hidden sm:block active:scale-95 transition-all"
                id="sign-up"
              >
                Sign Up
              </Link>
            </>
          ) : (
            <Link to="/profile" className="hidden sm:block">
            <FiUser
              color="white"
              className="text-3xl rounded  active:scale-95 transition-all"
            />
          </Link>
          )
        }
        </div>
      </div>

      <div
        id="nav-mobile"
        className={`${!navMobile ? 'hidden' : 'flex'} sm:hidden flex-col gap-3 w-5/6 h-fit`}
      >
        <div className="w-full flex justify-between items-center text-white h-6">
          {unAuthenticated ? (
            <>
              <div className="flex-1">
                <LinkNav mobile={true} destination="/home" value="Home" />
              </div>
              <div className="flex-1 flex justify-end">
                <LinkNav mobile={true} destination="/products" value="Product"/>
              </div>
            </>
          ) : (
            <>
            <div className="flex-1 flex items-center gap-4">
            <LinkNav mobile={true} destination="/home" value="Home" />
            <LinkNav mobile={true} destination="/products" value="Product" />
            </div>
            <div className="flex-1 flex justify-end items-center">
            <Link to="/profile">
              <FiUser
                size={30}
                color="white"
                className="text-sm rounded  active:scale-95 transition-all"
              />
            </Link>
            </div>
            </>
          )}
        </div>

        <form className="flex-1 flex items-center gap-2 w-full border border-white rounded py-1 px-2">
          <FiSearch color="white" size={25} />
          <input
            className="bg-transparent text-white text-sm outline-none placeholder-white w-full"
            type="text"
            placeholder="search"
          />
          <button type="submit" className="hidden"></button>
        </form>

        {unAuthenticated ? (
          <div className="flex gap-4">
            <Link
              className="flex-1 text-white border border-white py-1 px-2 text-sm rounded w-full text-center active:scale-90 transition-all"
              to="/login"
              id="sign-in"
            >
              Sign In
            </Link>
            <Link
              className="flex-1 bg-[#ff8906] py-1 px-2 text-sm rounded w-full text-center active:scale-90 transition-all"
              to="/register"
              id="sign-up"
            >
              Sign Up
            </Link>
          </div>
        ) : (
          ""
        )}
      </div>
    </nav>
  );
};

export default Navbar;
