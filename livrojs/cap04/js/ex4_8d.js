const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")

frm.addEventListener("submit", (e)=>{
    e.preventDefault();
    limparresp()

    const a = Number(frm.inLadoA.value)
    const b = Number(frm.inLadoB.value)
    const c = Number(frm.inLadoC.value)


    if (a < b + c && b < a + c && c < a + b) {
        resp1.innerText = `Lados podem formar um triângulo`
        if (a === b && b === c) {            
            resp2.innerText = `Tipo: Equilátero`
        } else if (a === b || b === c || a === c) {
            
            resp2.innerText = `Tipo: Isósceles`
        } else {
            
            resp2.innerText = `Tipo: Escaleno`
        }
    } else {
        resp1.innerText = `Não podem formar um triângulo`
    }




    })

function limparresp(){
    resp1.innerText = ""
    resp2.innerText = ""    
}