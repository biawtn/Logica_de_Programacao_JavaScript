let ouvinte = document.querySelector(".ouvinte")
let resName = document.querySelector(".resName")
let resDurac = document.querySelector(".resDurac")

ouvinte.addEventListener("click", (e) => {
    e.preventDefault()
    let inName = document.querySelector(".inName").value
    let inDurac = +document.querySelector(".inDurac").value

    let horas = Math.floor(inDurac/60)
    let min = inDurac%60

    resName.innerHTML =`${inName}`
    resDurac.innerHTML = `${horas}(s) e ${min} minuto(s)`

})