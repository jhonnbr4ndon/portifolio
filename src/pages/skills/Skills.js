import React from 'react';
import './Style.css';
import { FaGraduationCap, FaJava, FaReact, FaPython, FaNode, FaBootstrap, FaDocker, FaGithub, FaFigma } from "react-icons/fa";
import { SiTypescript, SiJavascript, SiSpring, SiKotlin, SiMongodb, SiIntellijidea, SiVisualstudiocode, SiPostman, SiPycharm, SiAndroidstudio, SiAzuredevops, SiMicrosoftazure } from "react-icons/si";

function Skills() {
    return (
        <div id="skills" className='containerSkills'>
            <div className='containerSkillsFilho'>
                <div className='containterSkillsResponsivo'>
                    <div className='skills'>
                        <h2 className='tituloSkill' data-aos="fade-up">Habilidades</h2>
                        <p className='subtituloSkills' data-aos="fade-up">Confira minhas habilidades técnicas e sociais.</p>
                        <div className='habilidade' data-aos="fade-up">
                            <div className='containerHabilidade'>
                                <p className='tecnica'>Habilidades técnicas</p>
                                <h3 className='tituloHabilidade'>Desenvolvimento Fullstack em Java</h3>
                                <p>Desenvolvi projetos robustos em Java, implementando regras de negócio complexas e utilizando frameworks como Spring Boot para criar APIs Restful.</p>
                            </div>
                        </div>
                        <div className='habilidade' data-aos="fade-up">
                            <div className='containerHabilidade'>
                                <p className='tecnica'>Habilidades técnicas</p>
                                <h3 className='tituloHabilidade'>Criação de Sites Responsivos</h3>
                                <p>Tenho experiência na criação de sites altamente responsivos utilizando HTML, CSS (incluindo Flexbox), JavaScript e React, garantindo uma experiência de usuário otimizada em diferentes dispositivos.</p>
                            </div>
                        </div>
                        <div className='habilidade' data-aos="fade-up">
                            <div className='containerHabilidade'>
                                <p className='tecnica'>Habilidades interpessoais</p>
                                <h3 className='tituloHabilidade'>Gerenciamento de Tempo</h3>
                                <p>Capacidade excepcional de gerenciar múltiplos projetos e responsabilidades, garantindo a entrega de tarefas dentro dos prazos estabelecidos, mesmo em situações de alta pressão.</p>
                            </div>
                        </div>
                        <div className='habilidade' data-aos="fade-up">
                            <div className='containerHabilidade'>
                                <p className='tecnica'>Habilidades interpessoais</p>
                                <h3 className='tituloHabilidade'>Trabalho em Equipe</h3>
                                <p>Experiência em trabalhar eficientemente em equipes pequenas, colaborando ativamente e assumindo responsabilidades para completar grandes projetos com sucesso.</p>
                            </div>
                        </div>
                    </div>
                    <div className='certificacoes'>
                        <h2 className='tituloCertificado' data-aos="fade-up">Educação e Certificações</h2>
                        <p className='subtituloCertificado' data-aos="fade-up">Veja meu histórico educacional.</p>
                        <div className='certificado' data-aos="fade-up">
                            <div className='containerCertificado'>
                                <p className='certificadoAno'>2023</p>
                                <a href="https://www2.fiap.com.br/updown/DocumentosAssinados/545d1ae1-8246-4c8d-8e7a-57465bd45fa6.pdf" target="_blank" rel="noopener noreferrer">
                                    <div className='titulo-icon'>
                                        <h3 className='tituloEducacao'>Qualificação Profissional em Desenvolvimento e Designer Web - FIAP</h3>
                                        <FaGraduationCap className='icon-graduacao' />
                                    </div>
                                </a>
                                <p>Capacitação completa em criação, desenvolvimento e design de websites.</p>
                            </div>
                        </div>
                        <div className='certificado' data-aos="fade-up">
                            <div className='containerCertificado'>
                                <p className='certificadoAno'>2023</p>
                                <a href="https://www2.fiap.com.br/updown/DocumentosAssinados/bdbbd194-41f7-490e-9587-84ff4b241dfd.pdf" target="_blank" rel="noopener noreferrer">
                                    <div className='titulo-icon'>
                                        <h3 className='tituloEducacao'>Qualificação Profissional em Análise de Sistemas e Prototipação Web - FIAP</h3>
                                        <FaGraduationCap className='icon-graduacao' />
                                    </div>
                                </a>
                                <p>Habilidades em análise de sistemas e criação de protótipos de websites.</p>
                            </div>
                        </div>
                        <div className='certificado' data-aos="fade-up">
                            <div className='containerCertificado'>
                                <p className='certificadoAno'>2024</p>
                                <a href="https://on.fiap.com.br/pluginfile.php/1/local_nanocourses/certificado_nanocourse/117946/494b55869bdd56303d7b7d4cf06702fa/certificado.png" target="_blank" rel="noopener noreferrer">
                                    <div className='titulo-icon'>
                                        <h3 className='tituloEducacao'>Desenvolvimento Java Enterprise - FIAP</h3>
                                        <FaGraduationCap className='icon-graduacao' />
                                    </div>
                                </a>
                                <p>Especialização em desenvolvimento de aplicações empresariais robustas e escaláveis usando Java.</p>
                            </div>
                        </div>
                        <div className='certificado' data-aos="fade-up">
                            <div className='containerCertificado'>
                                <p className='certificadoAno'>2024</p>
                                <a href="https://on.fiap.com.br/pluginfile.php/1/local_nanocourses/certificado_nanocourse/117945/432d5068ca6dd9b743623b99d48f7e1b/certificado.png" target="_blank" rel="noopener noreferrer">
                                    <div className='titulo-icon'>
                                        <h3 className='tituloEducacao'>Java Fundamentos - FIAP</h3>
                                        <FaGraduationCap className='icon-graduacao' />
                                    </div>
                                </a>
                                <p>Capacitação nas bases essenciais da programação em Java.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='containerHabilidadeResponsivo'>
                    <div className='containerCompetenciaResponsivo'>
                        <h2 className='tituloCompetencia' data-aos="fade-up">Competências em Programação</h2>
                        <p className='subtituloCompetencia' data-aos="fade-up">Experiência em várias linguagens de programação.</p>
                        <div className='competencias'>
                            <div className='containerCompetencia'>
                                <div className='competenciaIcons' data-aos="fade-right">
                                    <FaJava />
                                </div>
                                <div className='competenciaIcons' data-aos="fade-down">
                                    <SiJavascript />
                                </div>
                                <div className='competenciaIcons' data-aos="fade-down">
                                    <SiTypescript />
                                </div>
                                <div className='competenciaIcons' data-aos="fade-down">
                                    <FaReact />
                                </div>
                                <div className='competenciaIcons' data-aos="fade-left">
                                    <SiSpring />
                                </div>
                            </div>
                            <div className='containerCompetencia'>
                                <div className='competenciaIcons' data-aos="fade-right">
                                    <SiKotlin />
                                </div>
                                <div className='competenciaIcons' data-aos="fade-up">
                                    <FaPython />
                                </div>
                                <div className='competenciaIcons' data-aos="fade-up">
                                    <FaNode />
                                </div>
                                <div className='competenciaIcons' data-aos="fade-up">
                                    <SiMongodb />
                                </div>
                                <div className='competenciaIcons' data-aos="fade-left">
                                    <FaBootstrap />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='containerFerramentaResponsivo'>
                        <h2 className='tituloFerramenta' data-aos="fade-up">Ferramentas de Trabalho</h2>
                        <p className='subtituloFerramenta' data-aos="fade-up">Ferramentas essenciais para desenvolvimento e projetos.</p>
                        <div className='ferramentas'>
                            <div className='containerFerramenta'>
                                <div className='ferramentaIcons' data-aos="fade-right">
                                    <SiIntellijidea />
                                </div>
                                <div className='ferramentaIcons' data-aos="fade-down">
                                    <SiVisualstudiocode />
                                </div>
                                <div className='ferramentaIcons' data-aos="fade-down">
                                    <SiPostman />
                                </div>
                                <div className='ferramentaIcons' data-aos="fade-down">
                                    <SiPycharm />
                                </div>
                                <div className='ferramentaIcons' data-aos="fade-left">
                                    <SiAndroidstudio />
                                </div>
                            </div>
                            <div className='containerFerramenta'>
                                <div className='ferramentaIcons' data-aos="fade-right">
                                    <SiAzuredevops />
                                </div>
                                <div className='ferramentaIcons' data-aos="fade-up">
                                    <SiMicrosoftazure />
                                </div>
                                <div className='ferramentaIcons' data-aos="fade-up">
                                    <FaDocker />
                                </div>
                                <div className='ferramentaIcons' data-aos="fade-up">
                                    <FaGithub />
                                </div>
                                <div className='ferramentaIcons' data-aos="fade-left">
                                    <FaFigma />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;
