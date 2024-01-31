import Button from "./Button";
import InputForm from "../components/InputForm";
import { Link } from "react-router-dom";
import facebook from '../assets/media/facebook-logo.png'
import google from '../assets/media/google-logo.png'
import { useState } from "react";
import { FiCoffee } from "react-icons/fi";

const ButtonAuth = ({value}) => {
  return (
    <Link to="#"
      className="w-fit sm:flex-1 flex justify-center items-center gap-4 p-3 sm:p-2 rounded shadow-md hover:shadow-none transition-all duration-500"
    >
      <img src={value == "Facebook" ? facebook : google} className="h-6"/>
      <p className="text-[#4f5665] text-semibold hidden sm:block">{value}</p>
    </Link>
  );
};


const FormAuth = ({ handleAuth, type }) => {
  const [register, setRegister] = useState([
    {
      name:"fullName",
      label:"Full Name",
      type:"text",
      placeholder:"Enter Your Full Name"
    },
    {
      name:"email",
      label:"Email",
      type:"email",
      placeholder:"Enter Your Email"
    },
    {
      name:"password",
      label:"Password",
      type:"password",
      placeholder:"Enter Your Password"
    },
    {
      name:"confirmPassword",
      label:"Confirm Password",
      type:"password",
      placeholder:"Enter Your Password Again"
    }
  ])

  const [login, setLogin] = useState([
    {
      name:"email",
      label:"Email",
      type:"email",
      placeholder:"Enter Your Email"
    },
    {
      name:"password",
      label:"Password",
      type:"password",
      placeholder:"Enter Your Password"
    }
  ])

  const [forgotPass, setForgotPass] = useState([
    {
      name:"email",
      label:"Email",
      type:"email",
      placeholder:"Enter Your Email"
    }
  ])

  const [createNewPassword, setCreateNewPassword] = useState([
    {
      name:"otp",
      label:"OTP",
      type:"text",
      placeholder:"Enter OTP code"
    },
    {
      name:"newPassword",
      label:"New Password",
      type:"password",
      placeholder:"Enter New Password"
    },
    {
      name:"confirmPassword",
      label:"Confirm Password",
      type:"password",
      placeholder:"Enter Confirm Password"
    },
  ])

  return (
    <div className="flex flex-col w-11/12">
      <div className="flex items-center gap-2 mb-6">
        <div className="text-[#3E3232] text-2xl sm:text-3xl">
          <FiCoffee />
        </div>
        <div className="font-bold text-[#3E3232] text-sm sm:text-base">
          <p>Coffee Shop</p>
        </div>
      </div>

      <div className="flex flex-col gap-5">
        <h1 className="text-[#7E6363] font-semibold text-lg sm:text-xl">{type}</h1>
        <p className="text-[#4f5665] text-sm sm:text-base">
          {type == "Register" || type == "Login" || type == "Create New Password"
            ? "Fill out the form correctly"
            : "We will send OTP code to your email"}
        </p>

        <form onSubmit={handleAuth} className="flex flex-col gap-5">
          {type == "Register" ? (
            register.map((item, index) => (
              <InputForm
                key={index}
                name={item.name}
                label={item.label}
                type={item.type}
                placeholder={item.placeholder}
              />
            ))
          ) : type == "Login" ? (
            login.map((item, index) => (
              <InputForm
                key={index}
                name={item.name}
                label={item.label}
                type={item.type}
                placeholder={item.placeholder}
              />
            ))
          ) : type == "Forgot Password" ? (
            forgotPass.map((item, index) => (
              <InputForm
                key={index}
                name={item.name}
                label={item.label}
                type={item.type}
                placeholder={item.placeholder}
              />
            ))
          ) : (
            createNewPassword.map((item, index) => (
              <InputForm
              key={index}
              name={item.name}
              label={item.label}
              type={item.type}
              placeholder={item.placeholder}
            />
            ))
          )}

          {
            type == "Login" ? (
              <Link to="/forgot-password" className="text-[#7E6363] flex justify-end text-sm">Forgot Password?</Link>
            ): type == "Create New Password" ? (
              <div className="flex justify-end text-sm">
              <p>Did not receive the email?</p>
              <Link to="/forgot-password" className="text-[#7E6363]">Resend</Link>
              </div>
            ): ''
          }

          <Button
            value={
              type == "Register"
                ? "Register"
                : type == "Login"
                ? "Login"
                : "Submit"
            }
            py="2"
          />
        </form>

        {type == "Register" || type == "Login" ? (
          <>
            <div className="flex justify-center">
              <p className="text-[#4f5665] text-sm">
                {type == "Register"
                  ? "Have An Account?"
                  : "Not Have An Account?"}
              </p>
              <Link
                className="text-[#7E6363] text-sm"
                to={type == "Register" ? "/login" : "/register"}
              >
                {type == "Register" ? "Login" : "Register"}
              </Link>
            </div>

            <div className="grid grid-cols-3">
              <hr className="border-[0.5px] border-[#dedede] h-0" />
              <p className="text-[#aaaaaa] text-xs text-center">Or</p>
              <hr className="border-[0.5px] border-[#dedede] h-0" />
            </div>

            <div className="flex justify-center sm:justify-between gap-10 sm:gap-4">
              <ButtonAuth value="Google" />
              <ButtonAuth value="Facebook" />
            </div>
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default FormAuth;
