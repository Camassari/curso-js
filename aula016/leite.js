function comprar(dinheiro) {
    let paos = dinheiro / 4
    return paos
}

let dinheiro = 40
let paos = comprar(dinheiro)

console.log(`Foram gasto R$${dinheiro},00 para comprar ${paos} pães`)