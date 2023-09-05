import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import {
  faArrowLeftLong,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";

function SignUp() {
  const passwordRef = useRef(null);
  const [showPassword, setShowPassword] = useState();

  const handleFormSubmit = (event) => {
    event.preventDefault();
  };

  const revealPassword = () => {};
  return (
    <main className="h-screen flex flex-col justify-center items-center">
      <div className="grid grid-cols-5 border rounded-md w-3/4 shadow-lg shadow-gray-600">
        <form
          onSubmit={handleFormSubmit}
          className="p-10 flex flex-col gap-8 bg-slate-200 col-span-2"
        >
          <h1 className="text-4xl font-bold text-center text-red-500">
            Sign up to TimelessRides
          </h1>

          <div className="flex flex-col justify-center items-center gap-6 ">
            <div className="flex flex-col gap-1 w-3/4">
              <label htmlFor="name" className="font-semibold">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="rounded p-1"
              />
            </div>
            <div className="flex flex-col gap-1 w-3/4">
              <label htmlFor="email" className="font-semibold">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="rounded p-1"
              />
            </div>
            <div className="flex flex-col gap-1  w-3/4">
              <label htmlFor="password" className="font-semibold">
                Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  name="password"
                  id="password"
                  ref={passwordRef}
                  className="rounded p-1 w-full"
                />
                <FontAwesomeIcon
                  onClick={revealPassword}
                  icon={showPassword ? faEye : faEyeSlash}
                  className="absolute top-2 right-4"
                />
              </div>
            </div>
            <div className="flex flex-col gap-1  w-3/4">
              <label htmlFor="passwordConfirm" className="font-semibold">
                Confirm password
              </label>
              <div className="relative">
                <input
                  type="password"
                  name="passwordConfirm"
                  id="passwordConfirm"
                  ref={passwordRef}
                  className="rounded p-1 w-full"
                />
                <FontAwesomeIcon
                  onClick={revealPassword}
                  icon={showPassword ? faEye : faEyeSlash}
                  className="absolute top-2 right-4"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center">
            <button className="py-2 px-5 rounded bg-red-500 text-white text-lg font-semibold hover:scale-110 hover:shadow-gray-500 shadow-md transition">
              Sign up
            </button>
          </div>
          <div className="flex justify-center items-center text-sm">
            <span>Already have an account? &nbsp;</span>
            <Link to="/sign-in" className="text-blue-500">
              Sign in
            </Link>
          </div>

          
        </form>
        <div className="sign-in-bg col-span-3"></div>
      </div>
    </main>
  );
}

export default SignUp;
