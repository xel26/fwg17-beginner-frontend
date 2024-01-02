import { useEffect, useState } from 'react'
import FormAuth from '../components/FormAuth'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [success, setSuccess] = useState(false)
  const [successMessage, setSuccessMessage] = useState('')
  const [error, setError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [token, setToken] = useState(window.localStorage.getItem('token'))
  const navigate = useNavigate()

  const authLogin = async (event) => {
    event.preventDefault()
    const {value: email} = event.target.email
    const {value: password} = event.target.password

    const form = new URLSearchParams()
    form.append('email', email)
    form.append('password', password)

    try{
      const {data} = await axios.post('http://localhost:8888/auth/login', form.toString())
      const {token: resultToken} = data.results
      setToken(resultToken)
      window.localStorage.setItem('token', resultToken)

      setSuccessMessage(data.message)
      setSuccess(true)
      setTimeout(() => {
        navigate('/products')
      }, 2000);
    }catch(err){
      setError(true)
      setTimeout(() => {
        setError(false)
      }, 2000);
      setErrorMessage(err.response.data.message)
    }
  }

  useEffect(() => {
    if(token){
      navigate('/')
    }
  },[token, navigate])

    return (
        <div className="flex m-0 p-0 h-[38rem] xl:h-screen">
        <div
          className="hidden sm:block sm:w-2/5 md:w-2/6 lg:w-1/4
          bg-[url('../assets/media/bg-login.jpg')] w-1/4 bg-center bg-cover"
        ></div>
    
        <div className="relative flex flex-1 items-center justify-center">
          <div className={`fixed top-10 py-2 px-4 bg-white shadow-md text-green-400 rounded text-sm flex justify-center items-center font-bold ${success? 'block' : 'hidden'}`}>
            <h1>{successMessage}</h1>
          </div>
          <div className={`fixed top-10 py-2 px-4 bg-white shadow-md text-red-500 rounded text-sm flex justify-center items-center font-bold ${error? 'block' : 'hidden'}`}>
            <h1>{errorMessage}</h1>
          </div>
          <FormAuth handleAuth={authLogin} type="Login"/>
        </div>
      </div>
    )
}

export default Login