import React from 'react';
import './header.css'

function Header({ alterarTema, tema }) {
    let fundo = ''
    alterarCor()

    function alterarCor() {
        if(tema) {
            fundo = 'fundoAzul'
        } else {
            fundo = ''
        }
    }
    
    return (
        <header className={fundo}>
            <div className="container cabecalho">
                <h1>Fipe Plus</h1>
                <div className="div-liga--desliga">
                    <h6>Escuro</h6>
                    <input type="checkbox" className="checkbox" id="tema" onChange={alterarTema} checked={tema}/>
                    <label htmlFor="tema" className ="botao__liga-desliga"></label>
                    <h6>Claro</h6>
                </div>
            </div>
        </header>
    );
}

export default Header;