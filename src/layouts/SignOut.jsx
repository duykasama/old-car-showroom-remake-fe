import { Navigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../context/AuthProvider";

function SignOut() {
  const { setAuth } = useContext(AuthContext);
  setAuth({});
  return <Navigate to="/" replace />;
}

export default SignOut;
