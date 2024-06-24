import { collection, getDocs, getFirestore } from "firebase/firestore";
import { Mycontext } from "../../Context";
import Cartcard from "../../components/Cartcard/Cartcard";
import Layout from "../../components/Layout/Layout";
import { useContext, useEffect, useState } from "react";
import { getMultipleDocs } from "../../Api";
import RazorpayPayment from "../../components/RazorpayPayment";

function Cart() {
  const { uid, cartItems, setCartItems, setSum, sum, tItems } =
    useContext(Mycontext);
  // console.log(tItems);

  useEffect(() => {
    if (uid) {
      getMultipleDocs(uid).then((data) => {
        console.log(data);
        setCartItems(data);
      });
      console.log("rerun");
    }
  }, [uid]);

  return (
    <Layout>
      <h1 className="text-3xl font-bold mx-20 my-5">Shopping Cart</h1>
      <div className="m-3 flex w-5/6 mx-auto">
        <div className="m-5 ">
          {console.log(cartItems)}
          {cartItems?.length > 0 ? (
            <div>
              <h1 className="text-2xl mx-8 mb-4 font-bold">Product details</h1>
              {cartItems?.map((item, index) => {
                console.log(item);
                // return item?.cart_products?.map((prod) => {
                //   console.log(prod);
                // console.log()
                return <Cartcard key={index} val={item} />;
                // });
              })}
            </div>
          ) : (
            <div className=" text-center text-4xl font-extrabold">
              Your cart is empty.
            </div>
          )}
        </div>

        {cartItems?.length > 0 && (
          <div className="m-16 p-2 border-black border-solid border-4 w-60 h-40">
            <h1 className="font-semibold text-xl">
              Price details({tItems} items)
            </h1>
            <h1 className="font-extrabold">Total Price: INR {sum}</h1>
            <RazorpayPayment />
          </div>
        )}
      </div>
    </Layout>
  );
}

export default Cart;
