import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { FaGoogle } from "react-icons/fa";
import { toast, Toaster } from "react-hot-toast";

const Register = () => {
  const navigate = useNavigate();
  const { createNewUser, setUser, updateUserProfile, handleSignInWithGoogle } =
    useContext(AuthContext);

  const validatePassword = (password) => {
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const isLongEnough = password.length >= 6;
    return hasUpperCase && hasLowerCase && isLongEnough;
  };

  const loginWithGoogle = () => {
    handleSignInWithGoogle()
      .then((result) => {
        const user = result.user;
        setUser(user);
        toast.success("Logged in successfully!");
        navigate("/");
      })
      .catch((err) => {
        toast.error(err.message || "Failed to login with Google");
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const name = form.get("name");
    const email = form.get("email");
    const photo = form.get("photo");
    const password = form.get("password");

    if (!validatePassword(password)) {
      toast.error(
        "Password must have at least one uppercase, one lowercase, and be at least 6 characters long."
      );
      return;
    }

    createNewUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        updateUserProfile({ displayName: name, photoURL: photo })
          .then(() => {
            toast.success("Account created successfully!");
            navigate("/");
          })
          .catch(() => toast.error("Failed to update profile."));
      })
      .catch(() => toast.error("Failed to register. Try again."));
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-teal-50">
      <Toaster />
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-3xl font-bold text-center text-teal-500 mb-6">
          Create Your Account
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              name="name"
              type="text"
              className="w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Enter your full name"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              name="email"
              type="email"
              className="w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              name="password"
              type="password"
              className="w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Enter your password"
              required
            />
          </div>
          <div>
            <label htmlFor="photo" className="block text-sm font-medium text-gray-700">
              Profile Photo URL (optional)
            </label>
            <input
              name="photo"
              type="url"
              className="w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Enter your profile photo URL"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 text-white bg-teal-500 rounded-lg hover:bg-teal-600 transition"
          >
            Register
          </button>
        </form>
        <p className="text-sm text-center text-gray-600 mt-4">
          Already have an account?{" "}
          <Link to="/auth/login" className="text-teal-500 hover:underline">
            Login here
          </Link>
        </p>
        <div className="divider my-6">OR</div>
        <button
          onClick={loginWithGoogle}
          className="w-full flex items-center justify-center py-2 text-white bg-orange-400 rounded-lg hover:bg-orange-500 transition"
        >
          <FaGoogle className="mr-2 text-lg" />
          Continue with Google
        </button>
      </div>
    </div>
  );
};

export default Register;
