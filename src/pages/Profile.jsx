import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import InputForm from "../components/InputForm";
import Button from "../components/Button"
import { useEffect, useState } from "react";
import axios from "axios";

const Profile = () => {
  // get data user static start
  const [dataProfile, setDataProfile] = useState()
  // console.log(dataProfile && dataProfile)

  const dataUser =  async () => {
    try {
      const {data} = await axios.get(`http://localhost:8888/users/237`)
      setDataProfile(data.results)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    dataUser()
  }, [])


    // bug : belum bisa dinamic rendering
    const [inputForm, setInputForm] = useState([
      {
        profile:true,
        name:"full-name",
        label:"Full Name",
        type:"text",
        placeholder:"Enter Your Full Name",
        value: "Ghaluh Wizard"
      },
      {
        profile:true,
        name:"email",
        label:"Email",
        type:"email",
        placeholder:"Enter Your Email",
        value:"ghaluhwizz@gmail.com",
      },
      {
        profile:true,
        name:"phone",
        label:"Phone",
        type:"text",
        placeholder:"Enter Your Phone Number",
        value:"082116304338",
      },
      {
        profile:true,
        name:"password",
        label:"Password",
        type:"password",
        placeholder:"Enter Your Password",
        value:"1234567890",
        passProfile:true,
      },
      {
        profile:true,
        name:"address",
        label:"Address",
        type:"text",
        placeholder:"Enter Your Address",
        value:"Griya Bandung Indah",
      },
    ])
  // get data user static end


  // update profile static start
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

      const form = new URLSearchParams();

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

      if(dataProfile && dataProfile.password !== event.target.password.value){
        form.append("password", password);
      }

      try {
        const {data} = await axios.patch('http://localhost:8888/users/237', form.toString())
        setDataProfile(data.results)
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
  // update profile static end

  return (
    <div className="flex flex-col items-center gap-6 sm:gap-12">
      <Navbar />

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
                  value={dataProfile.fullName}
                />
                <InputForm
                  profile={true}
                  name="email"
                  label="Email"
                  type="email"
                  placeholder="Enter Your Email"
                  value={dataProfile.email}
                />
                <InputForm
                  profile={true}
                  name="phone"
                  label="Phone"
                  type="text"
                  placeholder="Enter Your Phone Number"
                  value={dataProfile.phoneNumber}
                />
                <InputForm
                  profile={true}
                  name="password"
                  label="Password"
                  type="password"
                  placeholder="Enter Your Password"
                  value={dataProfile.password}
                  passProfile={true}
                />
                <InputForm
                  profile={true}
                  name="address"
                  label="Address"
                  type="text"
                  placeholder="Enter Your Address"
                  value={dataProfile.address}
                />
              </>
            )
            // inputForm.map((item, index) => (
            //   <InputForm
            //   key={index}
            //   profile={true}
            //   name={item.name}
            //   label={item.label}
            //   type={item.type}
            //   placeholder={item.placeholder}
            //   value={item.value}
            //   passProfile={item.passProfile}
            //   />
            // ))
          }
          <Button
            destination="#"
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
