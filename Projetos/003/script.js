function contar() {
    var inicio = window.document.getElementById("inicio")
    var fim = window.document.getElementById("fim")
    var passo = window.document.getElementById("passo")
    var resp = window.document.getElementById("resp")
    var i = Number(inicio.value)
    var f = Number(fim.value)
    var p = Number(passo.value)
    resp.innerHTML = ``

    if (inicio.value.length == 0 || fim.value.length == 0) {
        window.alert("[ERROR] Preencha o campo corretamente")    
    } else if (i<f) {
        while  (i<=f) {
            resp.innerText += ` ${i}..`
            i=i+p
        }
    } else if (i>f) {
        while  (i>=f) {
            resp.innerText += ` ${i}..`
            i=i-p
        }      
    }
    resp.innerHTML += ` FIM!`
    
}
