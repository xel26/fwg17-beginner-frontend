import ButtonSubmit from './ButtonSubmit'
import Input from './InputForm'

const FormAuth = ({type, text}) => {
    return (
        <div className="flex flex-col gap-5">
        <h1 className="text-[#8e6447] font-semibold text-xl">{type}</h1>
        <p className="text-[#4f5665]">{type == "Register" || type == "Login" ? "Fill out the form correctly" : "We will send new password to your email"}</p>

        <form id="form" className="flex flex-col gap-5">
        {
            if(type == "Register"){
                (
                    <Input/>
                )
            }
        }

        <ButtonSubmit />
        </form>

        <div className="flex justify-center">
          <p className="text-[#4f5665] text-sm">Have An Account?</p>
          <a className="text-[#ff8906] text-sm" href="./login.html">
            Login
          </a>
        </div>

        <div className="grid grid-cols-3">
          <hr className="border-[0.5px] border-[#dedede] h-0" />
          <p className="text-[#aaaaaa] text-xs text-center">Or</p>
          <hr className="border-[0.5px] border-[#dedede] h-0" />
        </div>

        <div className="flex justify-between gap-4">
          <button
            className="flex justify-center items-center gap-4 w-2/4 p-2 rounded shadow-md hover:shadow-none transition-all duration-500"
            id="facebook"
          >
            <img src="../assets/media/facebook-logo.png" alt="" />
            <p className="text-[#4f5665] text-semibold">Facebook</p>
          </button>
          <button
            className="flex justify-center items-center gap-4 w-2/4 p-2 rounded shadow-md hover:shadow-none transition-all duration-500"
            id="google"
          >
            <img src="../assets/media/google-logo.png" alt="" />
            <p className="text-[#4f5665] text-semibold ">Google</p>
          </button>
        </div>
      </div>
    )
}

export default FormAuth