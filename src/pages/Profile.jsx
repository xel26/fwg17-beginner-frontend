import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import InputForm from "../components/InputForm";
import Button from "../components/Button"
import { useEffect, useState, useRef } from "react";
import axios from "axios";

const Profile = () => {
  const [token, setToken] = useState(window.localStorage.getItem('token'))
  const [dataProfile, setDataProfile] = useState()

  const getProfile =  async () => {
    try {
      const {data} = await axios.get(`http://localhost:8888/profile`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      setDataProfile(data.results)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getProfile()
  }, [])


  // update profile
    const inputPassword = useRef()
  
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState(false)
    const [errorMessage, setErrorMessage] = useState()

    const updateProfile = async (event) => {
      event.preventDefault();
      
      const { value: fullName } = event.target.fullName;
      const { value: email } = event.target.email;
      const { value: phone } = event.target.phone;
      const { value: password } = event.target.password;
      const { value: address } = event.target.address;

      const form = new FormData();
      
      // const fields = ['fullName', 'email', 'phoneNumber', 'address', 'password']
      // fields.forEach((field) => {
      //   if(dataProfile && dataProfile[field] !== event.target[field].value){
      //     form.append(field, event.target[field].value)
      //   }
      // })

      if(dataProfile && dataProfile.fullName !== event.target.fullName.value){
        form.append("fullName", fullName);
      }

      if(dataProfile && dataProfile.email !== event.target.email.value){
        form.append("email", email);
      }

      if(dataProfile && dataProfile.phoneNumber !== event.target.phone.value){
        form.append("phoneNumber", phone)
      }

      if(dataProfile && dataProfile.address !== event.target.address.value){
        form.append("address", address);
      }

      if(event.target.password.value){
        form.append("password", password);
      }

      try {
        const {data} = await axios.patch('http://localhost:8888/profile', form, {
          headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${token}`
          }
        })
        console.log(data)
        if(data.results){
          setDataProfile(data.results)
          setSuccess(true)
          setTimeout(() => {
            setSuccess(false)
          }, 2000);
          inputPassword.current.reset()
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
  // update profile

  return (
    <div className="flex flex-col items-center gap-6 sm:gap-12">
      <Navbar token={token} setToken={setToken}/>

      <h1 className="w-5/6 mt-20 sm:mt-24 text-3xl font-bold">Profile</h1>

      <div className={`fixed top-24 py-2 px-4 bg-white shadow-md text-green-400 rounded text-sm flex justify-center items-center font-bold ${success ? "block" : "hidden"}`}>
          <h1>Update Profile Success</h1>
      </div>
      <div className={`fixed top-24 py-2 px-4 bg-white shadow-md text-red-500 rounded text-sm flex justify-center items-center font-bold ${error ? "block" : "hidden"}`}>
          <h1>{errorMessage}</h1>
      </div>

      <form onSubmit={updateProfile} className="w-5/6 flex flex-col sm:flex-row gap-4">
        <div className="w-full sm:w-1/5 border border-[#E8E8E8] h-fit flex flex-col items-center p-4 gap-3">
          <div className="flex flex-col items-center">
            <h2 className="font-bold">{dataProfile && dataProfile.fullName}</h2>
            <p className="text-xs text-[#4F5665]">
              {dataProfile && dataProfile.email}
            </p>
          </div>
          <div>
            <img
              className="rounded-full w-28 h-28 object-cover"
              src={
                dataProfile &&
                `http://localhost:8888/uploads/users/${dataProfile.picture}`
              }
            ></img>
          </div>
          <button type="button" className="text-xs bg-[#FF8906] w-full rounded p-2 transition-all active:scale-95">
            Upload New Photo
          </button>
          <p className="text-xs text-[#4F5665]">
            Since <span className="font-bold">20 January 2022</span>
          </p>
        </div>

        <div className="w-full sm:flex-1 border border-[#E8E8E8] p-4 flex flex-col gap-6 outline-none">
          {
            dataProfile && (
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
                  name="phone"
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
                  ref={inputPassword}
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
            )
          }
          <Button
            value="Submit"
            py="2"
          />
        </div>
      </form>

      <Footer />
    </div>
  );
};

export default Profile;
