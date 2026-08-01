import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBars, FaTimes, FaHeart, FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/programs', label: 'Programs' },
    { to: '/events', label: 'Events' },
    { to: '/gallery', label: 'Gallery' },
    { to: '/volunteer', label: 'Volunteer' },
    { to: '/donate', label: 'Donate' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white dark:bg-gray-900 shadow-md py-2' 
        : 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm py-3'
    }`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <FaHeart className="text-primary text-2xl" />
          <span className="text-xl sm:text-2xl font-heading font-bold text-primary">Hope</span>
          <span className="text-xl sm:text-2xl font-heading font-bold text-secondary">Foundation</span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-6 font-medium">
          {navLinks.map(link => (
            <li key={link.to}>
              <NavLink 
                to={link.to} 
                className={({ isActive }) => 
                  `hover:text-primary transition-colors ${
                    isActive 
                      ? 'text-primary border-b-2 border-primary' 
                      : 'text-gray-700 dark:text-gray-300'
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="flex items-center space-x-3">
          {/* Theme Toggle Button */}
          <button 
            onClick={toggleTheme}
            className="theme-toggle"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <FaMoon /> : <FaSun />}
          </button>

          {/* Mobile Hamburger */}
          <button 
            className="lg:hidden text-2xl text-gray-700 dark:text-gray-300" 
            onClick={() => setIsOpen(!isOpen)} 
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden bg-white dark:bg-gray-900 shadow-lg absolute top-full left-0 w-full p-4 border-t border-gray-200 dark:border-gray-700">
          <ul className="flex flex-col space-y-3 font-medium">
            {navLinks.map(link => (
              <li key={link.to}>
                <NavLink 
                  to={link.to} 
                  onClick={() => setIsOpen(false)} 
                  className={({ isActive }) => 
                    `block hover:text-primary transition-colors ${
                      isActive 
                        ? 'text-primary' 
                        : 'text-gray-700 dark:text-gray-300'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;