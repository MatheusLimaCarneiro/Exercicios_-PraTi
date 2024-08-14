/*
Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
Isósceles, escaleno ou eqüilátero.
Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)
*/

const prompt = require('prompt-sync')()

let ladoA = Number(prompt('Digite o primeiro lado do triangulo: '))
let ladoB = Number(prompt('Digite o segundo lado do triangulo: '))
let ladoC = Number(prompt('Digite o  lado do triangulo: '))


if(ladoA < ladoB + ladoC &&  ladoB < ladoA + ladoC && ladoC < ladoA + ladoB){
    console.log('Forma um triangulo!!!')
} 

if (ladoA === ladoB && ladoB === ladoC) {
    console.log('O triângulo é equilátero');
} else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
    console.log('O triângulo é isósceles');
} else{
    console.log('O triangulo é escaleno')
}