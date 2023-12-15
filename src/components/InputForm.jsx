import { FiUser, FiMail, FiMapPin, FiLock, FiPhoneCall } from "react-icons/fi";
import { Link } from "react-router-dom";

const InputForm = ({ name, label, type, placeholder, value, passProfile, profile }) => {
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
        {name == "full-name" ? (
          <FiUser color="#4F5665" />
        ) : name == "email" ? (
          <FiMail color="#4F5665" />
        ) : name == "address" ? (
          <FiMapPin color="#4F5665" />
        ) : name == "password" || name == "confirm-password" ? (
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
            type={type}
            placeholder={placeholder}
            value={value}
          />
          ): (
            <input
            className="w-full outline-none text-xs sm:text-sm bg-transparent"
            id={name}
            name={name}
            type={type}
            placeholder={placeholder}
          />
          )
        }
      </div>
    </label>
  );
};

export default InputForm;
