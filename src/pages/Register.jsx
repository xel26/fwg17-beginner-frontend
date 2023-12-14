import FormAuth from '../components/FormAuth'

const Register = () => {
  return (
    <wrap className="flex m-0 p-0 h-[46rem] 2xl:h-screen">
      <div
        className="hidden sm:block sm:w-2/5 md:w-2/6 lg:w-1/4
          bg-[url('../assets/media/bg-register.jpg')] bg-center bg-cover"
      ></div>

      <div className="flex flex-1 items-center justify-center">
          <FormAuth type="Register"/>
      </div>
    </wrap>
  );
};

export default Register;
