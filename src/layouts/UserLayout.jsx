import { Route, Routes } from "react-router-dom";
import Header from "../components/ui/user/Header";
import Footer from "../components/ui/user/Footer";
import Home from "../pages/user/Home";
import CarInventory from "../pages/user/CarInventory";

function UserLayout() {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/car-inventory" element={<CarInventory />} />
      </Routes>
      <Footer />
    </>
  );
}

export default UserLayout;
