import React, { useEffect } from 'react';
import { useState } from 'react';
import './favoritos.css'

function Favoritos({ tema }) {
    const [favoritos, setFavoritos] = useState([])

    let tituloFavoritos = ''
    let btnComparar = ''
    let btnLimpar = ''
    let sombra = ''
    alterarCor()

    function alterarCor() {
        if (tema) {
            tituloFavoritos = 'favoritos-titulo-lista letraEscura'
            btnComparar = 'favoritos-btn comparar sombraBtn'
            btnLimpar = 'favoritos-btn limparFavoritos sombraBtn'
            sombra = 'favoritos-item sombraEscura'
        } else {
            tituloFavoritos = 'favoritos-titulo-lista'
            btnComparar = 'favoritos-btn comparar'
            btnLimpar = 'favoritos-btn limparFavoritos'
            sombra = 'favoritos-item'
        }
    }

    function adicionarNoFavoritos(dados) {
        const novoFavoritos = favoritos
        favoritos.push(dados)
        setFavoritos(...novoFavoritos)
    }
    
    function verificarSeJaExiste(dados) {
        let jaExiste = false
        favoritos.forEach(item => {
            if(JSON.stringify(item) === JSON.stringify(dados)) {
                jaExiste = true
            }
        })
        return jaExiste;
    }

    useEffect(() => {
        function getFavoritos() {
            const listaFavoritos = JSON.parse(localStorage.getItem('favoritos')) || [{ codigo: '123123-5', anomodelo: '1998', nome: 'Audi A3 1.8 Turbo' }, { codigo: '123123-5', anomodelo: '1998', nome: 'Skyline 2.8' }, { codigo: '123123-5', anomodelo: '1998', nome: 'Aufa-Romeu 1.8 Turbo' }]
            if(JSON.stringify(listaFavoritos) !== JSON.stringify(favoritos)) {
                setFavoritos(listaFavoritos)
            }
        }
        getFavoritos()
    },[favoritos])

    return (
        <div className="container conteudo">
            <div className="favoritos">
                <h2 className={tituloFavoritos}>Lista de Favoritos</h2>
                <div className="favoritos-div">
                    <ul className="favoritos-lista" data-listafavoritos>
                        {
                            favoritos.map((item, index) => {
                                return <li key={index} className={sombra} data-codigo={item.codigo} data-anomodelo={item.anomodelo}>{item.nome} - {item.anomodelo}</li>
                            })
                        }
                    </ul>
                </div>
                <div className="favoritos-botoes">
                    <button className={btnComparar}>Comparar</button>
                    <button className={btnLimpar}>Limpar Favoritos</button>
                </div>
            </div>
        </div>
    );
}

export default Favoritos;