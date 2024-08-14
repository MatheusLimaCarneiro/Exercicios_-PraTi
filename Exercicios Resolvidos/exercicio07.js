/*
As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
compradas, calcule e escreva o valor total da compra.
*/
const prompt = require('prompt-sync')()

let macas = Number(prompt('Quantas maças quer comprar? '))
let macaMenosDuzia = 0.30
let resultadofinal = 0
let macasDuzia = 0.25

if(macas < 12 ){
    let i = 0
    
    while (i< macas){
        resultadofinal += macaMenosDuzia
        i++
    }
    console.log(`Você comprou ${macas} o valor total foi ${resultadofinal.toFixed(2)}`)
} else if(macas >= 12){
    let i =0
    while(i<macas){
        resultadofinal += macasDuzia
        i++
    }
    console.log(`Você comprou ${macas} o valor total foi ${resultadofinal.toFixed(2)}`)
}

