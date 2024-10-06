import logo from "../../assets/logo.png";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdArrowDropdown } from "react-icons/io";
import { AiOutlineSearch } from "react-icons/ai";
import { FaCartShopping } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi"; // Hamburger icon
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Mycontext } from "../../Context";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";

const Header = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const [searchval, setSearchval] = useState("");
  const { setProducts, setuid, cartItems, loading, setLoading } =
    useContext(Mycontext);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Menu state

  currentUser && setuid(currentUser?.uid);

  // Get product through search
  async function getproductsearch(val) {
    const options = {
      method: "GET",
      url: "https://real-time-amazon-data.p.rapidapi.com/search",
      params: {
        query: `${val}`,
        page: "1",
        country: "US",
        sort_by: "RELEVANCE",
        product_condition: "ALL",
      },
      headers: {
        "x-rapidapi-key": "6260d7c39fmsh585af5f6767b7b4p1cdd87jsnb6c53e0de704",
        "x-rapidapi-host": "real-time-amazon-data.p.rapidapi.com",
      },
    };

    try {
      setLoading(true);
      const response = await axios.request(options);
      setProducts(response.data.data.products);
      navigate("/allproduct");
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  }

  return (
    <>
      {/* Main header */}
      <div className="w-full bg-[#131921] flex items-center justify-between h-16 gap-4 p-2">
        {/* Hamburger Menu Icon for Mobile */}
        <div className="lg:hidden md:hidden flex items-center">
          <GiHamburgerMenu
            className="text-white text-2xl cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)} // Toggle menu
          />
        </div>
        <div className="w-20 lg:w-24 px-2 h-[80%] flex items-center border border-transparent hover:border-white cursor-pointer duration-100">
          <Link to="/">
            <img src={logo} className="w-full h-24" alt="Amazon Logo" />
          </Link>
        </div>
        <section className="px-2 h-[80%] flex items-center border border-transparent text-white hover:border-white cursor-pointer duration-100 hidden lg:flex md:flex">
          <FaLocationDot />
          <p className="text-sm text-white">
            Deliver to{" "}
            <span className="text-sm font-semibold text-white">India</span>
          </p>
        </section>
        <section className="text-white h-10 rounded-md flex flex-grow relative hidden lg:inline-flex md:flex">
          <input
            type="text"
            placeholder="Search Amazon.in"
            className="h-full text-base text-[#131921] flex flex-grow outline-none border-none px-2"
            value={searchval}
            onChange={(e) => {
              setSearchval(e.target.value);
            }}
          />
          <span className="w-12 h-full flex items-center justify-center bg-[#FEBD69] hover:bg-[#F0A647] duration-300 text-black cursor-pointer rounded-tr-md rounded-br-md text-xl">
            <AiOutlineSearch
              onClick={() => {
                getproductsearch(searchval);
              }}
            />
          </span>
        </section>
        <section className="px-2 h-[80%] text-white flex flex-col items-start justify-center border border-transparent hover:border-white cursor-pointer duration-100">
          <Link to="/signin">
            <p className="text-xs text-slate-400 font-semibold">
              Hello, {currentUser?.email ?? "Sign in"}
            </p>
            <p className="text-sm flex font-bold -mt-1">
              Accounts & List{" "}
              <span>
                <IoMdArrowDropdown className="text-xl" />
              </span>
            </p>
          </Link>
        </section>
        <section className="hidden px-2 h-[80%] flex flex-col item-start justify-center border border-transparent text-white hover:border-white cursor-pointer duration-100 lg:flex md:flex">
          <Link to={currentUser ? "/order" : "signin"}>
            <p className="text-xs">Returns</p>
            <p className="text-sm -mt-1 font-bold">& Orders</p>
          </Link>
        </section>
        <section className="px-3 py-1 h-[60%] text-white flex items-start justify-center border border-transparent hover:border-white cursor-pointer duration-100 relative">
          <Link to={currentUser ? "/cart" : "signin"}>
            <FaCartShopping />
            <p className="text-xs font-semibold mt-3">
              Cart{" "}
              <span className="absolute text-xs -top-2 left-2 font-semibold p-1 h-4 bg-[#F0A647] flex items-center justify-center rounded-full">
                {cartItems.length}
              </span>
            </p>
          </Link>
        </section>
      </div>

      {/* Mobile Search Bar */}
      <div className="flex justify-center bg-[#131921] lg:hidden md:hidden w-full p-2">
        <section className="lg:flex md:flex text-white h-10 rounded-md flex flex-grow relative w-[90%]">
          <input
            type="text"
            placeholder="Search Amazon.in"
            className="h-full text-base text-[#131921] flex flex-grow outline-none border-none px-2 rounded-tl-md rounded-bl-md"
            value={searchval}
            onChange={(e) => {
              setSearchval(e.target.value);
            }}
          />
          <span className="w-12 h-full flex items-center justify-center bg-[#FEBD69] hover:bg-[#F0A647] duration-300 text-black cursor-pointer rounded-tr-md rounded-br-md text-xl">
            <AiOutlineSearch
              onClick={() => {
                getproductsearch(searchval);
              }}
            />
          </span>
        </section>
      </div>

      {/* Always Show on Larger Screens (lg/md) */}
      <section className="hidden lg:flex md:flex justify-between bg-[#232f3e] text-white font-bold">
        <p
          onClick={(e) => {
            getproductsearch(e.target.innerText);
          }}
          className="px-2 py-3 border border-transparent hover:border-white"
        >
          Beauty & Health
        </p>
        <p
          className="px-2 py-3 border border-transparent hover:border-white"
          onClick={(e) => {
            getproductsearch(e.target.innerText);
          }}
        >
          Home and Kitchen
        </p>
        <p
          className="px-2 py-3 border border-transparent hover:border-white"
          onClick={(e) => {
            getproductsearch(e.target.innerText);
          }}
        >
          Women Ethnic
        </p>
        <p
          className="px-2 py-3 border border-transparent hover:border-white"
          onClick={(e) => {
            getproductsearch(e.target.innerText);
          }}
        >
          Women Western
        </p>
        <p
          className="px-2 py-3 border border-transparent hover:border-white"
          onClick={(e) => {
            getproductsearch(e.target.innerText);
          }}
        >
          Men
        </p>
        <p
          className="px-2 py-3 border border-transparent hover:border-white"
          onClick={(e) => {
            getproductsearch(e.target.innerText);
          }}
        >
          Kids
        </p>
        <p
          className="px-2 py-3 border border-transparent hover:border-white"
          onClick={(e) => {
            getproductsearch(e.target.innerText);
          }}
        >
          Jewellery & Accessories
        </p>
        <p
          className="px-2 py-3 border border-transparent hover:border-white"
          onClick={(e) => {
            getproductsearch(e.target.innerText);
          }}
        >
          Bags & Footwear
        </p>
        <p
          className="px-2 py-3 border border-transparent hover:border-white"
          onClick={(e) => {
            getproductsearch(e.target.innerText);
          }}
        >
          Electronics
        </p>
      </section>

      {/* Conditionally Show on Mobile */}
      {isMenuOpen && (
        <section className="lg:hidden md:hidden flex flex-col justify-between bg-[#232f3e] text-white font-bold w-full">
          <p
            onClick={(e) => {
              getproductsearch(e.target.innerText);
            }}
            className="px-6 py-3 border border-transparent hover:border-white"
          >
            Beauty & Health
          </p>
          <p
            className="px-6 py-3 border border-transparent hover:border-white"
            onClick={(e) => {
              getproductsearch(e.target.innerText);
            }}
          >
            Home and Kitchen
          </p>
          <p
            className="px-6 py-3 border border-transparent hover:border-white"
            onClick={(e) => {
              getproductsearch(e.target.innerText);
            }}
          >
            Women Ethnic
          </p>
          <p
            className="px-6 py-3 border border-transparent hover:border-white"
            onClick={(e) => {
              getproductsearch(e.target.innerText);
            }}
          >
            Women Western
          </p>
          <p
            className="px-6 py-3 border border-transparent hover:border-white"
            onClick={(e) => {
              getproductsearch(e.target.innerText);
            }}
          >
            Men
          </p>
          <p
            className="px-6 py-3 border border-transparent hover:border-white"
            onClick={(e) => {
              getproductsearch(e.target.innerText);
            }}
          >
            Kids
          </p>
          <p
            className="px-6 py-3 border border-transparent hover:border-white"
            onClick={(e) => {
              getproductsearch(e.target.innerText);
            }}
          >
            Jewellery & Accessories
          </p>
          <p
            className="px-6 py-3 border border-transparent hover:border-white"
            onClick={(e) => {
              getproductsearch(e.target.innerText);
            }}
          >
            Bags & Footwear
          </p>
          <p
            className="px-6 py-3 border border-transparent hover:border-white"
            onClick={(e) => {
              getproductsearch(e.target.innerText);
            }}
          >
            Electronics
          </p>

          <Link to={currentUser ? "/order" : "signin"}>
            <p className=" px-6 py-3 border border-transparent hover:border-white">
              Returns & Orders
            </p>
            {/* <p className="text-sm -mt-1 font-bold"></p> */}
          </Link>
        </section>
      )}
    </>
  );
};

export default Header;
