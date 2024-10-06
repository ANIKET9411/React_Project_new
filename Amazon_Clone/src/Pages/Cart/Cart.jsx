import { collection, getDocs, getFirestore } from "firebase/firestore";
import { Mycontext } from "../../Context";
import Cartcard from "../../components/Cartcard/Cartcard";
import Layout from "../../components/Layout/Layout";
import { useContext, useEffect, useState } from "react";
import { getMultipleDocs } from "../../Api";
// import RazorpayPayment from "../../components/RazorpayPayment";
import { useNavigate } from "react-router-dom";

function Cart() {
  const { uid, cartItems, setCartItems, setSum, sum, tItems } =
    useContext(Mycontext);
  // console.log(tItems);
  const navigate = useNavigate();
  useEffect(() => {
    if (uid) {
      getMultipleDocs(uid).then((data) => {
        console.log(data);
        setCartItems(data);
      });
      console.log("rerun");
    }
  }, [uid]);

  let t_items = cartItems
    .filter((item) => item.isSelected === true)
    .reduce((acc, cv) => {
      return acc + cv.Q;
    }, 0);
  console.log(t_items);

  return (
    <Layout>
      <h1 className="text-3xl font-bold lg:mx-20 mx-10 my-5">Shopping Cart</h1>
      <div className="m-3 flex flex-col lg:flex-row w-5/6 mx-auto">
        <div className="m-5 ">
          {cartItems?.length > 0 ? (
            <div >
              <h1 className="text-2xl mx-8 mb-4 font-bold">Product details</h1>
              {cartItems?.map((item, index) => {
                console.log(item);

                return <Cartcard key={index} val={item} />;
              })}
            </div>
          ) : (
            <div className=" text-center text-4xl font-extrabold p-20">
              Your cart is empty.
            </div>
          )}
        </div>

        {cartItems?.length > 0 && (
          <div className="m-16 p-2 border-black border-solid border-4 w-1/3  h-40">
            <h1 className="font-semibold text-xl">
              Price details({t_items} items)
            </h1>
            <h1 className="font-extrabold">Total Price: INR {sum}</h1>
            {/* <RazorpayPayment />
            < */}
            <button
              onClick={() => navigate("/Checkout")}
              className="rounded-3xl mx-auto p-2 bg-yellow-400 mt-4 "
            >
              Click to Checkout
            </button>
          </div>
        )}
      </div>
    </Layout>
  );
}

export default Cart;
