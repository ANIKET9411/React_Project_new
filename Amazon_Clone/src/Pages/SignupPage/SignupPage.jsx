import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { useContext } from "react";
import { Mycontext } from "../../Context";
import { useAuth } from "../../Context/AuthContext";
import { auth } from "../../Config";
import Header from "../../components/Header/Header";
import { getMultipleDocs } from "../../Api";

function SignupPage() {
  const { setuid, dispatch, uid, setCartItems } = useContext(Mycontext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignin, setIsSignin] = useState(true);
  const [title, setTitle] = useState("Signin");

  const { currentUser } = useAuth();
  useEffect(() => {
    setuid(currentUser?.uid);
    getMultipleDocs(uid).then((data) => {
      console.log(data);
      setCartItems(data);
    });
  }, []);
  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      navigate("/");
      console.log("User signed up:", userCredential.user);
      setuid(currentUser.uid);
    } catch (error) {
      console.error("Error signing up:", error);
    }
  };

  const handleSignIn = async (e) => {
    try {
      e.preventDefault();
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      navigate("/");
      console.log("User signed in:", userCredential.user.uid);
      setuid(currentUser.uid);
      dispatch({ type: "reset" });
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };

  const handleSignOut = async (e) => {
    e.preventDefault();
    try {
      await signOut(auth);

      setuid();
      console.log("User signed out");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };
  function switchtoother() {
    setIsSignin(true);
    setTitle("SignIn");
  }
  function switchtosignup() {
    setIsSignin(false);
    setTitle("SignUp");
  }
  return (
    <div>
      {currentUser && <Header />}
      <img
        src="https://th.bing.com/th/id/OIP.YdkQGmhB9c2Sr84FeDD9egAAAA?rs=1&pid=ImgDetMain"
        alt=""
        className="w-32 mx-auto"
      />
      {!currentUser && (
        <>
          <div className="px-8 py-10 border-zinc-500 border-solid border-2 w-1/4 mx-auto">
            <h1 className="text-2xl font-bold">{title}</h1>
            <input
              className="w-full h-8 px-3 py-6  border-zinc-500 border-solid border-2 my-6"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
            <input
              className="w-full h-8 px-3 py-6  border-zinc-500 border-solid border-2 my-6"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
            <p>
              By continuing, you agree to Amazon's Conditions of Use and Privacy
              Notice.
            </p>
            {!isSignin && (
              <button
                onClick={handleSignUp}
                className=" mb-10 rounded-md mx-auto p-2 bg-yellow-400 font-bold w-full mt-4"
              >
                Sign Up
              </button>
            )}
            {isSignin && (
              <button
                onClick={handleSignIn}
                className=" mb-10 rounded-md mx-auto p-2 bg-yellow-400 font-bold w-full mt-4"
              >
                Sign In
              </button>
            )}
            {!isSignin && (
              <p
                className="underline w-full text-center"
                onClick={switchtoother}
              >
                Already have an account
              </p>
            )}
          </div>
        </>
      )}
      {isSignin && !currentUser && (
        <>
          <div className="w-1/4 mx-auto text-center mt-5">New to Amazon</div>
          <div
            className=" mx-auto w-1/4 text-center m-8 p-2 border-2 border-solid border-zinc-500 font-semibold"
            onClick={switchtosignup}
          >
            Create your Amazon Account
          </div>
        </>
      )}
      {currentUser && (
        <>
          <div className="px-8 py-10 border-zinc-500 border-solid border-2 w-1/4 mx-auto text-center">
            <img
              src="https://th.bing.com/th/id/R.01a2fb974429f5b93ba993d67894f097?rik=2TH6dxjuaGvyhg&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_119029.png&ehk=C4aZ0qzmdkDSdlGh0QuwthbcBTM5C6EeXjC7hwYUlPY%3d&risl=&pid=ImgRaw&r=0"
              alt=""
              className=" text-center w-full p-10"
            />
            <h1 className="text-2xl font-bold">{currentUser.email}</h1>
            <button
              onClick={handleSignOut}
              className=" mb-10 rounded-md mx-auto p-2 bg-yellow-400 font-bold w-full mt-4"
            >
              Sign Out
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default SignupPage;
