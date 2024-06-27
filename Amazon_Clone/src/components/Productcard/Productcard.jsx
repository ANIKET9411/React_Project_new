import { useContext, useState } from "react";
import axios from "axios";
import { Mycontext } from "../../Context";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";
import { toast } from "react-toastify";
import { RotatingLines } from "react-loader-spinner";

function Productcard(props) {
  const { currentUser } = useAuth();

  // console.log(props);
  const navigate = useNavigate();
  const {
    dispatch,
    setProdDetail,
    cartItems,
    setCartItems,
    loading,
    setLoading,
  } = useContext(Mycontext);

  async function getproductdetails(id, str = "add") {
    const options = {
      method: "GET",
      url: "https://real-time-amazon-data.p.rapidapi.com/product-details",
      params: {
        asin: `${id}`,
        country: "US",
      },
      headers: {
        "x-rapidapi-key": "e353719877mshd97a09f04ec3ce7p187ac9jsn270342f3e105",
        "x-rapidapi-host": "real-time-amazon-data.p.rapidapi.com",
      },
    };

    try {
      console.log(str);
      str === "prod_detail" && setLoading(true);
      console.log(id);
      const response = await axios.request(options);
      console.log(response.data);
      if (str === "add") {
        return response.data.data;
      }
      str === "prod_detail" && setProdDetail(response.data.data);

      str === "prod_detail" && setLoading(false);
    } catch (error) {
      str === "prod_detail" && setLoading(false);
      console.error(error);
    }
    str === "prod_detail" && navigate("/productdetails");
  }
  async function ADDTOCART(data) {
    let newdata = await getproductdetails(data.asin);
    console.log(newdata);
    let match = false;
    if (cartItems?.length >= 1) {
      cartItems.map((ci) => {
        if (ci.newdata.product_title === newdata.product_title) {
          match = true;
        }
      });
      !match &&
        setCartItems((prev) => {
          return [...prev, { newdata, Q: 1 }];
        });
    } else {
      setCartItems([{ newdata, Q: 1 }]);
      console.log("first");
    }
  }
  return (
    <>
      {
        <div
          className="w-1/4 m-3 text-center h-3/5 flex flex-col shadow-xl p-3 px-3"
          onClick={(e) => {
            e.stopPropagation();
            getproductdetails(props.value.asin, "prod_detail");
          }}
        >
          <img src={props.value.product_photo} alt="" className="h-48" />
          <h1>{}</h1>
          <p>{props.value.product_title}</p>
          <p>{props.value.product_price}</p>
          <button
            onClick={(e) => {
              e.stopPropagation();
              currentUser
                ? ADDTOCART(props.value, "prod_detail")
                : // dispatch({ type: "ADD_TO_CART", payload: props.value })
                  navigate("/signin");
              toast.success("Successfully added to the cart");
            }}
            className="rounded-3xl mx-auto p-2 bg-yellow-400 mt-3"
          >
            ADD TO CART
          </button>
        </div>
      }
    </>
  );
}
export default Productcard;
