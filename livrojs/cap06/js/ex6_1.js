const frm = document.querySelector("form")
const respNome = document.querySelector("span")
const respLista = document.querySelector("pre")

// Array para armazenar os nomes dos pacientes
const pacientes = []

// Evento de submit do formulário
frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const nome = frm.inPaciente.value
    
    pacientes.push(nome)

    let lista = ""

    //for "Tradicional" (inicia em 0, enquanto menor que tamanho do vetor)
    for(let i = 0; i < pacientes.length; i++){
        lista += `${i+1}. ${pacientes[i]} \n`
    }    

    respLista.innerText = lista // exibe a lsita de pacientes na página    
    frm.inPaciente.value = "" // Limpa o conteúdo do campo do form
    frm.inPaciente.focus()
});

frm.btUrgencia.addEventListener("click", ()=>{
    // verifica se as validações do form estão ok
    // no caso, paciente is required
    if(!frm.checkValidity()){
        alert("Informe o nome do paciente a ser atendido com urgência")
        frm.inPaciente.focus()
        return
    }

    const nome = frm.inPaciente.value
    pacientes.unshift(nome) // adiciona paciente no início do vetor

    let lista = ""

    //forEach aplicado sobre o array    
    pacientes.forEach((paciente,i)=>(lista += `${i+1}. ${paciente} \n`))

    respLista.innerText = lista
    frm.inPaciente.value = ""
    frm.inPaciente.focus()
})

frm.btAtender.addEventListener("click", ()=>{
    // se o tamanho do vetor = 0
    if(pacientes.length == 0){
        alert("Não há pacientes na lista de espera")
        frm.inPaciente.focus()
        return
    }
    const atender = pacientes.shift()  //remove do início da fila (e obtém o nome)
    respNome.innerText = atender // exibir o nome do paciente em atendimento

    let lista = ""

    pacientes.forEach((paciente,i)=>(lista += `${i+1}. ${paciente} \n`))

    respLista.innerText = lista
})