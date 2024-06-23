import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Order from "./Pages/Order/Order";
import Cart from "./Pages/Cart/Cart";
// import Admin from "./Pages/Admin/Admin";
import Context from "./Context/index";
import Allproducts from "./Pages/Allproducts/Allproducts";
import Productdetails from "./Pages/Productdetails/Productdetails";

import { AuthProvider } from "./Context/AuthContext";
// import SignIn from "./components/SignIn/SignIn";
import SignupPage from "./Pages/SignupPage/SignupPage";
// import BuyNow from "./Pages/BuyNow/BuyNow";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <AuthProvider>
      <Context>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/order" element={<Order />} />
            <Route path="/cart" element={<Cart />} />

            <Route path="/allproduct" element={<Allproducts />} />
            <Route path="/productdetails" element={<Productdetails />} />
            <Route path="/signin" element={<SignupPage />} />
          </Routes>
        </BrowserRouter>
        <ToastContainer />
      </Context>
    </AuthProvider>
  );
}

export default App;
