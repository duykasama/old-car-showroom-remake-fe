import { Route, Routes } from "react-router-dom";
import Header from "../components/ui/user/Header";
import Footer from "../components/ui/user/footer/Footer";
import Home from "../pages/user/Home";
import CarInventory from "../pages/user/CarInventory";
import Login from "../components/ui/Login";
import PageNotFound from "../pages/PageNotFound";
import Account from "../pages/user/Account";
import PostCar from "../pages/user/PostCar";

function UserLayout() {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/car-inventory" element={<CarInventory />} />
        <Route path="/log-in" element={<Login />} />
        <Route path="/account" element={<Account />} />
        <Route path="/post-car" element={<PostCar />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default UserLayout;
