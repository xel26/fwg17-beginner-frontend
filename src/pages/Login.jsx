import FormAuth from '../components/FormAuth'

const Login = () => {
    return (
        <wrap className="flex m-0 p-0 h-[38rem] xl:h-screen">
        <div
          className="hidden sm:block sm:w-2/5 md:w-2/6 lg:w-1/4
          bg-[url('../assets/media/bg-login.jpg')] w-1/4 bg-center bg-cover"
        ></div>
    
        <div className="flex flex-1 items-center justify-center">
          <FormAuth type="Login"/>
        </div>
      </wrap>
    )
}

export default Login