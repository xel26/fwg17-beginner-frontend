import { useState } from 'react'
import FormAuth from '../components/FormAuth'

const ForgotPassword = () => {
  const [emptyEmail, setEmptyEmail] = useState(false)
  const [resetPass, setResetPass] = useState(false)

  const authForgotPass = (event) => {
    event.preventDefault()

    const {value: email} = event.target.email
    if(!email){
      setEmptyEmail(true)
      setTimeout(() => {
        setEmptyEmail(false)
      }, 2000);
    }else{
      setResetPass(true)
      setTimeout(() => {
        setResetPass(false)
        window.location = '/login'
      }, 5000);
    }
  }
    return (
        <div className="flex h-screen">
        <div
          className="hidden sm:block sm:w-2/5 md:w-2/6 lg:w-1/4
          bg-[url('../assets/media/bg-forgot-password.jpg')] bg-contain bg-no-repeat bg-left"
        ></div>
    
        <div className="flex flex-1 items-center justify-center md:justify-start sm:translate-x-[-2rem] md:translate-x-0">
        <div className={`absolute top-10 py-2 px-4 bg-white shadow-md text-red-500 rounded text-sm flex justify-center items-center font-bold ${emptyEmail? 'block' : 'hidden'}`}>
            <h1>Email Cannot Be Empty</h1>
          </div>
          <div className={`absolute top-10 py-2 px-4 bg-white shadow-md text-green-400 rounded text-sm flex justify-center items-center font-bold ${resetPass? 'block' : 'hidden'}`}>
            <h1>Password reset email sent. Follow instructions to reset and log in again. Thank you</h1>
          </div>
          <FormAuth handleAuth={authForgotPass} type="Forgot Password"/>
        </div>
      </div>
    )
}

export default ForgotPassword