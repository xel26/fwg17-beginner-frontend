const Footer = () => {
    return (
    <footer className="flex justify-center items-center w-full h-fit py-6 sm:h-fit sm:py-12 bg-[#F8F8F8]">
        <div className="flex flex-col w-5/6 gap-6 sm:gap-0">
  
          <div className="flex flex-col sm:flex-row gap-8 sm:gap-20">
            <div className="flex flex-col gap-4 w-full sm:w-[21rem]">
              <div className="flex gap-4">
                <div>
                  <img src="./assets/cup-coffe-icon.png" />
                </div>
                <div>
                  <img src="./assets/text-logo.png" />
                </div>
              </div>
              <p className="text-[#4F5665] text-sm sm:text-base">
                Coffee Shop is a store that sells some good meals, and especially
                coffee. We provide high quality beans
              </p>
            </div>
  
            <div className="flex gap-5 sm:gap-20">
              <div className="flex flex-col gap-4 text-sm sm:text-base">
                <p className="font-semibold">Product</p>
                <div className="flex flex-col gap-2">
                  <a className="text-[#4F5665]" href="#">Our Product</a>
                  <a className="text-[#4F5665]" href="#">Pricing</a>
                  <a className="text-[#4F5665]" href="#">Location</a>
                  <a className="text-[#4F5665]" href="#">Countries</a>
                  <a className="text-[#4F5665]" href="#">Blog</a>
                </div>
              </div>
  
              <div className="flex flex-col gap-4 text-sm sm:text-base">
                <p className="font-semibold">Engage</p>
                <div className="flex flex-col gap-2">
                  <a className="text-[#4F5665]" href="#">Partner</a>
                  <a className="text-[#4F5665]" href="#">FAQ</a>
                  <a className="text-[#4F5665]" href="#">About Us</a>
                  <a className="text-[#4F5665]" href="#">Privacy Policy</a>
                  <a className="text-[#4F5665]" href="#">Terms of Service</a>
                </div>
              </div>
            </div>
  
            <div className="flex flex-col gap-4 text-sm sm:text-base">
              <p className="font-semibold">Social Media</p>
              <div className="flex gap-4">
                <a href="#"><img src="/assets/facebook-logo-circle.png" /></a>
                <a href="#"><img src="/assets/twitter-logo-circle.png" /></a>
                <a href="#"><img src="/assets/instagram-logo-circle.png" /></a>
              </div>
            </div>
          </div>
  
          <p className="text-[#AFB5C0] text-xs sm:text-sm" id="copyright">&copy;2020CoffeeStore</p>
  
        </div>
      </footer>
    )
}

export default Footer