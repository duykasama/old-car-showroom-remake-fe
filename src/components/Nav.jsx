import { Link, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useState } from "react";

function Nav() {
  const { auth } = useAuth();
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState(location.pathname);

  return (
    <nav>
      <ul className="flex justify-center items-center text-xl font-bold text-gray-600 gap-8">
        <li
          onClick={() => setCurrentPage("/home")}
          className={`active:rounded-md active:bg-gray-300 active:border-none py-1 px-2 hover:-translate-y-1 transition${
            currentPage == "/home" ? " border-b-4 border-red-500" : ""
          }`}
        >
          <Link to="/">Home</Link>
        </li>
        <li
          onClick={() => setCurrentPage("/carInventory")}
          className={`active:rounded-md active:bg-gray-300 active:border-none py-1 px-2 hover:-translate-y-1 transition${
            currentPage == "/carInventory" ? " border-b-4 border-red-500" : ""
          }`}
        >
          <Link to="/car-inventory">Car inventory</Link>
        </li>
        <li
          onClick={() => setCurrentPage("/account")}
          className={`active:rounded-md active:bg-gray-300 active:border-none py-1 px-2 hover:-translate-y-1 transition${
            currentPage == "/account" ? " border-b-4 border-red-500" : ""
          }`}
        >
          <Link to="/account">Account</Link>
        </li>
        <li
          onClick={() => setCurrentPage("/history")}
          className={`active:rounded-md active:bg-gray-300 active:border-none py-1 px-2 hover:-translate-y-1 transition${
            currentPage == "/history" ? " border-b-4 border-red-500" : ""
          }`}
        >
          <Link to="/history">History</Link>
        </li>
        <li
          onClick={() => setCurrentPage("/postCar")}
          className={`active:rounded-md active:bg-gray-300 active:border-none py-1 px-2 hover:-translate-y-1 transition${
            currentPage == "/postCar" ? " border-b-4 border-red-500" : ""
          }`}
        >
          <Link to="/post-car">Post Car</Link>
        </li>
        <li
          onClick={() => setCurrentPage("/customerService")}
          className={`active:rounded-md active:bg-gray-300 active:border-none py-1 px-2 hover:-translate-y-1 transition${
            currentPage == "/customerService"
              ? " border-b-4 border-red-500"
              : ""
          }`}
        >
          <Link to="/customer-service">Customer Service</Link>
        </li>
        {auth?.accessToken ? (
          <li className="active:rounded-md active:bg-gray-300 active:border-none py-1 px-2 hover:-translate-y-1 transition">
            <Link to="/sign-out">Sign out</Link>
          </li>
        ) : (
          <li className="active:rounded-md active:bg-gray-300 active:border-none py-1 px-2 hover:-translate-y-1 transition">
            <Link to="/sign-in">Sign in</Link>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Nav;
