import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './pages/home/Home';
import Projeto from './pages/projetos/Projeto';
import Sobre from './pages/sobre/Sobre';
import Skills from './pages/skills/Skills';
import Contato from './pages/contato/Contato';
import Footer from './components/footer/Footer';
import FixedIcon from './components/voltar/FixedIcon';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  
  useEffect(() => {
    AOS.init({ 
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <div className={`app ${darkMode ? 'dark-mode' : ''}`}>
        <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
        <Home/>
        <Projeto/>
        <Sobre/>
        <Skills/>
        <Contato/>
        <Footer/>
        <FixedIcon/>
    </div>
  );
}

export default App;
