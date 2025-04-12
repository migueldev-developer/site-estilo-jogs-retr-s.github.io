
import { useState } from 'react';
import { Menu } from 'lucide-react';
import PixelText from './PixelText';
import PixelButton from './PixelButton';

const PixelHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-black border-b-2 border-pixel-blue z-50">
      <div className="pixel-container flex justify-between items-center py-4">
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 bg-pixel-blue animate-pixel-pulse"></div>
          <PixelText variant="subheading">MIGUEL PORTFOLIO</PixelText>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            {navItems.map((item) => (
              <li key={item.name}>
                <a 
                  href={item.href}
                  className="font-pixel text-xs text-pixel-blue hover:text-pixel-blue-light transition"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={toggleMenu}
            className="text-pixel-blue hover:text-pixel-blue-light"
            aria-label="Toggle menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-black border-t-2 border-pixel-blue">
          <ul className="pixel-container py-4">
            {navItems.map((item) => (
              <li key={item.name} className="py-2">
                <a 
                  href={item.href}
                  className="font-pixel text-sm text-pixel-blue hover:text-pixel-blue-light block"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default PixelHeader;
