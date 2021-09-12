function carregar(){
    var msg = document.getElementById('msg')
    var oi = document.getElementById('oi')
    var img = document.getElementById('imagem')
    var hora = document.getElementById('qhora')
    var hora = Number(qhora.value)
    
    
    if(hora >= 0 && hora < 12){
        msg.innerHTML = `${hora} horas`
        img.src = 'dia.jpg'
        document.body.style.background = '#e2cd9f'
        oi.innerHTML = 'Bom dia'
    }
    else if(hora >= 12 && hora <= 18){
        msg.innerHTML = `${hora} horas`
        img.src = 'tarde.jpg'
        document.body.style.background = '#b9846f'
        oi.innerHTML = 'Boa tarde'
    }
    else if(hora > 18 && hora <= 24){
        msg.innerHTML = `${hora} horas`
        img.src = 'noite.jpg'
        document.body.style.background = '#515154'
        oi.innerHTML = 'Boa noite'
    }
    else {
        alert("Valor incorreto")
    }
    }