import CupCoffee from "../assets/media/cup-coffe-icon.png"
import TextLogo from "../assets/media/text-logo.png"
import Facebook from "../assets/media/facebook-logo-circle.png"
import Twitter from "../assets/media/twitter-logo-circle.png" 
import Instagram from "../assets/media/instagram-logo-circle.png"
import { Link } from "react-router-dom";
import FooterLink from "./FooterLink"

const Footer = () => {
    return (
    <footer className="flex justify-center items-center w-full h-fit py-6 sm:h-fit sm:py-12 bg-[#F8F8F8]">
        <div className="flex flex-col w-5/6 gap-6 sm:gap-0">
  
          <div className="flex flex-col sm:flex-row gap-8 sm:gap-20">
            <div className="flex flex-col gap-4 w-full sm:w-[21rem]">
              <div className="flex gap-4">
                <div>
                  <img src={CupCoffee} />
                </div>
                <div>
                  <img src={TextLogo} />
                </div>
              </div>
              <p className="text-[#4F5665] text-sm sm:text-base">
                Coffee Shop is a store that sells some good meals, and especially
                coffee. We provide high quality beans
              </p>
            </div>
  
            <div className="flex gap-5 sm:gap-20">
              <FooterLink destination1="#" text1="Our Product" 
              destination2="#" text2="Pricing"
              destination3="#" text3="Location"
              destination4="#" text4="Countries"
              destination5="#" text5="Blog"/>

              <FooterLink destination1="#" text1="Partner" 
              destination2="#" text2="FAQ"
              destination3="#" text3="About Us"
              destination4="#" text4="Privacy Policy"
              destination5="#" text5="Terms of Service"/>
            </div>
  
            <div className="flex flex-col gap-4 text-sm sm:text-base">
              <p className="font-semibold">Social Media</p>
              <div className="flex gap-4">
                <Link to="#"><img src={Facebook} /></Link>
                <Link to="#"><img src={Twitter} /></Link>
                <Link to="#"><img src={Instagram} /></Link>
              </div>
            </div>
          </div>
  
          <p className="text-[#AFB5C0] text-xs sm:text-sm" id="copyright">&copy;2020CoffeeStore</p>
  
        </div>
      </footer>
    )
}

export default Footer