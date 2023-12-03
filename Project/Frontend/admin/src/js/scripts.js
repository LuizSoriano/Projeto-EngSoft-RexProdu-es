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
const  duracaoEvento = document.querySelector("#tempo-duracao");
const  palcoEvento = document.querySelector("#nome-palco");
const  ingressoEvento = document.querySelector("#nome-ingresso");
const  tipoIngressoEvento = document.querySelector("#tipo-ingresso");
const  valorIngressoEvento = document.querySelector("#valor");
const  tipoEvento = document.querySelector("#tiposEv");
const descricaoEvento = document.querySelector("#descricao");
const inicioEvento = document.querySelector("#tempo-inicio");

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



/*


----------------- CONEXAO COM A API -----------------

*/

const url = "http://localhost:3000/evento";

async function getAllEventos(){
  const response = await fetch(url);

  const data = await response.json();

  console.log(data);

  data.map((evento) =>{
    const ev = document.createElement("div");
    ev.classList.add("evento");

    const eventoNome = document.createElement("h4");
    eventoNome.innerText = evento.nome;
    ev.appendChild(eventoNome)
    
    const eventoLocal = document.createElement("h4");
    eventoLocal.innerText = evento.local;
    ev.appendChild(eventoLocal)

    const eventoData = document.createElement("h4");
    eventoData.innerText = evento.data;
    ev.appendChild(eventoData)

    const eventoPublico= document.createElement("h4");
    eventoPublico.innerText = "0";
    ev.appendChild(eventoPublico) 

    const eventoArrec= document.createElement("h4");
    eventoArrec.innerText = "0K";
    ev.appendChild(eventoArrec)

    const editButton= document.createElement("button");
    editButton.innerHTML = '<i class="material-symbols-outlined editar">edit_square</i>';
    ev.appendChild(editButton)

    const excludeButton= document.createElement("button");
    excludeButton.innerHTML = '<i class="material-symbols-outlined deletar">delete</i>';
    ev.appendChild(excludeButton)

    mostraEvento.appendChild(ev);

  });

}
getAllEventos();

//POST Eventos
async function postEvento(event){
  const response = await fetch(`${url}`,{
    method: "POST",
    body: event,
    headers:{
      "Content-type": "application/json",
    },
  });

  const data = await response.json();
}


//PEGA DOS DADOS COLOCADOS NOS INPUTS E CRIA UMA LISTA PARA ENVIAR OS DADOS PARA O BACK, DEPOIS CHAMA A FUNCAO QUE CRIARÁ O ELEMENTO NA TELA
formEvento.addEventListener("submit", (e) =>{
  e.preventDefault();

  console.log("Enviou from");

  let event = {

    nome:nomeEvento.value,
    local:localEvento.value,
    data:dataEvento.value,
    descricao:descricaoEvento.value,
    tipoevento:tipoEvento.value,
    duracao: duracaoEvento.value,
    arte:"https://img.r7.com/images/bruno-e-marrone-22092021182309071?dimensions=677x677",
    hora: inicioEvento.value,
    atracao: nomeArtistaEvento.value,
    palco: palcoEvento.value,
    titulo: ingressoEvento.value,
    tipo: tipoIngressoEvento.value,
    valor:valorIngressoEvento.value
    
  }
  
  event = JSON.stringify(event)

  console.log(event);

  postEvento(event);

});