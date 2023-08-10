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
                    <img className="icon" src="https://raw.githubusercontent.com/Gabriellima784/images/main/Vector%20(1).png" alt="GitHub Logo"/>
                    <img className="icon" src="https://raw.githubusercontent.com/Gabriellima784/images/main/Vector%20(2).png"alt="Linkedin Logo"/>
                    <img className="icon" src="https://raw.githubusercontent.com/Gabriellima784/images/main/in.png" alt="CV Logo"/>
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