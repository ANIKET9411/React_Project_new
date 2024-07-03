// src/components/RazorpayPayment.js
import { useContext, useEffect } from "react";
import { Mycontext } from "../Context";
import {
  addDoc,
  collection,
  deleteDoc,
  getDocs,
  getFirestore,
} from "firebase/firestore";
import { toast } from "react-toastify";
import PaymentSummary from "./PaymentSummary";
import { useNavigate } from "react-router-dom";

const RazorpayPayment = () => {
  const navigate = useNavigate();
  const { sum, setOItem, cartItems, setCartItems, uid } = useContext(Mycontext);
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
      image: "https://purepng.com/public/uploads/large/amazon-logo-s3f.png", // Replace with your logo URL or leave empty if not used
      handler: async function (response) {
        toast.success(
          `Payment successful! Payment ID: ${response.razorpay_payment_id}`
        );
        {
          setOItem(cartItems.filter((item) => item.isSelected === true));
          await deleteUserCollection(uid, "cartdata");
          await storeUserData(
            uid,
            cartItems.filter((item) => item.isSelected === true)
          );
          await deleteUserCollection(uid, "orderdata");
          setCartItems((prev) => {
            return prev.filter((item) => item.isSelected === false);
          });
          navigate("/");
        }

        // You can also make a call to your backend to validate the payment and store payment details
      },
      prefill: {
        name: "John Doe",
        email: "aniketjauhri2003@gmail.com",
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
      navigate("/cart");
    });

    rzp1.open();
  };
  useEffect(() => {
    handlePayment();
  }, []);
  return (
    <div className="text-right">
      <PaymentSummary />
      <button
        onClick={handlePayment}
        className="rounded-3xl p-2 w-32 bg-yellow-400 mr-10"
      >
        Proceed to Pay
      </button>
    </div>
  );
};

export default RazorpayPayment;
