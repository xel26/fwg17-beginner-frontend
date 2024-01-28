import { useDispatch, useSelector } from "react-redux";
import { setProfile as setProfileAction } from "../redux/reducers/profile";
import { useState } from "react";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import InputForm from "../components/InputForm";
import Button from "../components/Button"
import axios from "axios";
import moment from "moment";
import defaultPhoto from '../assets/media/default-profile.png'
import Alert from "../components/Alert";


const Profile = () => {
  const token = useSelector(state => state.auth.token)
  const dataProfile = useSelector(state => state.profile.data)
  const dispatch = useDispatch()
  
  const registrationDate = dataProfile && moment(dataProfile.createdAt)

  // update profile start
  const [message, setMessage] = useState()
  const [showAlert, setShowAlert] = useState()
  const [isSuccess, setIsSuccess] = useState()

  const [preview, setPreview] = useState()

    const updateProfile = async (event) => {
      event.preventDefault();

      const form = new FormData();
      
      const fields = ['fullName', 'email', 'phoneNumber', 'address', 'password']
      fields.forEach((field) => {
        if(dataProfile && event.target[field].value && dataProfile[field] !== event.target[field].value){
          form.append(field, event.target[field].value)
        }
      })

      try {
        const {data} = await axios.patch(`${import.meta.env.VITE_SERVER_URL}/profile`, form, {
          headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${token}`
          }
        })
        if(data.results){
          dispatch(setProfileAction(data.results))

          setMessage(data.message)
          setIsSuccess(true)
          setShowAlert(true)
    
          setTimeout(() => {
            setShowAlert(false)
          }, 4000);

          event.target.password.value = ''
        }else{
          setMessage(data.message)
          setIsSuccess(false)
          setShowAlert(true)
    
          setTimeout(() => {
            setShowAlert(false)
          }, 4000);
        }
      } catch ({response:{data:{message}}}) {
        setMessage(message)
        setIsSuccess(false)
        setShowAlert(true)
  
        setTimeout(() => {
          setShowAlert(false)
        }, 4000);
      }
    }


    const previewPicture = (event) => {
      const pictureUrl = URL.createObjectURL(event.target.files[0])
      setPreview(pictureUrl)
    }


    const [uploading, setUploading] = useState()
    const updatePicture = async (event) => {
      event.preventDefault();
      const [file] = event.target.picture.files

      console.log(event.target.picture.files)
      console.log(file)
      console.log(file.name)
      console.log(file.size)
      console.log(file.type)

      const form  = new FormData()
      form.append('picture', file)

      try {

        setUploading('uploading. . . please wait')
        setTimeout(() => {
          setUploading('')
        }, 3000);

        const {data} = await axios.patch(`${import.meta.env.VITE_SERVER_URL}/profile`, form, {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'multipart/form-data'
          }
        })


        dispatch(setProfileAction(data.results))

        setPreview(false)
        setMessage(data.message)
        setIsSuccess(true)
        setShowAlert(true)
  
        setTimeout(() => {
          setShowAlert(false)
        }, 4000);

      } catch ({response:{data:{message}}}) {
        setMessage(message)
        setIsSuccess(false)
        setShowAlert(true)
  
        setTimeout(() => {
          setShowAlert(false)
        }, 4000);
      }

    }
  // update profile end

  return (
    <div className="relative flex flex-col items-center gap-6">
      <Navbar />

      <h1 className="w-5/6 mt-20 text-3xl font-bold">Profile</h1>

      <div className="absolute top-20 left-0 sm:left-24 z-50">
            <Alert showAlert={showAlert} isSuccess={isSuccess} message={message} />
      </div>

      <section className="w-5/6 flex flex-col sm:flex-row gap-4">
        <form
          onSubmit={updatePicture}
          className="w-full sm:w-1/5 border border-[#E8E8E8] h-fit flex flex-col items-center p-4 gap-3"
        >
          <div className="flex flex-col items-center">
            <h2 className="font-bold">{dataProfile && dataProfile.fullName}</h2>
            <p className="text-xs text-[#4F5665]">
              {dataProfile && dataProfile.email}
            </p>
          </div>
          <label className="relative rounded-full">
            {(!preview && dataProfile) && !dataProfile.picture && (
              <img
                className="rounded-full w-28 h-28 object-cover"
                src={defaultPhoto}
              ></img>
            )}
            {(!preview && dataProfile) && dataProfile.picture && (
              <img
                className="rounded-full w-28 h-28 object-cover"
                src={
                  dataProfile &&
                  dataProfile.picture
                }
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
          <button
            disabled={!preview}
            type="submit"
            className="text-xs bg-gradient-to-br from-[#7E6363] to-black text-white w-full rounded p-2 transition-all active:scale-95 disabled:active:scale-100"
          >
            {uploading ? uploading : 'Upload New Photo'}
          </button>
          <p className="text-xs text-[#4F5665]">
            Since{" "}
            <span className="font-bold">
              {registrationDate.format('D').padStart(2, '0')} {registrationDate.format("MMMM")} {registrationDate.format('YYYY')}
            </span>
          </p>
        </form>

        <form
          onSubmit={updateProfile}
          className="w-full sm:flex-1 border border-[#E8E8E8] p-4 flex flex-col gap-6 outline-none"
        >
          {dataProfile && (
            <>
              <InputForm
                profile={true}
                name="fullName"
                label="Full Name"
                type="text"
                placeholder="Enter Your Full Name"
                defaultValue={dataProfile.fullName}
              />
              <InputForm
                profile={true}
                name="email"
                label="Email"
                type="email"
                placeholder="Enter Your Email"
                defaultValue={dataProfile.email}
              />
              <InputForm
                profile={true}
                name="phoneNumber"
                label="Phone"
                type="text"
                placeholder="Enter Your Phone Number"
                defaultValue={dataProfile.phoneNumber}
              />
              <InputForm
                profile={true}
                name="password"
                label="Password"
                type="password"
                placeholder="Enter Your Password"
                passProfile={true}
              />
              <InputForm
                profile={true}
                name="address"
                label="Address"
                type="text"
                placeholder="Enter Your Address"
                defaultValue={dataProfile.address}
              />
            </>
          )}
          <Button value="Update Profile" py="2" />
        </form>
      </section>

      <Footer />
    </div>
  );
};

export default Profile;
