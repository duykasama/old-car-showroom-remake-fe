import Contact from "./Contact";
import "./footer.scss";
import logo from "/white-car-logo.png";
import contactData from "../../../../data/contact.json";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="p-6 mt-10 flex flex-col gap-10 justify-center items-center text-white py-8">
      <Contact contact={contactData} />
      <div className="grid grid-cols-2 w-4/5">
        <div className="flex flex-col gap-8 text-slate-300">
          <img src={logo} alt="Logo" className="w-36" />
          <p>Any questions? Contact with us</p>
          <p>
            Email: <i>{contactData.email}</i>
          </p>
          <p>
            Phone number: <i>{contactData.phone}</i>
          </p>
          <p>Copyright &copy;2023 All rights reserved</p>
        </div>
        <div className="grid grid-cols-3">
          <div>
            <h3 className="text-xl font-bold mb-8">Information</h3>
            <ul className="flex flex-col gap-4 text-slate-400">
              <li className="hover:scale-105 transition">
                <Link to={"/account"}>&gt; Account</Link>
              </li>
              <li className="hover:scale-105 transition">
                <Link to={"/customer-service"}>&gt; Customer Service</Link>
              </li>
              <li className="hover:scale-105 transition">
                <Link to={"/car-inventory"}>&gt; Car Inventory</Link>
              </li>
              <li className="hover:scale-105 transition">
                <Link to={"/post-car"}>&gt; Post Car</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-8">History</h3>
            <ul className="flex flex-col gap-4 text-slate-400">
              <li className="hover:scale-105 transition">
                <Link to={"/transaction-history"}>
                  &gt; Transaction History
                </Link>
              </li>
              <li className="hover:scale-105 transition">
                <Link to={"/meeing-history"}>&gt; Meeting History</Link>
              </li>
              <li className="hover:scale-105 transition">
                <Link to={"/my-posts"}>&gt; My Posts</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-8">Team members</h3>
            <ul className="flex flex-col gap-4 text-slate-400">
              <li>&gt; Nguyễn Hưng Hải</li>
              <li>&gt; Nguyễn Thanh Duy</li>
              <li>&gt; Nguyễn Quốc Thái</li>
              <li>&gt; Đỗ Minh Trí</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
