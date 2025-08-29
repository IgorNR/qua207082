const frm = document.querySelector("form")
const resp1 = document.querySelector("h3")
const resp2 = document.querySelector("h3")

frm.addEventListener("submit",(e)=> {
    const medicamento = frm.inMedicamento.value
    const preco = Number (frm.inPreco.value)

    const promocao = Math.floor(preco * 2)

    resp1.innerText = `Promoção de ${medicamento}`
    resp2.innerText = `Leve 2 por apenas R$: ${promocao}`

    e.preventDefault() // evita envio do form
})