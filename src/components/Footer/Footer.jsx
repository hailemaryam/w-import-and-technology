import './Footer.css';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';

function Footer() {
  const { t, currentLang } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Main Footer Section */}
        <div className="footer-main">
          {/* Brand Section */}
          <div className="footer-brand">
            <div className="footer-logo">
              <img src="/images/w.jpg" alt="W Import and Technology" className="logo-img" />
              <div className="brand-text">
                <span className="brand-name">W-Import and Technology</span>
              </div>
            </div>
            <p className="footer-description">
              {currentLang === 'am' 
                ? 'የጤና፣ ስፖርት እና ምግብ ብሎግ'
                : 'Health, Sports & Food Blog'
              }
            </p>
            <div className="social-links">
              <a href="#" aria-label="Facebook" className="social-link">
                <span className="social-icon">📘</span>
              </a>
              <a href="#" aria-label="Twitter" className="social-link">
                <span className="social-icon">🐦</span>
              </a>
              <a href="#" aria-label="Instagram" className="social-link">
                <span className="social-icon">📷</span>
              </a>
              <a href="#" aria-label="YouTube" className="social-link">
                <span className="social-icon">📺</span>
              </a>
            </div>
          </div>

          {/* Categories */}
          <div className="footer-links">
            <h3 className="footer-heading">{t('categories')}</h3>
            <ul className="footer-list">
              <li>
                <Link to="/category/health-tips" className="footer-link">
                  <span className="link-icon">💄</span>
                  {t('healthTips')}
                </Link>
              </li>
              <li>
                <Link to="/category/sport-news" className="footer-link">
                  <span className="link-icon">⚽</span>
                  {t('sportNews')}
                </Link>
              </li>
              <li>
                <Link to="/category/food-preparation" className="footer-link">
                  <span className="link-icon">🍴</span>
                  {t('foodPreparation')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="footer-links">
            <h3 className="footer-heading">
              {currentLang === 'am' ? 'ፈጣን አገናኞች' : 'Quick Links'}
            </h3>
            <ul className="footer-list">
              <li>
                <Link to="/" className="footer-link">
                  <span className="link-icon">🏠</span>
                  {t('home')}
                </Link>
              </li>
              <li>
                <Link to="/my-account" className="footer-link">
                  <span className="link-icon">👤</span>
                  {t('myAccount')}
                </Link>
              </li>
              <li>
                <Link to="/terms" className="footer-link">
                  <span className="link-icon">📄</span>
                  {t('termsConditions')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-contact">
            <h3 className="footer-heading">
              {currentLang === 'am' ? 'አግኙን' : 'Contact'}
            </h3>
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <span>251 976957649</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">✉️</span>
                <span>kalebmenbere@gmail.com</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">🕒</span>
                <span>
                  {currentLang === 'am' ? '8:00 - 18:00' : '8AM - 6PM'}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>© {currentYear} W Import and Technology. {t('allRightsReserved')}</p>
          </div>
          
          <div className="footer-legal">
            <Link to="/terms" className="legal-link">
              {t('termsConditions')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;