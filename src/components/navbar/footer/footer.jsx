import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-inner">

        {/* Brand */}
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            <span className="logo-bracket">&lt;</span>
            Code4Flyer
            <span className="logo-bracket">/&gt;</span>
          </Link>
          <p className="footer-tagline">
            A focused space for developers who want to learn faster and work smarter.
          </p>
        </div>

        {/* Navigation */}
        <div className="footer-col">
          <h4 className="footer-heading">Navigation</h4>
          <ul className="footer-links">
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/about">À propos</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Ressources */}
        <div className="footer-col">
          <h4 className="footer-heading">Ressources</h4>
          <ul className="footer-links">
            <li><Link to="/services">Commandes Git</Link></li>
            <li><Link to="/services">Raccourcis VS Code</Link></li>
            <li><Link to="/services">Terminal tricks</Link></li>
            <li><Link to="/services">Snippets</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-col">
          <h4 className="footer-heading">Contact</h4>
          <ul className="footer-links">
            <li>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </li>
            <li>
              <a href="mailto:contact@code4flyer.dev">
                contact@code4flyer.dev
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <p>© {year} Code4Flyer — Tous droits réservés.</p>
        <p className="footer-bottom-right">
          Made with <span className="footer-heart">♥</span> for devs
        </p>
      </div>
    </footer>
  );
}

export default Footer;
