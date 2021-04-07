function ver() {
    var inicio = ''
    var inicio = window.document.querySelector('input#inicio')
    var show1 = Number(inicio.value)
    console.log(inicio.value)
    
    var fim = ''
    var fim = window.document.querySelector('input#fim')
    var show2 = Number(fim.value)
    console.log(fim.value)

    var passo = ''
    var passo = window.document.querySelector('input#passo')
    var show3 = Number(passo.value)
    console.log(passo.value)
    
    var resultado = window.document.querySelector('p#showText')
    // voce tem que criar uma logica ou usar algum commando pra fazer o pulo entre o show 1 e o show 2!
    //var resultado2 = resultado.innerText = `${show1} + ${show2} + ${show3}`
    var resultado3 = show1 + show3
    console.log(resultado3)

    
        for (var c = show1; c < show2; c++) {
            console.log(`numero de pulos ${c}`)
        }
        

        var resultadoZero = resultado.innerText = `todos os pulos ${c}`
    /*
    while ( show1 <= show2 ) {
        console.log(`numero de pulos ${show1}`)
        show1 ++
    }
    
     
tem que pegar o valor de inicio, 
pegar o valor de fim, criar um intervalo,
baseado no valor de passo, 
que tem que começar com um(mais uma verificação)
*/ 

}