import { collection, getDocs, getFirestore } from "firebase/firestore";
import { Mycontext } from "../../Context";
import Layout from "../../components/Layout/Layout";
import { useContext, useEffect } from "react";

function Order() {
  const { Oitem, setOItem, uid, cartItems } = useContext(Mycontext);
  // console.log(Oitem[0]?.cart_products[0]?.cart_item?.product_title);
  console.log(Oitem);
  const getMultipleDocs = async (uid) => {
    const db = getFirestore();
    const querySnapshot = await getDocs(
      collection(db, `orderdata/${uid}/Data`)
    );
    let orderlist = querySnapshot.docs.map((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
      return doc.data();
    });
    setOItem(orderlist);
    console.log(orderlist);
    // dispatch({ type: "DATA_FIRESTORE", payload: cartItems });
  };

  useEffect(() => {
    if (uid && cartItems) {
      getMultipleDocs(uid);
    }
  }, [cartItems, uid]);

  return (
    <Layout>
      <div>
        {/* {Oitem} */}
        {/* console.log(Oitem); */}
        <h1 className="text-3xl font-bold w-5/6 mx-auto my-3">My Orders:</h1>
        {Oitem === null && (
          <h1 className="w-5/6 text-4xl px-28 py-20 ">
            No order placed yet...
          </h1>
        )}
        {console.log(Oitem)}
        {
          Oitem !== null &&
            // Oitem.map((OI) => {
            //   console.log(OI);
            //   console.log(OI?.data);
            // })
            // Oitem[0]?.cart_products?.map((item) => {
            Oitem.map((item) => {
              console.log(item);
              console.log(item.Odata?.data[0].newdata);
              // return item.map((it) => {
              // console.log(it);
              // return it.cart_products.map((clist) => {
              let value = item.Odata?.data[0].newdata;

              return (
                <div
                  className="flex items-center justify-center border-black border-solid border-4 mx-auto my-3 w-5/6"
                  key={value?.product_title}
                >
                  {/* {item?.cart_item?.product_title} */}

                  <img
                    className="m-3"
                    src={value?.product_photo}
                    width={150}
                    height={100}
                  />
                  <div className="w-1/2 m-3">
                    <h1>{value?.product_title}</h1>
                    <div className="flex w-1/5 justify-between m-6">
                      <h2>Qty:{item.Odata?.data[0].Q}</h2>
                    </div>
                  </div>
                  <div className="text-2xl font-bold">
                    Rs.{value?.product_price * item.Odata?.data[0].Q * 81}
                  </div>
                </div>
              );
              // });
              // });
            })
          // Oitem.map((OI) => {
          //   OI.Odata.data[0].cart_products.map((item) => {
          // return (
          //   <div
          //     className="flex items-center justify-center border-black border-solid border-4 mx-auto my-3 w-5/6"
          //     key={item.cart_item?.product_title}
          //   >
          //     {/* {item?.cart_item?.product_title} */}

          //     <img
          //       className="m-3"
          //       src={
          //         item.cart_item.deal_photo ?? item.cart_item?.product_photo
          //       }
          //       width={150}
          //       height={100}
          //     />
          //     <div className="w-1/2 m-3">
          //       <h1>
          //         {item.cart_item?.deal_title ??
          //           item.cart_item?.product_title}
          //       </h1>
          //       <div className="flex w-1/5 justify-between m-6">
          //         <h2>Qty:{item.Q}</h2>
          //       </div>
          //     </div>
          //     <div className="text-2xl font-bold">
          //       {item.cart_item?.product_price ??
          //         "$" + item.cart_item?.deal_price.amount}
          //     </div>
          //   </div>
          // );
          // })
        }
      </div>
    </Layout>
  );
}
export default Order;
