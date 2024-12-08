import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { FaGoogle } from "react-icons/fa"; // Google icon
import { toast, Toaster } from "react-hot-toast"; // Hot toast for notifications

const Register = () => {
  const navigate = useNavigate();
  const { createNewUser, setUser, updateUserProfile, handleSignInWithGoogle } =
    useContext(AuthContext);

  // Password validation function
  const validatePassword = (password) => {
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const isLongEnough = password.length >= 6;

    return hasUpperCase && hasLowerCase && isLongEnough;
  };

  // Google login handler
  const loginWithGoogle = () => {
    handleSignInWithGoogle()
      .then((result) => {
        const user = result.user;
        setUser(user);

        // Show success message and redirect
        toast.success("Logged in successfully!");
        const redirectPath = location.state?.from?.pathname || "/";
        navigate(redirectPath, { replace: true });
      })
      .catch((err) => {
        toast.error(err.message || "Failed to login with Google");
      });
  };

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const name = form.get("name");
    const email = form.get("email");
    const photo = form.get("photo");
    const password = form.get("password");
  
    // Error collection
    let errors = [];
  
    // Validate Password
    if (!validatePassword(password)) {
      errors.push(
        "Password must contain at least one uppercase, one lowercase, and be at least 6 characters long."
      );
    }
  
    // Show all errors in a single toast
    if (errors.length > 0) {
      const errorMessage = errors.join("\n"); // Combine all errors into one string
      toast.error(errorMessage); // Show a single toast with all errors
      return; // Stop further execution
    }
  
    // Create a New User
    createNewUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
  
        // Update User Profile
        updateUserProfile({ displayName: name, photoURL: photo })
          .then(() => {
            toast.success("Account created and profile updated successfully!");
            navigate("/");
          })
          .catch((err) => {
            toast.error("Profile update failed. Please try again.");
            // console.error("Profile update error:", err);
          });
      })
      .catch((err) => {
        toast.error("Registration failed. Please try again.");
        // console.error("Registration error:", err);
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50  max-w-screen-2xl mx-auto">
      <Toaster /> {/* React-hot-toast component */}
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-3xl font-semibold text-center text-green-600 mb-6">
          Create Your Account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Full Name */}
          <div className="form-group">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Full Name
            </label>
            <input
              name="name"
              type="text"
              className="input input-bordered w-full mt-1 p-3 rounded-md border-gray-300"
              placeholder="Enter your full name"
              required
            />
          </div>

          {/* Email Address */}
          <div className="form-group">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              name="email"
              type="email"
              className="input input-bordered w-full mt-1 p-3 rounded-md border-gray-300"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Password */}
          <div className="form-group">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              name="password"
              type="password"
              className="input input-bordered w-full mt-1 p-3 rounded-md border-gray-300"
              placeholder="Enter your password"
              required
            />
          </div>

          {/* Profile Photo */}
          <div className="form-group">
            <label
              htmlFor="photo"
              className="block text-sm font-medium text-gray-700"
            >
              Profile Photo URL (optional)
            </label>
            <input
              name="photo"
              type="url"
              className="input input-bordered w-full mt-1 p-3 rounded-md border-gray-300"
              placeholder="Enter your profile photo URL"
              required
            />
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="btn btn-primary w-full mt-6 p-3 rounded-md text-white bg-green-500 hover:bg-green-600 transition"
          >
            Register
          </button>
        </form>

        <div className="text-center mt-4">
          <p className="text-sm text-gray-600">
            Already have an account?{" "}
            <Link to="/auth/login" className="text-blue-500 hover:underline">
              Login here
            </Link>
          </p>
        </div>

        {/* Google Sign-in Button */}
        <button
          onClick={loginWithGoogle}
          className="btn btn-outline btn-accent w-full mt-4 p-3 rounded-md text-white bg-blue-500 hover:bg-blue-600 transition flex items-center justify-center"
        >
          <FaGoogle className="mr-2 text-lg" />
          Continue with Google
        </button>
      </div>
    </div>
  );
};

export default Register;
