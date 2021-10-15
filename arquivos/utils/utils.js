const urlBase = 'https://parallelum.com.br/fipe/api/v1/';

function pegarMarcas(tipo, next) {
    fetch(urlBase + tipo + '/marcas')
        .then(resp => {
            return resp.json()
        })
        .then(data => {
            next(data)
        })
}
function pegarModelos(tipo, marca, next) {
    fetch(urlBase + tipo + '/marcas/' + marca + '/modelos')
        .then(resp => {
            return resp.json()
        })
        .then(data => {
            next(data)
        })
}
function pegarAno(tipo, marca, modelo, next) {
    fetch(urlBase + tipo + '/marcas/' + marca + '/modelos/' + modelo + '/anos')
        .then(resp => {
            return resp.json()
        })
        .then(data => {
            next(data)
        })
}
function pegarPreco(tipo, marca, modelo, ano, next) {
    fetch(urlBase + tipo + '/marcas/' + marca + '/modelos/' + modelo + '/anos/' + ano)
        .then(resp => {
            return resp.json()
        })
        .then(data => {
            const busca = {tipo, marca, modelo, ano}
            const veiculo = {...data, ...busca}
            next(veiculo)// Alterar
        })
}

export { pegarPreco, pegarAno, pegarModelos, pegarMarcas }