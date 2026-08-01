import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaEnvelope, FaPhone, FaMapMarkerAlt, FaHeart } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white pt-8 sm:pt-12 pb-4 sm:pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <FaHeart className="text-primary text-2xl" />
              <h4 className="text-lg sm:text-xl font-heading font-bold">Hope Foundation</h4>
            </div>
            <p className="text-gray-400 text-sm">Together We Create a Better Tomorrow. Empowering communities through education, health, and sustainability.</p>
            <div className="flex space-x-4 mt-4">
              <a href="#" aria-label="Facebook"><FaFacebook className="text-gray-400 hover:text-white transition text-lg sm:text-xl" /></a>
              <a href="#" aria-label="Twitter"><FaTwitter className="text-gray-400 hover:text-white transition text-lg sm:text-xl" /></a>
              <a href="#" aria-label="Instagram"><FaInstagram className="text-gray-400 hover:text-white transition text-lg sm:text-xl" /></a>
              <a href="#" aria-label="YouTube"><FaYoutube className="text-gray-400 hover:text-white transition text-lg sm:text-xl" /></a>
            </div>
          </div>
          
          <div>
            <h4 className="text-base sm:text-lg font-heading font-bold mb-3 sm:mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-gray-400 hover:text-white transition">About Us</Link></li>
              <li><Link to="/programs" className="text-gray-400 hover:text-white transition">Our Programs</Link></li>
              <li><Link to="/volunteer" className="text-gray-400 hover:text-white transition">Volunteer</Link></li>
              <li><Link to="/donate" className="text-gray-400 hover:text-white transition">Donate</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-base sm:text-lg font-heading font-bold mb-3 sm:mb-4">Programs</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/programs" className="text-gray-400 hover:text-white transition">Education</Link></li>
              <li><Link to="/programs" className="text-gray-400 hover:text-white transition">Healthcare</Link></li>
              <li><Link to="/programs" className="text-gray-400 hover:text-white transition">Food Distribution</Link></li>
              <li><Link to="/programs" className="text-gray-400 hover:text-white transition">Women Empowerment</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-base sm:text-lg font-heading font-bold mb-3 sm:mb-4">Newsletter</h4>
            <p className="text-gray-400 text-sm mb-2">Subscribe for updates</p>
            <div className="flex flex-col sm:flex-row">
              <input type="email" placeholder="Your email" className="px-3 py-2 rounded-t sm:rounded-l sm:rounded-tr-none bg-gray-800 border border-gray-700 text-white w-full focus:outline-none focus:ring-2 focus:ring-primary text-sm" />
              <button className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-b sm:rounded-r sm:rounded-bl-none transition text-sm">Subscribe</button>
            </div>
            <div className="mt-4 space-y-1 text-sm text-gray-400">
              <p className="flex items-center"><FaEnvelope className="mr-2 flex-shrink-0" /> info@hopefoundation.org</p>
              <p className="flex items-center"><FaPhone className="mr-2 flex-shrink-0" /> +1 (555) 123-4567</p>
              <p className="flex items-center"><FaMapMarkerAlt className="mr-2 flex-shrink-0" /> 123 Hope St, City, Country</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-6 sm:mt-8 pt-4 text-center text-gray-500 text-xs sm:text-sm">
          &copy; {new Date().getFullYear()} Hope Foundation. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;