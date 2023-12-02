// NAVEGACAO PARA A TELA ARTISTAS
function paraArtistas(){
  window.location.href="../src/pages/artistas.html";
}


//MANIPULA OS INPUTS DE UM EVENTO
const mostraEvento = document.querySelector("#evento-formatado");
const  formEvento = document.querySelector("#from-add-evento");
const  nomeEvento = document.querySelector("#nome-evento");
const  localEvento = document.querySelector("#local-evento");
const  dataEvento = document.querySelector("#data-evento");
const  nomeArtistaEvento = document.querySelector("#nome-artista");
const  inicioEvento = document.querySelector("#tempo-inicio");
const  palcoEvento = document.querySelector("#nome-palco");
const  ingressoEvento = document.querySelector("#nome-ingresso");
const  tipoIngressoEvento = document.querySelector("#tipo-ingresso");
const  valorIngressoEvento = document.querySelector("#valor");
const  tipoEvento = document.querySelector("#tiposEv");
const  imgEvento = document.querySelector("#imgEv");

//EDITA E EXCLUI UM EVENTO
document.addEventListener("click", (e) => {
  console.log("clique detectado", e.target);
  const targetEl = e.target;
  const parentEventEl = targetEl.closest(".evento");

  if (targetEl.classList.contains("deletar") && parentEventEl) {
      parentEventEl.remove();
      console.log("Identificou o botão excluir");

  }
  if(targetEl.classList.contains("editar") && parentEventEl){

  }

});


//CRIA UMA NOVA LINHA DE EVENTO APOS SALVAR/SUBMETER O FORMULARIO
const salvarForm = (arr) => {

    /* Isso sera feito com GET, logo depois de enviar os dados salvos pro back  */

    const evento = document.createElement("div");
    evento.classList.add("evento");

    const eventoNome = document.createElement("h4");
    eventoNome.innerText = arr[0];
    evento.appendChild(eventoNome)

    const eventoLocal = document.createElement("h4");
    eventoLocal.innerText = arr[1];
    evento.appendChild(eventoLocal)

    const eventoData = document.createElement("h4");
    eventoData.innerText = arr[2];
    evento.appendChild(eventoData)

    const eventoPublico= document.createElement("h4");
    eventoPublico.innerText = "0";
    evento.appendChild(eventoPublico) 

    const eventoArrec= document.createElement("h4");
    eventoArrec.innerText = "0K";
    evento.appendChild(eventoArrec)

    const editButton= document.createElement("button");
    editButton.innerHTML = '<i class="material-symbols-outlined editar">edit_square</i>';
    evento.appendChild(editButton)

    const excludeButton= document.createElement("button");
    excludeButton.innerHTML = '<i class="material-symbols-outlined deletar">delete</i>';
    evento.appendChild(excludeButton)

    mostraEvento.appendChild(evento);

    console.log(evento);
};


//PEGA DOS DADOS COLOCADOS NOS INPUTS E CRIA UMA LISTA PARA ENVIAR OS DADOS PARA O BACK, DEPOIS CHAMA A FUNCAO QUE CRIARÁ O ELEMENTO NA TELA
formEvento.addEventListener("submit", (e) =>{
    e.preventDefault();

    console.log("Enviou from");

    const inputNome = nomeEvento.value
    const inputLocal = localEvento.value
    const inputData = dataEvento.value
    const inputNomeArt = nomeArtistaEvento.value
    const inputInicio = inicioEvento.value
    const inputPlaco = palcoEvento.value
    const inputIngresso = ingressoEvento.value
    const inputTipoIngresso = tipoIngressoEvento.value
    const inputValor = valorIngressoEvento.value
    const inputTipoEv = tipoEvento.value
    const inputImg = imgEvento.value

    let elements = [];

    elements.push(inputNome);
    elements.push(inputLocal);
    elements.push(inputData);
    elements.push(inputNomeArt);
    elements.push(inputInicio);
    elements.push(inputPlaco);
    elements.push(inputIngresso);
    elements.push(inputTipoIngresso);
    elements.push(inputValor);
    elements.push(inputTipoEv);
    elements.push(inputImg);
    
    salvarForm(elements);

});

//MOSTRA E FECHA FORMULARIO ADD EVENTO
const switchModal = () => {
    const modal = document.querySelector('.modal')
    const actualStyle = modal.style.display
    if(actualStyle == 'block') {
        
        resetFrom();
        modal.style.display = 'none'
    }
    else {
      modal.style.display = 'block'
    }
  }
  
//LIMPA O FORMULARIO
const resetFrom = () => {
    const form = document.querySelector('#from-add-evento');
    form.reset();
}

//ACIONA O BOTAO ADICIONAR EVENTO PARA ABRIR O FORMULARIO
const btn = document.querySelector('.add')
btn.addEventListener('click', switchModal)


//VERIFICA SE O FORMULARIO FOI SELECIONADO, SE SIM, CHAMA A FUNCAO PARA ABRIR/FECHAR FORMULARIO
window.onclose = function(event) {
    const modal = document.querySelector('.modal')
    if (event.target == modal) {
      switchModal();
    }
}
