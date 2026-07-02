//Exemplo 0.1
// let ouvinte = document.querySelector(".ouvinte")
// let resSitu = document.querySelector(".resSitu")

// ouvinte.addEventListener("click", (e) => {
//     e.preventDefault()
//     let nomeAluno = document.querySelector(".inNome").value
//     let nota1 = +document.querySelector(".n1").value
//     let nota2 = +document.querySelector(".n2").value

//     let media = (nota1+nota2)/2

//         if(media>=7){
//             resSitu.innerHTML = `${nomeAluno} foi Aprovado!`
//             resSitu.style.color = "green"
//         } else{
//             document.querySelector(".resSitu").innerHTML = `${nomeAluno} foi reprovado...`
//             resSitu.style.color = "red"
//         }

//     document.querySelector(".resMedia").innerHTML = `A média é de ${media.toFixed(2)}`
// })

//Exemplo 0.2
// let ouvinte = document.querySelector(".ouvinte")
// let pesoIdeal = 0
//  ouvinte.addEventListener("click", (e) => {
//     e.preventDefault()
//     let inNome = document.querySelector(".nome").value
//     let inAltura =+document.querySelector(".altura").value
//     let fem = document.querySelector(".inFem")


//     if(fem){
//         pesoIdeal = 21*(inAltura*inAltura)
//         document.querySelector(".res").innerHTML = `${inNome} seu peso ideal é: ${pesoIdeal.toFixed(2)}Kg!`
//     } else{
//         22*(inAltura*inAltura)
//         document.querySelector(".res").innerHTML = `${inNome} seu peso ideal é: ${pesoIdeal.toFixed(2)}Kg!`
//     }
//  })


//Exemplo 0.3
// let ouvinte = document.querySelector(".ouvinte")
//     ouvinte.addEventListener("click", (e) => {
//         e.preventDefault()
//         let bairro = document.querySelector(".bairro").value
//         let taxa = 0

//         switch (bairro){
//             case "Centro":
//                 taxa = 5.00
//                 break
//             case "Cambuí":
//                 taxa = 25.00
//                 break
//             case "Laranjal":
//                 taxa = 2.00
//                 break
//                 default:
//                     taxa = 15.00
//         }
//         document.querySelector(".res").innerHTML=`A taxa é de ${taxa.toFixed(2)}`
//     })

//Exemplo 0.3
// let ouvinte = document.querySelector(".ouvinte")
// ouvinte.addEventListener("click", (e) => {
//    e.preventDefault(e)
//    let res = document.querySelector(".res")

//    let horaCli = +document.querySelector(".inHora").value
//    let horaFuso = horaCli + 5.00
//    if (horaFuso > 24.00) {
//       horaFuso = horaFuso-24.00
//       res.innerHTML = `Horario na França: ${horaFuso.toFixed(2)}`
//    } else {
//       res.innerHTML = `Horario na França: ${horaFuso.toFixed(2)}`
//    }

// })

//Exemplo 0.4
// let ouvinte = document.querySelector(".ouvinte")
// ouvinte.addEventListener("click", () => {
//    let res = document.querySelector(".res")
//    let raiz = 0
//    let encontrou = false
//    let inNum = +document.querySelector(".inNum").value
//    for (let ant=0; ant<inNum; ant++){
//       if(ant*ant==inNum){
//          raiz = ant
//          encontrou = true
//          break
//    }
//    }

//    if(encontrou){
//        res.innerHTML = `A raiz quadrada de ${inNum} é ${raiz}`
//    } else{
//       res.innerHTML = `Não existe raiz exata para ${inNum}`
//    }
// })

//Exemplo 05
// let ouvinte = document.querySelector(".ouvinte")
// ouvinte.addEventListener("click", () => {
//    let res10 = document.querySelector(".res10")
//    let res50 = document.querySelector(".res50")
//    let res100 = document.querySelector(".res100")
//    let erro = document.querySelector(".inErro")

//    let nota100 = 0
//    let nota50 = 0
//    let nota10 = 0

//    let valor = +document.querySelector(".valorSaque").value

//    if(valor%10==0){
//       nota100 = Math.floor(valor/100)
//       nota50 = Math.floor((valor%100)/50)
//       nota10 = Math.floor((valor%50)/10)

//    res100.innerHTML = `Notas de R$ 100: ${nota100}`
//    res50.innerHTML = `Notas de R$ 50: ${nota50}`
//    res10.innerHTML = `Notas de R$ 10: ${nota10}`

