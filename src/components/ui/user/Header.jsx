import { Link } from "react-router-dom";
import logo from "../../../assets/react.svg";
import Nav from "../../Nav";

function Header() {
  return (
    <header className="flex justify-between items-center p-6">
      <Link to="/"><img src={logo} alt="Logo" /></Link>
      <Nav />
    </header>
  );
}

export default Header;
