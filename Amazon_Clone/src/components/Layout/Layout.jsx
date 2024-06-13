import { useContext, useEffect } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { Mycontext } from "../../Context";
import { useAuth } from "../../Context/AuthContext";

function Layout({ children }) {
  const { currentUser } = useAuth();
  const { setuid } = useContext(Mycontext);
  // currentUser && setuid(currentUser.uid);
  return (
    <div>
      {/* <Navbar /> */}
      <Header />
      <div className="content">{children}</div>
      <Footer />
    </div>
  );
}
export default Layout;
