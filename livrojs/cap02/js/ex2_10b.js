const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e)=> {
    const valor = frm.inValor.value
    const tempo = frm.inTempo.value

    const minutos = Math.ceil(tempo / 15)
    const uso = minutos * valor

    resp.innerText = `Valor a Pagar R$: ${uso}`

    e.preventDefault() // evita envio do form
})
