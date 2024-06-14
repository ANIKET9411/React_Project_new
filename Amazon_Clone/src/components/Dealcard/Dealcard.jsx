import { useContext } from "react";
import { Mycontext } from "../../Context";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";

function Dealcard(props) {
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  const { dispatch, setProdDetail, uid } = useContext(Mycontext);
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

  // console.log(props.value);
  return (
    <div
      className="w-1/5 m-5 text-center flex flex-col p-7 shadow-xl"
      onClick={(e) => {
        e.stopPropagation();
        getproductdetails(props.value.product_asin);
      }}
    >
      <img src={props.value?.deal_photo} alt="" className="h-48" />
      <h1></h1>
      <p>{props.value?.deal_title}</p>
      <h2 className="font-bold text-2xl">${props.value?.deal_price.amount}</h2>

      <div className="flex justify-between mt-8">
        <button
          onClick={(e) => {
            e.stopPropagation();
            currentUser
              ? dispatch({ type: "ADD_TO_CART", payload: props.value })
              : navigate("/signin");
            console.log(props.value);
          }}
          className="rounded-3xl mx-auto p-2 bg-yellow-400"
        >
          ADD TO CART
        </button>
      </div>
    </div>
  );
}
export default Dealcard;
