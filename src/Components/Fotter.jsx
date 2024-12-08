import React from 'react';
import { FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa'; // Social Icons
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-8  max-w-screen-2xl mx-auto">
      <div className="container mx-auto px-6 text-center">
        {/* Social Media Icons */}
        <div className="flex justify-center space-x-8 mb-4">
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

        {/* Footer Links */}
        <div className="text-sm mb-4">
          <Link to="/" className="hover:underline mx-3">
            Home
          </Link>
          <Link to="/about" className="hover:underline mx-3">
            About
          </Link>
          <Link to="/contact" className="hover:underline mx-3">
            Contact
          </Link>
        </div>

        {/* Copyright */}
        <p className="text-xs text-gray-400">
          &copy; {new Date().getFullYear()} CampTrail. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;