import FormAuth from '../components/FormAuth'

const ForgotPassword = () => {
    return (
        <wrap className="flex h-screen">
        <div
          className="hidden sm:block sm:w-2/5 md:w-2/6 lg:w-1/4
          bg-[url('../assets/media/bg-forgot-password.jpg')] bg-contain bg-no-repeat bg-left"
        ></div>
    
        <div className="flex flex-1 items-center justify-center md:justify-start sm:translate-x-[-2rem] md:translate-x-0">
          <FormAuth type="Forgot Password"/>
        </div>
      </wrap>
    )
}

export default ForgotPassword