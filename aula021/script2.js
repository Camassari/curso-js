function pokemon() {
    return fetch("https://pokeapi.co/api/v2/pokemon/ditto")
    .then(resposta => resposta.json())
    .then(info => info.name)
}

async function main() {
    const nomePokemon = await pokemon()
    console.log(nomePokemon)   
}

main()