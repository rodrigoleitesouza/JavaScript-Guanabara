function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById("txtano")
    var res = document.getElementById("res")
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert("[ERROR!!] Verifique os dados e tente novamente!")
    } else {
        var fsex = document.getElementsByName("radsex")
        var idade = ano - Number(fano.value)
        var genero = ""
        var img = document.createElement("img")
        img.setAttribute("id","foto")
        if (fsex[0].checked) {
            genero = "Homem"
            if (idade>=0 && idade<13) {
                //CRIANÇA
                img.setAttribute("src","1_menino_crianca.png")
            } else if (idade>=13 && idade<19) {
                //JOVEM
                img.setAttribute("src","2_menino_jovem.png")
            } else if (idade>=19 && idade<60) {
                //ADULTO
                img.setAttribute("src","3_menino_adulto.png")
            } else {
                //IDOSO
                img.setAttribute("src","4_menino_idoso.png")
            }
        } else if (fsex[1].checked) {
            genero = "Mulher"
            if (idade>=0 && idade<13) {
                //CRIANÇA
                img.setAttribute("src","1_menina_crianca.png")
            } else if (idade>=13 && idade<19) {
                //JOVEM
                img.setAttribute("src","2_menina_jovem.png")
            } else if (idade>=19 && idade<60) {
                //ADULTO
                img.setAttribute("src","3_menina_adulta.png")
            } else {
                //IDOSO
                img.setAttribute("src","4_menina_idosa.png")
            }
        }
        res.style.textAlign = "center"
        res.innerHTML = `Detectamos um ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}