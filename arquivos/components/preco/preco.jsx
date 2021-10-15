import React, { useEffect, useState } from 'react';
import { pegarPreco } from '../../utils/utils';
import './preco.css'

function Preco({ tema, info, change }) {
    const [preco, setPreco] = useState('')
    let letraEscura = ''
    alterarCor()
    function alterarCor() {
        if (tema) {
            letraEscura = 'veiculos-preco letraEscura'
        } else {
            letraEscura = 'veiculos-preco'
        }
    }

    useEffect(() => {
        function alterarPreco(dados) {
            if (JSON.stringify(preco) !== JSON.stringify(dados)) {
                setPreco(dados)
            }
        }
        pegarPreco(info.tipo, info.marca, info.modelo, info.ano, alterarPreco)

    }, [info, preco, change])

    useEffect(() => {
        // const botao = document.querySelector('.veiculos-button--addLista')
    })

    return (
        <div className={letraEscura}>
            <h4>Modelo: {preco.Modelo}</h4>
            <h4>Marca: {preco.Marca}</h4>
            <h4>Ano: {preco.AnoModelo}</h4>
            <h4>Combustivel: {preco.Combustivel}</h4>
            <h4>Código Fipe: {preco.CodigoFipe}</h4>
            <h4>Preço Médio: {preco.Valor}</h4>
            <button className="veiculos-button--addLista"><i className="fas fa-star"></i></button>
        </div>

    );
}

export default Preco;