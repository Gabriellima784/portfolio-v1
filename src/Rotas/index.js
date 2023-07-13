import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import PaginaInicial from '../components/PaginaInicial/index.js'
import Inicio from "../components/PaginaInicial/Inicio/index.js";


const Rotas = () => {
    <BrowserRouter>
        <Routes>
            <Route exact path='/' element={<PaginaInicial />} />
        </Routes>
    </BrowserRouter>
}

export default Rotas