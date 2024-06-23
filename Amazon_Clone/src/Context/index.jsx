import { useEffect, useReducer, useState } from "react";
import { createContext } from "react";

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
  const [tItems, settItems] = useState();

  const [uid, setuid] = useState("");
  function reducerfn(state, action) {
    switch (action.type) {
      case "ADD_TO_CART": {
        console.log(state);
        return {
          ...state,
          cart_products: [
            ...state.cart_products,
            { cart_item: action.payload, Q: 1 },
          ],
        };
      }
      case "DECREMENT_QTY": {
        console.log(action.payload);
        let updatedlist = state.cart_products.map((item) => {
          if (
            (item.cart_item.deal_title === action.payload ||
              item.cart_item.product_title === action.payload) &&
            item.Q > 1
          ) {
            item.Q = item.Q - 1;
          }
          return item;
        });

        return { ...state, cart_products: updatedlist };
      }
      case "INCREMENT_QTY": {
        console.log(action.payload, "again");

        let updatedlist = cartItems?.map((item) => {
          return item?.cart_products.map((prod) => {
            console.log(prod);
            if (
              prod.cart_item.deal_title === action.payload ||
              prod.cart_item.product_title === action.payload
            ) {
              console.log("Aniket");
              prod.Q = prod.Q + 1;
            }
            return prod;
          });
        });
        setCartItems(updatedlist);

        console.log(updatedlist);
        return { cart_products: updatedlist };
      }
      case "reset": {
        console.log("reset");
        return {
          cart_products: [],
        };
      }
      case "DATA_FIRESTORE": {
        return { cart_products: action.payload };
      }
      // case "DATA_FIRESTORE": {
      //   return {
      //     ...state,
      //     cart_products: [...state.cart_products, action.payload],
      //   };
      // }
    }
  }
  const [state, dispatch] = useReducer(reducerfn, {
    cart_products: [],
  });
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
      console.log(state);
      if (uid) {
        setCartItems((prev) => {
          console.log(prev);
          return [...prev, state];
        });
        let updata = [...cartItems, state];
        await deleteUserCollection(uid);
        await storeUserData(uid, { updata });
        // setCartItems(state)

        dispatch({ type: "reset" });
      }
    };
    if (uid && state.cart_products.length !== 0) {
      handleUserData();
      console.log(state);
    }
  }, [state, uid]);
  const [deals, setDeals] = useState([]);
  return (
    <Mycontext.Provider
      value={{
        products,
        setProducts,
        deals,
        setDeals,
        state,
        dispatch,
        prodDetail,
        setProdDetail,
        uid,
        setuid,
        cartItems,
        setCartItems,
        sum,
        setSum,
        settItems,
        tItems,
        Oitem,
        setOItem,
      }}
    >
      {props.children}
    </Mycontext.Provider>
  );
}
export default Context;
