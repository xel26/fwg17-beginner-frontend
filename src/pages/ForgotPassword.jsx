const ForgotPassword = () => {
    return (
        <wrap className="flex h-screen">
        <div
          className="hidden sm:block sm:w-2/5 md:w-2/6 lg:w-1/4
          bg-[url('../assets/media/bg-forgot-password.jpg')] bg-contain bg-no-repeat bg-left"
        ></div>
    
        <div className="flex flex-1 items-center justify-center md:justify-start sm:translate-x-[-2rem] md:translate-x-0">
          <div className="flex flex-col w-11/12">
    
            <div className="flex items-center gap-4 mb-8">
              <div>
                <img src="./assets/cup-coffe-icon.png" />
              </div>
              <div>
                <img src="./assets/text-logo.png" alt="" />
              </div>
            </div>
    
            <div className="flex flex-col gap-5">
              <h1 className="text-[#8e6447] font-semibold text-xl">Fill out the form correctly</h1>
              <p className="text-[#4f5665] text-sm sm:text-base">We will send new password to your email</p>
    
              <form className="flex flex-col gap-5">
    
                <div className="flex flex-col gap-2">
                  <label className="text-[#0b132a] font-semibold text-sm" for="email"
                    >Email</label
                  >
                  <div className="flex border border-[#dedede] rounded-lg p-2 gap-3 items-center">
                    <i className="text-[#4F5665] h-4" data-feather="mail"></i>
                    <input
                      className="w-full outline-none text-sm"
                      type="email"
                      placeholder="Enter Your Email"
                    />
                  </div>
                </div>
                <button
                  className="bg-[#ff8906] rounded-md p-2 text-base text-[#0b132a] font-medium active:scale-95 transition-all duraition-400"
                  type="submit"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </wrap>
    )
}

export default ForgotPassword