import FormAuth from "../components/FormAuth";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Alert from "../components/Alert";
import Info from '../components/Info'

const Register = () => {
  const [message, setMessage] = useState()
  const [showAlert, setShowAlert] = useState()
  const [isSuccess, setIsSuccess] = useState()
  const [isProcessing, setIsProcessing] = useState(false)

  const navigate = useNavigate()

  const authRegister = async (event) => {
    event.preventDefault()

    setIsProcessing(true)

    const { value: fullName } = event.target.fullName;
    const { value: email } = event.target.email;
    const { value: password } = event.target.password;
    const { value: confirmPassword } = event.target.confirmPassword;
    
    if(confirmPassword !== password){
      setMessage('confirm password does not match!. . . please double-check')
      setIsSuccess(false)
      setShowAlert(true)
      setIsProcessing(false)

      setTimeout(() => {
        setShowAlert(false)
      }, 4000)
      
      return
    }
    
      const form = new URLSearchParams()
      form.append("email", email)
      form.append("password", password)
      form.append("fullName", fullName)

      try {
        const { data } = await axios.post(`${import.meta.env.VITE_SERVER_URL}/register`, form.toString())
        setMessage(data.message)
        setIsSuccess(true)
        setShowAlert(true)
        setIsProcessing(false)
  
        setTimeout(() => {
          setShowAlert(false)
          navigate('/login')
        }, 4000)
        
        event.target.email.value = ''
        event.target.password.value = ''
        event.target.confirmPassword.value = ''
        event.target.fullName.value = ''

      } catch ({response:{data:{message}}}) {
        setMessage(message)
        setIsSuccess(false)
        setShowAlert(true)
        setIsProcessing(false)
  
        setTimeout(() => {
          setShowAlert(false)
        }, 4000)
      }
    
  }

  return (
    <div className="flex m-0 p-0 h-[46rem] 2xl:h-screen">
      <div
        className="hidden sm:block sm:w-2/5 md:w-2/6 lg:w-1/4
          bg-[url('../assets/media/bg-register.jpg')] bg-center bg-cover"
      ></div>

      <div className="relative flex flex-1 items-center justify-center">
        <div className={`${!isProcessing ? 'block' : 'hidden'} absolute top-9 left-3 sm:left-9 z-50`}>
              <Alert showAlert={showAlert} isSuccess={isSuccess} message={message} />
          </div>
      
          <div className={`${isProcessing ? 'block' : 'hidden'} absolute top-9 left-3 sm:left-9 z-50`}>
              <Info message="Registering... Validating your information" processing={true}/>
          </div>
        <FormAuth handleAuth={authRegister} type="Register" processing={isProcessing}/>
      </div>
    </div>
  )
}

export default Register;
