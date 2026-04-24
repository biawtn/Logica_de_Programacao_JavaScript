// // Exemplo 01.
// let ouvinte = document.querySelector(".ouvinte")
// let resName = document.querySelector(".resName")
// let resDurac = document.querySelector(".resDurac")

// ouvinte.addEventListener("click", (e) => {
//     e.preventDefault()
//     let inName = document.querySelector(".inName").value
//     let inDurac = +document.querySelector(".inDurac").value

//     let horas = Math.floor(inDurac/60)
//     let min = inDurac%60

//     resName.innerHTML =`${inName}`
//     resDurac.innerHTML = `${horas}(s) e ${min} minuto(s)`

// })

//Exemplo 02
// let ouvinte = document.querySelector(".ouvinte")
// let resVeiculo = document.querySelector(".resVeiculo")
// let resEntrada = document.querySelector(".resEntrada")
// let res12x = document.querySelector(".res12x")

// ouvinte.addEventListener("click", (e) =>{
//     e.preventDefault()
//  let inVeiculo = document.querySelector(".inVeiculo").value
//  let inPreco = +document.querySelector(".inPreco").value

//  let entrada = inPreco*(50/100)
//  let dozex = inPreco/12

//  resVeiculo.innerHTML = `Veículo: ${inVeiculo}`
//  resEntrada.innerHTML = `Entrada de R$:${entrada.toFixed(2)}`
//  res12x.innerHTML = `+12x de R$:${dozex.toFixed(2)}`
// })

//Exemplo 03
// let ouvinte = document.querySelector(".ouvinte")
// let resConta = document.querySelector(".resConta")

// ouvinte.addEventListener("click", (e) => {
//     e.preventDefault()
//     let inBuffet = +document.querySelector(".inBuffet").value
//     let inConsuGr = +document.querySelector(".inConsuGr").value

//     let valorPagar = (inConsuGr/1000)*inBuffet

//     resConta.innerHTML = ` Valor a pagar R$: ${valorPagar.toFixed(2)}`
// })

//---------------------------------------------------------------------------------

//Exercício 1
// let ouvinte = document.querySelector(".ouvinte")
// let resPromo = document.querySelector(".resPromo")

// ouvinte.addEventListener("click", (e) => {
//     e.preventDefault()
//     let inMed = document.querySelector(".inMed").value
//     let inPre = +document.querySelector(".inPre").value

//     let vDesc = Math.floor(inPre)
//     let valorTotal = vDesc*2

//     resPromo.innerHTML = `Leve 2 ${inMed} por apenas R$:${valorTotal.toFixed(2)}`
// })


//Exercício 2
// let ouvinte = document.querySelector(".ouvinte")
// let resConta = document.querySelector(".resConta")

// ouvinte.addEventListener("click", (e) => {
//     e.preventDefault()
//     let inValor = +document.querySelector(".inValor").value
//     let inConsu = +document.querySelector(".inConsu").value

//     let vPagar = (inConsu*inValor)/15

//     resConta.innerHTML = `Valor a Pagar R$: ${vPagar.toFixed(2)}`
// })

//Exercício 3
// let ouvinte = document.querySelector(".ouvinte")
// let resTotal = document.querySelector(".resTotal")
// let res3Uni = document.querySelector(".res3Uni")

// ouvinte.addEventListener("click", (e) => {
//     e.preventDefault()
//     let inPro = document.querySelector(".inPro").value
//     let inPre = +document.querySelector(".inPre").value

//     let metade = inPre*(50/100)
//     let valorTotal = (inPre*2)+metade

//     resTotal.innerHTML = `${inPro} - Promoção: Leve 3 por R$: ${valorTotal.toFixed(2)}`
//     res3Uni.innerHTML = `O 3° produto por apenas R$: ${metade.toFixed(2)}`
// })
