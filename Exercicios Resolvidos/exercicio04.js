/*
Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
Utilize switch-case para implementar a lógica de cada opção selecionada.
*/

const prompt = require ('prompt-sync')()

let filme1 = 'Deadpool & Wolverine'
let filme2 = 'Vingadores: Ultimato'
let filme3 = 'Homem de Ferro'

console.log(filme1)
console.log(filme2)
console.log(filme3)

let escolha = Number(prompt('Digite um numero(1 a 3) para qual filme quer ver: '))

switch(escolha){
    case 1: 
    console.log(`Você decidiu ver ${filme1}`)
    break
    case 2: 
    console.log(`Você decidi ver ${filme2}`)
    break
    case 3: 
    console.log(`Você decidiu ver ${filme3}`)
    break
    default:
    console.log('OPÇÃO INVALIDA, por favor escolha uma das 3 opções')
    escolha = Number(prompt('Digite um numero(1 a 3) para qual filme quer ver: '))
}