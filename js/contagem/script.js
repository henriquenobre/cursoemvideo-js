function contar(){
    var ini = document.getElementById('ini')
    var fim = document.getElementById('fim')
    var pass = document.getElementById('pass')
    var res = document.getElementById('res')
    

    if(ini.value.length == 0 || fim.value.length == 0 || pass.value.length == 0){
        alert('Faltam dados')
    } else{
        res.innerHTML = 'Contando: '
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(pass.value)
        if (i < f){
            for(var c = i;c <= f;c += p){
            res.innerHTML += `${c} \u{1F449}`
            }
        }
        else {
            for(var c = i;c >= f;c -= p){
            res.innerHTML += `${c} \u{1F449}`
            }
        }
    res.innerHTML += `\u{1F3C1}`
    }
    
}
    