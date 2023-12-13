import { Link } from "react-router-dom"

const Navbar = ({bg}) => {
    return (
        <nav class={`fixed w-full h-fit py-3 sm:py-0 sm:h-14 flex flex-col gap-4 items-center bg-[black] z-50`}>
        <div class="flex justify-between items-center sm:h-full w-5/6">
          <div class="flex gap-12">
            <div class="flex gap-4">
              <div>
                <img src="./assets/cup-coffee-icon-white.png" />
              </div>
              <div>
                <img src="./assets/text-logo-white.png" />
              </div>
            </div>
            <div class="flex gap-12">
              <a href="index.html" class="home focus:outline-none focus:border-b-2 focus:border-[#ff8906] text-white hidden sm:block">Home</a>
              <a href="product.html" class="product focus:outline-none focus:border-b-2 focus:border-[#ff8906] text-white hidden sm:block">Product</a>
            </div>
          </div>
  
          <div class="relative flex items-center gap-5 sm:w-[32rem] justify-end">
            <form id="search-input" class="hidden absolute flex items-center left-12 border border-white rounded w-60 py-1 px-1.5 transition-all">
              <input class="bg-transparent text-white placeholder-white text-base w-52 flex px-1 outline-none " type="text" placeholder="search" />
              <button class="hidden" type="submit"></button>
            </form>
            <i id="search-icon" class="text-white hidden sm:block z-50 active:scale-90 transition-all cursor-pointer" data-feather="search"></i>
            <a href="checkout.html">
              <i href="checkout.html" class="text-white active:scale-90 transition-all" data-feather="shopping-cart"></i>
            </a>
            <i id="menu" class="sm:hidden text-white active:scale-90 transition-all" data-feather="menu"></i>
            <Link to='/login'
              class="text-white border border-white py-2 px-3 text-sm rounded hidden sm:block active:scale-95 transition-all"
              id="sign-in"
              >Sign In
            </Link>
            <Link  to='/register'
              class="bg-[#ff8906] py-2 px-3 text-sm rounded hidden sm:block active:scale-95 transition-all"
              id="sign-up"
              >Sign Up
            </Link>
        </div>
        </div>
  

        <div id="more-nav-menu" class="hidden sm:hidden flex flex-col gap-3 w-5/6 h-fit">
          <div class="w-full flex justify-between text-white h-6">
            <div class="flex-1 flex">
              <a class="focus:border-b-2 focus:border-[#ff8906]" href="index.html">Home</a>
            </div>
            <div class="flex-1 flex justify-end">
              <a class="focus:border-b-2 focus:border-[#ff8906]" href="product.html">Product</a>
            </div>
          </div>
  
          <div class="flex-1 flex items-center gap-2 w-full border border-white rounded py-1 px-2">
            <i class="text-white h-4" data-feather="search"></i>
            <input class="bg-transparent text-white text-sm outline-none placeholder-white w-full" type="text" placeholder="search" />
          </div>
  
          <div class="flex gap-4">
            <a
            class="flex-1 text-white border border-white py-1 px-2 text-sm rounded w-full text-center"
            href="./login.html"
            id="sign-in"
            >Sign In</a
          >
          <a
            class="flex-1 bg-[#ff8906] py-1 px-2 text-sm rounded w-full text-center"
            href="./register.html"
            id="sign-up"
            >Sign Up</a
          >
          </div>
        </div>
      </nav>
    )
}

export default Navbar