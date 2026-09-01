async function dados() {
    let resposta = await fetch("https://api.bcb.gov.br/dados/serie/bcdata.sgs.432/dados?formato=json&dataInicial=01/09/2016&dataFinal=01/09/2026")
    let dados = await resposta.json()
    return dados
}

async function main() {
    let info = await dados()
    info.forEach((elemento) => {
        console.log(`${elemento.data}: ${Number(elemento.valor).toLocaleString("pt-BR", {style: "currency", currency: "BRL"})}`)
    })
}

main()