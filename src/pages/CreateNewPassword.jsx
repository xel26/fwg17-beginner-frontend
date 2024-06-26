import { useState } from 'react'
import FormAuth from '../components/FormAuth'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import Alert from '../components/Alert'
import Info from '../components/Info'

const CreateNewPassword = () => {
  const [message, setMessage] = useState()
  const [showAlert, setShowAlert] = useState()
  const [isSuccess, setIsSuccess] = useState()
  const [isProcessing, setIsProcessing] = useState(false)

  const navigate = useNavigate()

  const authCreatNewPass = async (event) => {
    event.preventDefault()

    setIsProcessing(true)
    
    const {value: otp} = event.target.otp
    const {value: newPassword} = event.target.newPassword
    const {value: confirmPassword} = event.target.confirmPassword

    if(confirmPassword !== newPassword){
      setMessage("confirm password does not match!. . . please double check")
      setShowAlert(true)
      setIsSuccess(false)
      setIsProcessing(false)

      setTimeout(() => {
        setShowAlert(false)
      }, 4000)

      return 
    }
    
    const form = new URLSearchParams()
    form.append("otp", otp)
    form.append("newPassword", newPassword)
    
    try {
      const {data} = await axios.post(`${import.meta.env.VITE_SERVER_URL}/forgot-password`, form.toString())
      setMessage(data.message)
      setIsSuccess(true)
      setShowAlert(true)
      setIsProcessing(false)

      setTimeout(() => {
        setShowAlert(false)
        navigate('/login')
      }, 4000)

      event.target.otp.value = ''
      event.target.newPassword.value = ''
      event.target.confirmPassword.value = ''

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
        <div className="flex h-screen">
        <div
          className="hidden sm:block sm:w-2/5 md:w-2/6 lg:w-1/4
          bg-[url('../assets/media/bg-forgot-password.jpg')] bg-contain bg-no-repeat bg-left"
        ></div>
    
        <div className="relative flex flex-1 items-center justify-center md:justify-start sm:translate-x-[-2rem] md:translate-x-0">
          <div className={`${!isProcessing ? 'block' : 'hidden'} absolute top-4 sm:top-10 left-3 sm:left-0 z-50`}>
              <Alert showAlert={showAlert} isSuccess={isSuccess} message={message} />
          </div>
      
          <div className={`${isProcessing ? 'block' : 'hidden'} absolute top-4 sm:top-10 left-3 sm:left-0 z-50`}>
              <Info message="Checking... Confirming your authentication" processing={true}/>
          </div>

          <FormAuth handleAuth={authCreatNewPass} type="Create New Password" processing={isProcessing}/>
        </div>
      </div>
    )
}

export default CreateNewPassword