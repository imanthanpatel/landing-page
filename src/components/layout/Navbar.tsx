import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faTimes,
  faHouse,
  faInfoCircle,
  faMoneyBillWave,
  faCalendarAlt,
  faBriefcase,
  faPhone,
  faSignInAlt
} from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navItems = [
    { title: 'Home', path: '/', icon: <FontAwesomeIcon icon={faHouse} className="text-base" /> },
    { title: 'About', path: '/about', icon: <FontAwesomeIcon icon={faInfoCircle} className="text-base" /> },
    { title: 'Funding', path: '/funding', icon: <FontAwesomeIcon icon={faMoneyBillWave} className="text-base" /> },
    { title: 'Workshops & Events', path: '/events', icon: <FontAwesomeIcon icon={faCalendarAlt} className="text-base" /> },
    { title: 'Careers', path: '/careers', icon: <FontAwesomeIcon icon={faBriefcase} className="text-base" /> },
    { title: 'Contact', path: '/contact', icon: <FontAwesomeIcon icon={faPhone} className="text-base" /> },
  ];

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50 w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center flex-shrink-0" onClick={closeMenu}>
            <img
              src="https://res.cloudinary.com/dopcjxehj/image/upload/v1743065708/new_f92wp6.png"
              alt="Logo"
              className="h-8 sm:h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex">
            <ul className="flex space-x-4 xl:space-x-8">
              {navItems.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.path}
                    className="flex items-center gap-1.5 text-gray-700 hover:text-guiitar-primary transition duration-300 py-2 text-sm xl:text-base"
                    onClick={closeMenu}
                  >
                    {item.icon}
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Login/Register Button */}
          <Link to="/auth" className="hidden lg:block">
            <Button className="flex items-center bg-guiitar-primary hover:bg-guiitar-accent/90 text-white text-sm xl:text-base px-3 xl:px-4">
              <FontAwesomeIcon icon={faSignInAlt} className="mr-1" /> Login / Register
            </Button>
          </Link>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-500 hover:text-guiitar-primary focus:outline-none p-2"
            >
              <FontAwesomeIcon icon={isOpen ? faTimes : faBars} size="lg" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`lg:hidden bg-white absolute w-full left-0 transition-all duration-300 ease-in-out shadow-lg ${isOpen ? 'opacity-100 visible max-h-[500px]' : 'opacity-0 invisible max-h-0'
          } overflow-hidden`}
      >
        <div className="px-4 sm:px-6 py-2">
          <ul className="space-y-3 pb-3">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.path}
                  onClick={closeMenu}
                  className="flex items-center gap-2 py-2 text-gray-700 hover:text-guiitar-primary"
                >
                  {item.icon}
                  {item.title}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/auth" onClick={closeMenu}>
                <Button className="w-full mt-2 bg-guiitar-accent hover:bg-guiitar-accent/90 text-white flex items-center justify-center">
                  <FontAwesomeIcon icon={faSignInAlt} className="mr-1" /> Login / Register
                </Button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
