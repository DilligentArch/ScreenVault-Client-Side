import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
      <h1 className="text-9xl font-bold text-teal-500 animate__animated animate__fadeInDown">
        404
      </h1>
      <p className="text-2xl font-medium text-gray-700 mt-4 animate__animated animate__fadeInUp">
        Oops! Page Not Found
      </p>
      <p className="text-gray-500 mt-2 animate__animated animate__fadeInUp">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="mt-6 px-6 py-3 bg-teal-500 text-white rounded-lg shadow-md hover:bg-teal-600 transition animate__animated animate__fadeInUp"
      >
        Go Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
