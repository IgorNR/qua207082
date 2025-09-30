/*
c) Suponha que o prazo para o pagamento de uma infração de trânsito com
desconto seja de 90 dias. Elaborar um programa que leia a data de uma
infração e o valor da multa. Informe qual a data limite do pagamento com
desconto (até 90 dias) e o valor a ser pago até essa data (com 20% de
desconto). A Figura 7.11 ilustra o funcionamento do programa.
*/


const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")



frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const dataInfracao = frm.inDataInfracao.value.split("-")
    const valorMulta = Number(frm.inValorMulta.value)
    const dataDesconto = new Date()

    dataDesconto.setFullYear(Number(dataInfracao[0]))
    dataDesconto.setMonth(Number(dataInfracao[1])-1)
    dataDesconto.setDate(Number(dataInfracao[2])+90)
      
    resp1.innerText = "Data Limite para Pagto com Desconto: "
    resp1.innerText += dataDesconto.getDate().toString().padStart(2,"0")+"/"
    resp1.innerText += (dataDesconto.getMonth()+1).toString().padStart(2,"0")+"/"
    resp1.innerText += dataDesconto.getFullYear()
    resp2.innerText = "Valor com Desconto R$: " + (valorMulta*0.8).toFixed(2)
})

 /*
    const vlrDesconto = 20 / 100
    const dataLimite = new Date()
    const datafinal = new Date()

    const parte = data.split("-")
    dataLimite.setDate(Number(parte[2]))
    dataLimite.setMonth(Number(parte[1]) - 1)
    dataLimite.setFullYear(Number(parte[0]))

    datafinal.setDate(+90)

    const dataLimite = new Date(data)
    dataLimite.setDate(dataLimite.getDate()+90)

    const dia = String(dataLimite.getDate(). )


    resp1.innerText = `Data limite para Pagto com Desconto: ${datafinal}`

    const desconto = valor - (valor * vlrDesconto) 

    resp2.innerText = `Valor com Desconto: R$ ${desconto.toFixed(2)}`*/