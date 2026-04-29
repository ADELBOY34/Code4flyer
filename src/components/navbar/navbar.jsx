import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(prev => !prev);
  const closeMenu = () => setIsOpen(false);
  const isActive = (path) => location.pathname === path ? 'active' : '';

  useEffect(() => { closeMenu(); }, [location]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="navbar-logo">
        <Link to="/" onClick={closeMenu}>
          <span className="logo-bracket">&lt;</span>
          Code4Flyer
          <span className="logo-bracket">/&gt;</span>
        </Link>
      </div>

      {isOpen && <div className="navbar-overlay" onClick={closeMenu} />}

      <ul className={`navbar-links${isOpen ? ' open' : ''}`}>
        <li><Link to="/"         className={isActive('/')}         onClick={closeMenu}>Home</Link></li>
        <li><Link to="/about"    className={isActive('/about')}    onClick={closeMenu}>Workflow</Link></li>
        <li><Link to="/services" className={isActive('/services')} onClick={closeMenu}>Services</Link></li>
        <li><Link to="/contact"  className={isActive('/contact')}  onClick={closeMenu}>Contact</Link></li>
        <li>
          <Link to="/contact" className="navbar-cta" onClick={closeMenu}>
            Begin →
          </Link>
        </li>
      </ul>

      <button
        className={`burger${isOpen ? ' active' : ''}`}
        onClick={toggleMenu}
        aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
        aria-expanded={isOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  );
}

export default Navbar;
