import { useDispatch, useSelector } from "react-redux"
import { setProfile as setProfileAction } from "../redux/reducers/profile"
import { useState } from "react"

import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import InputForm from "../components/InputForm"
import Button from "../components/Button"
import axios from "axios"
import moment from "moment"
import defaultPhoto from '../assets/media/default-profile.png'
import Alert from "../components/Alert"
import Info from "../components/Info"
import Skeleton, { SkeletonTheme } from "react-loading-skeleton"


const Profile = () => {
  const token = useSelector(state => state.auth.token)
  const dataProfile = useSelector(state => state.profile.data)
  const dispatch = useDispatch()
  
  const registrationDate = Object.keys(dataProfile).length !== 0 && moment(dataProfile.createdAt)
  console.log(typeof registrationDate === 'object')
  console.log(registrationDate, typeof registrationDate)

  // update profile start
  const [message, setMessage] = useState()
  const [showAlert, setShowAlert] = useState()
  const [isSuccess, setIsSuccess] = useState()
  const [isProcessing, setIsProcessing] = useState(false)

  const [preview, setPreview] = useState()

    const updateProfile = async (event) => {
      event.preventDefault()

      setIsProcessing(true)

      const form = new FormData()
      
      const fields = ['fullName', 'email', 'phoneNumber', 'address']
      fields.forEach((field) => {
        if(dataProfile && event.target[field].value && dataProfile[field] !== event.target[field].value){
          form.append(field, event.target[field].value)
        }
      })

      try {
        const {data} = await axios.patch(`${import.meta.env.VITE_SERVER_URL}/profile`, form, {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'multipart/form-data'
          }
        })
        setIsProcessing(false)
        
        if(data.results){
          dispatch(setProfileAction(data.results))

          setMessage(data.message)
          setIsSuccess(true)
          setShowAlert(true)
    
          setTimeout(() => {
            setShowAlert(false)
          }, 4000)

          event.target.password.value = ''
        }else{
          setMessage(data.message)
          setIsSuccess(false)
          setShowAlert(true)
    
          setTimeout(() => {
            setShowAlert(false)
          }, 4000)
        }
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


    const previewPicture = (event) => {
      const pictureUrl = URL.createObjectURL(event.target.files[0])
      setPreview(pictureUrl)
    }


    const updatePicture = async (event) => {
      event.preventDefault()

      setIsProcessing(true)

      const [file] = event.target.picture.files
      console.log(file)

      const form  = new FormData()
      form.append('picture', file)

      try {
        const {data} = await axios.patch(`${import.meta.env.VITE_SERVER_URL}/profile`, form, {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'multipart/form-data'
          }
        })
        setIsProcessing(false)

        dispatch(setProfileAction(data.results))

        setPreview(false)
        setMessage(data.message)
        setIsSuccess(true)
        setShowAlert(true)
  
        setTimeout(() => {
          setShowAlert(false)
        }, 3000)

      } catch ({response:{data:{message}}}) {
        setMessage(err)
        setIsSuccess(false)
        setShowAlert(true)
        setIsProcessing(false)
  
        setTimeout(() => {
          setShowAlert(false)
        }, 4000)
      }

    }



    const deletePicture = async(event) => {
      event.preventDefault()

      setIsProcessing(true)
      
      const form  = new URLSearchParams()
      form.append("picture", "null")

      try {
        const {data} = await axios.patch(`${import.meta.env.VITE_SERVER_URL}/profile`, form, {
          headers: {
            'Authorization': `Bearer ${token}`,
          }
        })
        setIsProcessing(false)

        console.log(data)
        dispatch(setProfileAction(data.results))

        setPreview(false)
        setMessage(data.message)
        setIsSuccess(true)
        setShowAlert(true)
  
        setTimeout(() => {
          setShowAlert(false)
        }, 4000)

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
  // update profile end

  return (
    <div className="relative flex flex-col items-center gap-6">
      <Navbar />

      <h1 className="w-5/6 mt-20 text-3xl font-bold">Profile</h1>

      <div
        className={`${
          !isProcessing ? "block" : "hidden"
        } absolute top-20 left-0 sm:left-24 z-50`}
      >
        <Alert showAlert={showAlert} isSuccess={isSuccess} message={message} />
      </div>

      <div
        className={`${
          isProcessing ? "block" : "hidden"
        } absolute top-20 left-5 sm:left-24 z-50`}
      >
        <Info
          message="Profile update in progress... wait a moment !"
          processing={true}
        />
      </div>

      <section className="w-5/6 flex flex-col sm:flex-row gap-4">
        <form
          onSubmit={updatePicture}
          className="w-full sm:w-1/5 border border-[#E8E8E8] h-fit flex flex-col items-center p-4 gap-3"
        >
          <div className="flex flex-col items-center">
            <h2 className="font-bold w-28 flex justify-center">
              {" "}
              {dataProfile.fullName || (
                <div className="w-28">
                  <Skeleton />
                </div>
              )}{" "}
            </h2>
            <h2 className="text-xs text-[#4F5665]">
              {dataProfile.email || (
                <div className="w-56 sm:w-44 text-sm">
                  <Skeleton className="" />
                </div>
              )}
            </h2>
          </div>
          <label className="relative rounded-full">
            {Object.keys(dataProfile).length === 0 && (
              <div>
                <Skeleton circle className="w-28 h-28"/>
              </div>
            )}
            {!preview && Object.keys(dataProfile).length !== 0 && !dataProfile.picture && (
              <img
              className="rounded-full w-28 h-28 object-cover"
              src={defaultPhoto}
            ></img>
            )}
            {!preview && Object.keys(dataProfile).length !== 0 && dataProfile.picture && (
              <img
                className="rounded-full w-28 h-28 object-cover"
                src={dataProfile && dataProfile.picture}
              ></img>
            )}
            {preview && (
              <img
                className="rounded-full w-28 h-28 object-cover"
                src={preview}
              ></img>
            )}
            {preview && (
              <div className="absolute top-0 left-0 w-full h-full bg-black rounded-full bg-opacity-50" />
            )}
            <input
              onChange={previewPicture}
              multiple={false}
              type="file"
              accept=".jpg, .jpeg, .png"
              name="picture"
              className="hidden"
              size={10}
            />
          </label>

          {Object.keys(dataProfile).length !== 0 ? (
            <button
              disabled={!preview || isProcessing}
              type="submit"
              className="text-xs bg-gradient-to-br from-[#7E6363] to-black text-white w-56 sm:w-full rounded p-2 transition-all active:scale-95 disabled:active:scale-100 disabled:transition-none"
            >
              Upload New Photo
            </button>
          ) : (
            <div className="w-56 sm:w-full">
              <Skeleton className="p-2" />
            </div>
          )}

          {Object.keys(dataProfile).length !== 0 ? (
            <button
              disabled={
                (preview && dataProfile) || !dataProfile.picture || isProcessing
              }
              onClick={deletePicture}
              className={`text-xs bg-gradient-to-br from-[#e60000] to-black text-white w-56 sm:w-full rounded p-2 transition-all active:scale-95 disabled:active:scale-100 disabled:transition-none`}
            >
              Delete photo
            </button>
          ) : (
            <div className="w-56 sm:w-full">
              <Skeleton className="p-2" />
            </div>
          )}

          <p className="text-xs text-[#4F5665]">
            {registrationDate ? (
              (
                <span className="font-bold">
                  Since{" "}
                  {registrationDate?.format("D").padStart(2, "0")}{" "}
                  {registrationDate?.format("MMMM")}{" "}
                  {registrationDate?.format("YYYY")}
                </span>
              )
            ) : (
              <span className="w-full text-sm">
                <Skeleton className="w-56 sm:w-44" />
              </span>
            )}
          </p>
        </form>

        <form
          onSubmit={updateProfile}
          className="w-full sm:flex-1 border border-[#E8E8E8] p-4 flex flex-col gap-6 outline-none"
        >
          {Object.keys(dataProfile).length !== 0 ? (
            <InputForm
              profile={true}
              name="fullName"
              label="Full Name"
              type="text"
              placeholder="Enter Your Full Name"
              defaultValue={dataProfile.fullName}
            />
          ) : (
            <div className="flex flex-col gap-2">
              <div className="w-20">
                <Skeleton className="text-sm" />
              </div>

              <div className="w-full">
                <Skeleton className="text-xl" />
              </div>
            </div>
          )}

          {Object.keys(dataProfile).length !== 0 ? (
            <InputForm
              profile={true}
              name="email"
              label="Email"
              type="email"
              placeholder="Enter Your Email"
              defaultValue={dataProfile.email}
            />
          ) : (
            <div className="flex flex-col gap-2">
              <div className="w-20">
                <Skeleton className="text-sm" />
              </div>

              <div className="w-full">
                <Skeleton className="text-xl" />
              </div>
            </div>
          )}

          {Object.keys(dataProfile).length !== 0 ? (
            <InputForm
              profile={true}
              name="phoneNumber"
              label="Phone"
              type="text"
              placeholder="Enter Your Phone Number"
              defaultValue={dataProfile.phoneNumber}
            />
          ) : (
            <div className="flex flex-col gap-2">
              <div className="w-20">
                <Skeleton className="text-sm" />
              </div>

              <div className="w-full">
                <Skeleton className="text-xl" />
              </div>
            </div>
          )}

          {Object.keys(dataProfile).length !== 0 ? (
            <InputForm
              profile={true}
              name="password"
              label="Password"
              type="text"
              placeholder="Enter Your Password"
              defaultValue="******"
              passProfile={true}
            />
          ) : (
            <div className="flex flex-col gap-2">
              <div className="w-full flex justify-between">
                <div className="w-20">
                  <Skeleton className="text-sm" />
                </div>
                <div className="w-20">
                  <Skeleton className="text-sm" />
                </div>
              </div>

              <div className="w-full">
                <Skeleton className="text-xl" />
              </div>
            </div>
          )}

          {Object.keys(dataProfile).length !== 0 ? (
            <InputForm
              profile={true}
              name="address"
              label="Address"
              type="text"
              placeholder="Enter Your Address"
              defaultValue={dataProfile.address}
            />
          ) : (
            <div className="flex flex-col gap-2">
              <div className="w-20">
                <Skeleton className="text-sm" />
              </div>

              <div className="w-full">
                <Skeleton className="text-xl" />
              </div>
            </div>
          )}

          {Object.keys(dataProfile).length !== 0 ? (
            <Button value="Update Profile" py="2" />
          ) : (
            <div className="w-full">
              <Skeleton className="text-xl" />
            </div>
          )}
        </form>
      </section>

      <Footer />
    </div>
  );
}

export default Profile
