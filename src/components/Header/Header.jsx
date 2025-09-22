import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <div className="container nav-shell">
        {/* Left logo */}
        <div className="cap left-cap">
          <img src="/images/ethio_telecom_logo.svg" alt="Ethio Telecom" />
        </div>

        {/* Center navigation */}
        <nav className="green-bar">
          <Link className="active links home" to="/">Home</Link>

          <div className="dropdown">
            <span className="dropbtn links">Game Category ▾</span>
            <div className="dropdown-content">
              <Link className="categorys" to="/category/action">Action</Link>
              <Link className="categorys" to="/category/adventure">Adventure</Link>
              <Link className="categorys" to="/category/arcade">Arcade</Link>
              <Link className="categorys" to="/category/sports">Sports</Link>
              <Link className="categorys" to="/category/puzzle">Puzzle</Link>
            </div>
          </div>

          <Link className="my-account links" to="/">My Account</Link>
          <a className="toggle-lang links" href="#" id="lang-toggle">En | አማርኛ</a>
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
