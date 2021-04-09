let num = [5, 8, 9, 2, 3]

num.sort()
num.push(1)
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(8)
if(pos == -1){
    console.log(`Não foi possível encontrar o valor pesquisado`)
} else {
    console.log(`O valor está na posição ${pos}`)
}
 