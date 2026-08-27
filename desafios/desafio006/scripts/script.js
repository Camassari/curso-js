var res = window.document.getElementById("resultado")
var select = window.document.getElementById("select")
var numeros = []

function entre_1_100(num) {
    if (Number(num) >= 1 && Number(num) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(num, lista) {
    if (lista.indexOf(Number(num)) != -1) {
        return true
    } else {
        return false
    }
}


function adicionar() {
    var select = window.document.getElementById("select")
    let num = window.document.getElementById("num")

    if (num.value.length == 0) {
        window.alert("[ERRO] Coloque um valor para adicionar")
    } else {
        let num_value = Number(num.value)
        if (entre_1_100(num_value)) {
            if (!inLista(num_value, numeros)) {
                if (res.length != 0) {
                    res.innerHTML = ""
                }

                let opt = window.document.createElement("option")
                opt.value = num_value
                opt.label = `Valor ${num_value} adicionado`
                select.appendChild(opt)

                numeros.push(num_value)

                num.value = null
            } else {
                window.alert("Número já está na lista")
            }
        } else {
            window.alert("Por favor adicione um valor enre 1 e 100")
        }
    }
}

function finalizar() {
    if (select.length == 0) {
        window.alert("Nenhum valor adicionado ainda")
    } else {
        numeros.sort()
        res.innerHTML += `Ao todo temos ${numeros.length} números cadastrados<br>`
        res.innerHTML += `O maior informado foi ${numeros[numeros.length-1]}<br>`
        res.innerHTML += `O menor valor informado foi ${numeros[0]}<br>`

        let sum = 0
        for (index in numeros) {
            sum += numeros[index]
        }
        res.innerHTML += `Somando todos os valores, temos ${sum}<br>`
        res.innerHTML += `A média dos valores digitados é ${sum/numeros.length}`
    }
}