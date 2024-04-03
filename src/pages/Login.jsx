import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Alert from '../components/Alert'
import Info from '../components/Info'

import { useDispatch, useSelector } from 'react-redux'
import { login as loginAction } from '../redux/reducers/auth'

import FormAuth from '../components/FormAuth'


const Login = () => {
  const [message, setMessage] = useState()
  const [showAlert, setShowAlert] = useState()
  const [isSuccess, setIsSuccess] = useState()
  const [isProcessing, setIsProcessing] = useState(false)

  const navigate = useNavigate()
  
  const token = useSelector(state => state.auth.token)
  const dispatch = useDispatch()

  const authLogin = async (event) => {
    event.preventDefault()
    setIsProcessing(true)

    const {value: email} = event.target.email
    const {value: password} = event.target.password

    const form = new URLSearchParams()
    form.append('email', email)
    form.append('password', password)

    try{
      const {data} = await axios.post(`${import.meta.env.VITE_SERVER_URL}/login`, form.toString())
      const {token: resultToken} = data.results

      setIsProcessing(false)
      
      setMessage(data.message)
      setIsSuccess(true)
      setShowAlert(true)

      setTimeout(() => {
        setShowAlert(false)
        dispatch(loginAction(resultToken))
        navigate('/products')
      }, 4000)
      
      event.target.email.value = ''
      event.target.password.value = ''
      
    }catch({response:{data:{message}}}){
      setMessage(message)
      setIsSuccess(false)
      setShowAlert(true)
      setIsProcessing(false)

      setTimeout(() => {
        setShowAlert(false)
      }, 4000)
    }
  }

  useEffect(() => {
    if(token){
      navigate('/products')
    }
  },[token, navigate])

    return (
      <div className="flex m-0 p-0 h-[38rem] xl:h-screen">
        <div
          className="hidden sm:block sm:w-2/5 md:w-2/6 lg:w-1/4
          bg-[url('../assets/media/bg-login.jpg')] w-1/4 bg-center bg-cover"
        ></div>

        <div className="relative flex flex-1 items-center justify-center">
          <div className={`${!isProcessing ? 'block' : 'hidden'} absolute top-9 sm:top-7 left-3 sm:left-9 z-50`}>
            <Alert showAlert={showAlert} isSuccess={isSuccess} message={message} />
          </div>

          <div className={`${isProcessing ? 'block' : 'hidden'} absolute top-9 sm:top-7 left-3 sm:left-9 z-50`}>
            <Info message="Authenticating... Verifying your credentials" processing={true}/>
          </div>

          <FormAuth handleAuth={authLogin} type="Login" processing={isProcessing}/>
        </div>
      </div>
    )
}

export default Login