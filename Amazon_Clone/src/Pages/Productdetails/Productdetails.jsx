import { useContext } from "react";
import { Mycontext } from "../../Context";
import Layout from "../../components/Layout/Layout";
import { CiStar } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";
import { toast } from "react-toastify";

function Productdetails() {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const { prodDetail, cartItems, setCartItems } = useContext(Mycontext);
  console.log(prodDetail);
  let keylist = Object.keys(prodDetail.product_details);
  console.log(keylist);
  // let ratinglist = Object.keys(prodDetail.rating_distribution);
  // console.log(ratinglist);

  function ADDTOCART(newdata) {
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
          return [...prev, { newdata, Q: 1, isSelected: true }];
        });
    } else {
      setCartItems([{ newdata, Q: 1, isSelected: true }]);
      console.log("first");
    }
  }

  return (
    <Layout>
      <div className="flex mx-36 my-20">
        <div className="w-2/5 text-center">
          <img src={prodDetail.product_photo} alt="" className="w-full" />
          <button
            onClick={(e) => {
              e.stopPropagation();
              currentUser
                ? ADDTOCART(prodDetail)
                : // dispatch({ type: "ADD_TO_CART", payload: props.value })
                  navigate("/signin");
              toast.success("Successfully added to the cart");
            }}
            className="rounded-3xl mx-auto p-2 bg-yellow-400 my-5"
          >
            ADD TO CART
          </button>
        </div>
        <div className="w-3/5 p-8">
          <h1 className="font-semibold text-3xl">{prodDetail.product_title}</h1>
          <p className="text-4xl font-bold my-3">
            Rs.
            {(prodDetail.product_price.replace(/[^0-9.]/g, "") * 81).toFixed(2)}
          </p>
          <div className="flex items-center rounded-3xl bg-green-500 w-20 px-2 py-1">
            <span className="text-2xl inline mr-2">
              {prodDetail.product_star_rating}
            </span>
            <CiStar className="text-3xl" />
          </div>
          <h1 className="font-bold mt-4 text-2xl">Product details</h1>
          {<p>Name:{prodDetail.product_title}</p>}
          {keylist.map((key) => {
            return (
              <p key={key} className="flex">
                <p className="font-bold">{key}</p>:
                {prodDetail.product_details[key]}
              </p>
            );
          })}

          <h1 className="font-bold mt-4 text-xl">About Product:</h1>
          {prodDetail.about_product.map((prod) => {
            return <li key={prod}>{prod}</li>;
          })}

          {/* <h1 className="font-bold mt-4 text-xl">Product Ratings & Reviews</h1> */}
          {/* {ratinglist.map((rlist) => {
            return (
              <p key={rlist} className="flex">
                <p className="font-bold">{rlist}</p>
                <CiStar className="text-2xl mr-3" />
                <div className="w-40 flex ">
                  <div
                    className="h-4 bg-yellow-500"
                    style={{
                      width: `${prodDetail.rating_distribution[rlist].replace(
                        /[^0-9.]/g,
                        ""
                      )}%`,
                    }}
                  ></div>
                  <p className="ml-5">
                    {prodDetail.rating_distribution[rlist].replace(
                      /[^0-9.]/g,
                      ""
                    )}
                    %
                  </p>
                </div>
              </p>
            );
          })} */}
          <h1 className="font-bold mt-4 text-xl"> Customer Say</h1>
          <p>{prodDetail.customers_say}</p>
        </div>
      </div>
    </Layout>
  );
}
export default Productdetails;
