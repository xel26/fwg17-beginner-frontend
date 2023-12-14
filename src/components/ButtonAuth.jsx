import { Link } from "react-router-dom";
import facebook from '../assets/media/facebook-logo.png'
import google from '../assets/media/google-logo.png'

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

export default ButtonAuth;
