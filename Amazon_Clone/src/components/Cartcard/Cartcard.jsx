import { useContext } from "react";
import { Mycontext } from "../../Context";
function Cartcard(props) {
  console.log(props);
  const { setSum, settItems, cartItems, setCartItems } = useContext(Mycontext);
  const { val } = props;
  console.log(val);
  const { Q, newdata } = val;
  console.log(newdata, Q);
  let t_items = cartItems.reduce((acc, cv) => {
    return acc + cv.Q;
  }, 0);
  console.log(t_items);
  settItems(t_items);
  let summ = cartItems.reduce((acc, cv) => {
    return (
      acc +
      parseFloat(cv?.newdata?.product_price?.replace(/[^0-9.]/g, "")) *
        cv.Q *
        81
    );
  }, 0);
  console.log(summ);
  setSum(summ);

  function decrementqty(title) {
    let updateitem = cartItems.map((item) => {
      if (
        (item?.newdata?.deal_title ?? item?.newdata?.product_title === title) &&
        item.Q > 1
      ) {
        item.Q = item.Q - 1;
      }
      return item;
    });
    setCartItems(updateitem);
  }
  function incrementqty(title) {
    console.log("incremenet");
    let updateitem = cartItems.map((item) => {
      if (
        item?.newdata?.deal_title === title ||
        item?.newdata?.product_title === title
      ) {
        item.Q = item.Q + 1;
      }
      return item;
    });
    console.log(updateitem);
    setCartItems(updateitem);
  }

  function deleteproduct(title) {
    let updateitem = cartItems.filter((item) => {
      return item.newdata.product_title !== title;
    });
    console.log(updateitem);
    setCartItems(updateitem);
  }

  return (
    <>
      <div className="flex items-center justify-center border-black border-solid border-4 mx-auto my-3">
        <img
          className="m-3"
          src={newdata?.deal_photo ?? newdata?.product_photo}
          width={150}
          height={100}
        />
        <div className="w-1/2 m-3">
          <h1>{newdata?.deal_title ?? newdata?.product_title}</h1>
          <div className="flex w-1/5 justify-between m-6">
            <button
              // disabled={item.cart_item?.Q > 1 ? false : true}
              onClick={() => {
                // dispatch({
                //   type: "DECREMENT_QTY",
                //   payload: cart_item?.deal_title ?? cart_item?.product_title,
                // });
                decrementqty(newdata?.deal_title ?? newdata?.product_title);
              }}
            >
              -
            </button>
            <h2>Qty:{Q}</h2>
            <button
              onClick={() => {
                // dispatch({
                //   type: "INCREMENT_QTY",
                //   payload: cart_item?.deal_title ?? cart_item?.product_title,
                // });
                incrementqty(newdata?.deal_title ?? newdata?.product_title);
              }}
            >
              +
            </button>
          </div>
          <div
            onClick={() => {
              deleteproduct(newdata?.deal_title ?? newdata?.product_title);
            }}
          >
            Delete
          </div>
        </div>
        <div className="text-2xl font-bold">
          Rs.{newdata?.product_price?.replace(/[^0-9.]/g, "") * Q * 81}
        </div>
      </div>
    </>
  );
  // });
}
export default Cartcard;
