async function dados() {
    let resposta = await fetch("https://api.bcb.gov.br/dados/serie/bcdata.sgs.432/dados?formato=json&dataInicial=01/01/2026&dataFinal=01/09/2026")
    let dados = await resposta.json()
    return dados
}

async function main() {

    let info = await dados()
    console.log(info)
    let dias = info.map(elemento => elemento.data)
    let valores = info.map(elemento => elemento.valor)

    const ctx = document.getElementById('chart');

    new Chart(ctx, {
        type: 'line',
        data: {
        labels: dias,
        datasets: [{
            label: 'Valor da SELIC',
            data: valores,
            borderWidth: 1,
            pointRadius: 0
        }]
        },
        options: {
        scales: {
            y: {
            beginAtZero: true
            }
        }
        }
    });
}

main()