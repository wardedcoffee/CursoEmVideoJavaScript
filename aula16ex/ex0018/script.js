function adicionar() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    let valores = []


    function injection() {

    }



    if(num.value == 0 || num.value > 100) {
      window.alert('Por favor, verifique o valor digitado, número encontrado na lista')
      //num.innerHTML = ''
      
    } else {
        valores.push(Number(num.value))
        
        console.log(valores.length)


          let n = Number(num.value)
          let c = 0
          // como fazer o dado permanecer aqui???
          let added = 1

          
          //console.log(paraguay.length)


          function enviaParaArray(){
            //let manda = []
            //manda.push(n)
            //console.log(manda.length)

            //let manda = document.getElementById('textoTela')
            //manda.innerHTML = Number(manda.length)

            


            return 
            
          }
                   
          function adicionadoNaTab() {
                for (let not = c; c <= added; c++){
                  let item = document.createElement('option')
                  item.text = `Valor ${n} adicionado`
                  tab.appendChild(item)
                                
                  return 
                }
             }
        
           
             console.log(enviaParaArray())
        console.log(adicionadoNaTab()) 
        
        //console.log(Object.keys(paraguay))

   
     }
   }