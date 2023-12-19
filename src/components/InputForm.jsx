import { useState } from "react";
import { FiUser, FiMail, FiMapPin, FiLock, FiPhoneCall, FiEye, FiEyeOff } from "react-icons/fi";
import { Link } from "react-router-dom";

const InputForm = ({ name, label, type, placeholder, value, passProfile, profile }) => {
  const [show, setShow] = useState(false)
  const [inputValue, setInputValue] = useState(value)

  const passReveal = () => {
    setShow(!show)
  }

  const handleInputChange = (event) => {
    setInputValue(event.target.value)
  }

  return (
    <label htmlFor={name} className="flex flex-col gap-2">
      {passProfile ? (
        <div className="flex justify-between items-center">
          <div className="text-[#0b132a] font-semibold text-sm">{label}</div>
          <Link to="/forgot-password" className="text-[#FF8906] text-xs sm:text-sm">
            Set New Password
          </Link>
        </div>
      ) : (
        <div className="text-[#0b132a] font-semibold text-sm">{label}</div>
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
            value={inputValue}
            onChange={handleInputChange}
          />
          ): (
            <input
            className="w-full outline-none text-xs sm:text-sm bg-transparent"
            id={name}
            name={name}
            type={type === 'password' && show ? 'text' : type}
            placeholder={placeholder}
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
};

export default InputForm;
