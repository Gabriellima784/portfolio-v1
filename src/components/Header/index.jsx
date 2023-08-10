import React from "react";
import './styles.css';
import { Link } from "react-scroll"; 

const Header = () => {

    return (
     <>
        <div className="header">
            <nav>
                <ul>
                    <li>
                       <Link to="container-inicio" spy={true} smooth={true} offset={5} duration={500}>Inicio</Link>
                    </li>

                    <li>
                        <Link to="Projetos" spy={true} smooth={true} offset={5} duration={500}>Projetos</Link>
                    </li>

                    <li>
                        <Link to="Skills" spy={true} smooth={true} offset={-20} duration={500}>Skills</Link>
                    </li>

                    <li>
                        <Link to="Contato" spy={true} smooth={true} offset={15} duration={500}>Contato</Link>
                    </li>
                </ul>
            </nav>
        </div>
     </>
    )
}

export default Header;
