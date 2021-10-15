import React, { useState } from 'react';
import Tipo from '../tipo/tipo';
import Marca from '../marca/marca';
import Modelo from '../modelo/modelo';
import Ano from '../ano/ano'
import Preco from '../preco/preco';
import './veiculos.css'

function Veiculos({ tema }) {
    const [info, setInfo] = useState({ tipo: '', marca: '', modelo: '', ano: '' })

    function changeTipo(event) {
        const veiculo = info
        veiculo.tipo = event.target.value;
        veiculo.modelo = ''
        veiculo.ano = ''
        veiculo.marca = ''
        setInfo({ ...veiculo })
    }
    function changeMarca(event) {
        const veiculo = info
        veiculo.marca = event.target.value
        veiculo.modelo = ''
        veiculo.ano = ''
        setInfo({ ...veiculo })
    }
    function changeModelo(event) {
        const veiculo = info
        veiculo.modelo = event.target.value
        veiculo.ano = ''
        setInfo({ ...veiculo })
    }
    function changeAno(event) {
        const veiculo = info
        info.ano = event.target.value
        setInfo({ ...veiculo })
    }

    function qual() {
        if (info.tipo === '') {
            return (
                <div className="veiculos">
                    <section className="veiculos-secao">
                        <Tipo change={changeTipo} tema={tema} />
                    </section>
                </div>
            )
        } else if (info.marca === '') {
            return (
                <div className="veiculos">
                    <section className="veiculos-secao">
                        <Tipo change={changeTipo} tema={tema} />
                        <Marca change={changeMarca} tema={tema} info={info} />
                    </section>
                </div>
            )
        } else if (info.modelo === '') {
            return (
                <div className="veiculos">
                    <section className="veiculos-secao">
                        <Tipo change={changeTipo} tema={tema} />
                        <Marca change={changeMarca} tema={tema} info={info} />
                        <Modelo change={changeModelo} tema={tema} info={info} />
                    </section>
                </div>
            )
        } else if (info.ano === '') {
            return (
                <div className="veiculos">
                    <section className="veiculos-secao">
                        <Tipo change={changeTipo} tema={tema} />
                        <Marca change={changeMarca} tema={tema} info={info} />
                        <Modelo change={changeModelo} tema={tema} info={info} />
                        <Ano change={changeAno} tema={tema} info={info} />
                    </section>
                </div>
            )
        } else {
            return (
                <div className="veiculos">
                    <section className="veiculos-secao">
                        <Tipo change={changeTipo} tema={tema} />
                        <Marca change={changeMarca} tema={tema} info={info} />
                        <Modelo change={changeModelo} tema={tema} info={info} />
                        <Ano change={changeAno} tema={tema} info={info} />
                        <Preco tema={tema} info={info} />
                    </section>
                </div>
            )
        }
    }

    return (
        qual()
    );
}
export default Veiculos;