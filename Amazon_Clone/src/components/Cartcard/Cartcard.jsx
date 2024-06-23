import { useContext } from "react";
import { Mycontext } from "../../Context";
function Cartcard(props) {
  console.log(props);
  const { dispatch, setSum, settItems, cartItems, state } =
    useContext(Mycontext);
  // console.log(state);
  const { val } = props;
  console.log(val);
  const { Q, cart_item } = val;
  console.log(cart_item, Q);
  // let t_items = state.cart_products.reduce((acc, cv) => {
  //   return acc + cv.Q;
  // }, 0);
  // console.log(t_items);
  // settItems(t_items);
  // let summ = state.cart_products.reduce((acc, cv) => {
  //   return (
  //     acc +
  //     parseFloat(
  //       (
  //         cv.cart_item?.deal_price?.amount ?? cv.cart_item?.product_price
  //       )?.replace(/[^0-9.]/g, "")
  //     ) *
  //       cv.Q *
  //       81
  //   );
  // }, 0);
  // console.log(summ);
  // setSum(summ);
  // console.log(cartItems);
  // return cartItems[0]?.cart_products?.map((item) => {
  return (
    <>
      <div className="flex items-center justify-center border-black border-solid border-4 mx-auto my-3">
        <img
          className="m-3"
          src={cart_item?.deal_photo ?? cart_item?.product_photo}
          width={150}
          height={100}
        />
        <div className="w-1/2 m-3">
          <h1>{cart_item?.deal_title ?? cart_item?.product_title}</h1>
          <div className="flex w-1/5 justify-between m-6">
            <button
              // disabled={item.cart_item?.Q > 1 ? false : true}
              onClick={() => {
                dispatch({
                  type: "DECREMENT_QTY",
                  payload: cart_item?.deal_title ?? cart_item?.product_title,
                });
              }}
            >
              -
            </button>
            <h2>Qty:{Q}</h2>
            <button
              onClick={() => {
                dispatch({
                  type: "INCREMENT_QTY",
                  payload: cart_item?.deal_title ?? cart_item?.product_title,
                });
              }}
            >
              +
            </button>
          </div>
          <div onClick={() => {}}>Delete</div>
        </div>
        <div className="text-2xl font-bold">
          {cart_item?.product_price ?? "$" + cart_item?.deal_price?.amount}
        </div>
      </div>
    </>
  );
  // });
}
export default Cartcard;
