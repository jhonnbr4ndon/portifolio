import React from 'react';
import './Style.css';
import { AiFillEye } from "react-icons/ai";
import { FaCode } from "react-icons/fa6";
import mobileEcoral from '../../imagens/mobileEcoral.png';
import codeEcoral from '../../imagens/codeEcoral.png';
import calculadoraKotlin from '../../imagens/calculadoraKotlin.png';
import mobileAeroparts from '../../imagens/mobilAeroparts.png';
import codeAeroparts from '../../imagens/codeAeroparts.png';
import codePokemon from '../../imagens/apiPokemon.png';


function Projeto() {
    return (
        <div id="projetos" className='containerProjeto' >
            <div className='containerProjetoFilho'>
                <div className='projeto'>
                    <h2 className='tituloProjeto' data-aos="fade-up">Meus Projetos Recentes</h2>
                    <div className='projetos1' data-aos="fade-up">
                        <div className='projetoConcluido'>
                            <div className='imgProjeto'>
                                <img src={mobileEcoral} alt='Ecoral' className='imagemProjeto'></img>
                            </div>
                            <div className='descricaoProjeto'>
                                <p className='tituloProjetoCriado'>Ecoral Conservação</p>
                                <p>Este projeto integra tecnologia avançada e conservação ambiental para proteger recifes de corais no Brasil, promovendo turismo responsável e educação sobre a importância desses ecossistemas.</p>
                            </div>
                            <div className='direcionaProjeto'>
                                <div className='visualizar'>
                                    <a href="https://www.youtube.com/watch?v=yjqTfrLRNt0" target="_blank" rel="noopener noreferrer"><AiFillEye /></a>
                                </div>
                                <div className='visualizarCodigo'>
                                    <a href="https://github.com/jhonnbr4ndon/Ecoral_Mobile" target="_blank" rel="noopener noreferrer"><FaCode /></a>
                                </div>
                            </div>
                        </div>
                        <div className='projetoConcluido'>
                            <div className='imgProjeto'>
                                <img src={codeEcoral} alt='apiEcoral' className='imagemProjeto'></img>
                            </div>
                            <div className='descricaoProjeto'>
                                <p className='tituloProjetoCriado'>API Ecoral</p>
                                <p>Desenvolvemos uma API para o projeto Ecoral que gerencia login, cadastro de usuários e administra entidades essenciais como Equipamento, Funcionário, Manutenção, Parceiro, Relatório e Usuário, garantindo a segurança e eficiência do sistema.</p>
                            </div>
                            <div className='direcionaProjeto'>
                                <div className='visualizar'>
                                    <a href="https://youtu.be/945glKWzETk" target="_blank" rel="noopener noreferrer"><AiFillEye /></a>
                                </div>
                                <div className='visualizarCodigo'>
                                    <a href="https://github.com/jhonnbr4ndon/Ecoral" target="_blank" rel="noopener noreferrer"><FaCode /></a>
                                </div>
                            </div>
                        </div>
                        <div className='projetoConcluido3'>
                            <div className='imgProjeto'>
                                <img src={calculadoraKotlin} alt='apiEcoral' className='imagemProjeto'></img>
                            </div>
                            <div className='descricaoProjeto'>
                                <p className='tituloProjetoCriado'>Calculadora - Kotlin</p>
                                <p>Desenvolvi uma calculadora em Kotlin com Android Studio para realizar cálculos básicos com precisão. A aplicação possui uma interface intuitiva e responsiva, aproveitando ao máximo os recursos da linguagem e da plataforma para uma experiência de usuário eficaz e agradável.</p>
                            </div>
                            <div className='direcionaProjeto'>
                                <div className='visualizar'>
                                    <a href="https://youtu.be/83YiAYPcHwc" target="_blank" rel="noopener noreferrer"><AiFillEye /></a>
                                </div>
                                <div className='visualizarCodigo'>
                                    <a href="https://github.com/jhonnbr4ndon/Calculadora_CP4" target="_blank" rel="noopener noreferrer"><FaCode /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='projetos' data-aos="fade-up">
                        <div className='projetoConcluido'>
                            <div className='imgProjeto'>
                                <img src={mobileAeroparts} alt='AeroParts' className='imagemProjeto'></img>
                            </div>
                            <div className='descricaoProjeto'>
                                <p className='tituloProjetoCriado'>AeroParts</p>
                                <p>O AeroParts é um sistema que automatiza e simplifica o processo de cotação de peças para a aviação, facilitando a interação entre compradores e fornecedores e melhorando a eficiência nas aquisições.</p>
                            </div>
                            <div className='direcionaProjeto'>
                                <div className='visualizar'>
                                    <a href="https://youtu.be/RlBqBie_upE" target="_blank" rel="noopener noreferrer"><AiFillEye /></a>
                                </div>
                                <div className='visualizarCodigo'>
                                    <a href="https://github.com/jhonnbr4ndon/Mobile_AeroParts" target="_blank" rel="noopener noreferrer"><FaCode /></a>
                                </div>
                            </div>
                        </div>
                        <div className='projetoConcluido'>
                            <div className='imgProjeto'>
                                <img src={codeAeroparts} alt='CodeAeroParts' className='imagemProjeto'></img>
                            </div>
                            <div className='descricaoProjeto'>
                                <p className='tituloProjetoCriado'>API AeroParts</p>
                                <p>Desenvolvemos uma API em Java com Spring Boot para gerenciar Cotação, Fornecedor, Pedido, Produto e Usuário no projeto AeroParts, com uma interface visual criada com Thymeleaf para facilitar o uso.</p>
                            </div>
                            <div className='direcionaProjeto'>
                                <div className='visualizar'>
                                    <a href="https://youtu.be/55uXf8EhrkM" target="_blank" rel="noopener noreferrer"><AiFillEye /></a>
                                </div>
                                <div className='visualizarCodigo'>
                                    <a href="https://github.com/jhonnbr4ndon/AeroParts" target="_blank" rel="noopener noreferrer"><FaCode /></a>
                                </div>
                            </div>
                        </div>
                        <div className='projetoConcluido3'>
                            <div className='imgProjeto'>
                                <img src={codePokemon} alt='codePokemon' className='imagemProjeto'></img>
                            </div>
                            <div className='descricaoProjeto'>
                                <p className='tituloProjetoCriado'>API Pokemon</p>
                                <p>Desenvolvi um projeto que usa a API de Pokémon, permitindo ao usuário escolher quantos Pokémon visualizar por meio de uma pesquisa no navbar. As cartas exibem imagens, nomes e detalhes dos Pokémon.</p>
                            </div>
                            <div className='direcionaProjeto'>
                                <div className='visualizar'>
                                    <a href="https://youtu.be/4PNZ_Kvc_Wg" target="_blank" rel="noopener noreferrer"><AiFillEye /></a>
                                </div>
                                <div className='visualizarCodigo'>
                                    <a href="https://github.com/jhonnbr4ndon/apiPokemon" target="_blank" rel="noopener noreferrer"><FaCode /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projeto;