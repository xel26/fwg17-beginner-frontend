import { Link } from "react-router-dom";

const FooterLink = ({destination1, text1, destination2, text2, destination3, text3, destination4, text4, destination5, text5}) => {
  return (
    <div className="flex flex-col gap-4 text-sm sm:text-base">
      <p className="font-semibold">Product</p>
      <div className="flex flex-col gap-2 text-[#4F5665]">
        <Link to={destination1}>{text1}</Link>
        <Link to={destination2}>{text2}</Link>
        <Link to={destination3}>{text3}</Link>
        <Link to={destination4}>{text4}</Link>
        <Link to={destination5}>{text5}</Link>
      </div>
    </div>
  );
};

export default FooterLink