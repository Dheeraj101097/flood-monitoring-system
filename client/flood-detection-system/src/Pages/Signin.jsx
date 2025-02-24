import { useState } from "react";
import { auth, provider, signInWithPopup } from "../firebaseconfig";
import {
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import googlelogo from "../assets/googlelogo.png";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/dashboard"); // Redirect to dashboard
    } catch (err) {
      setError("Invalid credentials");
    }
  };

  const handleForgotPassword = async () => {
    if (!email) {
      setError("Please enter your email first.");
      return;
    }
    try {
      await sendPasswordResetEmail(auth, email);
      setError("Password reset email sent!");
    } catch (err) {
      setError("Error: " + err.message);
    }
  };

  //  for google
  const [user, setUser] = useState(null);

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
    } catch (error) {
      console.error("Login failed:", error.message);
    }
  };

  return (
    <>
      <div className="flex justify-center items-center min-h-screen  ">
        <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md ">
          <h1 className="text-4xl font-bold text-blue-700 text-center mb-6">
            Flood Monitoring System
          </h1>

          <form
            className="space-y-6 flex flex-col justify-center items-center"
            onSubmit={handleLogin}
          >
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="submit"
              className="w-full bg-gradient-to-br from-blue-600 to-blue-300 text-white font-semibold py-3 rounded-lg cursor-pointer"
            >
              Login
            </button>
            <span>
              Don't have an account,{" "}
              <Link
                to={"/signup"}
                className="text-blue-500 hover:text-green-400 underline"
              >
                Signup
              </Link>
            </span>

            {error && (
              <p className="text-red-500 text-sm text-center ">{error}</p>
            )}
          </form>
          <div className="flex flex-row justify-between align-middle items-center my-7">
            <button
              type="button"
              onClick={handleForgotPassword}
              className="px-2 py-3 rounded-lg  flex items-center justify-center cursor-pointer  text-red-500 hover:underline "
            >
              Forgot Password?
            </button>
            {!user ? (
              <button
                onClick={handleGoogleLogin}
                className=" text-black py-3 px-2 rounded-lg flex items-center justify-center cursor-pointer hover:underline  decoration-black "
              >
                <img src={googlelogo} alt="Google" className="w-5 h-5 mr-1" />
                Sign in with Google
              </button>
            ) : (
              <div className="text-center mt-4">
                <p className="text-lg font-medium text-blue-700">
                  Welcome, {user.displayName}
                </p>
                <img
                  src={user.photoURL}
                  alt="Profile"
                  className="w-16 h-16 rounded-full mx-auto mt-2 border-2 border-green-400"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Signin;
