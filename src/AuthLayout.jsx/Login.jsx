import React, { useContext, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { FaGoogle } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";

const Login = () => {
  const emailRef = useRef();
  const { userLogin, setUser, handleSignInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    userLogin(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);

        const redirectPath = location.state?.from?.pathname || "/";
        navigate(redirectPath, { replace: true });

        toast.success("You have logged in successfully!");
      })
      .catch((err) => {
        toast.error(err.message || "Failed to log in. Please try again.");
      });
  };

  const loginWithGoogle = () => {
    handleSignInWithGoogle()
      .then((result) => {
        const user = result.user;
        setUser(user);

        const redirectPath = location.state?.from?.pathname || "/";
        navigate(redirectPath, { replace: true });

        toast.success("You have logged in successfully");
      })
      .catch((err) => {
        toast.error(err.message || "Failed to log in with Google. Please try again.");
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-teal-50">
      <Toaster />
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-3xl font-bold text-center text-teal-500 mb-6">Login</h2>
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              ref={emailRef}
              id="email"
              name="email"
              className="w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 text-white bg-teal-500 rounded-lg hover:bg-teal-600 transition font-medium"
          >
            Login
          </button>
        </form>
        <div className="flex justify-between items-center mt-4 text-sm text-gray-600">
          <button
            onClick={() => navigate("/auth/reset-password")}
            className="hover:underline text-orange-500"
          >
            Forgot Password?
          </button>
          <Link to="/auth/register" className="hover:underline text-teal-500">
            Register
          </Link>
        </div>
        <div className="divider my-6">OR</div>
        <button
          onClick={loginWithGoogle}
          className="w-full flex items-center justify-center py-2 text-white bg-orange-400 rounded-lg hover:bg-orange-500 transition font-medium"
        >
          <FaGoogle className="mr-2 text-lg" />
          Continue with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
