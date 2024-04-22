import { FaStar } from "react-icons/fa"
import propTypes from "prop-types"

const Rating = ({rating, color}) => {
    const stars = []
    for (let i = 1; i <= 5; i++) {
      stars.push(i)
    }

    return (
        <div className="flex items-center gap-2 sm:gap-4">
        <div className="flex gap-1 sm:gap-2">
          {stars.map((index) => (
            <FaStar key={index} color={index <= parseInt(rating) ? 'orange' : '#a7a9ad'} className="text-xs sm:text-base hover:animate-spin"/>
          ))}
        </div>
        <p className={`text-xs sm:text-base ${color ? 'text-white' : 'text-[#4F5665]'}`} id="rating-number">
          {rating}.0
        </p>
      </div>
    )
}


Rating.propTypes = {
  rating: propTypes.number,
  color: propTypes.string
}


export default Rating