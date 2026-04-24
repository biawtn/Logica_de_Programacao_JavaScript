//Para rodar node, abri o terminal do VS CODE, instalei o pacote NPM prompt-sync,( npm install prompt-sync ) entrei na pasta com CD, por fim node script.js

//Exercício 01 - Elaborar um programa que leia o salário e o tempo que o funcionário trabalha na empresa, sabendo que a cada 4 anos o funcionário ganha 1% de acréscimo no salário, exiba a quantidade de quadriênios que ele possui e seu salário atual.

// const prompt = require("prompt-sync")()
// let salario = +prompt("Qual seu salário?")
// let anosTrabalho = +prompt("Quantos anos trabalha nessa empresa?")

// if(anosTrabalho<4){
//     console.log (`Você ainda não completou um quadriênio, só com 4 anos de trabalho.`)
// } else{
//     let quadrineos = Math.floor(anosTrabalho/4)
//     let salarioaAcr = salario+(salario*(quadrineos/100))
//     console.log(`Você possui ${quadrineos} Quadriênio e seu salário atual é de ${salarioaAcr.toFixed(2)}`)
// }

//Exercíico 02 - Elaborar um programa para uma veterinária que leia o peso de uma ração(Kg), quanto um gato consome por dia da ração, em gramas, exiba quantos dias irá durar a ração e quanto sobrará, se sobrar.

// const prompt = require("prompt-sync")()
// let kgRacao = +prompt(`Informe o quilo da ração: `)
// let consuCat = +prompt(`Informe a quantidade que o gato consome em (g): `)

// let dias = Math.floor((kgRacao*1000)/consuCat)
// let sobra = (kgRacao*1000)%(consuCat)
// if(sobra!==0){
//     console.log(`A ração durará em torno de ${dias} dias, e sobrará ${sobra.toFixed(2)} gramas.`)
// } else{
//     console.log(`A ração durará em torno de ${dias} dias, e não sobrará ração.`)
// }
