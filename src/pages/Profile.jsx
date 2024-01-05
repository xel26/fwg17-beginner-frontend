import { useDispatch, useSelector } from "react-redux";
import { setProfile as setProfileAction } from "../redux/reducers/profile";

import { useState } from "react";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import InputForm from "../components/InputForm";
import Button from "../components/Button"
import axios from "axios";
import moment from "moment";
import defaultPhoto from '../assets/media/default-photo-profil.jpeg'


const Profile = () => {
  const token = useSelector(state => state.auth.token)
  const dataProfile = useSelector(state => state.profile.data)
  const dispatch = useDispatch()
  
  const registrationDate = dataProfile && moment(dataProfile.createdAt)

  // update profile start
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState(false)
    const [errorMessage, setErrorMessage] = useState()
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
        const {data} = await axios.patch('http://localhost:8888/profile', form, {
          headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${token}`
          }
        })
        if(data.results){
          dispatch(setProfileAction(data.results))

          setSuccess(true)
          setTimeout(() => {
            setSuccess(false)
          }, 2000);
          event.target.password.value = ''
        }else{
          setErrorMessage(data.message)
          setError(true)
          setTimeout(() => {
            setError(false)
          }, 2000);
        }
      } catch (error) {
        console.log(error)
        setErrorMessage(error.response.data.message)
        setError(true)
        setTimeout(() => {
          setError(false)
        }, 2000);
      }
    }


    const previewPicture = (event) => {
      const pictureUrl = URL.createObjectURL(event.target.files[0])
      setPreview(pictureUrl)
    }


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
        const {data} = await axios.patch('http://localhost:8888/profile', form, {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'multipart/form-data'
          }
        })
        dispatch(setProfileAction(data.results))
        
        setPreview(null)
        setSuccess(true)
        setTimeout(() => {
          setSuccess(false)
        }, 2000);
      } catch (error) {
        console.log(error)
        setErrorMessage(error.response.data.message)
        setError(true)
        setTimeout(() => {
          setError(false)
        }, 2000);
      }
    }
  // update profile end

  return (
    <div className="flex flex-col items-center gap-6 sm:gap-12">
      <Navbar />

      <h1 className="w-5/6 mt-20 sm:mt-24 text-3xl font-bold">Profile</h1>

      <div
        className={`fixed top-24 py-2 px-4 bg-white shadow-md text-green-400 rounded text-sm flex justify-center items-center font-bold ${
          success ? "block" : "hidden"
        }`}
      >
        <h1>Update Profile Success</h1>
      </div>
      <div
        className={`fixed top-24 py-2 px-4 bg-white shadow-md text-red-500 rounded text-sm flex justify-center items-center font-bold ${
          error ? "block" : "hidden"
        }`}
      >
        <h1>{errorMessage}</h1>
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
                  `http://localhost:8888/uploads/users/${dataProfile.picture}`
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
            />
          </label>
          <button
            type="submit"
            className="text-xs bg-[#FF8906] w-full rounded p-2 transition-all active:scale-95"
          >
            Upload New Photo
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
          <Button value="Submit" py="2" />
        </form>
      </section>

      <Footer />
    </div>
  );
};

export default Profile;
