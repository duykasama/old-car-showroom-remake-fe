import Home from "./pages/user/Home";
import UserLayout from "./layouts/UserLayout";
import SignIn from "./layouts/SignIn";
import { Route, Routes } from "react-router-dom";
import CarInventory from "./pages/user/CarInventory";
import Account from "./pages/user/Account";
import PostCar from "./pages/user/PostCar";
import CustomerService from "./pages/user/CustomerService";
import PageNotFound from "./pages/PageNotFound";
import SignUp from "./layouts/SignUp";
import RequireAuth from "./components/RequireAuth";
import SignOut from "./layouts/SignOut";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<UserLayout />}>
          <Route index element={<Home />} />
          <Route path="/car-inventory" element={<CarInventory />} />
          <Route element={<RequireAuth />}>
            <Route path="/account" element={<Account />} />
            <Route path="/post-car" element={<PostCar />} />
          </Route>
          <Route path="/customer-service" element={<CustomerService />} />
        </Route>
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-out" element={<SignOut />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
