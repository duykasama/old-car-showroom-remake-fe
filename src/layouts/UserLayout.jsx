import { Outlet, Route, Routes } from "react-router-dom";
import Header from "../components/ui/user/Header";
import Footer from "../components/ui/user/footer/Footer";

function UserLayout() {
  return (
    <>
    <div className="client-layout">
      <Header />
      <Outlet />
      <Footer />
    </div>
    </>
  );
}

export default UserLayout;
