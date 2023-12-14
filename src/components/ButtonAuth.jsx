import { Link } from "react-router-dom";

const ButtonAuth = ({value}) => {
  return (
    <Link to="#"
      className="flex justify-center items-center gap-4 w-2/4 p-2 rounded shadow-md hover:shadow-none transition-all duration-500"
    >
      <img src="../assets/media/facebook-logo.png"/>
      <p className="text-[#4f5665] text-semibold">{value}</p>
    </Link>
  );
};

export default ButtonAuth;
