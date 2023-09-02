import { Link } from "react-router-dom";

function Nav() {



  return (
    <nav>
      <ul className="flex justify-center items-center text-xl gap-8">
        <li className="rounded-md active:bg-gray-300 py-1 px-2 hover:-translate-y-1 text-gray-800 transition">
          <Link to="/">Home</Link>
        </li>
        <li className="rounded-md active:bg-gray-300 py-1 px-2 hover:-translate-y-1 text-gray-800 transition">
          <Link to="/car-inventory">Car inventory</Link>
        </li>
        <li className="rounded-md active:bg-gray-300 py-1 px-2 hover:-translate-y-1 text-gray-800 transition">
          <Link>Account</Link>
        </li>
        <li className="rounded-md active:bg-gray-300 py-1 px-2 hover:-translate-y-1 text-gray-800 transition">
          <Link>History</Link>
        </li>
        <li className="rounded-md active:bg-gray-300 py-1 px-2 hover:-translate-y-1 text-gray-800 transition">
          <Link>Post Car</Link>
        </li>
        <li className="rounded-md active:bg-gray-300 py-1 px-2 hover:-translate-y-1 text-gray-800 transition">
          <Link>Customer Service</Link>
        </li>
        <li className="rounded-md active:bg-gray-300 py-1 px-2 hover:-translate-y-1 text-gray-800 transition">
          <Link to="/log-in">Log in</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
