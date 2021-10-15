import React, { useEffect, useState } from 'react';
import { pegarAno } from '../../utils/utils';
import './ano.css'

function Ano({ change, tema, info }) {
    const [anos, setAnos] = useState([])
    let letraEscura = ''
    alterarCor()

    function alterarCor() {
        if (tema) {
            letraEscura = 'veiculos-select letraEscura'
        } else {
            letraEscura = 'veiculos-select'
        }
    }

    useEffect(() => {

        function popularModelos(dados) {
            if (JSON.stringify(anos) !== JSON.stringify(dados)) {
                setAnos(dados)
            }
        }
        pegarAno(info.tipo, info.marca, info.modelo, popularModelos)


    }, [info, anos])

    return (
        <div className="veiculos-dropdown">
            <select className={letraEscura} name="anoVeiculo" id="ano" onChange={change}>
                <option className="veiculos-item" value="">Selecione o ano do veiculo</option>
                {anos.map((ano, index) => {
                    return <option key={index} className="veiculos-item" value={ano.codigo}>{ano.nome}</option>
                })}
            </select>
        </div>
    );
}

export default Ano; <h2>OK</h2>