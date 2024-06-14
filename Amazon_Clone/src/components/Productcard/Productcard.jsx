import { useContext } from "react";
import axios from "axios";
import { Mycontext } from "../../Context";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";
import { toast } from "react-toastify";

function Productcard(props) {
  const { currentUser } = useAuth();
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
      const response = await axios.request(options);
      setProdDetail(response.data.data);
    } catch (error) {
      console.error(error);
    }
    navigate("/productdetails");
  }

  return (
    <div
      className="w-full md:w-1/2 lg:w-1/4 m-3 text-center h-auto md:h-3/5 flex flex-col shadow-xl p-3 px-3"
      onClick={(e) => {
        e.stopPropagation();
        getproductdetails(props.value.asin);
      }}
    >
      <img src={props.value.product_photo} alt="" className="h-48 md:h-auto" />
      <h1 className="text-lg font-bold mt-2">{props.value.product_title}</h1>
      <p className="text-sm">{props.value.product_price}</p>
      <button
        onClick={(e) => {
          e.stopPropagation();
          currentUser
            ? dispatch({ type: "ADD_TO_CART", payload: props.value })
            : navigate("/signin");
          toast.success("Successfully added to the cart");
        }}
        className="rounded-full mx-auto p-2 bg-yellow-400 mt-3"
      >
        ADD TO CART
      </button>
    </div>
  );
}

export default Productcard;
