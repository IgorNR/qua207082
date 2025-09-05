const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")


frm.addEventListener("submit", (e)=>{
    e.preventDefault();
    limparresp()

    const valor = Number(frm.inValor.value)
    const trinta = valor - 1
    const sessenta =  valor - 1.75
    const centovinte = valor -3

    if(valor <= 0.99) {
        resp1.innerText = `Valor Insuficiente`        
    }
    else if(valor <= 1.74) {
        resp1.innerText = `Tempo: 30 min`
        resp2.innerText = `Troco R$: ${trinta.toFixed(2)}`
    }
    else if(valor <= 2.99) {
        resp1.innerText = `Tempo: 60 min`
        resp2.innerText = `Troco R$: ${sessenta.toFixed(2)}`
    }  
    else {
        resp1.innerText = `Tempo: 120 min`
        resp2.innerText = `Troco R$: ${centovinte.toFixed(2)}`
    } 
})

function limparresp(){
    resp1.innerText = ""
    resp2.innerText = ""    
}