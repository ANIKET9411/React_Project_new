import { useContext } from "react";
import { Mycontext } from "../../Context";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";
import { toast } from "react-toastify";

function Dealcard(props) {
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  const { dispatch, setProdDetail, uid, setCartItems, cartItems, setLoading } =
    useContext(Mycontext);
  async function getproductdetails(id, str = "add") {
    const options = {
      method: "GET",
      url: "https://real-time-amazon-data.p.rapidapi.com/product-details",
      params: {
        asin: `${id}`,
        country: "US",
      },
      headers: {
        "x-rapidapi-key": "9cad704f23mshc671070439c9840p194925jsn63e13027751e",
        "x-rapidapi-host": "real-time-amazon-data.p.rapidapi.com",
      },
    };

    try {
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
    let newdata = await getproductdetails(data.product_asin);
    console.log(newdata);

    // console.log(ci.newdata.product_title);

    console.log("aniket");
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

  console.log(cartItems);
  return (
    <div
      className="w-1/5 m-5 text-center flex flex-col p-7 shadow-xl"
      onClick={(e) => {
        e.stopPropagation();
        getproductdetails(props.value.product_asin, "prod_detail");
      }}
    >
      <img src={props.value?.deal_photo} alt="" className="h-48" />
      <h1></h1>
      <p className="h-24 overflow-scroll">{props.value?.deal_title}</p>
      {/* <h2 className="font-bold text-2xl">${props.value?.deal_price?.amount}</h2> */}

      <div className="flex justify-between mt-8">
        <button
          onClick={(e) => {
            e.stopPropagation();
            currentUser
              ? ADDTOCART(props.value)
              : // dispatch({ type: "ADD_TO_CART", payload: props.value })
                navigate("/signin");
            console.log(props.value);

            currentUser && toast.success("Successfully added to the cart");
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
