function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    //var hora = data.getHours()
    var hora = 8

    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        // BOM DIA!
        img.src = 'dia2.png'
        document.body.style.background = '#B7BFB4'
    } else if (hora >= 12 && hora < 18) {
        // BOA TARDE!
        img.src = 'tarde.png'
        document.body.style.background = '#DD8A71'
    } else {
        // BOA NOITE!
        img.src = 'noite.png'
        document.body.style.background = '#16282F'
    }
} 
