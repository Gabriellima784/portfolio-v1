import React from "react";

import Header from "../Header";
import Inicio from "./Inicio";
import Projetos from "./Projetos";
import Mid from "./Skills";

export default function Conteudo () {
    
    return (
        <main className="Conteudo">
            <Header /> 
            <Inicio />
            <Projetos />
            <Mid/>
        </main>
    )
}

