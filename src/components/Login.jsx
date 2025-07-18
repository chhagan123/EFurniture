// src/Login.js
import React from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../backend/firebase";

const Login = () => {
  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      console.log("✅ User Info:", {
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
        uid: user.uid,
      });

      // Store or redirect if needed
    } catch (error) {
      console.error("❌ Error:", error.message);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <button
        onClick={handleGoogleLogin}
        className="bg-red-600 text-white px-6 py-3 rounded-md hover:bg-red-700"
      >
        Sign in with Google
      </button>
    </div>
  );
};

export default Login;
