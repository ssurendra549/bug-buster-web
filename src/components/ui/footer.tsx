
import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone, Linkedin, Twitter, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">Fly High Technologies</h3>
          <p className="text-gray-300 mb-4">
            We don't just find bugs—we prevent them. We don't just run scripts—we build smarter ways to make software bulletproof.
          </p>
          <div className="flex space-x-4">
            <a href="#" aria-label="LinkedIn" className="hover:text-blue-400 transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-blue-400 transition-colors">
              <Twitter size={20} />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-blue-400 transition-colors">
              <Instagram size={20} />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
            <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
            <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">Services</Link></li>
            <li><Link to="/careers" className="text-gray-300 hover:text-white transition-colors">Careers</Link></li>
            <li><Link to="/blog" className="text-gray-300 hover:text-white transition-colors">Blog</Link></li>
            <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4">Contact Us</h3>
          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <MapPin className="h-5 w-5 text-gray-400 mt-0.5" />
              <span className="text-gray-300">3rd Floor, 86-90 Paul Street,<br>
              </br> London, UK EC2A 4NE</span>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="h-5 w-5 text-gray-400" />
              <a href="mailto:hello@flyhighqa.com" className="text-gray-300 hover:text-white transition-colors">
                hello@flyhighqa.com
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="h-5 w-5 text-gray-400" />
              <a href="tel:+91XXXXXXXXXX" className="text-gray-300 hover:text-white transition-colors">
                +91 XXXX XXX XXX
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto border-t border-gray-800 mt-10 pt-6 text-center text-gray-400">
        <p>&copy; {new Date().getFullYear()} Fly high technologies limited. All rights reserved.</p>
      </div>
    </footer>
  );
}
