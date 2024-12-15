import React from 'react';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <div className="bg-teal-100 min-h-screen">
      {/* Hero Section */}
      <div className="hero bg-teal-600 text-white py-16">
        <div className="container mx-auto text-center px-6">
          <h1 className="text-4xl font-bold mb-4">About ScreenVault</h1>
          <p className="text-lg mb-6">
            Discover, explore, and keep track of your favorite movies all in one place.
          </p>
        </div>
      </div>

      {/* About Section */}
      <div className="container mx-auto px-6 py-12">
        <h2 className="text-3xl font-semibold text-teal-600 text-center mb-6">What is ScreenVault?</h2>
        <p className="text-gray-700 text-center mb-6">
          ScreenVault is your ultimate movie hub, where you can find, rate, and explore movies across various genres.
          Whether you're looking for the latest blockbusters or hidden gems, we have something for every movie lover.
          Create an account to save your favorites, rate movies, and stay up-to-date with the latest releases.
        </p>

        {/* Call to Action */}
        <div className="text-center">
          <Link
            to="/all-movies"
            className="bg-teal-500 text-white px-6 py-3 rounded-lg hover:bg-teal-600 transition"
          >
            Explore Movies
          </Link>
        </div>
      </div>

      
    </div>
  );
};

export default AboutUs;
