/*
Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a 10)
 utilizando um loop for.
*/
const prompt = require('prompt-sync')() 

let numeroTabuada = Number(prompt('Digite qual tabuada deseja saber: '))
let resultadoTabuada= 0;

for(let i = 0; i<= 10; i++){
    resultadoTabuada = numeroTabuada * i
    console.log(`${numeroTabuada} * ${i} = ${resultadoTabuada}`)
}

