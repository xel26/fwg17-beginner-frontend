import Button from "./Button";
import InputForm from "../components/InputForm";
import CupCoffee from '../assets/media/cup-coffe-icon.png'
import TextLogo from "../assets/media/text-logo.png"
import { Link } from "react-router-dom";
import facebook from '../assets/media/facebook-logo.png'
import google from '../assets/media/google-logo.png'

const ButtonAuth = ({value}) => {
  return (
    <Link to="#"
      className="w-fit sm:flex-1 flex justify-center items-center gap-4 p-3 sm:p-2 rounded shadow-md hover:shadow-none transition-all duration-500"
    >
      <img src={value == "Facebook" ? facebook : google} className="h-6"/>
      <p className="text-[#4f5665] text-semibold hidden sm:block">{value}</p>
    </Link>
  );
};

const FormAuth = ({ type }) => {
  return (
    <div className="flex flex-col w-11/12">
      <div className="flex items-center gap-4 mb-8">
        <div>
          <img src={CupCoffee} />
        </div>
        <div>
          <img src={TextLogo} />
        </div>
      </div>

      <div className="flex flex-col gap-5">
        <h1 className="text-[#8e6447] font-semibold text-xl">{type}</h1>
        <p className="text-[#4f5665]">
          {type == "Register" || type == "Login"
            ? "Fill out the form correctly"
            : "We will send new password to your email"}
        </p>

        <form id="form" className="flex flex-col gap-5">
          {type == "Register" ? (
            <>
              <InputForm
                name="full-name"
                label="Full Name"
                type="text"
                placeholder="Enter Your Full Name"
              />
              <InputForm
                name="email"
                label="Email"
                type="email"
                placeholder="Enter Your Email"
              />
              <InputForm
                name="password"
                label="Password"
                type="password"
                placeholder="Enter Your Password"
              />
              <InputForm
                name="confirm-password"
                label="Confirm Password"
                type="password"
                placeholder="Enter Your Password Again"
              />
            </>
          ) : type == "Login" ? (
            <>
              <InputForm
                name="email"
                label="Email"
                type="email"
                placeholder="Enter Your Email"
              />
              <InputForm
                name="password"
                label="Password"
                type="password"
                placeholder="Enter Your Password"
              />
            </>
          ) : (
            <InputForm
              name="email"
              label="Email"
              type="email"
              placeholder="Enter Your Email"
            />
          )}

          {
            type == "Login" ? (
              <Link to="/forgot-password" class="text-[#FF8906] flex justify-end text-sm">Lupa Password?</Link>
            ): ''
          }

          <Button
            destination={
              type == "Register"
                ? "/login"
                : type == "Login"
                ? "/products"
                : "/login"
            }
            value={
              type == "Register"
                ? "Register"
                : type == "Login"
                ? "Login"
                : "Submit"
            }
            py="2"
          />
        </form>

        {type == "Register" || type == "Login" ? (
          <>
            <div className="flex justify-center">
              <p className="text-[#4f5665] text-sm">
                {type == "Register"
                  ? "Have An Account?"
                  : "Not Have An Account?"}
              </p>
              <a
                className="text-[#ff8906] text-sm"
                href={type == "Register" ? "/login" : "/register"}
              >
                {type == "Register" ? "Login" : "Register"}
              </a>
            </div>

            <div className="grid grid-cols-3">
              <hr className="border-[0.5px] border-[#dedede] h-0" />
              <p className="text-[#aaaaaa] text-xs text-center">Or</p>
              <hr className="border-[0.5px] border-[#dedede] h-0" />
            </div>

            <div className="flex justify-center sm:justify-between gap-10 sm:gap-4">
              <ButtonAuth value="Google" />
              <ButtonAuth value="Facebook" />
            </div>
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default FormAuth;
