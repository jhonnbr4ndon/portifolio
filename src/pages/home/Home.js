import React from 'react';
import './Style.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Home() {
  return (
      <div id="home" className='containerHome'>
            <div className='containerHomeFilho'>       
                <div className='home'>
                    <div className='tituloHome'>
                        <p>Olá, Seja Bem Vindo!</p>
                        <p>Eu sou Jhonn Brandon</p>
                    </div>            
                    <p className='apresentacaoHome'>Bem-vindo à minha página profissional! Aqui você encontrará uma visão abrangente das minhas habilidades, 
                         qualificações e experiência no campo do desenvolvimento web fullstack.
                    </p>
                    <div className='conecte-se'>
                        <p>Conecte-se comigo em:</p>
                        <div className='icons'>
                            <a href="https://github.com/jhonnbr4ndon" target="_blank" rel="noopener noreferrer"><FaGithub/></a>
                            <a href="https://www.linkedin.com/in/jhonn-brandon-405a51271/" target="_blank" rel="noopener noreferrer"><FaLinkedin/></a>
                        </div>    
                    </div>
                </div>
            </div>
      </div>
  );
}

export default Home;
