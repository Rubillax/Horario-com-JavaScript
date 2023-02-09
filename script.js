function loading() {
    var msg = window.document.querySelector("div#msg")
    var imagem = window.document.querySelector("div#foto")
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    if(hora<10){
        hora="0"+hora;
    }
    
    if(min<10){
        min="0"+ min;
    }
    msg.innerHTML = `Agora são ${hora}:${min} horas.</br>`

    if (hora >=0 && hora < 12){
        msg.innerHTML+=" Bom dia !"
        foto.src=("fotomanhã.jpg")
        document.body.style.background = "#D9C39A"

    } else if (hora >=12 && hora <18){
        msg.innerHTML+=" Boa tarde !"
        foto.src=("fototarde.jpg")
        document.body.style.background = "#F2A97E"

    } else {
        msg.innerHTML+=" Boa noite !"
        foto.src=("fotonoite.jpg")
        document.body.style.background = "#035159"

    }
}

