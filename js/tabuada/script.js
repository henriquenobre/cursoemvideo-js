function tabuada(){
    var num = document.getElementById('num')
    var tab = document.getElementById('seltab')
    if(num.value.length == 0){
        window.alert('digite um número')
    }
    else{
    var n = Number(num.value)
    tab.innerHTML = ''
    for (var c = 0; c < 10; c++){
        var iten = document.createElement('option')
        iten.text = `${n} * ${c} = ${n*c}`
        tab.appendChild(iten)
    }
    }
}