import './Header.css';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext.jsx';

function Header() {
  const { t, toggleLanguage, currentLang } = useLanguage();

  return (
    <header className="header">
      <div className="container nav-shell">
        {/* Left logo */}
        <div className="cap left-cap">
          <img src="/images/ethio_telecom_logo.svg" alt="Ethio Telecom" />
        </div>

        {/* Center navigation */}
        <nav className="green-bar">
          <Link className="active links home" to="/">{t('home')}</Link>

          <div className="dropdown">
            <span className="dropbtn links">{t('gameCategory')} ▾</span>
            <div className="dropdown-content">
              <Link className="categorys" to="/category/action">{t('actionGames')}</Link>
              <Link className="categorys" to="/category/adventure">{t('adventureGames')}</Link>
              <Link className="categorys" to="/category/arcade">{t('arcadeGames')}</Link>
              <Link className="categorys" to="/category/sports">{t('sportsGames')}</Link>
              <Link className="categorys" to="/category/puzzle">{t('puzzleGames')}</Link>
            </div>
          </div>

          <Link className="my-account links" to="/">{t('myAccount')}</Link>
          
          {/* ✅ FIXED: Add onClick handler */}
          <button 
            className="toggle-lang links" 
            onClick={toggleLanguage}
            style={{ 
              background: 'none', 
              textcolor: 'white',
              border: 'none',  
              cursor: 'pointer',
              fontSize: '23px',
              padding: 0
            }}
          >
            {currentLang === 'en' ? 'አማርኛ|English' : 'English|አማርኛ'}
          </button>
        </nav>

        {/* Right logo */}
        <div className="cap right-cap">
          <img className="kidopia" src="/images/kidopia-logo.png" alt="KIDOPIA" />
        </div>
      </div>
    </header>
  );
}

export default Header;