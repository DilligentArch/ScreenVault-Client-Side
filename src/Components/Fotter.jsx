import React, { useContext } from "react";
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa"; // Social Icons
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Footer = () => {
  const {user}=useContext(AuthContext);
  return (
    <footer className="bg-teal-700 text-white py-8 max-w-screen-2xl mx-auto">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-bold mb-2">About ScreenVault</h3>
            <p className="text-sm text-gray-200">
              ScreenVault is your ultimate platform to discover, review, and manage your favorite movies. Whether you want to explore the latest releases or organize your personal collection, ScreenVault has you covered.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:underline text-gray-200">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/all-movies" className="hover:underline text-gray-200">
                  All Movies
                </Link>
              </li>
              <li>
                <Link to="/add-movie" className="hover:underline text-gray-200">
                  Add a Movie
                </Link>
              </li>
              <li>
                <Link to={`/favorites/${user?.email}`} className="hover:underline text-gray-200">
                  My Favorites
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-bold mb-2">Follow Us</h3>
            <p className="text-sm text-gray-200 mb-4">
              Stay connected with ScreenVault on social media for updates, recommendations, and movie discussions.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/nayeb.qureshi.2024"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FaFacebook className="text-2xl hover:text-blue-500 transition-colors" />
              </a>
              <a
                href="https://www.linkedin.com/in/nayeb-qureshi-442373261/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="text-2xl hover:text-blue-700 transition-colors" />
              </a>
              <a
                href="https://www.instagram.com/nayeb_qureshi/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram className="text-2xl hover:text-pink-500 transition-colors" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-t border-teal-500 mb-6" />

        {/* Bottom Section */}
        <div className="text-center">
          <p className="text-xs text-gray-300">
            &copy; {new Date().getFullYear()} ScreenVault. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
