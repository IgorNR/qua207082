const frm = document.querySelector('form')
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")

frm.addEventListener("submit", (e)=> {
    const produto = frm.inProduto.value
    const preco = frm.inPreco.value

    const preconormal = preco * 2
    const precopromo = preco / 2
    const precofinal = preconormal + precopromo
    
    resp1.innerText = `${produto} - Promoção: Leve 3 por R$: ${precofinal}`
    resp2.innerText = `O 3º produto custa apenas R$: ${precopromo}`


    e.preventDefault()
})