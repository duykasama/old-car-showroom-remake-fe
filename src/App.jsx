import Home from "./pages/user/Home";
import UserLayout from "./layouts/UserLayout";
import Login from "./layouts/Login";
import { Route, Routes } from "react-router-dom";
import CarInventory from "./pages/user/CarInventory";
import Account from "./pages/user/Account";
import PostCar from "./pages/user/PostCar";
import CustomerService from "./pages/user/CustomerService";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<UserLayout />}>
          <Route index element={<Home />} />
          <Route path="/car-inventory" element={<CarInventory />} />
          <Route path="/account" element={<Account />} />
          <Route path="/post-car" element={<PostCar />} />
          <Route path="/customer-service" element={<CustomerService />} />
        </Route>
        <Route path="/log-in" element={<Login />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
