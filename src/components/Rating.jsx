import { FaStar } from "react-icons/fa";

const Rating = ({rating, color}) => {
    const stars = [];
    for (let i = 1; i <= parseInt(rating); i++) {
      stars.push(i);
    }

    return (
        <div className="flex items-center gap-2 sm:gap-4">
        <div className="flex gap-4">
          {stars.map((index) => (
            <FaStar key={index} color="orange" />
          ))}
        </div>
        <p className={`${color ? 'text-white' : 'text-[#4F5665]'}`} id="rating-number">
          {rating}.0
        </p>
      </div>
    )
}

export default Rating