import { useContext } from "react";
import { Mycontext } from "../../Context";
import Layout from "../../components/Layout/Layout";
import { CiStar } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";

function Productdetails() {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const { prodDetail, dispatch } = useContext(Mycontext);
  console.log(prodDetail);
  let keylist = Object.keys(prodDetail.product_details);
  console.log(keylist);
  let ratinglist = Object.keys(prodDetail.rating_distribution);
  console.log(ratinglist);
  return (
    <Layout>
      <div className="flex mx-36 my-20">
        <div className="w-2/5 text-center">
          <img src={prodDetail.product_photo} alt="" className="w-full" />
          <button
            onClick={(e) => {
              e.stopPropagation();
              currentUser
                ? dispatch({ type: "ADD_TO_CART", payload: props.value })
                : navigate("/signin");
            }}
            className="rounded-3xl mx-auto p-2 bg-yellow-400"
          >
            ADD TO CART
          </button>
        </div>
        <div className="w-3/5 p-8">
          <h1 className="font-semibold text-3xl">{prodDetail.product_title}</h1>
          <p className="text-4xl font-bold my-3">${prodDetail.product_price}</p>
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

          <h1 className="font-bold mt-4 text-xl">Product Ratings & Reviews</h1>
          {ratinglist.map((rlist) => {
            return (
              <p key={rlist} className="flex">
                <p className="font-bold">{rlist}</p>
                <CiStar className="text-2xl mr-3" />
                <div className="w-40 flex ">
                  <div
                    className="h-4 bg-yellow-500"
                    style={{
                      width: `${prodDetail.rating_distribution[rlist]}`,
                    }}
                  ></div>
                  <p className="ml-5">
                    {prodDetail.rating_distribution[rlist]}
                  </p>
                </div>
              </p>
            );
          })}
          <h1 className="font-bold mt-4 text-xl"> Customer Say</h1>
          <p>{prodDetail.customers_say}</p>
        </div>
      </div>
    </Layout>
  );
}
export default Productdetails;
