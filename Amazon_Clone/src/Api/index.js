import { collection, getDocs, getFirestore } from "firebase/firestore";

const getMultipleDocs = async (uid) => {
  const db = getFirestore();
  const querySnapshot = await getDocs(
    collection(db, `cartdata/${uid}/userData`)
  );
  let cartlist = querySnapshot.docs.map((doc) => {
    console.log(`${doc.id} => ${doc.data()}`);
    return doc.data();
  });
  console.log(cartlist[0].cartItems);
  // setCartItems(cartlist[0].cartItems);
  return cartlist[0].cartItems;
  // dispatch({ type: "DATA_FIRESTORE", payload: cartlist });
};
  export {getMultipleDocs}