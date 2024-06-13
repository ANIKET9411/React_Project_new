import logo from "../../assets/logo.png";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdArrowDropdown } from "react-icons/io";
import { AiOutlineSearch } from "react-icons/ai";
import { FaCartShopping } from "react-icons/fa6";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Mycontext } from "../../Context";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";
import SignOut from "../SignOut/SignOut";

const Header = () => {
  const { currentUser } = useAuth();
  console.log(currentUser);
  const navigate = useNavigate();
  const [searchval, setSearchval] = useState();
  const { setProducts, state, setuid } = useContext(Mycontext);
  // useEffect(() => {
  //   setuid(currentUser.uid);
  // }, []);
  // currentUser;
  currentUser && setuid(currentUser?.uid);
  // get product through search
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
        "x-rapidapi-key": "f0810dbca3mshd094a9f09e099dep17fa06jsn2aee572d9e6e",
        "x-rapidapi-host": "real-time-amazon-data.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      console.log(response.data);
      setProducts(response.data.data.products);
      navigate("/allproduct");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <div className="w-full bg-[#131921] flex items-center h-16 gap-4 ">
        <div className="px-2 h-[80%] flex items-center border border-transparent hover:border-white cursor-pointer duration-100">
          {" "}
          <Link to="/">
            {" "}
            <img src={logo} className="w-24  "></img>
          </Link>
        </div>
        <section className="px-2 h-[80%] flex items-center border border-transparent text-white hover:border-white cursor-pointer duration-100">
          <FaLocationDot />
          <p className="text-sm text-white ">
            Deliver to{" "}
            <span className="text-sm font-semibold   text-white">India</span>
          </p>
        </section>
        <section className="text-white h-10 rounded-md flex flex-grow relative">
          <input
            type="text"
            placeholder="Search Amazon.in"
            className="h-full text-base text-[#131921] flex flex-grow outline-none border-none px-2"
            value={searchval}
            onChange={(e) => {
              setSearchval(e.target.value);
            }}
          ></input>
          <span className="w-12 h-full flex items-center justify-center bg-[#FEBD69] hover:bg-[#F0A647] duration-300 text-black cursor-pointer rounded-tr-md rounded-br-md text-xl">
            <AiOutlineSearch
              onClick={() => {
                getproductsearch(searchval);
              }}
            />
          </span>
        </section>
        <section className=" px-2 h-[80%]  text-white flex flex-col items-start justify-center border border-transparent hover:border-white cursor-pointer duration-100">
          <Link to="/signin">
            <p className="text-xs text-slate-400 font-semibold">
              Hello,{currentUser?.email ?? "Sign in"}
            </p>
            <p className="text-sm flex font-bold -mt-1">
              Accounts & List{" "}
              <span>
                <IoMdArrowDropdown className="text-xl" />
              </span>
            </p>
          </Link>
        </section>
        <section className=" px-2 h-[80%] flex flex-col item-start justify-center border border-transparent text-white hover:border-white cursor-pointer duration-100 ">
          <Link to="/order">
            <p className="text-xs">Returns</p>
            <p className="text-sm -mt-1 font-bold">& Orders</p>
          </Link>
        </section>
        <section className="  px-3 py-1 h-[60%]   text-white flex items-start justify-center  border border-transparent hover:border-white cursor-pointer duration-100 relative">
          <Link to="/cart">
            <FaCartShopping />
            <p className="text-xs font-semibold mt-3 ">
              Cart{" "}
              <span className="absolute text-xs -top-2 left-2 font-semibold p-1 h-4 bg-[#F0A647] flex items-center justify-center rounded-full">
                {state.cart_products.length}
              </span>
            </p>
          </Link>
        </section>
        {/* <section>
          {currentUser ? (
            <>
              <h1>Welcome, {currentUser.email}</h1>
              <SignOut />
            </>
          ) : (
            ""
          )}
        </section> */}
      </div>
      <section className="flex justify-between  bg-[#232f3e] text-white font-bold">
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
      </section>
    </>
  );
};

export default Header;
