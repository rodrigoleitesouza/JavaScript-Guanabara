function carregar() {
    var msg = window.document.getElementById("msg")
    var img = window.document.getElementById("imagem")
    var data = new Date()
    var hora = data.getHours()
    
    if (hora>=0 && hora<=12) {
        // BOM DIA
        msg.innerHTML = `Agora são ${hora} horas da manhã.`
        img.src = "1_manha.png"
        document.body.style.background = "blue"
    } else if (hora>12 && hora<=18) { 
        // BOA TARDE
        msg.innerHTML = `Agora são ${hora} horas da tarde.`
        img.src = "2_tarde.png"
        document.body.style.background = "orange"
    } else {
        // BOA NOITE
        msg.innerHTML = `Agora são ${hora} horas da noite.`
        img.src = "3_noite.png"
        document.body.style.background = "grey"
    }
}


