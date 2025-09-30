const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const mensagem = frm.inMensagem.value

    let cripto = ""
    const tam = mensagem.length

    for (let i = 1; i < tam; i = i + 2) {
    cripto += mensagem.charAt(i)
  }

    for (let i = 0; i < tam; i = i + 2) {
    cripto += mensagem.charAt(i)
  }

    resp.innerText = cripto

})

frm.btDescripto.addEventListener("click", () => {

    const mensagem = frm.inMensagem.value

    //metade da palavra
    let temp = mensagem.substr(0, mensagem.length/2)
    //array para gravar a msg descriptografada
    const msg = []
    // variavel para somar os pares
    let aux = 1
    // loop para percorrer somente os pares 
    for(let i = 0; i < temp.length; i++){
        //colocar na posição pares
        msg[aux] = temp.charAt(i)
        // incremento do próximo número par
        aux += 2
    }

    // a segunda metade da palavra
    temp = mensagem.substr(mensagem.length/2)
    // variavel auxiliar para somar os impares
    aux = 0
    // loop para percorrer somente os impares
    for(let i = 0; i < temp.length; i++){
        //colocar na posição impar
        msg[aux] = temp.charAt(i)
        // incremento do próximo número impar
        aux += 2
        }

    resp.innerText = msg.join("")

})
// compre parcelado
// opepreaocmr acld
// ope     cmr
//    preao    acld