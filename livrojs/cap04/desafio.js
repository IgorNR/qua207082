const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")
const resp3 = document.querySelector("#outResp3")
const secreto = Math.round(Math.random()*100)

let tentativas = 0

resp3.innerText = `${secreto}`

frm.addEventListener("submit", (e)=>{
    e.preventDefault();

    const numero = Number(frm.inNumero.value)
    tentativas = tentativas + 1

   
       
        if(secreto > numero){
            resp2.innerText = `O número secreto é maior`
        } else if(secreto < numero){
            resp2.innerText = `O número secreto é menor`
        } else {
            resp2.innerText = `Parabéns, você acertou com ${tentativas} tentativas`
        }


    


    })