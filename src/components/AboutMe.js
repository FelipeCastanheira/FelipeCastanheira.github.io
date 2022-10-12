import React, { useRef, useState } from 'react';
import style from '../App.module.css';
import axios from 'axios';


export function AboutMe() {
  const postURL = 'https://api.emailjs.com/api/v1.0/email/send';
  // Content type is 'multipart/form-data'
  const [username, setUsername] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [subject, setSubject] = useState('Aula Particular');
  const [message, setMessage] = useState('');
  const [btnText, setBtnText] = useState('Enviar');
  // const form = useRef();
  
  const inputHandler = (target, setter) => setter(target.value);
  
  const sendEmail = (e) => {
    e.preventDefault();

    if (!userEmail.includes('@') || !userEmail.includes('.')) {
      const emailSpan = document.querySelector('form span');
      emailSpan.style.display = 'block';
    } else {
      const data = {
        service_id: 'service_xfv32cv',
        template_id: 'template_bbxdr1r',
        user_id: 'cPS99yAVwudSg6vdT',
        template_params: {
          from_name: username,
          from_email: userEmail,
          message: subject === 'Outro' ? message : subject,
        },
      };
      axios.post(postURL, data);
      setBtnText('Vou te responder por email');
      setUserEmail('');
      setMessage('');
      setSubject('Aula Particular');
      setUsername('');
      const emailSpan = document.querySelector('form span');
      emailSpan.style.display = 'none';
      // emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      //   .then((result) => {
      //       console.log(result.text);
      //   }, (error) => {
      //       console.log(error.text);
      //   });
    }
    
  };
    return (
      <section className={ style.aboutMe }>
        <form id="form" onSubmit={sendEmail}>
          <h3>Fale Comigo</h3>
          <input
            placeholder="Nome"
            type="text"
            name="username"
            value={ username }
            onChange={ (e) => inputHandler(e.target, setUsername) }
          />
          <input
            placeholder="Email"
            type="email"
            name="userEmail"
            value={ userEmail }
            onChange={ (e) => inputHandler(e.target, setUserEmail) }
          />
          <span>Preencha um e-mail válido</span>
          <select value={ subject } onChange={ (e) => setSubject(e.target.value) }>
            <option>Aula Particular</option>
            <option>Dúvida</option>
            <option>Ajuda com projeto</option>
            <option>Carreira</option>
            <option>Outro</option>
          </select>
          { subject==='Outro'
            && (
              <textarea
                placeholder="Mensagem"
                name="message"
                value={ message }
                onChange={ (e) => setMessage(e.target.value)}
              />
            )}
          <input type="submit" value={ btnText } />
        </form>
        <div className="aboutMe-empty"/>
      </section>
    );
}