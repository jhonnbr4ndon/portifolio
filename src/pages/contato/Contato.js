import React, { useState } from 'react';
import './Style.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import emailjs from 'emailjs-com';

function Contato() {
    const [message, setMessage] = useState('');
    const [messageType, setMessageType] = useState('');
    
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_ishvuen',   
            'template_w5nvxvg',   
            e.target,
            'EQflbctNBKsPtyZRe'        
        )
        .then((result) => {
            setMessage('Mensagem enviada com sucesso!');
            setMessageType('success');
        })
        .catch((error) => {
            setMessage('Erro ao enviar a mensagem. Tente novamente.');
            setMessageType('error');
        });

        e.target.reset();
    };

    return (
        <div id="contato" className='containerContato'>
            <div className='containerContatoFilho'>
                <div className='contato'>
                    <div className='sobreMimContato'>
                        <h3 className='tituloContato' data-aos="fade-up">Entre em contato comigo!</h3>
                        <p className='descricaoContato' data-aos="fade-up">Estou em busca de novas oportunidades e minha caixa de entrada está sempre aberta. Se tiver alguma pergunta ou apenas quiser dizer oi, ficarei feliz em responder o mais rápido possível!</p>
                        <div className='iconsContato' data-aos="fade-up">
                            <a href="https://github.com/jhonnbr4ndon" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                            <a href="https://www.linkedin.com/in/jhonn-brandon-405a51271/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                        </div>
                    </div>
                    <div className='containerEntreContato'>
                        <form className='formulario' onSubmit={sendEmail}>
                            <div className='formGroup' data-aos="fade-up">
                                <label htmlFor="email">Seu email</label>
                                <input type="email" id="email" name="email" placeholder="jhonnbrandon@gmail.com" required />
                            </div>
                            <div className='formGroup' data-aos="fade-up">
                                <label htmlFor="subject">Assunto</label>
                                <input type="text" id="subject" name="subject" placeholder="Oi Jhonn! Quero falar sobre..." required />
                            </div>
                            <div className='formGroup' data-aos="fade-up">
                                <label htmlFor="message">Mensagem</label>
                                <textarea id="message" name="message" rows="4" placeholder="Proposta de..." required></textarea>
                            </div>
                            <button type="submit" data-aos="fade-up">Enviar mensagem</button>
                            {message && (
                                <div className={`responseMessage ${messageType}`}>
                                    {message}
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contato;
