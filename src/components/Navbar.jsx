import { Link } from "react-router-dom";
import CupCoffee from "../assets/media/cup-coffee-icon-white.png";
import TextLogo from "../assets/media/text-logo-white.png";
import { FiShoppingCart, FiMenu, FiSearch, FiUser } from "react-icons/fi";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'
import axios from "axios";
import defaultPhoto from '../assets/media/default-photo-profil.jpeg'

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

const Navbar = ({home, token, setToken, picture}) => {

  const [navMobile, setNavMobile] = useState(false)
  const [navSearch, setNavSearch] = useState(false)
  const [homeActive, setHomeActive] = useState(false)
  const [productActive, setProductActive] = useState(false)
  const [dataProfile, setDataProfile] = useState({})
  const navigate = useNavigate()

  const onLogout = () => {
    window.localStorage.removeItem('token')
    setToken(null)
    navigate('/')
  }

  const getProfile =  async () => {
    try {
      const {data} = await axios.get(`http://localhost:8888/profile`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      setDataProfile(data.results)
    } catch (error) {
      console.log(error)
    }
  }



  useEffect(() => {
    getProfile()
    if(document.URL.endsWith('/')){
      setHomeActive(true)
      setProductActive(false)
    }else{
      setHomeActive(false)
      setProductActive(true)                                      // note: product belum active saat di klik
    }
  },[])

  return (
    <nav
      className={`fixed w-full h-fit py-3 sm:py-0 sm:h-14 flex flex-col gap-4 items-center ${
        home ? "bg-[#0B090921]" : "bg-black"
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
            <LinkNav destination="/" value="Home" handlective={homeActive} />
            <LinkNav
              destination="/products"
              value="Product"
              handleActive={productActive}
            />
          </div>
        </div>

        <div className="relative flex items-center gap-5 sm:w-[32rem] justify-end">
          <form
            className={`${
              !navSearch ? "hidden" : "flex"
            } absolute items-center ${
              token ? "left-[5.7rem]" : "left-12"
            } border border-white rounded w-60 py-1 px-1.5 transition-all`}
          >
            <input
              className="bg-transparent text-white placeholder-white text-base w-52 flex px-1 outline-none "
              type="text"
              placeholder="search"
            />
            <button className="hidden" type="submit"></button>
          </form>
          <FiSearch
            onClick={() => setNavSearch(!navSearch)}
            color="white"
            className="text-2xl text-white hidden sm:block z-50 active:scale-90 transition-all cursor-pointer"
          />
          <Link to="/history-order">
            <FiShoppingCart
              color="white"
              className="text-2xl hidden sm:block text-white active:scale-90 transition-all"
            />
          </Link>

          {token && dataProfile && (
            <div className="flex-1 flex justify-end items-center sm:hidden">
              <Link to="/profile">
                <img
                  className="rounded-full w-8 h-8 object-cover"
                  src={dataProfile && dataProfile.picture ? `http://localhost:8888/uploads/users/${dataProfile.picture}` : defaultPhoto}
                ></img>
              </Link>
            </div>
          )}

          <FiMenu
            onClick={() => setNavMobile(!navMobile)}
            className="text-2xl sm:hidden text-white active:scale-90 transition-all"
          />
          {token && dataProfile ? (
            <>
              <Link to="/profile" className="hidden sm:block">
                <img
                  className="rounded-full w-8 h-8 object-cover"
                  src={dataProfile && dataProfile.picture ? `http://localhost:8888/uploads/users/${dataProfile.picture}` : defaultPhoto}
                ></img>
              </Link>

              <button
                onClick={onLogout}
                type="button"
                className="bg-[#ff8906] py-2 px-3 text-sm rounded hidden sm:block active:scale-95 transition-all"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="text-white border border-white py-2 px-3 text-sm rounded hidden sm:block active:scale-95 transition-all"
              >
                Sign In
              </Link>
              <Link
                to="/register"
                className="bg-[#ff8906] py-2 px-3 text-sm rounded hidden sm:block active:scale-95 transition-all"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>

      <div
        id="nav-mobile"
        className={`${
          !navMobile ? "hidden" : "flex"
        } sm:hidden flex-col gap-3 w-5/6 h-fit`}
      >
        <div className="w-full flex justify-between items-center text-white h-6">
          <div className="flex-1 flex items-center gap-4">
            <LinkNav mobile={true} destination="/" value="Home" />
            <LinkNav mobile={true} destination="/products" value="Product" />
          </div>
          <Link to="/history-order">
            <FiShoppingCart
              color="white"
              className="text-2xl text-white active:scale-90 transition-all"
            />
          </Link>
        </div>

        <form className="flex-1 flex items-center gap-2 w-full border border-white rounded py-1 px-2">
          <FiSearch color="white" size={23} />
          <input
            className="bg-transparent text-white text-sm outline-none placeholder-white w-full"
            type="text"
            placeholder="search"
          />
          <button type="submit" className="hidden"></button>
        </form>

        {token ? (
          <button
            type="button"
            onClick={onLogout}
            className="bg-[#ff8906] py-1 px-2 text-sm rounded w-full text-center active:scale-90 transition-all"
          >
            Logout
          </button>
        ) : (
          <div className="flex gap-4">
            <Link
              className="flex-1 text-white border border-white py-1 px-2 text-sm rounded w-full text-center active:scale-90 transition-all"
              to="/login"
            >
              Sign In
            </Link>
            <Link
              className="flex-1 bg-[#ff8906] py-1 px-2 text-sm rounded w-full text-center active:scale-90 transition-all"
              to="/register"
            >
              Sign Up
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
