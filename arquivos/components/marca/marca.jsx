import React, { useEffect, useState } from 'react';
import { pegarMarcas } from '../../utils/utils';
import './marca.css';

function Marca({ change, tema, info }) {
    const [marcas, setMarcas] = useState([])
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
        function popularMarcas(dados) {
            if (JSON.stringify(marcas) !== JSON.stringify(dados)) {
                setMarcas(dados)
            }
        }
        pegarMarcas(info.tipo, popularMarcas)

    }, [info, marcas])

    return (
        <div className="veiculos-dropdown">
            <select className={letraEscura} name="marcaVeiculo" id="marca" onChange={change}>
                <option className="veiculos-item" value="">Selecione a marca do veiculo</option>
                {marcas.map((marca, index) => {
                    return <option key={index} className="veiculos-item" value={marca.codigo}>{marca.nome}</option>
                })}
            </select>
        </div>
    );
}

export default Marca;