// src/components/RazorpayPayment.js
import React, { useContext } from "react";
import { Mycontext } from "../Context";
import {
  addDoc,
  collection,
  deleteDoc,
  getDocs,
  getFirestore,
} from "firebase/firestore";
import { toast } from "react-toastify";

const RazorpayPayment = () => {
  const { sum, setOItem, cartItems, dispatch, setCartItems, uid } =
    useContext(Mycontext);
  async function deleteUserCollection(uid, str) {
    try {
      // Create a reference to the user's collection
      const db = getFirestore();
      const userCollection = collection(db, `${str}/${uid}/userData`);

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
      console.log(data);
      // Create a reference to the user's collection
      const db = getFirestore();
      const userCollection = collection(db, `orderdata/${id}/Data`);

      // Add a document to the user's collection
      const docRef = await addDoc(userCollection, { Odata: { data } });
      console.log("Document written with ID: ", docRef.id);
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  }

  const handlePayment = () => {
    if (isNaN(sum) || sum <= 0) {
      alert("Invalid amount");
      return;
    }

    const options = {
      key: "rzp_test_47OB4SGr8o5ZX6", // Replace with your Razorpay Test Key ID
      amount: parseInt(sum * 100), // Amount in smallest currency unit (paise)
      currency: "INR",
      name: "Amazon",
      description: "Test Transaction",
      image: "https://example.com/your_logo", // Replace with your logo URL or leave empty if not used
      handler: async function (response) {
        // Handle successful payment
        // alert(
        //   `Payment successful! Payment ID: ${response.razorpay_payment_id}`
        // );
        toast.success(
          `Payment successful! Payment ID: ${response.razorpay_payment_id}`
        );
        {
          setOItem(cartItems);
          await deleteUserCollection(uid, "cartdata");
          await storeUserData(uid, cartItems);
          await deleteUserCollection(uid, "orderdata");
          dispatch({ type: "reset" });
        }

        // You can also make a call to your backend to validate the payment and store payment details
      },
      prefill: {
        name: "John Doe",
        email: "john.doe@example.com",
        contact: "9411839701",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#F37254",
      },
    };

    const rzp1 = new window.Razorpay(options);
    rzp1.on("payment.failed", function (response) {
      // alert(`Payment failed! Reason: ${response.error.reason}`);
      toast.error(`Payment failed! Reason: ${response.error.reason}`);
    });

    rzp1.open();
  };

  return (
    <div className="text-right mr-52">
      <button
        onClick={handlePayment}
        className="rounded-3xl p-2 w-32 bg-yellow-400"
      >
        Proceed to Pay
      </button>
    </div>
  );
};

export default RazorpayPayment;
