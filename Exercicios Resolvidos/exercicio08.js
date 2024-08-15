/*
Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
e escreve-los em ordem crescente.
*/

const prompt = require('prompt-sync')()

let primeiroValor = Number(prompt('Digite o primeiro valor: '))
let segundoValor = Number(prompt('Digite o segundo valor: '))

if(primeiroValor === segundoValor){
    console.log('Não pode ser valores iguais!!!')
    console.log('Por favor coloque valores diferentes')
    primeiroValor = Number(prompt('Digite o primeiro valor: '))
    segundoValor = Number(prompt('Digite o segundo valor: '))
}

if (primeiroValor < segundoValor) {
    console.log(`Os valores em ordem crescente são: ${primeiroValor}, ${segundoValor}`)
} else {
    console.log(`Os valores em ordem crescente são: ${segundoValor}, ${primeiroValor}`)
}