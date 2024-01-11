import PageIndicator from "../components/PageIndicator";
import CustomerImage from "../assets/media/home-customer-image1.jpg";
import ButtonSwipe from "../components/ButtonSwipe";
import Rating from "./Rating";

const Testimonial = ({ fullName, role, feedback, rate, image, handleNextPage, handlePrevPage, nextDisable, prevDisable, totalPage, currentPage}) => {
  return (
    <div className="flex flex-col sm:flex-row w-5/6 gap-4">
      <div className="flex flex-col items-center gap-4">
        <p className="text-white sm:hidden">TESTIMONIAL</p>
        <img className="w-full sm:w-[30rem] h-72 sm:h-80 object-cover object-center" src={image ? `http://localhost:8888/uploads/testimonial/${image}` : CustomerImage} />
      </div>

      <div className="flex flex-col gap-4 w-full sm:w-[30rem]">
        <p className="text-white hidden sm:block">TESTIMONIAL</p>
        <h1 className="text-white text-2xl sm:text-4xl border-l-4 border-[#A87C7C] pl-4">
          {fullName}
        </h1>
        <p className="text-[#A87C7C]">{role} Coffee Shop</p>
        <p className="flex-1 flex items-center text-white text-sm sm:text-base">{feedback}</p>
        <Rating rating={rate} color/>

        <div className="flex items-center gap-2">
          <ButtonSwipe handleNextPage={handleNextPage} handlePrevPage={handlePrevPage} nextDisable={nextDisable} prevDisable={prevDisable}/>
        </div>
        <PageIndicator totalPage={totalPage} currentPage={currentPage}/>
      </div>
    </div>
  );
};

export default Testimonial;
