// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDIF3uFGJIZ8lN-O2E7PaysMfFYfWURiXA",
  authDomain: "clone-d7c0e.firebaseapp.com",
  projectId: "clone-d7c0e",
  storageBucket: "clone-d7c0e.appspot.com",
  messagingSenderId: "1031363677372",
  appId: "1:1031363677372:web:b1bd934851d9f4268794b9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
// export default app;
