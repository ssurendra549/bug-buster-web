
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from './button';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="py-4 px-6 md:px-12 lg:px-20 sticky top-0 bg-white shadow-sm z-50">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/logo.png" 
              alt="FLY HIGH TECHNOLOGIES Logo" 
              className="h-24 md:h-32"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="font-medium hover:text-primary transition-colors">
            Home
          </Link>
          <Link to="/about" className="font-medium hover:text-primary transition-colors">
            About
          </Link>
          <Link to="/services" className="font-medium hover:text-primary transition-colors">
            Services
          </Link>
          <Link to="/careers" className="font-medium hover:text-primary transition-colors">
            Careers
          </Link>
          <Link to="/blog" className="font-medium hover:text-primary transition-colors">
            Blog
          </Link>
          <Link to="/contact" className="font-medium hover:text-primary transition-colors">
            Contact
          </Link>
        </div>

        {/* Mobile menu button */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      <div className={cn(
        "md:hidden absolute left-0 right-0 bg-white shadow-md transition-all duration-300 ease-in-out px-6 py-4",
        isOpen ? "top-full opacity-100" : "-top-96 opacity-0 pointer-events-none"
      )}>
        <div className="flex flex-col space-y-4">
          <Link 
            to="/" 
            className="font-medium hover:text-primary transition-colors py-2"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className="font-medium hover:text-primary transition-colors py-2"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link 
            to="/services" 
            className="font-medium hover:text-primary transition-colors py-2"
            onClick={() => setIsOpen(false)}
          >
            Services
          </Link>
          <Link 
            to="/careers" 
            className="font-medium hover:text-primary transition-colors py-2"
            onClick={() => setIsOpen(false)}
          >
            Careers
          </Link>
          <Link 
            to="/blog" 
            className="font-medium hover:text-primary transition-colors py-2"
            onClick={() => setIsOpen(false)}
          >
            Blog
          </Link>
          <Link 
            to="/contact" 
            className="font-medium hover:text-primary transition-colors py-2"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
