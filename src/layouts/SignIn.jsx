import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import {
  faArrowLeftLong,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";

function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const passwordRef = useRef(null);

  const handleFormSubmit = (event) => {
    event.preventDefault();
  };

  const revealPassword = () => {
    setShowPassword((prevState) => !prevState);
    if (!showPassword) {
      passwordRef.current.type = "text";
    } else {
      passwordRef.current.type = "password";
    }
  };
  return (
    <>
      <main className="h-screen flex flex-col justify-center items-center">
        <div className="grid grid-cols-5 border rounded-md w-3/4 shadow-lg shadow-gray-600">
          <div className="sign-in-bg col-span-3"></div>
          <form
            onSubmit={handleFormSubmit}
            className="p-10 flex flex-col gap-8 bg-slate-200 col-span-2"
          >
            <h1 className="text-4xl font-bold text-center text-red-500">
              Sign in to TimelessRides
            </h1>

            <div className="flex flex-col justify-center items-center gap-6 ">
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
              <div className="flex justify-between items-center  w-3/4">
                <div className="flex justify-between items-center gap-1">
                  <input type="checkbox" name="rememberMe" id="rememberMe" />
                  <label htmlFor="rememberme" className="text-sm font-semibold">
                    Remember me
                  </label>
                </div>
                <Link className="text-sm text-blue-500">Forgot password?</Link>
              </div>
            </div>

            <div className="flex justify-center items-center">
              <button className="py-2 px-5 rounded bg-red-500 text-white text-lg font-semibold hover:scale-110 hover:shadow-gray-500 shadow-md transition">
                Sign in
              </button>
            </div>
            <div className="flex justify-center items-center text-sm">
              <span>Don't have an account? &nbsp;</span>
              <Link to="/sign-up" className="text-blue-500">
                Sign up
              </Link>
            </div>
            <div>
              <p className="text-center mb-2 italic font-semibold">
                Or continue with
              </p>
              <div className="flex justify-center items-center gap-4">
                <FontAwesomeIcon
                  icon={faGoogle}
                  className="text-3xl text-red-600 border p-2 rounded-md bg-gray-300 cursor-pointer hover:scale-110 transition"
                />
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="text-3xl text-blue-600 border p-2 rounded-md bg-gray-300 cursor-pointer hover:scale-110 transition"
                />
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div
                onClick={() => history.back()}
                className="text-black font-semibold flex justify-center items-center gap-2 hover:scale-110 transition cursor-pointer"
              >
                <FontAwesomeIcon icon={faArrowLeftLong} />
                <span>Go back</span>
              </div>
            </div>
          </form>
        </div>
      </main>
    </>
  );
}

export default SignIn;
