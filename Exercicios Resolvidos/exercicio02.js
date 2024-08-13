/*Crie um programa que classifica a idade de uma pessoa em categorias (criança,
adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de
controle if-else.
*/

/* Criança: Até 12 anos incompletos.
Adolescente: De 12 a 18 anos incompletos.
Adulto: De 18 a 59 anos.
Idoso: 60 anos ou mais.
*/

const prompt = require ('prompt-sync')()

let idade = Number(prompt('Digite sua idade: '))

if(idade < 0){
     console.log('Digite a sua idade correta, não pode numero negativo')
     idade = Number(prompt('Digite sua idade: '))
}


if(idade <= 12 ){
    console.log('Criança')
}else if(idade <= 18){
    console.log('Adolescente')
}else if(idade <= 59){
    console.log('Adulto')
}else{
    console.log('Idoso')
}