import { useContext } from "react";
import { Mycontext } from "../Context";

const PaymentSummary = () => {
  // Calculate total amount
  const { cartItems, sum } = useContext(Mycontext);
  console.log(cartItems);

  return (
    <div className="w-full">
      <h2 className="text-3xl text-left m-8">Amazon Payment Summary</h2>
      <table className="text-left m-8">
        <thead>
          <tr>
            <th className="w-1/5 ml-12 border">Item Name</th>
            <th className="w-1/5  m-12 border">Quantity</th>
            <th className="w-1/5  m-12 border">Price</th>
            <th className="w-1/5  m-12 border">Total</th>
          </tr>
        </thead>
        <tbody>
          {cartItems
            .filter((item) => item.isSelected !== false)
            .map((item, index) => {
              console.log(item);

              return (
                <tr key={index}>
                  <td className="w-1/5  m-12 border">
                    {item?.newdata?.product_title}
                  </td>
                  <td className="w-1/5  m-12 border">{item.Q}</td>
                  <td className="w-1/5  m-12 border">
                    Rs.
                    {(
                      parseInt(
                        item?.newdata?.product_price?.replace(/[^0-9.]/g, "")
                      ) * 81
                    ).toFixed(2)}
                  </td>
                  <td className="w-1/5  m-12 border">
                    Rs.
                    {(
                      item.Q *
                      parseInt(
                        item?.newdata?.product_price?.replace(/[^0-9.]/g, "")
                      ) *
                      81
                    ).toFixed(2)}
                  </td>
                </tr>
              );
            })}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="3" style={{ textAlign: "right" }}>
              Total Amount Due:
            </td>
            <td className="font-bold text-right pr-8">Rs.{sum}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default PaymentSummary;
