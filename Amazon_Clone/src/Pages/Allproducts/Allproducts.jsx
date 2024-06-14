import { Mycontext } from "../../Context";
import Layout from "../../components/Layout/Layout";
import { useContext, useState } from "react";
import Productcard from "../../components/Productcard/Productcard";

function Allproducts() {
  const [selectedval, setSelectedval] = useState();
  const { products, setProducts } = useContext(Mycontext);

  return (
    <Layout>
      <div>
        <div className="md:mr-28 md:flex md:justify-end mt-3">
          <h1 className="font-semibold text-xl">Filter By:</h1>
          <select
            value={selectedval}
            onChange={(e) => {
              setSelectedval(e.target.value);
            }}
            className="ml-2"
          >
            <option value="Featured">Featured</option>
            <option value="HighttoLow">High to low</option>
            <option value="LowtoHigh">Low to High</option>
          </select>
        </div>
        <div>
          <h1 className="md:mx-40 font-bold text-3xl my-5">Search Result:</h1>
          <div className="md:flex md:justify-between md:mx-40 md:flex-wrap">
            {selectedval === "HighttoLow" &&
              setProducts(
                products.sort((a, b) => {
                  return (
                    parseInt(b.product_price.replace(/[^0-9.]/g, "")) -
                    parseInt(a.product_price.replace(/[^0-9.]/g, ""))
                  );
                })
              )}
            {selectedval === "LowtoHigh" &&
              setProducts(
                products.sort((a, b) => {
                  return (
                    parseInt(a.product_price.replace(/[^0-9.]/g, "")) -
                    parseInt(b.product_price.replace(/[^0-9.]/g, ""))
                  );
                })
              )}
            {products.map((product) => {
              return <Productcard key={product.asin} value={product} />;
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Allproducts;
