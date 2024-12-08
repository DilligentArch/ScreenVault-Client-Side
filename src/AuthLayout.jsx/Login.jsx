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

  const handleForgetPassword = () => {
    const email = emailRef.current.value;

    if (!email) {
      toast.error("Please provide a valid email address");
    } else {
      navigate("/auth/reset-password", { state: { email } });
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100  max-w-screen-2xl mx-auto">
      <Toaster />
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-8">
        <h2 className="text-2xl font-bold text-center text-green-700 mb-6">Login</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              ref={emailRef}
              id="email"
              name="email"
              className="input input-bordered w-full mt-1"
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
              className="input input-bordered w-full mt-1"
              placeholder="Enter your password"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-full mt-4">
            Login
          </button>
        </form>
        <div className="flex justify-between items-center mt-4 text-sm">
          
          <Link to="/auth/register" className="text-blue-500 hover:underline">
            Register
          </Link>
        </div>
        <div className="divider my-6">OR</div>
        <button
          onClick={loginWithGoogle}
          className="btn btn-outline btn-accent w-full flex items-center justify-center p-3 rounded-md text-white bg-blue-500 hover:bg-blue-600 transition"
        >
          <FaGoogle className="mr-2 text-lg" />
          Continue with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
