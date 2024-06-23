import Layout from "../../components/Layout/Layout";
import { useContext, useEffect, useState } from "react";
import { Mycontext } from "../../Context";
import axios from "axios";
import Dealcard from "../../components/Dealcard/Dealcard";
import Home_carousels from "../../components/Home_carousels/Home_carousels";
import app from "../../firebase";
import { getAuth } from "firebase/auth";
import Productcard from "../../components/Productcard/Productcard";
import { RotatingLines } from "react-loader-spinner";
const auth = getAuth(app);
console.log(auth.currentUser?.uid);

function Home() {
  const { deals, setDeals, user, uid, products } = useContext(Mycontext);
  const [loading, setLoading] = useState(false);
  async function getdeals() {
    const options = {
      method: "GET",
      url: "https://real-time-amazon-data.p.rapidapi.com/deals-v2",
      params: {
        limit: 30,
        country: "US",
        min_product_star_rating: "ALL",
        price_range: "ALL",
        discount_range: "ALL",
      },
      headers: {
        "x-rapidapi-key": "da8063c0b4msh48c8e57b79b4091p1369fbjsneab5a009a71f",
        "x-rapidapi-host": "real-time-amazon-data.p.rapidapi.com",
      },
    };

    try {
      setLoading(true);
      const response = await axios.request(options);
      // console.log(response.data);
      setDeals(response.data.data.deals);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getdeals();
    // getbestSeller();
    console.log(user);
  }, [user]);
  return (
    <Layout>
      <Home_carousels />
      <h1 className="font-bold text-3xl mx-20 my-10">Products For You</h1>
      <div className="flex mx-10">
        <div className="flex justify-between flex-wrap">
          {deals.map((deal, index) => {
            // console.log(deal);
            <div>
              <h1 className="mx-32 font-bold text-3xl my-5">Search Result:</h1>
              <div className="flex justify-between mx-40 flex-wrap">
                {products.map((product) => {
                  return <Productcard key={product.asin} value={product} />;
                })}
              </div>
            </div>;
            return <Dealcard key={index} value={deal} />;
          })}
        </div>
      </div>
      <div
        className="flex
       justify-center items-center py-20"
      >
        {loading && (
          <RotatingLines
            visible={true}
            height="96"
            width="96"
            color="grey"
            strokeWidth="5"
            animationDuration="0.75"
            ariaLabel="rotating-lines-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        )}
      </div>
    </Layout>
  );
}
export default Home;
