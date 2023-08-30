import { Route, Routes } from "react-router-dom";
import Header from "../components/ui/user/Header";
import Footer from "../components/ui/user/Footer";
import Home from "../pages/user/Home";

function UserLayout() {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default UserLayout;
