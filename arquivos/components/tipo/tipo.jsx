import React from 'react';
import './tipo.css';

function Tipo({ change, tema }) {
    const tipos = [{ caminhao: 'caminhoes' }, { carro: 'carros' }, { moto: 'motos' }]
    let letraEscura = ''
    alterarCor()
    function alterarCor() {
        if(tema) {
            letraEscura = 'veiculos-select letraEscura'
        } else {
            letraEscura = 'veiculos-select'
        }
    }
    return (
        <div className="veiculos-dropdown">
            <select className={letraEscura} name="tipoVeiculo" id="tipo" onChange={change}>
                <option className="veiculos-item" value="">Selecione o tipo de veiculo</option>
                {tipos.map((tipo, index) => {
                    return <option key={index} className="veiculos-item" value={Object.values(tipo)}>{Object.keys(tipo)}</option>
                })}
            </select>
        </div>
    );
}

export default Tipo;