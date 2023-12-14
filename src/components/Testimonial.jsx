import PageIndicator from "../components/PageIndicator";
import CustomerImage from "../assets/media/home-customer-image1.jpg";
import ButtonSwipe from "../components/ButtonSwipe";
import Rating from "./Rating";

const Testimonial = ({ customerName, role, message, rating}) => {
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
        <Rating rating={rating} color/>

        <div className="flex gap-2">
          <ButtonSwipe />
        </div>
        <PageIndicator />
      </div>
    </div>
  );
};

export default Testimonial;
