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
import React from "react";
import { getMultipleDocs } from "../../Api";

function Home() {
  const { deals, setDeals, uid, products, setCartItems, loading, setLoading } =
    useContext(Mycontext);

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
        "x-rapidapi-key": "9cad704f23mshc671070439c9840p194925jsn63e13027751e",
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
      setLoading(false);
      console.error(error);
    }
  }

  useEffect(() => {
    getdeals();
    // getbestSeller();
    getMultipleDocs(uid).then((data) => {
      console.log(data);
      setCartItems(data);
    });
  }, [uid]);
  return (
    <Layout>
      <Home_carousels />
      {!loading && (
        <>
          <h1 className="font-bold text-3xl mx-20 my-10">Products For You</h1>
          <div className="flex mx-10">
            <div className="flex justify-between flex-wrap">
              {deals.map((deal, index) => {
                // console.log(deal);
                <div>
                  <h1 className="mx-32 font-bold text-3xl my-5">
                    Search Result:
                  </h1>
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
        </>
      )}
      <div
        className="flex
       justify-center items-center p-20"
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
export default React.memo(Home);
