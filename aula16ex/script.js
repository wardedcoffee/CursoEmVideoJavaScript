function adicionar() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if(num.value == 0 || num.value > 100) {
      console.log(num.value.length)
      window.alert('Por favor, verifique o valor digitado, número encontrado na lista')
      //num.innerHTML = ''

      } else {
          let n = Number(num.value)
          let c = 1
          // como fazer o dado permanecer aqui???
          let added = [1, 2]
          // verifique se esta correto isso
          let put = added
          
          //para limpar os campos cada vez que clicar no botão 'Gerar Tabuada'
          //tab.innerHTML = ''
          
          function adicionadoNoArray() {
                for (let not = c; c <= 1; c++){
                let item = document.createElement('option')
                item.text = `Valor ${n} adicionado`
                tab.appendChild(item)
                
                // pesquisar se esse return esta correto
                return put = added.push(`${n}`)
              }
              
             

            }
        
           

        console.log(adicionadoNoArray()) 
        //console.log(added.length)
        //console.log(Object.keys(added))

   
     }
   }