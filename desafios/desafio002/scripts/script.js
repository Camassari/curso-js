function carregar() {
    var agora = new Date()
    var ano = agora.getFullYear()

    var ano_pessoa = window.document.querySelector("input#iano")
    var ano_pessoa_num = Number(ano_pessoa.value)
    var sex_opc = window.document.getElementsByName("radsex")

    var res_txt = window.document.querySelector("p.resultado")
    var res = window.document.querySelector("div#res")

    var genero = ""

    if (ano_pessoa_num > ano || ano_pessoa.value.length == 0) {
        window.alert("[ERRO] FAVOR DIGITA ANO DE NASCIMENTO CORRETO")
    } else {
        var idade = ano - ano_pessoa_num

        img = null
        if (!window.document.querySelector("img#foto")) {
            var img = document.createElement("img")
            img.setAttribute("id", "foto")
        } else {
            img = window.document.querySelector("img#foto")
        }

        if (sex_opc[0].checked) {
            genero = "Homem"
            if (idade <= 18) {
                img.setAttribute('src', 'pessoas/jovem-m.png')
            } else if (idade <= 60) {
                img.setAttribute('src', 'pessoas/adulto-m.png')
            } else {
                img.setAttribute('src', 'pessoas/idoso-m.png')
            }
        } else if (sex_opc[1].checked) {
            genero = "Mulher"
            if (idade <= 18) {
                img.setAttribute("src", "pessoas/jovem-f".png)
            } else if (idade <= 60) {
                img.setAttribute("src", "pessoas/adulto-f.png")
            } else {
                img.setAttribute("src", "pessoas/idoso-f.png")
            }
        }

        res_txt.style.textAlign = 'center'
        res_txt.innerHTML = `Você é ${genero} com ${idade} anos`
        res.style.textAlign = "center"
        res.appendChild(img)
    }
}