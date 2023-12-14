import { Link } from "react-router-dom";

const Button = ({destination, value, py}) => {
  return (
<Link to={destination} className={`bg-[#FF8906] w-full rounded-md text-xs sm:text-sm py-${py} active:scale-95 transition-all flex justify-center`}>{value}</Link>
  );
};

export default Button