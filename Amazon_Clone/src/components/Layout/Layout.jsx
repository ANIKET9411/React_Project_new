import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { useContext } from "react";
import { Mycontext } from "../../Context";
import { RotatingLines } from "react-loader-spinner";

function Layout({ children }) {
  const { loading } = useContext(Mycontext);
  return (
    <div>
      {/* <Navbar /> */}
      <Header />
      {loading && (
        <div className="flex justify-center items-center p-20">
          {" "}
          <RotatingLines
            visible={true}
            height="96"
            width="96"
            color="grey"
            strokeWidth="5"
            animationDuration="0.75"
            ariaLabel="rotating-lines-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        </div>
      )}
      {!loading && <div className="content">{children}</div>}
      <Footer />
    </div>
  );
}

export default Layout;
