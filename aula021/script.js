yuri = {
    nome: "Yuri",
    idade: 10,
    jogos: ["Roblox", "Minecraft"],
    comidas: {
        italiana: "Pizza"
    }
}

console.log(yuri.jogos)
// Se a propriedade for undefined retorne undefined ao invés de um erro
console.log(yuri.jogos?.comidas)

let {nome: NomeYuri, jogos: JogoFavorito} = yuri
NomeYuri = "Enzo"

console.log(NomeYuri)
console.log(JogoFavorito[0])

console.log(Object.values(yuri))
console.log(Object.keys(yuri))

stringJSON = JSON.stringify(yuri)
console.log(stringJSON)

objetoJS = JSON.parse(stringJSON)
console.log(objetoJS)

// Spread
let {nome, ...resto} = objetoJS
console.log("RESTO")
console.log(resto)