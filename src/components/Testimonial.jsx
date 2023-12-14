import { FaStar } from "react-icons/fa";
import PageIndicator from "../components/PageIndicator";
import CustomerImage from "../assets/media/home-customer-image1.jpg";
import ButtonSwipe from "../components/ButtonSwipe";

const Testimonial = ({ customerName, role, message, rating }) => {
  const stars = [];
  for (let i = 1; i <= parseInt(rating); i++) {
    stars.push(i);
  }
  return (
    <div className="flex flex-col sm:flex-row w-5/6 gap-4">
      <div className="flex flex-col items-center gap-4">
        <p className="text-white sm:hidden">TESTIMONIAL</p>
        <img className="w-full sm:w-[30rem]" src={CustomerImage} />
      </div>

      <div className="flex flex-col gap-4 w-full sm:w-[30rem]">
        <p className="text-white hidden sm:block">TESTIMONIAL</p>
        <h1 className="text-white text-2xl sm:text-4xl border-l-4 border-[#FF8906] pl-4">
          {customerName}
        </h1>
        <p className="text-[#FF8906]">{role}</p>
        <p className="text-white text-sm sm:text-base">{message}</p>
        <div className="flex items-center gap-4">
          <div className="flex gap-4">
            {stars.map((index) => (
              <FaStar key={index} color="orange" />
            ))}
          </div>
          <p className="text-white" id="rating-number">
            {rating}.0
          </p>
        </div>

        <div className="flex gap-2">
          <ButtonSwipe />
        </div>
        <PageIndicator />
      </div>
    </div>
  );
};

export default Testimonial;
