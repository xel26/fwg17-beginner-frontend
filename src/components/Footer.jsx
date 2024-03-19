import { FaFacebookF, FaTwitter, FaTelegram, FaTelegramPlane } from "react-icons/fa"
import { FiCoffee} from "react-icons/fi"
import { Link } from "react-router-dom"

const FooterLink = ({destination1, text1, destination2, text2, destination3, text3, destination4, text4, destination5, text5}) => {
  return (
    <div className="flex flex-col gap-4 text-sm sm:text-base">
      <p className="font-semibold">Product</p>
      <div className="flex flex-col gap-2 text-[#4F5665]">
        <Link to={destination1} className="hover:text-[#3E3232] transition-colors duration-300">{text1}</Link>
        <Link to={destination2} className="hover:text-[#3E3232] transition-colors duration-300">{text2}</Link>
        <Link to={destination3} className="hover:text-[#3E3232] transition-colors duration-300">{text3}</Link>
        <Link to={destination4} className="hover:text-[#3E3232] transition-colors duration-300">{text4}</Link>
        <Link to={destination5} className="hover:text-[#3E3232] transition-colors duration-300">{text5}</Link>
      </div>
    </div>
  )
}

const Footer = () => {

    return (
      <footer className="flex justify-center items-center w-full h-fit py-6 sm:h-fit sm:py-12 bg-[#F8F8F8]">
        <div className="flex flex-col w-5/6 gap-6 sm:gap-0">
          <div className="flex flex-col sm:flex-row gap-8 sm:gap-20">
            <div className={`flex flex-col gap-4 w-full sm:w-[21rem]`}>
              <div className="flex items-center gap-2">
                <div className="text-[#3E3232] text-2xl sm:text-3xl">
                  <FiCoffee />
                </div>
                <div className="font-bold text-[#3E3232] text-sm sm:text-base">
                  <p>Coffee Shop</p>
                </div>
              </div>
              <p className="text-[#4F5665] text-sm sm:text-base">
                Coffee Shop is a store that sells some good meals, and
                especially coffee. We provide high quality beans
              </p>
            </div>

            <div className="flex gap-5 sm:gap-20">
              <FooterLink
                destination1="#"
                text1="Our Product"
                destination2="#"
                text2="Pricing"
                destination3="#"
                text3="Location"
                destination4="#"
                text4="Countries"
                destination5="#"
                text5="Blog"
              />

              <FooterLink
                destination1="#"
                text1="Partner"
                destination2="#"
                text2="FAQ"
                destination3="#"
                text3="About Us"
                destination4="#"
                text4="Privacy Policy"
                destination5="#"
                text5="Terms of Service"
              />
            </div>

            <div className="flex flex-col gap-4 text-sm sm:text-base">
              <p className="font-semibold">Social Media</p>
              <div className="flex gap-4">
                <Link
                  to="#"
                  className="active:scale-90 transition-all duration-300 bg-gradient-to-br from-[#7E6363] to-black rounded-3xl text-lg sm:text-xl p-1.5 h-fit sm:p-2 text-white"
                >
                  {" "}
                  <FaFacebookF/>{" "}
                </Link>
                <Link
                  to="#"
                  className="active:scale-90 transition-all duration-300 bg-gradient-to-br from-[#7E6363] to-black rounded-3xl text-lg sm:text-xl p-1.5 h-fit sm:p-2 text-white"
                >
                  {" "}
                  <FaTwitter />{" "}
                </Link>
                <Link
                  to="#"
                  className="active:scale-90 transition-all duration-300 bg-gradient-to-br from-[#7E6363] to-black rounded-3xl text-lg sm:text-xl p-1.5 h-fit sm:p-2 text-white"
                >
                  {" "}
                  <FaTelegramPlane/>{" "}
                </Link>
              </div>
            </div>
          </div>

          <p className="text-[#AFB5C0] text-xs sm:text-sm" id="copyright">
            &copy;2020CoffeeStore
          </p>
        </div>
      </footer>
    )
}

export default Footer