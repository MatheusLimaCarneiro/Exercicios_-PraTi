/*
Crie um programa que calcula o fatorial de um número fornecido pelo usuário
utilizando um loop for ou while.
*/

const prompt = require('prompt-sync')()

let fatorial = 1
let numeroFatorial = Number(prompt('Digite qual para calcular o fatorial: '))

for(let i = numeroFatorial; i > 0 ; i--){
    fatorial *= i
}

console.log(fatorial)