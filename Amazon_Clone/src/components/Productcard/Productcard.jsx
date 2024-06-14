import { useContext, useState } from "react";
import axios from "axios";
import { Mycontext } from "../../Context";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";
function Productcard(props) {
  const { currentUser } = useAuth();
  // console.log(props);
  const navigate = useNavigate();
  const { dispatch, setProdDetail } = useContext(Mycontext);

  async function getproductdetails(id) {
    const options = {
      method: "GET",
      url: "https://real-time-amazon-data.p.rapidapi.com/product-details",
      params: {
        asin: `${id}`,
        country: "US",
      },
      headers: {
        "x-rapidapi-key": "62369b9b01msh1fae9fbb28b49f0p10173djsn5c13a3a285ae",
        "x-rapidapi-host": "real-time-amazon-data.p.rapidapi.com",
      },
    };

    try {
      console.log(id);
      const response = await axios.request(options);
      console.log(response.data);
      setProdDetail(response.data.data);
    } catch (error) {
      console.error(error);
    }
    navigate("/productdetails");
  }
  return (
    <>
      <div
        className="w-1/4 m-3 text-center h-3/5 flex flex-col shadow-xl p-3 px-3"
        onClick={(e) => {
          e.stopPropagation();
          getproductdetails(props.value.asin);
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
              ? dispatch({ type: "ADD_TO_CART", payload: props.value })
              : navigate("/signin");
          }}
          className="rounded-3xl mx-auto p-2 bg-yellow-400 mt-3"
        >
          ADD TO CART
        </button>
      </div>
    </>
  );
}
export default Productcard;
