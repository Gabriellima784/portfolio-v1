import React from "react";
import "./styles.css"

export default function Mid () {
    return (
        <>
        <div id='primeiro'> <h1 id='oque'> o que ofereço </h1>
                <p>-</p>
                <img id='webfoto' src='https://i.imgur.com/7hjhgRj.png' alt="Tela"></img>
                <h1 id='web1'>desenvolvimento web</h1>
                <p id='web2'>Desenvolvimento FullStack <br/>de páginas de navegação para web.</p>
            
                <p>-</p>
                <img id='mobilefoto' src='https://i.imgur.com/cjOmmjU.png'alt="Celular"></img>
                <h1 id='mob1'>aplicações mobile</h1>
                <p id='mob2'>Prototipação de aplicativos para mobile em <br/>IOS/Android.</p>

            <p>-</p>
            <img id='uxfoto' className='w-40'  src='https://i.imgur.com/nn9yCbT.jpg' alt="UX/UI"></img>
                <h1 id='ux1'>user experience/user interface</h1>
                <p id='ux2'>Precisa aprimorar a experiência de usuario e a interface da sua 
                <br/>página web ou da sua aplicação? Então conte comigo para
                realizar esse serviço e tornar o seu site ainda melhor </p> 
        </div>
                
        </>
    )
}

