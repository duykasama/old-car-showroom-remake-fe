import { Link } from "react-router-dom";

function Nav() {



  return (
    <nav>
      <ul className="flex justify-center items-center">
        <li className="rounded-md active:bg-gray-300 py-1 px-2">
          <Link to="/">Home</Link>
        </li>
        <li className="rounded-md active:bg-gray-300 py-1 px-2">
          <Link to="/car-inventory">Car inventory</Link>
        </li>
        <li className="rounded-md active:bg-gray-300 py-1 px-2">
          <Link>Account</Link>
        </li>
        <li className="rounded-md active:bg-gray-300 py-1 px-2">
          <Link>History</Link>
        </li>
        <li className="rounded-md active:bg-gray-300 py-1 px-2">
          <Link>Post Car</Link>
        </li>
        <li className="rounded-md active:bg-gray-300 py-1 px-2">
          <Link>Customer Service</Link>
        </li>
        <li className="rounded-md active:bg-gray-300 py-1 px-2">
          <Link to="/log-in">Log in</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
