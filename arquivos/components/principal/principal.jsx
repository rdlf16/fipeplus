import React, { useState } from 'react';
import Footer from '../footer/footer';
import Header from "../header/header";
import Main from '../main/main';
import './principal.css'

function Principal() {
    const [tema, setTema] = useState(false)
    let cor = ''
    getLocalStorage()

    function getLocalStorage() {
        const resultado = JSON.parse(localStorage.getItem('tema')) || false
        if(resultado !== tema) {
            setTema(resultado)        
        }
        fundo()
    }
    
    function setLocalStorage(bool) {
        localStorage.setItem('tema', JSON.stringify(bool))
    }

    function fundo() {
        if (tema) {
            cor = 'fundoBranco'
        } else {
            cor = ''
        }
    }

    function alterarTema(event) {
        const bool = event.target.checked
        setLocalStorage(bool)
        setTema(bool)
    }

    return (
        <div className={cor}>
            <Header alterarTema={alterarTema} tema={tema} />
            <Main tema={tema} />
            <Footer tema={tema} />
        </div>
    );
}

export default Principal;
