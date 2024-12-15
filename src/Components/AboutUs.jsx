import React from 'react';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <div className="bg-gray-50 min-h-screen max-w-screen-2xl mx-auto">
      {/* Hero Section */}
      <div className="hero bg-gradient-to-r from-blue-600 via-teal-500 to-teal-400 text-white py-24">
        <div className="container mx-auto text-center px-6">
          <h1 className="text-5xl font-bold mb-4 animate__animated animate__fadeIn animate__delay-1s">
            About ScreenVault
          </h1>
          <p className="text-xl mb-8 animate__animated animate__fadeIn animate__delay-1s">
            Discover, explore, and keep track of your favorite movies all in one place.
          </p>
        </div>
      </div>

      {/* About Section */}
      <div className="container mx-auto px-6 py-16">
        <h2 className="text-4xl font-semibold text-teal-600 text-center mb-8">
          What is ScreenVault?
        </h2>
        <p className="text-lg text-gray-700 text-center mb-8 max-w-3xl mx-auto leading-relaxed">
          ScreenVault is your ultimate movie hub, where you can find, rate, and explore movies across various genres. 
          Whether you're looking for the latest blockbusters or hidden gems, we have something for every movie lover. 
          Create an account to save your favorites, rate movies, and stay up-to-date with the latest releases.
        </p>

        {/* Call to Action */}
        <div className="text-center">
          <Link
            to="/all-movies"
            className="bg-teal-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-teal-600 transition-all duration-300"
          >
            Explore Movies
          </Link>
        </div>
      </div>

      {/* Footer Section */}
      <div className="bg-gray-800 text-white py-8 mt-16">
        <div className="container mx-auto text-center">
          <p className="text-lg">ScreenVault | Your movie journey begins here.</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
