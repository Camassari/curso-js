function calcular() {
    var agora = new Date()
    var ano_atual = agora.getFullYear()
    var txt_ano_nasc = window.document.getElementById("iano")
    var ano_nasc = Number(txt_ano_nasc.value)

    if (txt_ano_nasc.value.length == 0 || ano_nasc > ano_atual) {
        window.alert("[ERRO] Idade impossível ou indeterminada, tente novamente!")
    } else {
        var sexo = window.document.getElementsByName("sexrad")
        var genero = ""

        var idade = ano_atual - ano_nasc

        var res = window.document.querySelector("div#resultado")
        var res_txt = window.document.querySelector("p#resultado")
        img = null
        if (window.document.querySelector("img#foto")) {
            img = window.document.querySelector("img#foto")
        } else {
            img = window.document.createElement("img")
            img.setAttribute("id", "foto")
            res.appendChild(img)
        }

        if (sexo[0].checked) {
            genero = "Masculino"
            if (idade <= 18) {
                img.src = "pessoas/jovem-m.png"
            } else if (idade <= 60) {
                img.src = "pessoas/adulto-m.png"
            } else {
                img.src = "pessoas/idoso-m.png"
            }
        } else if (sexo[1].checked) {
            genero = "Feminino"
            if (idade <= 18) {
                img.src = "pessoas/jovem-f.png"
            } else if (idade <= 60) {
                img.src = "pessoas/adulto-f.png"
            } else {
                img.src = "pessoas/idoso-f.png"
            }
        }

        res_txt.innerHTML = `A sua idade é de ${idade} anos e você é do gênero ${genero}`
        res.style.textAlign = "center"
    }
}