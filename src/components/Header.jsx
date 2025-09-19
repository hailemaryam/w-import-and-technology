import './Kidopia.css';

function Header() {
  return (
    <div className="Header">
  {/* Header */}
  <header className="header">
    <div className="container nav" id="nav">
      <div className="brand">
        <img
          src="/images/ethio_telecom_logo.svg"
          alt="Ethio Telecom"
        />
      </div>
      <button className="hamb" id="hamb" aria-label="Menu">
        <i className="fa-solid fa-bars" />
      </button>
      <nav className="nav-links" id="navlinks">
        <a
          href="https://www.kidopia.et/Drr/ethtelco/kidopia_home.php"
          data-en="Home"
          data-am="መነሻ"
        >
          Home
        </a>
        {/* <a href="#" data-en="Game Category ▾" data-am="የጨዋታ ምድብ ▾">Game Category ▾</a> */}
        <div className="dropdown">
          <a
            href="https://www.kidopia.et/Drr/ethtelco/kidopia_home.php#"
            className="dropbtn"
            data-en="Game Category ▾"
            data-am="የጨዋታ ምድብ ▾"
          >
            Game Category ▾
          </a>
          <div className="dropdown-content">
            <a
              href="https://www.kidopia.et/Drr/ethtelco/education_games.php"
              data-en="Action Games"
              data-am="የትምህርት ጨዋታዎች"
            >
              Education Games
            </a>
            <a
              href="https://www.kidopia.et/Drr/ethtelco/puzzle_games.php"
              data-en="Puzzle Games"
              data-am="የምስጢር ጨዋታዎች"
            >
              Puzzle Games
            </a>
            <a
              href="https://www.kidopia.et/Drr/ethtelco/adventure_games.php"
              data-en="Adventure Games"
              data-am="የመግባባት ጨዋታዎች"
            >
              Adventure Games
            </a>
            <a
              href="https://www.kidopia.et/Drr/ethtelco/sports_games.php"
              data-en="Sports Games"
              data-am="የስፖርት ጨዋታዎች"
            >
              Sports Games
            </a>
          </div>
        </div>
        <a
          href="https://www.kidopia.et/Drr/ethtelco/myAccount.php"
          data-en="My Account"
          data-am="መለያ"
        >
          My Account
        </a>
        <a
          className="toggle-lang"
          href="https://www.kidopia.et/Drr/ethtelco/kidopia_home.php#"
          id="lang-toggle"
        >
          En | አማርኛ
        </a>
      </nav>
      <div className="brand pill">
        <img
          className="kidopia"
          src="/images/kidopia-new-logo.png"
          alt="KIDOPIA"
        />
      </div>
    </div>
  </header>
  </div>
  )
}
  export default Header;