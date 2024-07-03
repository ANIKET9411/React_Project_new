import { useContext } from "react";
import { Mycontext } from "../../Context";
function Cartcard(props) {
  console.log(props);
  const { setSum, cartItems, setCartItems } = useContext(Mycontext);
  const { val } = props;
  console.log(val);
  const { Q, isSelected, newdata } = val;
  console.log(newdata, Q);
  let summ = cartItems
    .filter((item) => item.isSelected === true)
    .reduce((acc, cv) => {
      return (
        acc +
        parseFloat(cv?.newdata?.product_price?.replace(/[^0-9.]/g, "")) *
          cv.Q *
          81
      );
    }, 0);
  console.log(summ);
  setSum(summ.toFixed(2));

  function decrementqty(title) {
    let updateitem = cartItems.map((item) => {
      if (item?.newdata?.product_title === title && item.Q > 1) {
        item.Q = item.Q - 1;
      }
      return item;
    });
    setCartItems(updateitem);
  }
  function incrementqty(title) {
    console.log("incremenet");
    let updateitem = cartItems.map((item) => {
      if (item?.newdata?.product_title === title) {
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

  function changeStatus(title) {
    let updateitem = cartItems.map((item) => {
      if (item?.newdata?.product_title === title) {
        item.isSelected = !item.isSelected;
      }
      return item;
    });
    console.log(updateitem);
    setCartItems(updateitem);
  }

  return (
    <div className="flex items-center justify-between border-black border-solid border-4 mx-auto my-3 p-4">
      <input
        type="checkbox"
        name=""
        id=""
        checked={isSelected}
        onChange={() => changeStatus(newdata?.product_title)}
      />
      <img
        className="m-3 h-32"
        src={newdata?.product_photo}
        // width={150}
        // height={"80px"}
      />
      <div className="w-1/2 m-3">
        <h1>{newdata?.product_title}</h1>
        <div className="flex w-1/5 justify-between m-6">
          <button
            // disabled={item.cart_item?.Q > 1 ? false : true}
            onClick={() => {
              // dispatch({
              //   type: "DECREMENT_QTY",
              //   payload: cart_item?.deal_title ?? cart_item?.product_title,
              // });
              decrementqty(newdata?.product_title);
            }}
          >
            -
          </button>
          <h2>Qty:{Q}</h2>
          <button
            onClick={() => {
              incrementqty(newdata?.product_title);
            }}
          >
            +
          </button>
        </div>
        <div
          onClick={() => {
            deleteproduct(newdata?.product_title);
          }}
          className="rounded-3xl  p-2 bg-yellow-400 w-16 hover:cursor-pointer"
        >
          Delete
        </div>
      </div>
      <div className="text-2xl font-bold">
        Rs.
        {(newdata?.product_price?.replace(/[^0-9.]/g, "") * Q * 81).toFixed(2)}
      </div>
    </div>
  );
  // });
}
export default Cartcard;
