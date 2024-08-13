/*
Implemente um programa que recebe uma nota de 0 a 10 e classifica como
"Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.
*/

/*Aprovado = 7 a 10
Recuperação = 4 a 6
Reprovaddo = 0 a 3
*/

const prompt = require ('prompt-sync')()

let nota = Number(prompt('Digite a nota do aluno(a): '))

if(nota < 0){
    console.log('Digite a nota correta do aluno')
    nota = Number(prompt('Digite a nota do aluno(a): '))
}

if(nota >= 7){
    console.log('Parabens, foi APROVADO !!!')
}else if(nota >= 4){
    console.log('Precisa de RECUPERAÇÃO')
}else if(nota <4){
    console.log('REPROVADO')
}