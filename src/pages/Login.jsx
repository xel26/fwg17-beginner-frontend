const Login = () => {
    return (
        <wrap className="flex m-0 p-0 h-[38rem] xl:h-screen">
        <div
          className="hidden sm:block sm:w-2/5 md:w-2/6 lg:w-1/4
          bg-[url('../assets/media/bg-login.jpg')] w-1/4 bg-center bg-cover"
        ></div>
    
        <div className="flex flex-1 items-center justify-center">
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
              <h1 className="text-[#8e6447] font-semibold text-xl">Login</h1>
              <p className="text-[#4f5665] text-sm sm:text-base">Fill out the form correctly</p>
    
              <form className="flex flex-col gap-5">
    
                <div className="flex flex-col gap-2">
                  <label className="text-[#0b132a] font-semibold text-sm" for="email"
                    >Email</label
                  >
                  <label className="flex border border-[#dedede] rounded-lg p-2 gap-3 items-center">
                    <i className="text-[#4F5665] h-4" data-feather="mail"></i>
                    <input
                      className="w-full outline-none text-sm"
                      type="email"
                      placeholder="Enter Your Email"
                    />
                  </label>
                </div>
    
                <div className="flex flex-col gap-2">
                  <label
                    className="text-[#0b132a] font-semibold text-sm"
                    for="password"
                    >Password</label
                  >
                  <label for="password" className="flex border border-[#dedede] rounded-lg p-2 gap-3 items-center">
                    <i className="text-[#4F5665] h-4" data-feather="lock"></i>
                    <input
                      className="w-full outline-none text-sm"
                      type="password"
                      placeholder="Enter Your Password"
                    />
                    <i className="text-[#4F5665] h-4 cursor-pointer" data-feather="eye"></i>
                  </label>
                </div>
    
                <a href="forgot-password.html" className="text-[#FF8906] flex justify-end text-sm">Lupa Password?</a>
    
                <button
                  className="bg-[#ff8906] rounded-md p-2 text-base text-[#0b132a] font-medium active:scale-95 transition-all duration-400"
                  type="submit"
                >
                  Login
                </button>
              </form>
    
              <div className="flex justify-center">
                <p className="text-[#4f5665] text-sm">Not Have An Account?</p>
                <a className="text-[#ff8906] text-sm" href="./register.html">Register</a>
              </div>
    
              <div className="grid grid-cols-3">
                <hr className="border-[0.5px] border-[#dedede] h-0" />
                <p className="text-[#aaaaaa] text-xs text-center">Or</p>
                <hr className="border-[0.5px] border-[#dedede] h-0" />
              </div>
    
              <div className="flex justify-between gap-4">
                <button
                  className="flex justify-center items-center gap-4 w-2/4 p-2 rounded shadow-md hover:shadow-none duration-500"
                >
                  <img src="/assets/facebook-logo.png" alt="" />
                  <p className="text-[#4f5665] text-semibold">Facebook</p>
                </button>
                <button
                  className="flex justify-center items-center gap-4 w-2/4 p-2 rounded shadow-md hover:shadow-none duration-500"
                >
                  <img src="/assets/google-logo.png" alt="" />
                  <p className="text-[#4f5665] text-semibold ">Google</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </wrap>
    )
}

export default Login