function carregarDados() {
    return new Promise((resolve, reject) => {
        console.log("Carregando dados")

        setTimeout(() => {
            let certoErrado = true
            if (certoErrado) {
                resolve("Tudo certo")
            } else {
                reject("Tudo errado")
            }
        }, 3000)
    })
}

carregarDados()
    .then((resposta) => console.log(resposta))
    .catch((resposta) => console.log(resposta))