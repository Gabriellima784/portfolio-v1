import React from "react";
import "./styles.css"

export default function Inicio () {
    return (
        <div className="container-inicio">
            <div className="element">
                <h2 className="Titulo">Olá <icon className="hand">👋</icon> EU SOU GABRIEL LIMA</h2>
                <h1 className="Subtitulo">DESENVOLVEDOR</h1>
                <h1 className="Subtitulo">FULLSTACK UX/UI</h1>
                <div className="images">


                    <a href="https://www.linkedin.com/in/gabriel-lima-77667b259/" target="blank">
                        <img className="icon" id="Linkedin" src="https://raw.githubusercontent.com/Gabriellima784/images/main/in.png" alt="Linkedin Logo"/>
                    </a>

                    <a href="https://github.com/Gabriellima784" target="blank">
                        <img className="icon" id="GitHub"  src="https://raw.githubusercontent.com/Gabriellima784/images/main/Vector%20(1).png" alt="GitHub Logo"/>
                    </a>
                    
                    <a href="https://drive.google.com/file/d/19y5Kr_ORlnz4X_cJEkh8lxk4ypiYsgkL/view?usp=sharinghttps://drive.google.com/file/d/19y5Kr_ORlnz4X_cJEkh8lxk4ypiYsgkL/view?usp=sharing" target="blank">
                        <img className="icon" id="Curriculo" src="https://raw.githubusercontent.com/Gabriellima784/images/main/Vector%20(2).png"alt="Curriculo Logo"/>
                    </a>

                </div>
                <div className="resume">
                    <p className="tex">Tenho 21 anos de idade e sou desenvolvedor Front-End,</p>
                    <p className="tex">discente em Analise e desenvolvimento de sistemas</p>
                    <p className="tex">com +6 meses de experiência voluntária no exterior como</p>
                    <p className="tex">desenvolvedor.</p>
                </div>
            </div>
        </div>
    )
}