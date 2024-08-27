import React, { useState } from 'react';
import './Style.css';
import imgLight from '../../imagens/3.png';
import imgDark from '../../imagens/4.png';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';

function Header({ toggleDarkMode, darkMode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavItemClick = () => {
    setIsMenuOpen(false); // Fecha o menu quando um item de navegação é clicado
  };

  return (
    <header>
      <div id="home" className='container'>
        <img src={darkMode ? imgDark : imgLight} alt="imagem" className="logo" />

        <ul className={`navbar ${isMenuOpen ? 'open' : ''}`}>
          <li><a href="#projetos" onClick={handleNavItemClick}>Meus Projetos</a></li>
          <li><a href="#sobre" onClick={handleNavItemClick}>Sobre mim</a></li>
          <li><a href="#skills" onClick={handleNavItemClick}>Skills</a></li>
          <li><a href="#contato" onClick={handleNavItemClick}>Contato</a></li>
        </ul>

        <div className='toggleDark'>
          <FiSun/>
          <input 
            type="checkbox" 
            id="toggle"
            className="toggle" 
            onChange={toggleDarkMode}
            checked={darkMode}
          />
          <FiMoon/>
        </div>

        <div className='responsiveNavbar'>
          {isMenuOpen ? (
            <FiX className='menu' onClick={handleMenuToggle} />
          ) : (
            <FiMenu className='menu' onClick={handleMenuToggle} />
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
