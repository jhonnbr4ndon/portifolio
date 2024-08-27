import React from 'react';
import './Style.css';

function Footer() {
    return (
      <div className='containerFooter'>
      <div className='containerFooterFilho'>       
          <div className='footer'>
              <p className='direitoJhonn'>© 2024 Jhonn Brandon, Todos os direitos reservados.</p>
              <p className='direitoFooter'>© 2024, Todos os direitos reservados.</p>
              <ul className='navbarFooter'>
                <li><a href="#projetos">Meus Projetos</a></li>
                <li><a href="#sobre">Sobre mim</a></li>
                <li><a href="#skills">Skills</a></li>
              </ul>
          </div>
      </div>
</div>
    );
  }
  
  export default Footer;