function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        //res.innerHTML = `Idade calculada: ${idade}`
        var genero = ''

        var img = document.createElement('img') // criando a imagem pelo JavaScript
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10){
                // Criança
                img.setAttribute('src', 'img/bbBoy.png')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'img/youngMan.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'img/man.png')
            } else {
                // Idoso
                img.setAttribute('src', 'img/oldMan.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'img/bbGirl.png')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'img/youngWoman.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'img/woman.png')
            } else {
                // Idoso
                img.setAttribute('src', 'img/oldLady.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img) // esse trecho faz a ligação com o img.setAttrinute()
    }
}