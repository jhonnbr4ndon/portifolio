import React from 'react';
import './Style.css';
import Programador from '../../imagens/devProgramador.png';

function Home() {
  return (
      <div id="sobre" className='containerSobre'>
            <div className='containerSobreFilho'>       
                <div className='sobre'>
                        <h2 className='tituloSobreMim' data-aos="fade-up">Um pouco sobre mim</h2>
                        <div className='responsiveSobreTablet' data-aos="fade-up">
                          <p data-aos="fade-up" className='textoSobre'>Me chamo Jhonn Brandon, tenho 20 anos e concluí o curso de Análise e Desenvolvimento de Sistemas na FIAP. Como desenvolvedor fullstack, me especializei no backend utilizando Java, Python, SQL e C#, e no frontend com HTML, CSS, JavaScript, React e Kotlin. Também tenho experiência em implantar aplicações na nuvem usando o Azure da Microsoft. Com uma capacidade inata de aprender rapidamente, gosto de enfrentar desafios que me levam a superar meus limites diariamente.</p>
                          <p data-aos="fade-up" className='textoSobre'>Fora do ambiente profissional, sou apaixonado por jogar futebol, ouvir música, jogar videogames, ler documentações sobre tecnologia e viajar. Essas atividades me ajudam a relaxar e encontrar inspiração, mantendo um equilíbrio saudável entre trabalho e lazer. Estou sempre buscando expandir meus conhecimentos e aplicar minhas habilidades de forma prática, acreditando que a tecnologia tem o poder de transformar ideias em realidade.</p>
                        </div>                  
                        <div className='responsiveSobreMobile' data-aos="fade-up">
                          <p className='responsiveSobreMin' data-aos="fade-up">Meu nome é Jhonn Brandon, tenho 20 anos e sou desenvolvedor fullstack formado em Análise e Desenvolvimento de Sistemas pela FIAP. Tenho especialização no backend com Java, Python, SQL e C#, e no frontend com HTML, CSS, JavaScript, React e Kotlin. Também possuo experiência com implantação de aplicações na nuvem usando o Azure. Além do trabalho, gosto de jogar futebol, ouvir música, jogar videogames e viajar, sempre buscando equilibrar trabalho e lazer enquanto aprimoro minhas habilidades e conhecimentos.</p>
                        </div>
                </div>
                <div className='imgSobre' data-aos="fade-up">
                   <img src={Programador} alt='Programador' className='logoSobre'></img>
                </div>
            </div>
      </div>
  );
}

export default Home;
