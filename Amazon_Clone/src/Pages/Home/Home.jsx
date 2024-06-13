import Layout from "../../components/Layout/Layout";
import { useContext, useEffect, useState } from "react";
import { Mycontext } from "../../Context";
import axios from "axios";
import Dealcard from "../../components/Dealcard/Dealcard";
import Home_carousels from "../../components/Home_carousels/Home_carousels";
import app from "../../firebase";
import { getAuth } from "firebase/auth";
import Productcard from "../../components/Productcard/Productcard";
const auth = getAuth(app);
console.log(auth.currentUser?.uid);
function Home() {
  const { deals, setDeals, user, uid, products } = useContext(Mycontext);

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
        "x-rapidapi-key": "f0810dbca3mshd094a9f09e099dep17fa06jsn2aee572d9e6e",
        "x-rapidapi-host": "real-time-amazon-data.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      // console.log(response.data);
      setDeals(response.data.data.deals);
    } catch (error) {
      console.error(error);
    }
  }
  // async function getbestSeller() {
  //   const options = {
  //     method: "GET",
  //     url: "https://real-time-amazon-data.p.rapidapi.com/deal-products",
  //     params: {
  //       country: "US",
  //       sort_by: "FEATURED",
  //       page: "1",
  //     },
  //     headers: {
  //       "x-rapidapi-key": "06ab6a2135msh882d4c349d7a1f0p1350f6jsn2f8c8ae7ec1c",
  //       "x-rapidapi-host": "real-time-amazon-data.p.rapidapi.com",
  //     },
  //   };

  //   try {
  //     const response = await axios.request(options);
  //     console.log(response.data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }
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
    </Layout>
  );
}
export default Home;
