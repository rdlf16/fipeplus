import React from 'react';
import './footer.css'

function Footer({tema}) {
    let fundo = ''
    if(tema) {
        fundo = 'fundoAzul'
    } else {
        fundo = ''
    }
    return (
        <footer className={fundo}>
            <div className="container rodape">
                <h5>Site desenvolvidor por Rodolfo
                    <a href="https://www.linkedin.com/in/rodolfo-carvalho-sant-ana-6064211a2/" className="link"><i
                        className="fab fa-linkedin icone"></i></a>
                    <a href="https://github.com/rdlf16" className="link"><i className="fab fa-github icone"></i></a>
                    realizando consultas a API desenvolvida por:
                    <a href="https://deividfortuna.github.io/fipe/" className="link">Deivid Fortuna</a>
                </h5>
            </div>
        </footer>
    );
}

export default Footer;