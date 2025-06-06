
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { 
  Menu, 
  X, 
  ChevronDown, 
  Home, 
  Info, 
  DollarSign, 
  CalendarDays, 
  Contact,
  Briefcase,
  LogIn
} from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const isMobile = useIsMobile();
  
  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleAboutDropdown = () => setAboutDropdownOpen(!aboutDropdownOpen);
  
  const navItems = [
    { title: 'Home', path: '/', icon: <Home size={18} /> },
    { title: 'About', path: '/about', icon: <Info size={18} />, hasDropdown: true, 
      dropdownItems: [
        { title: 'Mission & Vision', path: '/about#mission' },
        { title: 'About Us', path: '/about#about' },
        { title: 'Team', path: '/about#team' },
        { title: 'Infrastructure', path: '/about#infrastructure' }
      ] 
    },
    { title: 'Funding', path: '/funding', icon: <DollarSign size={18} /> },
    { title: 'Workshops & Events', path: '/events', icon: <CalendarDays size={18} /> },
    { title: 'Careers', path: '/careers', icon: <Briefcase size={18} /> },
    { title: 'Contact', path: '/contact', icon: <Contact size={18} /> }
  ];

  const closeMenu = () => {
    setIsOpen(false);
    setAboutDropdownOpen(false);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center" onClick={closeMenu}>
            <span className="text-guiitar-primary font-serif font-bold text-xl md:text-2xl">GUIITAR</span>
            <span className="text-guiitar-accent font-serif font-bold text-xl md:text-2xl ml-2">COUNCIL</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex">
            <ul className="flex space-x-4 lg:space-x-8">
              {navItems.map((item, index) => (
                <li key={index} className="relative group">
                  {item.hasDropdown ? (
                    <div>
                      <button 
                        onClick={toggleAboutDropdown} 
                        className="flex items-center text-gray-700 hover:text-guiitar-primary focus:outline-none transition duration-300"
                      >
                        <span className="flex items-center gap-1.5">
                          {item.icon}
                          {item.title}
                        </span>
                        <ChevronDown size={16} className="ml-1" />
                      </button>
                      <div 
                        className={`absolute left-0 mt-2 w-56 bg-white rounded-md shadow-lg py-2 z-20 transition-all duration-300 ${aboutDropdownOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
                      >
                        {item.dropdownItems?.map((dropdownItem, idx) => (
                          <Link 
                            key={idx}
                            to={dropdownItem.path}
                            onClick={closeMenu}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-guiitar-light hover:text-guiitar-primary"
                          >
                            {dropdownItem.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link 
                      to={item.path} 
                      className="flex items-center gap-1.5 text-gray-700 hover:text-guiitar-primary transition duration-300"
                      onClick={closeMenu}
                    >
                      {item.icon}
                      {item.title}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Login/Register Button */}
          <Link to="/auth">
            <Button className="hidden md:flex items-center bg-guiitar-accent hover:bg-guiitar-accent/90 text-white">
              <LogIn size={16} className="mr-1" /> Login / Register
            </Button>
          </Link>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu} 
              className="text-gray-500 hover:text-guiitar-primary focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`md:hidden bg-white absolute w-full left-0 transition-all duration-300 ease-in-out shadow-lg ${
          isOpen ? 'opacity-100 visible max-h-[500px]' : 'opacity-0 invisible max-h-0'
        } overflow-hidden`}
      >
        <div className="px-4 py-2">
          <ul className="space-y-3 pb-3">
            {navItems.map((item, index) => (
              <li key={index}>
                {item.hasDropdown ? (
                  <div>
                    <button 
                      onClick={toggleAboutDropdown}
                      className="flex w-full items-center justify-between py-2 text-gray-700 hover:text-guiitar-primary"
                    >
                      <span className="flex items-center gap-2">
                        {item.icon}
                        {item.title}
                      </span>
                      <ChevronDown size={16} className={`transition-transform ${aboutDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>
                    <div className={`pl-6 space-y-2 mt-1 ${aboutDropdownOpen ? 'block' : 'hidden'}`}>
                      {item.dropdownItems?.map((dropdownItem, idx) => (
                        <Link 
                          key={idx}
                          to={dropdownItem.path}
                          onClick={closeMenu}
                          className="block py-2 text-gray-600 hover:text-guiitar-primary"
                        >
                          {dropdownItem.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link 
                    to={item.path}
                    onClick={closeMenu}
                    className="flex items-center gap-2 py-2 text-gray-700 hover:text-guiitar-primary"
                  >
                    {item.icon}
                    {item.title}
                  </Link>
                )}
              </li>
            ))}
            <li>
              <Link to="/auth" onClick={closeMenu}>
                <Button className="w-full mt-2 bg-guiitar-accent hover:bg-guiitar-accent/90 text-white flex items-center justify-center">
                  <LogIn size={16} className="mr-1" /> Login / Register
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
