import { useState } from 'react';
import styles from './Footer.module.css';
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from '@emailjs/browser'

export function Footer() {
  const key = "6Ld24e0iAAAAAAk0k8Mlo1e0-tS6DSDMNMgqAask"

  function onChange(value) {
    console.log("Captcha value:", value);
  }

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')
  const [message, setMessage] = useState('')



  function sendEmail(e) {
    e.preventDefault();

    if (name === "" || email === "" || message === "") {
      alert("Preencha todos os campos");
      return
    }
    if (ReCAPTCHA === "") {
      alert("preencha o ReCAPTCHA")
      return
    }

    const templatePrams = {
      from_name: name,
      message: message,
      email: email,
    }

    emailjs.send("service_56oss8a", "template_lfkmwj8", templatePrams, "N3gUOXY8Vvp9LJWVN")
      .then((response) => {
        console.log("EMAIL ENVIADO", response.status, response.text)
        setName('')
        setEmail('')
        setTelefone('')
        setMessage('')
      }, (err) => {
        console.log("ERRO", err)
      })

  }

  return (
    <>
      <div className={styles.container} id="contato">
        <p>Fale Conosco</p>
        <div className={styles.separador}></div>
        <div className={styles.container_box}>
          <form className="form" onSubmit={sendEmail} action="https://formsubmit.co/jossana.paulo@gmail.com" method="POST">
            <div className={styles.form_group}>
              <label htmlFor="nome">Nome</label>
              <input type="text" id="nome" name="nome" onChange={(e) => setName(e.target.value)}
                value={name} />
            </div>
            <div className={styles.form_group}>
              <label htmlFor="email">E-mail</label>
              <input type="mail" id="email" name="email" onChange={(e) => setEmail(e.target.value)}
                value={email} />
            </div>
            <div className={styles.form_group}>
              <label htmlFor="telefone">Telefone</label>
              <input type="tel" id="telefone" name="telefone" onChange={(e) => setTelefone(e.target.value)}
                value={telefone} />
            </div>
            <div className={styles.form_group}>
              <label htmlFor="mensagem">Mensagen</label>
              <textarea name="mensagem" id="mensagem" onChange={(e) => setMessage(e.target.value)}
                value={message}></textarea>
            </div>
            <ReCAPTCHA
              sitekey={key}
              onChange={onChange}
              requered
            />
            <button type="submit" value="Enviar" >Enviar</button>
          </form>
        </div>
      </div>
      <div className={styles.copyrhte}>
        <p>Codeagenciaweb ©2022 - Todos os direitos reservados</p>
      </div>
    </>
  )
}