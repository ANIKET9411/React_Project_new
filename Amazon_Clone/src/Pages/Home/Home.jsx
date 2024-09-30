import Layout from "../../components/Layout/Layout";
import { useContext, useEffect, useState } from "react";
import { Mycontext } from "../../Context";
import axios from "axios";
import Home_carousels from "../../components/Home_carousels/Home_carousels";
import app from "../../firebase";
import { getAuth } from "firebase/auth";
import { RotatingLines } from "react-loader-spinner";
const auth = getAuth(app);
console.log(auth?.currentUser?.uid);
import React from "react";
import { getMultipleDocs } from "../../Api";
import HomeShortcut1 from "../../components/HomeShortcut-1/HomeShortcut1";
import HomeShortcut2 from "../../components/HomeShortcut2/HomeShortcut2";
import HomeShortcut3 from "../../components/HomeShortcut3/HomeShortcut3";
import HomeShortcut4 from "../../components/HomeShortcut4/HomeShortcut4";
import { useNavigate } from "react-router-dom";

function Home() {
  const [laptops, setLaptops] = useState([]);
  const [mobile, setMobiles] = useState([]);

  const {
    deals,
    setDeals,
    uid,
    setProdDetail,
    setCartItems,
    loading,
    setLoading,
  } = useContext(Mycontext);
  const navigate = useNavigate();
  async function getdeals() {
    const options = {
      method: "GET",
      url: "https://real-time-amazon-data.p.rapidapi.com/deals-v2",
      params: {
        limit: 40,
        country: "US",
        min_product_star_rating: "ALL",
        price_range: "ALL",
        discount_range: "ALL",
      },
      headers: {
        "x-rapidapi-key": "ae1d78a41fmsh9899d0f9a032543p18ff35jsnca4aa0db0d6a",
        "x-rapidapi-host": "real-time-amazon-data.p.rapidapi.com",
      },
    };

    try {
      setLoading(true);
      const response = await axios.request(options);
      // console.log(response.data);
      console.log(response.data.data.deals.length);

      setDeals(response.data.data.deals);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  }
  async function getdetail(id) {
    const options = {
      method: "GET",
      url: "https://real-time-amazon-data.p.rapidapi.com/product-details",
      params: {
        asin: `${id}`,
        country: "US",
      },
      headers: {
        "x-rapidapi-key": "ae1d78a41fmsh9899d0f9a032543p18ff35jsnca4aa0db0d6a",
        "x-rapidapi-host": "real-time-amazon-data.p.rapidapi.com",
      },
    };
    try {
      setLoading(true);
      const response = await axios.request(options);
      navigate("/productdetails");
      console.log(response.data);
      setProdDetail(response.data.data);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  }
  async function getproductsearch(val, setSearch) {
    const options = {
      method: "GET",
      url: "https://real-time-amazon-data.p.rapidapi.com/search",
      params: {
        query: `${val}`,
        page: "1",
        country: "US",
        sort_by: "RELEVANCE",
        product_condition: "ALL",
      },
      headers: {
        "x-rapidapi-key": "ae1d78a41fmsh9899d0f9a032543p18ff35jsnca4aa0db0d6a",
        "x-rapidapi-host": "real-time-amazon-data.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      console.log(response.data);
      setSearch(response.data.data.products);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getdeals();
    // getbestSeller();
    getproductsearch("laptop", setLaptops);
    getproductsearch("mobiles phone", setMobiles);
    getMultipleDocs(uid).then((data) => {
      console.log(data);
      setCartItems(data);
    });
  }, [uid]);

  return (
    <Layout>
      <Home_carousels />
      <div className="bg-[#E3E6E6] w-full">
        <HomeShortcut1 />
        <HomeShortcut2 />
        <div className="flex overflow-x-scroll p-2 bg-white">
          {deals.map((item, index) => {
            console.log(item);

            return (
              index <= 13 && (
                <img
                  onClick={() => {
                    getdetail(item.product_asin);
                  }}
                  key={item.deal_photo}
                  src={item.deal_photo}
                  alt=""
                  className="h-[20%] lg:h-[10%] lg:w-[10%] md:h-[10%] md:w-[10%] w-[20%] m-2"
                />
              )
            );
          })}
        </div>
        <HomeShortcut3 />
        <section className="flex p-2 overflow-scroll w-full">
          {laptops.map((item, index) => {
            return (
              <section
                className="w-96 h-64 border-black border-2 border-solid"
                key={item.asin}
                onClick={() => {
                  getdetail(item.asin);
                }}
              >
                {/* <img
                  src={item.product_photo}
                  alt=""
                  height="200px"
                  width="250px"
                /> */}
                {/* <h3>Great Indian Festival</h3>
                <p>{item.product_title}</p> */}
              </section>
            );
          })}
        </section>
        <HomeShortcut4 />
      </div>

      <div className="flex overflow-x-scroll p-2 bg-white">
        {deals.map((item, index) => {
          console.log(item);

          return (
            index >= 14 && (
              <img
                onClick={() => {
                  getdetail(item.product_asin);
                }}
                key={item.deal_photo}
                src={item.deal_photo}
                alt=""
                className="h-[20%] lg:h-[10%] lg:w-[10%] md:h-[10%] md:w-[10%] w-[20%]"
              />
            )
          );
        })}
      </div>
      {
        // !loading && (
        //   <>
        //     { <h1 className="font-bold text-3xl mx-20 my-10">Products For You</h1>}
        //     { <div className="flex mx-10">
        //       <div className="flex justify-between flex-wrap">
        //         {deals.map((deal, index) => {
        //           console.log(deal);
        //           <div>
        //             <h1 className="mx-32 font-bold text-3xl my-5">
        //               Search Result:
        //             </h1>
        //             <div className="flex justify-between mx-40 flex-wrap">
        //               {products.map((product) => {
        //                 return <Productcard key={product.asin} value={product} />;
        //               })}
        //             </div>
        //           </div>;
        //           return <Dealcard key={index} value={deal} />;
        //         })}
        //       </div>
        //     </div> }
        //   </>
        // )
      }
      {loading && (
        <div
          className="flex
       justify-center items-center p-20"
        >
          {
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
          }
        </div>
      )}
    </Layout>
  );
}
export default React.memo(Home);
