/*
Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
a média aritmética desses números.
*/ 
const prompt = require('prompt-sync')()

let usuário =-1
let i = 0
let somanumerosUsuario = 0
while(usuário !== 0){
     usuário = Number(prompt('Digite um numero(digite 0 para finalizar): '))
     if(usuário !== 0){
     somanumerosUsuario += usuário
     i++
     }
}
let mediaAritimetica = somanumerosUsuario / i

console.log(`A media aritimética é: ${mediaAritimetica}`)
