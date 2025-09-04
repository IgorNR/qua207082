const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const velCondutor = Number(frm.inVelCondutor.value)
    const velPermitida = Number(frm.inVelPermitida.value)

    const multaLeve = (velPermitida * 0.20) + velPermitida

    if (velCondutor >= multaLeve) {
        resp.innerText = `Multa Grave`

    } else if (velCondutor <= velPermitida) {
        resp.innerText = `Sem multa `

    } else {
        resp.innerText = `Multa Leve`
    }

})


