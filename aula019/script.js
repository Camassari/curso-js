/*
function carregarPagina(tempo, callback) {
    console.log("Carregando a página")
    setTimeout(() => callback(), tempo)
}

const TermineiDeCarregar = () => console.log("Terminei de carregar")

carregarPagina(2000, TermineiDeCarregar)
*/


// Anônima

function carregarPagina(tempo, callback) {
    console.log("Carregando...")
    setTimeout(() => callback(), tempo)
}

carregarPagina(2000, function () { console.log("Terminei de carregar") })

// 5000ms = 5s