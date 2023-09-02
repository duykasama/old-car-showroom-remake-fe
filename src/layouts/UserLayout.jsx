import { Route, Routes } from "react-router-dom";
import Header from "../components/ui/user/Header";
import Footer from "../components/ui/user/footer/Footer";
import Home from "../pages/user/Home";
import CarInventory from "../pages/user/CarInventory";
import Login from "../components/ui/Login";

function UserLayout() {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/car-inventory" element={<CarInventory />} />
        <Route path="/log-in" element={<Login />} />
      </Routes>
      <Footer />
    </>
  );
}

export default UserLayout;
