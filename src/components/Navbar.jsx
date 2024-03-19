import axios from "axios"
import { Link } from "react-router-dom"
import { FiShoppingCart, FiMenu, FiArchive, FiCoffee } from "react-icons/fi"
import { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom'

import { useDispatch, useSelector } from "react-redux"
import { logout as logoutAction } from "../redux/reducers/auth"
import { setProfile as setProfileAction} from '../redux/reducers/profile'
import { resetProfile } from "../redux/reducers/profile"
import { resetProducts } from "../redux/reducers/products"
import { resetTotal } from "../redux/reducers/totalOrder"
import { resetShipping } from "../redux/reducers/deliveryShipping"
import { resetSizes } from "../redux/reducers/sizeProducts"
import { resetVariants } from "../redux/reducers/variantProducts"
import { resetQuantities } from "../redux/reducers/quantityProducts"
import { resetId } from "../redux/reducers/productsId"
import { resetEmail } from "../redux/reducers/emailCustomer"
import { resetFullName } from "../redux/reducers/FullNameCustomer"
import { resetdeliveryAddress } from "../redux/reducers/deliveryAddress"

import defaultPhoto from '../assets/media/default-profile.png'


const LinkNav = ({mobile, path, value}) => {
  return (
      <Link
      to={path}
      className={` text-white ${!mobile ? 'hidden sm:block' : ''} ${document.URL.endsWith(path) && `border-b-2 border-white`}`}
    >
      {value}
    </Link>
  )
}

const Navbar = ({home}) => {

  const [navMobile, setNavMobile] = useState(false)
  const [navSearch, setNavSearch] = useState(false)
  
  const token = useSelector(state => state.auth.token)
  const dataProfile = useSelector(state => state.profile.data)
  const products = useSelector(state => state.products.data)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  
  const getProfile =  async () => {
    if(token){
      try {
        const {data} = await axios.get(`${import.meta.env.VITE_SERVER_URL}/profile`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        })
  
        dispatch(setProfileAction(data.results))
      } catch (error) {
        console.log(error)
      }
    }
  }

  const onLogout = () => {
    dispatch(logoutAction())
    dispatch(resetProfile())
    dispatch(resetProducts())
    dispatch(resetTotal())
    dispatch(resetShipping())
    dispatch(resetSizes())
    dispatch(resetVariants())
    dispatch(resetQuantities())
    dispatch(resetId())
    dispatch(resetEmail())
    dispatch(resetFullName())
    dispatch(resetdeliveryAddress())
    navigate('/')
  }



  useEffect(() => {
    getProfile()
  },[])

  return (
    <nav
      className={`fixed w-full h-fit py-3 sm:py-0 sm:h-14 flex flex-col gap-4 items-center ${
        home ? "bg-[#0B090921]" : "bg-black"
      } z-50`}
    >
      <div className="flex justify-between items-center sm:h-full w-5/6">
        <div className="flex sm:gap-12 ">
          <div className="flex justify-center items-center gap-2 sm:gap-4">
            <div className="text-white text-2xl sm:text-3xl">
              <FiCoffee/>
            </div>
            <div className="font-medium text-white text-sm sm:text-base">
              <p>Coffee Shop</p>
            </div>
          </div>
          <div className="flex gap-12">
            <LinkNav path="/" value="Home" />
            <LinkNav path="/products" value="Product" />
          </div>
        </div>

        <div className="relative flex items-center gap-2 sm:gap-5 sm:w-[32rem] justify-end">
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
          {/* <FiSearch
            onClick={() => setNavSearch(!navSearch)}
            color="white"
            className="text-2xl text-white hidden sm:block z-50 active:scale-90 transition-all cursor-pointer"
          /> */}
          <Link to="/history-order">
            <FiArchive
              color="white"
              className="text-xl hidden sm:block text-white active:scale-90 transition-all"
            />
          </Link>

          <Link to="/checkout" className="flex relative">
            <FiShoppingCart
              color="white"
              className="text-2xl hidden sm:block text-white active:scale-90 transition-all"
            />
            {products.length ? (
              <div className="absolute hidden sm:flex w-4 h-4 bg-white rounded z-50 -right-2 -top-2 justify-center items-center text-xs font-bold">
                {products.length}
              </div>
            ) : (
              ""
            )}
          </Link>

          {token && dataProfile && (
            <div className="flex-1 flex justify-end items-center sm:hidden ">
              <Link to="/profile">
                <img
                  className="rounded-full w-8 h-8 object-cover"
                  src={
                    dataProfile && dataProfile.picture
                      ? dataProfile.picture
                      : defaultPhoto
                  }
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
                  src={
                    dataProfile && dataProfile.picture
                      ? dataProfile.picture
                      : defaultPhoto
                  }
                ></img>
              </Link>

              <button
                onClick={onLogout}
                type="button"
                className={`${
                  document.URL.endsWith("/")
                    ? "bg-gradient-to-br from-[#7E6363] to-black"
                    : "border border-white"
                } text-white py-2 px-3 text-sm rounded hidden sm:block active:scale-95 transition-all`}
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
                className="bg-gradient-to-br from-[#7E6363] to-black py-2 px-3 text-white text-sm rounded hidden sm:block active:scale-95 transition-all"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>

      <div
        className={`${
          !navMobile ? "hidden" : "flex"
        } sm:hidden flex-col gap-3 w-5/6 h-fit`}
      >
        <div className="w-full flex justify-between items-center text-white h-6">
          <div className="flex-1 flex items-center gap-4">
            <LinkNav mobile={true} path="/" value="Home" />
            <LinkNav mobile={true} path="/products" value="Product" />
          </div>

          <div className="flex justify-center items-center gap-4">
            <Link to="/history-order">
              <FiArchive
                color="white"
                className="text-xl  sm:hidden  text-white active:scale-90 transition-all"
              />
            </Link>

            <Link to="/checkout" className="relative">
              <FiShoppingCart
                color="white"
                className="text-2xl text-white active:scale-90 transition-all"
              />
              {products.length ? (
                <div className="absolute sm:hidden w-4 h-4 bg-white rounded z-50 -right-2 -top-2 flex justify-center items-center text-xs font-bold text-black">
                  {products.length}
                </div>
              ) : (
                ""
              )}
            </Link>
          </div>
        </div>

        {/* <form className="flex-1 flex items-center gap-2 w-full border border-white rounded py-1 px-2">
          <FiSearch color="white" size={23} />
          <input
            className="bg-transparent text-white text-sm outline-none placeholder-white w-full"
            type="text"
            placeholder="search"
          />
          <button type="submit" className="hidden"></button>
        </form> */}

        {token ? (
          <button
            type="button"
            onClick={onLogout}
            className={`text-white ${
              document.URL.endsWith("/")
                ? "bg-gradient-to-br from-[#7E6363] to-black"
                : "border border-white"
            }  py-1 px-2 text-sm rounded w-full text-center active:scale-90 transition-all`}
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
              className="flex-1 bg-gradient-to-br from-[#7E6363] to-black text-white py-1 px-2 text-sm rounded w-full text-center active:scale-90 transition-all"
              to="/register"
            >
              Sign Up
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
