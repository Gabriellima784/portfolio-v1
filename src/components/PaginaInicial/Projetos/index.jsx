import React from "react";
import "./styles.css"

export default function Projetos () {
    return (
        <>
        <div className="container">
                <h1 className="Projetos">PROJETOS</h1>
        
         <div className="container-images"> 

         <a href="https://food-commerce-alwi1kude-gabriellima784.vercel.app/" target="_blank" rel="noopener noreferrer" className="project-link">
            <div className="project1">
                <p className="Title">ESTUDO EM REACT E NODEJS</p>
                    <img className="Food"src="https://raw.githubusercontent.com/Gabriellima784/images/main/Food%20cOmerce%20Foto.png" alt="Food"/>
                <div className="paragrapher">
                    <p className="SubTitle">Aplicativo de pedido online feito </p>
                    <p className="SubTitle">para lanchonetes e restaurantes.</p>
                </div>
            </div>
        </a>

        <a href="https://gabriellima784.github.io/password-generator/" target="_blank" rel="noopener noreferrer" className="project-link">
                <div className="project">
                    <p className="Title2">ESTUDO EM LÓGICA DE PROGRAMAÇÃO</p>
                            <img className="Food"src="https://raw.githubusercontent.com/Gabriellima784/images/main/Password%20NoBG.png" alt="Food"/>
                        <p className="SubTitle2">Aplicativo gerador de senhas </p>
                        <p className="SubTitle2">criado para estudo de lógica de programação</p>
                        <p className="SubTitle2">e interfaces intuitivas para o usuário.</p>
                </div>
        </a>

            </div>
        </div>
        </>
    )
}