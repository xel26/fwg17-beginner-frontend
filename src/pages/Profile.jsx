import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Profile = () => {
  return (
    <wrap className="flex flex-col items-center gap-6 sm:gap-12">
      <Navbar />

      <h1 className="w-5/6 mt-20 sm:mt-24 text-3xl font-bold">Profile</h1>

      <form className="w-5/6 flex flex-col sm:flex-row gap-4">
        <div className="w-full sm:w-1/5 border border-[#E8E8E8] h-fit flex flex-col items-center p-4 gap-3">
          <div className="flex flex-col items-center">
            <h2 className="font-bold">Ghaluh Wizard</h2>
            <p className="text-xs text-[#4F5665]">ghaluhwizz@gmail.com</p>
          </div>
          <div>
            <img
              className="rounded-full w-28 h-28"
              src="https://images.pexels.com/photos/1142948/pexels-photo-1142948.jpeg?auto=compress&cs=tinysrgb&w=600"
              id="photo"
            ></img>
          </div>className
          <button className="text-xs bg-[#FF8906] w-full rounded p-2">
            Upload New Photo
          </button>
          <p className="text-xs text-[#4F5665]">
            Since <span className="font-bold">20 January 2022</span>
          </p>
        </div>

        <div className="w-full sm:flex-1 border border-[#E8E8E8] p-4 flex flex-col gap-6 outline-none">
          <div className="flex flex-col gap-1">
            <label className="font-bold text-sm" for="full-name">
              Full Name
            </label>
            <div className="flex border border-[#DEDEDE] rounded-md text-[#4F5665] p-2 gap-2">
              <i className="h-5" data-feather="user"></i>
              <input
                className="text-xs w-full outline-none"
                id="full-name"
                type="text"
                placeholder="Enter Your Full Name"
                value="Ghaluh Wizard"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <label className="font-bold text-sm" for="email">
              Email
            </label>
            <div className="flex border border-[#DEDEDE] rounded-md text-[#4F5665] p-2 gap-2">
              <i className="h-4" data-feather="mail"></i>
              <input
                className="text-xs w-full outline-none"
                id="email"
                type="email"
                placeholder="Enter Your Email"
                value="ghaluhwizz@gmail.com"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <label className="font-bold text-sm" for="phone">
              Phone
            </label>
            <div className="flex  border border-[#DEDEDE] rounded-md text-[#4F5665] p-2 gap-2">
              <i className="h-4" data-feather="phone-call"></i>
              <input
                className="text-xs w-full outline-none"
                id="phone"
                type="text"
                placeholder="Enter Your Phone Number"
                value="082116304338"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <div className="flex justify-between items-center">
              <label className="font-bold text-sm" for="password">
                Password
              </label>
              <a className="text-[#FF8906] text-xs" href="#">
                Set New Password
              </a>
            </div>
            <div className="flex border border-[#DEDEDE] rounded-md text-[#4F5665] p-2 gap-2">
              <i className="h-4" data-feather="lock"></i>
              <input
                className="text-xs w-full outline-none"
                id="password"
                type="password"
                placeholder="Enter Your Password"
                value="1234567890"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <label className="font-bold text-sm" for="address">
              Address
            </label>
            <div className="flex border border-[#DEDEDE] rounded-md text-[#4F5665] p-2 gap-2">
              <i className="h-4" data-feather="map-pin"></i>
              <input
                className="text-xs w-full outline-none"
                id="address"
                type="text"
                placeholder="Enter Your Adress"
                value="Griya Bandung Indah"
              />
            </div>
          </div>

          <button
            className="w-full bg-[#FF8906] rounded text-xs p-2"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>

      <Footer />
    </wrap>
  );
};

export default Profile;