//    } else {
//       erro.innerHTML = `Seu valor não é válido para saque.`
//    }

// })

//Exemplo 06 (NODE) - Elabore um programa de Pescaria, onde a entrada é R$ 20,00 por pessoa dom direito a levar 1 peixe, caso queira levar mais peixes pagará o adicional de R$ 12,00, informe o valor total a pagar.

// const prompt = require("prompt-sync")()

// let numPessoas = +prompt("Digite o número de pessoas que iram entrar: ")
// let peixes = +prompt("Quantos peixes desejam levar?: ")
// let valorEntrada = numPessoas * 20
// let valorPeixes = 0

// if (peixes > numPessoas) {
//    valorPeixes = (peixes - numPessoas) * 12
// }

// console.log(`Valor das entradas: R$ ${valorEntrada.toFixed(2)}, valor dos peixes: R$ ${valorPeixes.toFixed(2)} `)
// console.log(`Valor total R$ ${(valorEntrada + valorPeixes).toFixed(2)}`)


//Exemplo 07 (NODE) - Elabore um programa que leia o total da conta de um cliente em uma Farmácia, e exiba quantas vezes ele poderá parcelar, condições: a) Cada parcela deve ser no min 20,00, b) Nº máximo de parcelas permitidas são 6
//  const prompt = require("prompt-sync")()

//  let valorConta = +prompt("Digite o valor de sua conta R$: ")
//  let quantParcelas = Math.floor(valorConta/20)
//  let resto = 0

//  if(quantParcelas>=6){
//    resto = valorConta%20
//    console.log(`Poderá parcelar em 6 vezes de R$ 20,00 e faltará R$ ${resto.toFixed(2)}`)
//  } else {
//    console.log(`Poderá parcelar em ${quantParcelas} vezes de R$ 20,00`)
//  }

//Exemplo 08 (NODE) - Elaborar um programa, que peça um número que deve ser centena, e exiba este invertido.

// const prompt = require("prompt-sync")()

// let num = +prompt("Digite uma centena: ")

// if(num<100 || num>999){
//    console.log(`Deve ser digitado em centena!`)
// } else{
//    let n1= Math.floor(num/100)
//    let n2 = Math.floor((num%100)/10)
//    let n3 = Math.floor((num%10))

//    console.log(`${n3}${n2}${n1}`)
// }

//--------------------------------------------------------------EXERCÍCIO 01----------------------------------------------------------------------
//Elaborar um programa que dita se um número é Par ou Ímpar.

// let ouvinte = document.querySelector(".ouvinte")
//    ouvinte.addEventListener("click", () => {
//       let res = document.querySelector(".res")

//       let num = +document.querySelector(".inNum").value

//       if(num%2==0){
//          res.innerHTML =`${num} é Par!`
//       } else{
//          res.innerHTML=`${num} é Impar!`
//       }
//    })

//EXERCÍCIO 02 

//let ouvinte = document.querySelector(".ouvinte")
// let res = document.querySelector(".res")
//     ouvinte.addEventListener("click", () => {

//         let velPermit = document.querySelector(".velPermit").value
//         let velCond = document.querySelector(".velCond").value

//         if(velCond <= velPermit ){
//             res.innerHTML = `Sem Multa!`
//         } else if (velCond >= velPermit && velCond <=(velPermit*0.2+velPermit)){
//             res.innerHTML = `Multa Leve!`
//         } else if(velCond > (velPermit*0.2+velPermit)){
//             res.innerHTML = `Multa Grave!!!`
//         } else{
//             res.innerHTML = `Digite um valor Válido`
//         }

//     })

//EXERCÍCIO 04

// let ouvinte = document.querySelector(".ouvinte")
// let res = document.querySelector(".res")

//     ouvinte.addEventListener("click", () => {

//         let ladoA = +document.querySelector(".ladoA").value
//         let ladoB = +document.querySelector(".ladoB").value
//         let ladoC = +document.querySelector(".ladoC").value

//         if(ladoA==ladoB && ladoB==ladoC){
//             res.innerHTML = `Triângulo Equilátero.`
//         }
//          else if(ladoA!==ladoB && ladoB!==ladoC && ladoA!==ladoC){
//             res.innerHTML = `Triângulo Escaleno.`
//         }
//          else {
//             res.innerHTML = `Triângulo Isóceles.`
//          }})
//          console.log("teste")




  




