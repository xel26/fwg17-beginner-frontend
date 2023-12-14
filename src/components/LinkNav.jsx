import { Link } from "react-router-dom";

const LinkNav = ({mobile, destination, value}) => {
    return (
        <Link
        to={destination}
        className={`focus:border-b-2 focus:border-[#ff8906] text-white ${!mobile ? 'hidden sm:block' : ''}`}
      >
        {value}
      </Link>
    )
}

export default LinkNav