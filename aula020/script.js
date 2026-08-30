async function pegarPokemon(pokemon) {
    try {
        const resposta = await fetch("https://pokeapi.co/api/v2/pokemon/"+pokemon.toLowerCase())
        const info = await resposta.json()
        
        console.log(`Nome: ${info.name}`)
        console.log(`Altura: ${Number(info.height)*10}cm`)
        console.log(`Peso: ${info.weight}kg`)
        console.log(`Sprite da frente: ${info.sprites.front_default}`)
    } catch (erro) {
        console.log(erro)
    } finally {
        console.log("Função de pegar pokemon finalizada!")
    }
}

pegarPokemon("")