/*
Escreva um programa que gera e imprime os primeiros 10 números da sequência de
Fibonacci utilizando um loop for.
*/

let numeroAtual = 1
let numeroAnterior = 0
let somaFibonacci = 0

console.log(numeroAnterior)

for(let i= 1; i < 10; i++){
    somaFibonacci = numeroAtual + numeroAnterior
    numeroAnterior = numeroAtual
    numeroAtual = somaFibonacci

    console.log(somaFibonacci)

}