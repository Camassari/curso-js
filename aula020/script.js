async function pegarPokemon(pokemon) {
    const resposta = await fetch("https://pokeapi.co/api/v2/pokemon/"+pokemon.toLowerCase())
    const info = await resposta.json()

    if (!pokemon) {
        throw new Error("Nenhum pokemon com esse nome existe")
    }
    
    console.log(`Nome: ${info.name}`)
    console.log(`Altura: ${Number(info.height)*10}cm`)
    console.log(`Peso: ${info.weight}kg`)
    console.log(`Sprite da frente: ${info.sprites.front_default}`)
}

pegarPokemon("")