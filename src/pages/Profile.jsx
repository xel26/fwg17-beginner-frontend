import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import InputForm from "../components/InputForm";
import Button from "../components/Button"
import { useEffect, useState } from "react";
import axios from "axios";

const Profile = () => {


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

  return (
    <div className="flex flex-col items-center gap-6 sm:gap-12">
      <Navbar />

      <h1 className="w-5/6 mt-20 sm:mt-24 text-3xl font-bold">Profile</h1>

      <form className="w-5/6 flex flex-col sm:flex-row gap-4">
        <div className="w-full sm:w-1/5 border border-[#E8E8E8] h-fit flex flex-col items-center p-4 gap-3">
          <div className="flex flex-col items-center">
            <h2 className="font-bold">Ghaluh Wizard</h2>
            <p className="text-xs text-[#4F5665]">ghaluhwizz@gmail.com</p>
          </div>
          <div>
            <img
              className="rounded-full w-28 h-28"
              src="https://images.pexels.com/photos/1142948/pexels-photo-1142948.jpeg?auto=compress&cs=tinysrgb&w=600"
              id="photo"
            ></img>
          </div>className
          <button className="text-xs bg-[#FF8906] w-full rounded p-2 transition-all active:scale-95">
            Upload New Photo
          </button>
          <p className="text-xs text-[#4F5665]">
            Since <span className="font-bold">20 January 2022</span>
          </p>
        </div>

        <div className="w-full sm:flex-1 border border-[#E8E8E8] p-4 flex flex-col gap-6 outline-none">
          {
            inputForm.map((item, index) => (
              <InputForm
              key={index}
              profile={true}
              name={item.name}
              label={item.label}
              type={item.type}
              placeholder={item.placeholder}
              value={item.value}
              passProfile={item.passProfile}/>
            ))
          }
          <Button destination="#" value="Submit" py="2"/>
        </div>
      </form>

      <Footer />
    </div>
  );
};

export default Profile;
