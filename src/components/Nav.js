import React from 'react'

function Nav({ setCurrentPage }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  return (
    <div>
      <header className="header">
        <img 
          src="https://i.postimg.cc/59rtdwsK/logo-1.png" 
          alt="Logo 1" 
        />
        <div className="header-text">
          <h5>Bureau of Jail Management and Penology - Region X</h5>
          <h1>PARALEGAL KIT RESOURCE CENTER</h1>
        </div>
        <img 
          src="https://i.postimg.cc/WbJ12hKN/logo-2.png" 
          alt="Logo 2" 
        />
      </header>
      <div className="menu-container">
        <div className="hamburger-menu" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <nav className={`menu ${isMenuOpen ? 'open' : 'closed'}`}>
          <ul>
            <li><a onClick={() => setCurrentPage('IPD')}>Important Paralegal Directives</a></li>
            <li><a onClick={() => setCurrentPage('Resources')}>Resources</a></li>
            <li><a onClick={() => setCurrentPage('Lnd')}>Learning & Development</a></li>
            <li><a onClick={() => setCurrentPage('Quicklinks')}>Quicklinks</a></li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Nav
