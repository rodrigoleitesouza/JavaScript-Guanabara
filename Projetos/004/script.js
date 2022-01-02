

function Com() {
    
    var num = document.getElementById("num")
    var tab = document.getElementById("seltab")
    var N = Number(num.value)
    

    if (num.value.length == 0) {
        window.alert("Digite um valor válido!")
    } else if (num.value.length != 0) {
        var c = 1
        tab.innerHTML = " "
        for (c;c<=9;c=c+1) {
            var item = document.createElement("option")
            item.text = ` ${c} x ${N} = ${c*N} `
            tab.appendChild(item)
        }
    }


    
}