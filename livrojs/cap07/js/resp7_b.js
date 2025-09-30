/*b) Uma palavra ou frase é um palíndromo quando pode ser lida nos dois
sentidos, como RADAR, MUSSUM, ABBA. Elaborar um programa que leia
uma frase e informe se ela é ou não um palíndromo (converter a frase para
caixa alta). A Figura 7.10 apresenta uma frase que é um palíndromo.
*/

const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    let frase = frm.inFrase.value.toUpperCase()
    resp.innerText = frase
    frase = frase.replace(/ /g,"")

    let palindromo = ""

    for(let i = frase.length-1; i >= 0; i = i-1){
        palindromo += frase[i]
    }
    if(palindromo == frase){
        resp.innerText += " é um palíndromo"
    } else {
        resp.innerText += " não é um palíndromo"
    }
})