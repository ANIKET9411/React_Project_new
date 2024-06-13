import { useContext } from "react";
import { Mycontext } from "../../Context";
function Cartcard(props) {
  const { dispatch, setSum, settItems } = useContext(Mycontext);
  console.log(props);
  const { value } = props;
  console.log(value);
  const { cart_products } = value;
  console.log(cart_products);
  let t_items = cart_products.reduce((acc, cv) => {
    return acc + cv.Q;
  }, 0);
  console.log(t_items);
  settItems(t_items);
  let summ = cart_products.reduce((acc, cv) => {
    return (
      acc +
      parseFloat(
        (
          cv.cart_item?.deal_price?.amount ?? cv.cart_item?.product_price
        ).replace(/[^0-9.]/g, "")
      ) *
        cv.Q *
        81
    );
  }, 0);
  console.log(summ);
  setSum(summ);
  return cart_products.map((item) => {
    // console.log(
    //   item.cart_item?.product_price,
    //   item.cart_item?.deal_price?.amount
    // );
    // setSum(sum + item.cart_item?.deal_price?.amount);
    return (
      <>
        <div className="flex items-center justify-center border-black border-solid border-4 mx-auto my-3">
          <img
            className="m-3"
            src={item.cart_item.deal_photo ?? item.cart_item?.product_photo}
            width={150}
            height={100}
          />
          <div className="w-1/2 m-3">
            <h1>
              {item.cart_item?.deal_title ?? item.cart_item?.product_title}
            </h1>
            <div className="flex w-1/5 justify-between m-6">
              <button
                onClick={() => {
                  dispatch({
                    type: "DECREMENT_QTY",
                    payload:
                      item.cart_item?.deal_title ??
                      item.cart_item?.product_title,
                  });
                }}
              >
                -
              </button>
              <h2>Qty:{item.Q}</h2>
              <button
                onClick={() => {
                  dispatch({
                    type: "INCREMENT_QTY",
                    payload:
                      item.cart_item?.deal_title ??
                      item.cart_item?.product_title,
                  });
                }}
              >
                +
              </button>
            </div>
          </div>
          <div className="text-2xl font-bold">
            {item.cart_item?.product_price ??
              "$" + item.cart_item?.deal_price.amount}
          </div>
        </div>
      </>
    );
  });
}
export default Cartcard;
