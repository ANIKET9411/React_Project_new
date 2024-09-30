import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import axios from "axios";
import { Mycontext } from "../../Context";
function Homemainprod({ Data, title }) {
  const { setProducts } = useContext(Mycontext);
  const navigate = useNavigate();
  //   console.log(Data, title);
  async function getproductsearch(val) {
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
        "x-rapidapi-key": "f15b3a4cbamshaa52643b36734bfp12135bjsnd320635af0b5",
        "x-rapidapi-host": "real-time-amazon-data.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      //   console.log(response.data.data.products);
      setProducts(response.data.data.products);
      navigate("/allproduct");
    } catch (error) {
      //   setLoading(false);
      console.error(error);
    }
  }
  return (
    <div className="w-full lg:w-[24%] md:w-[24%] p-2 border bg-white">
      <h1 className="text-xl font-bold m-2">{title}</h1>
      <div className="flex justify-between flex-wrap">
        {Data.map((item) => {
          //   console.log(item);

          return (
            <div
              key={item.tagname}
              className="w-[44%] m-2 cursor-pointer"
              onClick={() => {
                getproductsearch(item.name);
              }}
            >
              <img src={item.link} alt="" className="w-full" />
              <h3 className="text-sm h-8">{item.tagname}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Homemainprod;
