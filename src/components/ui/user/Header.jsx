import { Link } from "react-router-dom";
import logo from "/public/logo.png";
import Nav from "../../Nav";

function Header() {
  return (
    <header className="flex justify-between items-center p-6">
      <Link to="/">
        <img src={logo} alt="Logo" width={150} />
      </Link>
      <Nav />
    </header>
  );
}

export default Header;
