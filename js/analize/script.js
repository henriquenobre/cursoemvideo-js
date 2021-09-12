var num = document.getElementById('adnum')
var sel = document.getElementById('num')
var res = document.getElementById('analize')
var arrayNum = []

function isnum(n) {
    if(Number(n)>=1 && Number(n)<=100){
    return true
    } else{
        return false
    }
}
function inlista(n, a) {
    if(a.indexOf(Number(n)) !=-1){
        return true
    } else {
        return false
    }
}

function adcionar() {
    if(isnum(num.value) && !inlista(num.value, arrayNum)){
        arrayNum.push(Number(num.value))
        var item = document.createElement('option')
        item.text = `Valor ${num.value} adcionado.`
        sel.appendChild(item)
    } else {
        alert('Valor inválido ou já adcionado')
    }
    num.value = ''
    num.focus()
    res.innerHTML = ''
}

function finalizar() {
    if(arrayNum.length == 0){
        alert('adcione valores antes de finalizar')
    } else{
        var tot = arrayNum.length
        var maior = arrayNum[0]
        var menor = arrayNum[0]
        var soma = 0
        var media = 0
        for(var pos in arrayNum)
            soma = soma + arrayNum[pos]
            if (arrayNum[pos] > maior){
                maior= arrayNum[pos]
            }
            if (arrayNum[pos] < menor){
                menor = arrayNum[pos]
            }
        media = soma / tot    
        res.innerHTML= ''
        res.innerHTML+= `<p>Ao todo temos ${tot} números adcionados</p>` 
        res.innerHTML+=`<p>O maior valor adcionado foi ${maior}</p>`
        res.innerHTML+=`<p>O menor valor adcionado foi ${menor}</p>`
        res.innerHTML+=`<p>A soma dos valores adcionados é ${soma}</p>`
        res.innerHTML+=`<p>A média dos valores adcionados é ${media}</p>`
    }
    
}