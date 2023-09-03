import { Link } from "react-router-dom";

function Nav() {



  return (
    <nav>
      <ul className="flex justify-center items-center text-xl font-bold text-gray-600 gap-8">
        <li className="rounded-md active:bg-gray-300 py-1 px-2 hover:-translate-y-1 transition">
          <Link to="/">Home</Link>
        </li>
        <li className="rounded-md active:bg-gray-300 py-1 px-2 hover:-translate-y-1 transition">
          <Link to="/car-inventory">Car inventory</Link>
        </li>
        <li className="rounded-md active:bg-gray-300 py-1 px-2 hover:-translate-y-1 transition">
          <Link to="/account">Account</Link>
        </li>
        <li className="rounded-md active:bg-gray-300 py-1 px-2 hover:-translate-y-1 transition">
          <Link to="/history">History</Link>
        </li>
        <li className="rounded-md active:bg-gray-300 py-1 px-2 hover:-translate-y-1 transition">
          <Link to="/post-car">Post Car</Link>
        </li>
        <li className="rounded-md active:bg-gray-300 py-1 px-2 hover:-translate-y-1 transition">
          <Link to="/customer-service">Customer Service</Link>
        </li>
        <li className="rounded-md active:bg-gray-300 py-1 px-2 hover:-translate-y-1 transition">
          <Link to="/log-in">Log in</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
