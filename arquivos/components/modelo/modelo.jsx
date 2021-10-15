import React, { useEffect, useState } from 'react';
import { pegarModelos } from '../../utils/utils';
import './modelo.css'

function Modelo({ change, tema, info }) {
    const [modelos, setModelos] = useState([])
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
            if (JSON.stringify(modelos) !== JSON.stringify(dados.modelos)) {
                setModelos(dados.modelos)
            }
        }
        pegarModelos(info.tipo, info.marca, popularModelos)

    }, [info, modelos])

    return (
        <div className="veiculos-dropdown">
            <select className={letraEscura} name="modeloVeiculo" id="modelo" onChange={change}>
                <option className="veiculos-item" value="">Selecione o modelo do veiculo</option>
                {modelos.map((modelo, index) => {
                    return <option key={index} className="veiculos-item" value={modelo.codigo}>{modelo.nome}</option>
                })}
            </select>
        </div>
    );
}

export default Modelo;