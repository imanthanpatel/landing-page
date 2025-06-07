
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMapMarkerAlt,
  faPhoneAlt,
  faEnvelope,
  faChevronRight
} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn
} from '@fortawesome/free-brands-svg-icons';



const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-guiitar-dark text-white">
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <div className="flex items-center mb-6">
              <img
                src="https://res.cloudinary.com/dopcjxehj/image/upload/v1743089168/white_logo_trewbg.png"
                alt="Logo"
                className="h-8 sm:h-15 w-auto"
              />
            </div>
            <p className="text-gray-300 mb-6">
              A non-profit organization founded by GSFC University, dedicated to fostering innovation,
              entrepreneurship, and technological advancement in Vadodara.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" aria-label="Facebook" className="text-gray-300 hover:text-guiitar-accent transition-colors">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="https://twitter.com" aria-label="Twitter" className="text-gray-300 hover:text-guiitar-accent transition-colors">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="https://instagram.com" aria-label="Instagram" className="text-gray-300 hover:text-guiitar-accent transition-colors">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="https://linkedin.com" aria-label="LinkedIn" className="text-gray-300 hover:text-guiitar-accent transition-colors">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>

            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-serif font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-guiitar-accent transition-colors flex items-center">
                  <FontAwesomeIcon icon={faChevronRight} className="mr-2" />

                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-guiitar-accent transition-colors flex items-center">
                  <FontAwesomeIcon icon={faChevronRight} className="mr-2" />

                  About Us
                </Link>
              </li>
              <li>
                <Link to="/funding" className="text-gray-300 hover:text-guiitar-accent transition-colors flex items-center">
                  <FontAwesomeIcon icon={faChevronRight} className="mr-2" />
                Funding
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-gray-300 hover:text-guiitar-accent transition-colors flex items-center">
                  <FontAwesomeIcon icon={faChevronRight} className="mr-2" />

                  Workshops & Events
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-300 hover:text-guiitar-accent transition-colors flex items-center">
                  <FontAwesomeIcon icon={faChevronRight} className="mr-2" />

                  Careers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-guiitar-accent transition-colors flex items-center">
                  <FontAwesomeIcon icon={faChevronRight} className="mr-2" />

                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-serif font-semibold mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-guiitar-accent mr-3 mt-1" />
                <span className="text-gray-300">
                  GSFC University Campus, Vigyan Bhavan, P.O. Fertilizer Nagar, Vadodara - 391750, Gujarat, India
                </span>
              </li>
              <li className="flex items-center">
                <FontAwesomeIcon icon={faPhoneAlt} className="text-guiitar-accent mr-3" />
                <a href="tel:+919898989898" className="text-gray-300 hover:text-guiitar-accent transition-colors">
                  +91 98989 89898
                </a>
              </li>
              <li className="flex items-center">
                <FontAwesomeIcon icon={faEnvelope} className="text-guiitar-accent mr-3" />
                <a href="mailto:info@guiitarcouncil.org" className="text-gray-300 hover:text-guiitar-accent transition-colors">
                  info@guiitarcouncil.org
                </a>
              </li>

            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-serif font-semibold mb-6">Newsletter</h3>
            <p className="text-gray-300 mb-4">
              Subscribe to our newsletter to get updates on events, opportunities, and success stories.
            </p>
            <form className="space-y-3">
              <Input
                type="email"
                placeholder="Your Email"
                className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400"
              />
              <Button className="w-full bg-guiitar-accent hover:bg-guiitar-accent/90 text-white">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} GUIITAR COUNCIL. All Rights Reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy-policy" className="text-gray-400 hover:text-guiitar-accent text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-guiitar-accent text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
