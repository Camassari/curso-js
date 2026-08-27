let sobremesas = ["Tiramisu", "Petit Gateau", "Sorvete", "Mousse", "Laura"]

for (let pos in sobremesas) {
    console.log(`Sobremesa ${Number(pos)+1}: ${sobremesas[pos]}`)
}

for (let pos=0; pos < sobremesas.length; pos++) {
    console.log(`Sobremesas favorita ${pos+1}: ${sobremesas[pos]}`)
}

console.log(`O tiramisu está na posição: ${sobremesas.indexOf("Tiramisu")} da lista`)