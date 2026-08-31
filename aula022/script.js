let frutas = ["Abacate", "Pera", "Goiaba", "Maça"]

frutas.forEach((elemento, index) => {
    let n_index = Number(index)
    console.log(`${n_index+1} - ${elemento};`)
})

let txt = ""
for (c=0; c<=50; c++) {
    txt += "-="
}
console.log(txt)

for (index in frutas) {
    let n_index = Number(index)
    console.log(`${n_index+1} - ${frutas[n_index]}`)
}

console.log(txt)
