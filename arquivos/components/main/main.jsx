import React from 'react';
import Favoritos from '../favoritos/favoritos';
import Veiculos from '../veiculos/veiculos';
import './main.css'

function Main({tema}) {
    return (
        <main>
            <div className="container conteudo">
                <Favoritos tema={tema}/>
                <Veiculos tema={tema}/>
            </div>
        </main>
    );
}

export default Main;