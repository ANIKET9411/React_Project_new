import { useContext } from "react";
import { Mycontext } from "../../Context";

function CartCard(props) {
  console.log(props);
  const { setSum, cartItems, setCartItems } = useContext(Mycontext);
  const { val } = props;
  console.log(val);
  const { Q, isSelected, newdata } = val;
  console.log(newdata, Q);

  // Calculate the total sum of selected items
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

  function decrementQty(title) {
    let updatedItem = cartItems.map((item) => {
      if (item?.newdata?.product_title === title && item.Q > 1) {
        item.Q -= 1;
      }
      return item;
    });
    setCartItems(updatedItem);
  }

  function incrementQty(title) {
    let updatedItem = cartItems.map((item) => {
      if (item?.newdata?.product_title === title) {
        item.Q += 1;
      }
      return item;
    });
    setCartItems(updatedItem);
  }

  function deleteProduct(title) {
    let updatedItem = cartItems.filter((item) => {
      return item.newdata.product_title !== title;
    });
    setCartItems(updatedItem);
  }

  function changeStatus(title) {
    let updatedItem = cartItems.map((item) => {
      if (item?.newdata?.product_title === title) {
        item.isSelected = !item.isSelected;
      }
      return item;
    });
    setCartItems(updatedItem);
  }

  return (
    <div className="flex flex-col lg:flex-row items-center justify-between border-black border-2 mx-auto my-3 p-4 bg-white rounded-lg shadow-md">
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={isSelected}
          onChange={() => changeStatus(newdata?.product_title)}
          className="mr-4"
        />
        <img
          className="m-3 h-32 w-32 object-contain"
          src={newdata?.product_photo}
          alt={newdata?.product_title}
        />
      </div>
      <div className="flex flex-col w-full lg:w-1/2 m-3">
        <h1 className="text-lg font-semibold">{newdata?.product_title}</h1>
        <div className="flex w-full items-center mt-2 justify-evenly">
          <div className="flex w-1/3 justify-between items-center">
            <button
              className="bg-gray-300 rounded px-2 py-1"
              onClick={() => decrementQty(newdata?.product_title)}
            >
              -
            </button>
            <h2 className="text-lg">Qty: {Q}</h2>
            <button
              className="bg-gray-300 rounded px-2 py-1"
              onClick={() => incrementQty(newdata?.product_title)}
            >
              +
            </button>
          </div>
          <div
            onClick={() => deleteProduct(newdata?.product_title)}
            className="rounded-3xl bg-yellow-400 px-4 py-2 hover:cursor-pointer hover:bg-yellow-500 transition duration-200"
          >
            Delete
          </div>
        </div>
      </div>
      <div className="text-2xl font-bold mt-4 lg:mt-0">
        Rs.
        {(newdata?.product_price?.replace(/[^0-9.]/g, "") * Q * 81).toFixed(2)}
      </div>
    </div>
  );
}

export default CartCard;
