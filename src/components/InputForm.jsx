import { useState } from "react";
import { FiUser, FiMail, FiMapPin, FiLock, FiPhoneCall, FiEye, FiEyeOff } from "react-icons/fi";
import { Link } from "react-router-dom";

const InputForm = ({ name, label, type, placeholder, defaultValue, passProfile, profile, onChange}) => {
  const [show, setShow] = useState(false)

  const passReveal = () => {
    setShow(!show)
  }

  return (
    <label htmlFor={name} className="flex flex-col gap-2">
      {passProfile ? (
        <div className="flex justify-between items-center">
          <div className="text-black font-semibold text-sm">{label}</div>
          <Link to="/forgot-password" className="text-[#3F2305] text-xs sm:text-sm">
            Set New Password
          </Link>
        </div>
      ) : (
        <div className="text-black font-semibold text-sm">{label}</div>
      )}
      
      <div className="flex border border-[#dedede] rounded-md p-2 gap-3 items-center">
        {name == "full-name" || name == "fullName"  ? (
          <FiUser color="#4F5665" />
        ) : name == "email" ? (
          <FiMail color="#4F5665" />
        ) : name == "address" ? (
          <FiMapPin color="#4F5665" />
        ) : name == "password" || name == "confirm-password" || name == "confirmPassword" ? (
          <FiLock color="#4F5665" />
        ) : (
          <FiPhoneCall color="#4F5665" />
        )}

        {
          profile ? (
            <input
            className="w-full outline-none text-xs sm:text-sm bg-transparent"
            id={name}
            name={name}
            type={type === 'password' && show ? 'text' : type}
            placeholder={placeholder}
            defaultValue={defaultValue}
          />
          ): (
            <input
            className="w-full outline-none text-xs sm:text-sm bg-transparent"
            id={name}
            name={name}
            type={type === 'password' && show ? 'text' : type}
            placeholder={placeholder}
            onChange={onChange}
          />
          )
        }

        {(name == "password" || name == "confirm-password" || name == "confirmPassword") && show ?
          <FiEyeOff onClick={passReveal} className="text-xl text-[#4F5665]"/> :
          (name == "password" || name == "confirm-password" || name == "confirmPassword") && !show ?
          <FiEye  onClick={passReveal} className="text-xl text-[#4F5665]"/> : ''
        }
      </div>
    </label>
  );
}

export default InputForm;
