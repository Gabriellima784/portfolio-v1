import React, { useState, useRef } from "react";
import "./styles.css";

const ContactMe = () => {
  const [emailCopied, setEmailCopied] = useState(false);
  const emailRef = useRef(null);

  const handleEmailCopy = () => {
    const email = emailRef.current.textContent;
    navigator.clipboard.writeText(email);
    setEmailCopied(true);
    emailRef.current.classList.add("copied");

    setTimeout(() => {
      setEmailCopied(false);
      emailRef.current.classList.remove("copied");
    }, 2000);
  };

  return (
    <>
    <h1 className="TitleContact" id="Contato">ENTRE EM CONTATO COMIGO</h1>
    <div className="container-contato">
      <div className="EmailCopy">
        <div className="NewsletterIcon">
          <img src="https://raw.githubusercontent.com/Gabriellima784/images/main/Vector9.png" alt="Email" />
        </div>
            <span ref={emailRef} className="email">gabriellima0129b@gmail.com</span>
        </div>
            <button onClick={handleEmailCopy} className="Button">{emailCopied ? "Copiado!" : "Copiar Email"}</button>
    </div>
    </>
  );
};

export default function Contato() {
  return (
    <>
      <section className="Contatem">
        <ContactMe />
      </section>
    </>
  );
}
