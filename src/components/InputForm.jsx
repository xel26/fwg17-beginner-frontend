import { useState } from "react"
import { FiUser, FiMail, FiMapPin, FiLock, FiPhoneCall, FiEye, FiEyeOff, FiCode } from "react-icons/fi"
import { Link } from "react-router-dom"
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const InputForm = ({ name, label, type, placeholder, defaultValue, passProfile, profile, onChange, creatPass}) => {
  const [show, setShow] = useState(false)

  const passReveal = () => {
    setShow(!show)
  }

  const [genPass, setGenPass] = useState()

  const generatePassword = () => {
    const lowerAlphabet = "abcdefghijklmnopqrstuvwxyz";
    const upperAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numeric = "0123456789";
    const symbol = "!@#$%&()[]|/";
  
    const data = lowerAlphabet + upperAlphabet + numeric + symbol;
    let generator = "";
    for (let index = 0; index <= 16; index++) {
      generator += data[Math.floor((Math.random() * data.length))];
    }
    setGenPass(generator)
  }

  return (
    <label htmlFor={name} className="flex flex-col gap-2">
      {passProfile ? (
        <div className="flex justify-between items-center">
          <div className="text-black font-semibold text-sm">{label}</div>
          <Link
            to="/forgot-password"
            className="text-[#3F2305] text-xs sm:text-sm"
          >
            Set New Password
          </Link>
        </div>
      ) : creatPass ? (
        <div className="flex justify-between items-center">
          <div className="text-black font-semibold text-sm">{label}</div>
          <button
            onClick={() => generatePassword()}
            className="text-[#3F2305] text-xs sm:text-sm"
          >
            Generate Password
          </button>
        </div>
      ) : (
        <div className="text-black font-semibold text-sm">{label}</div>
      )}

      <div className="flex border border-[#dedede] rounded-md p-2 gap-3 items-center">
        {name == "full-name" || name == "fullName" ? (
          <FiUser color="#4F5665" />
        ) : name == "email" ? (
          <FiMail color="#4F5665" />
        ) : name == "address" ? (
          <FiMapPin color="#4F5665" />
        ) : name == "password" ||
          name == "newPassword" ||
          name == "confirmPassword" ? (
          <FiLock color="#4F5665" />
        ) : name == "otp" ? (
          <FiCode />
        ) : (
          <FiPhoneCall color="#4F5665" />
        )}

        {profile ? (
          <input
            className="w-full outline-none text-xs sm:text-sm bg-transparent"
            id={name}
            name={name}
            type={type}
            placeholder={placeholder}
            defaultValue={defaultValue || undefined}
            disabled={name === "password" ? true : false}
          />
        ) : onChange ? (
          <input
            className="w-full outline-none text-xs sm:text-sm bg-transparent"
            id={name}
            name={name}
            type={type === "password" && show ? "text" : type}
            placeholder={placeholder}
            onChange={onChange}
          />
        ): creatPass ? (
          <input
          className="w-full outline-none text-xs sm:text-sm bg-transparent"
          id={name}
          name={name}
          type={type === "password" && show ? "text" : type}
          placeholder={placeholder}
          maxLength={name == "otp" ? 6 : undefined}
          minLength={
            name == "otp" ||
            name == "password" ||
            name == "newPassword" ||
            name == "confirmPassword"
              ? 6
              : undefined
          }
          defaultValue={genPass}
          required
        />
        ) : (
          <input
            className="w-full outline-none text-xs sm:text-sm bg-transparent"
            id={name}
            name={name}
            type={type === "password" && show ? "text" : type}
            placeholder={placeholder}
            maxLength={name == "otp" ? 6 : undefined}
            minLength={
              name == "otp" ||
              name == "password" ||
              name == "newPassword" ||
              name == "confirmPassword"
                ? 6
                : undefined
            }
            required
          />
        )}

        {(name == "password" ||
          name == "newPassword" ||
          name == "confirmPassword") &&
        show &&
        !profile ? (
          <FiEyeOff onClick={passReveal} className="text-xl text-[#4F5665]" />
        ) : (name == "password" ||
            name == "newPassword" ||
            name == "confirmPassword") &&
          !show &&
          !profile ? (
          <FiEye onClick={passReveal} className="text-xl text-[#4F5665]" />
        ) : (
          ""
        )}
      </div>
    </label>
  )
}

export default InputForm
