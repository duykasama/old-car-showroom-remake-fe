import { useState } from "react";
import axios from "../../lib/api/axios";
import fetchPosts from "../../lib/api/fetchPosts";

const AUTH_END_POINT = "/auth";

function Login() {
  const [result, setResult] = useState("");

  var formData = new FormData();
  formData.append("email", "email@gmail.com");
  formData.append("password", "123");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        AUTH_END_POINT,
        // JSON.stringify({ email: "email@gmail.com", password: "123" }),
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        }
      );
    //   setResult(response?.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = async () => {
    setResult(await fetchPosts());
  }

console.log(result);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">
          Email
          <input id="email" type="email" />
        </label>
        <br />
        <label htmlFor="pass">
          Password
          <input id="pass" type="password" />
        </label>
        <br />
        <button>Login</button>
      </form>
      <button onClick={handleClick}>Fetch Posts</button>
      {result && result.map(r => <div>{r.id}</div>)}
    </>
  );
}

export default Login;
