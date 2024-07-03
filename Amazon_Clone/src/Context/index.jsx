import { useEffect, useReducer, useState } from "react";
import { createContext } from "react";
import { getMultipleDocs } from "../Api/index";

import {
  addDoc,
  collection,
  deleteDoc,
  getDocs,
  getFirestore,
} from "firebase/firestore";

export const Mycontext = createContext();
function Context(props) {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [sum, setSum] = useState();
  const [prodDetail, setProdDetail] = useState();
  const [Oitem, setOItem] = useState(null);

  const [loading, setLoading] = useState(false);

  const [uid, setuid] = useState("");

  async function deleteUserCollection(uid) {
    try {
      // Create a reference to the user's collection
      const db = getFirestore();
      const userCollection = collection(db, `cartdata/${uid}/userData`);

      // Get all documents in the collection
      const querySnapshot = await getDocs(userCollection);

      // Loop through each document and delete it
      querySnapshot.forEach(async (doc) => {
        await deleteDoc(doc.ref);
        console.log(`Document with ID ${doc.id} deleted successfully.`);
      });
    } catch (error) {
      console.error("Error deleting documents: ", error);
    }
  }
  async function storeUserData(id, data) {
    try {
      // Create a reference to the user's collection
      const db = getFirestore();
      const userCollection = collection(db, `cartdata/${id}/userData`);

      // Add a document to the user's collection
      const docRef = await addDoc(userCollection, data);
      console.log("Document written with ID: ", docRef.id);
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  }

  useEffect(() => {
    const handleUserData = async () => {
      // console.log(state);
      if (uid) {
        // setCartItems((prev) => {
        //   console.log(prev);
        //   return [...prev, state];
        // });
        // let updata = [...cartItems, state];

        await deleteUserCollection(uid);
        await storeUserData(uid, { cartItems });
        // setCartItems(state)

        // dispatch({ type: "reset" });
      }
    };
    handleUserData();
    // if (uid && state.cart_products.length !== 0) {
    //   console.log(state);
    // }
  }, [cartItems, uid]);
  useEffect(() => {
    getMultipleDocs(uid).then((data) => {
      console.log(data);
      setCartItems(data);
    });
  }, [uid]);
  const [deals, setDeals] = useState([]);
  return (
    <Mycontext.Provider
      value={{
        products,
        setProducts,
        deals,
        setDeals,
        // state,
        // dispatch,
        loading,
        setLoading,
        prodDetail,
        setProdDetail,
        uid,
        setuid,
        cartItems,
        setCartItems,
        sum,
        setSum,

        Oitem,
        setOItem,
      }}
    >
      {props.children}
    </Mycontext.Provider>
  );
}
export default Context;
