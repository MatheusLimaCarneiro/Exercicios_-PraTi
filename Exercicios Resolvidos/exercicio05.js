/*
Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
utilizando if-else.
*/


const prompt = require ('prompt-sync')()


let peso = Number(prompt("Digite seu peso em kg:"))
let altura = Number(prompt("Digite sua altura em metros:"))


let imc = peso / (altura * altura)
let categoria


if (imc < 18.5) {
    categoria = "Baixo peso"
} else if (imc >= 18.5 && imc < 25) {
    categoria = "Peso normal"
} else if (imc >= 25 && imc < 30) {
    categoria = "Sobrepeso"
} else {
    categoria = "Obesidade"
}


console.log(`Seu IMC é: ${imc.toFixed(2)}`)
console.log(`Categoria de peso: ${categoria}`)