import { useState } from 'react'
import FormAuth from '../components/FormAuth'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Alert from '../components/Alert'

const ForgotPassword = () => {
  const [message, setMessage] = useState()
  const [showAlert, setShowAlert] = useState()
  const [isSuccess, setIsSuccess] = useState()

  const navigate = useNavigate()


  const reqCreatNewPass = async (event) => {
    event.preventDefault()

    const {value: email} = event.target.email

    const form = new URLSearchParams()
    form.append("email", email)

    try {
      const {data} = await axios.post(`${import.meta.env.VITE_SERVER_URL}/forgot-password`, form.toString())
      setMessage(data.message)
      setIsSuccess(true)
      setShowAlert(true)

      setTimeout(() => {
        setShowAlert(false)
        navigate('/create-new-password')
      }, 4000)
      
      event.target.email.value = ''

    } catch ({response:{data:{message}}}) {
      setMessage(message)
      setIsSuccess(false)
      setShowAlert(true)

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
          <div className="absolute top-9 left-0 z-50">
            <Alert showAlert={showAlert} isSuccess={isSuccess} message={message} />
          </div>
          <FormAuth handleAuth={reqCreatNewPass} type="Forgot Password" />
        </div>
      </div>
    )
}

export default ForgotPassword