import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import {
  faArrowLeftLong,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";

function Login() {
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
        <div className="grid grid-cols-2 border rounded-md w-3/4 shadow-lg shadow-gray-600">
          <div className="bg-red-500 sign-in-bg"></div>
          <form
            onSubmit={handleFormSubmit}
            className="p-10 flex flex-col gap-8 bg-slate-200"
          >
            <h1 className="text-4xl font-bold text-center">Sign in</h1>
            <div className="flex justify-center items-center gap-4">
              <FontAwesomeIcon
                icon={faGoogle}
                className="text-3xl text-red-600 border p-2 rounded-md bg-gray-300"
              />
              <FontAwesomeIcon
                icon={faFacebook}
                className="text-3xl text-blue-600 border p-2 rounded-md bg-gray-300"
              />
            </div>
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
            <div className="flex justify-center items-center">
              <button
                onClick={() => history.back()}
                type="button"
                className="py-2 px-4 bg-slate-800 rounded text-white font-semibold flex items-center gap-2 hover:scale-110 hover:shadow-slate-700 shadow-md transition"
              >
                <FontAwesomeIcon icon={faArrowLeftLong} />
                <span>Go back</span>
              </button>
            </div>
          </form>
        </div>
      </main>
    </>
  );
}

export default Login;
