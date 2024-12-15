import React, { useState, useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Link, useLocation } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const ResetPassword = () => {
  const { resetPassword } = useContext(AuthContext);
  const location = useLocation();
  const [email, setEmail] = useState(location.state?.email || "");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Reset any previous error or success messages
    toast.dismiss();

    resetPassword(email)
      .then(() => {
        toast.success("Password reset link has been sent to your email.");
        setTimeout(() => {
          window.open("https://mail.google.com", "_blank");
        }, 1000);
      })
      .catch((err) => {
        toast.error("Failed to send password reset link. Please try again.");
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-teal-500 via-teal-400 to-teal-300">
      <Toaster /> {/* This is the Toast container */}
      <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-3xl font-bold text-center text-teal-700 mb-6">
          Reset Password
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email Input */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Enter your registered email"
              required
            />
          </div>

          {/* Reset Password Button */}
          <button
            type="submit"
            className="w-full bg-teal-600 text-white py-3 rounded-lg hover:bg-teal-700 transition duration-300"
          >
            Send Reset Link
          </button>
        </form>

        {/* Back to Login */}
        <div className="text-center mt-4">
          <Link to="/auth/login" className="text-teal-600 hover:underline">
            Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
