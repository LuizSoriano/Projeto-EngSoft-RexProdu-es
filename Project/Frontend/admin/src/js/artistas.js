//NAVEGACAO PARA A TELA DE EVENTOS
function paraEventos(){
    window.location.href="../index.html";
}

//FORM Artista

//MOSTRA E FECHA FORMULARIO ADD Artista
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
    const form = document.querySelector('#from-add-artista');
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


//Manipula os inputs do formulario
const  formArtista= document.querySelector("#from-add-artista");
const  mostraArtista = document.querySelector("#artista-formatado");
const  nomeArtista = document.querySelector("#nome-artista");
const  empresaArtista = document.querySelector("#nome-empresa-artista");
const  cnpjArtista = document.querySelector("#cnpj-artista");
const  telefoneArtista = document.querySelector("#telefone-artista");
const  emailArtista = document.querySelector("#email-artista");

//Pega os dados do formulario de envia 
formArtista.addEventListener("submit", (e) =>{
  e.preventDefault();

  console.log("Enviou from");

  const inputNome = nomeArtista.value
  const inputEmpresa = empresaArtista.value
  const inputCnpj = cnpjArtista.value
  const inputTelefone = telefoneArtista.value
  const inputEmail = emailArtista.value

  let elements = [];

  elements.push(inputNome);
  elements.push(inputCnpj);
  elements.push(inputEmpresa);
  elements.push(inputTelefone);
  elements.push(inputEmail);

  salvarForm(elements);

});

//salva 
const salvarForm = (arr) => {

  /* Isso sera feito com GET, logo depois de enviar os dados salvos pro back  */

  const artista = document.createElement("div");
  artista.classList.add("artista");

  const artistaNome = document.createElement("h4");
  artistaNome.innerText = arr[0];
  artista.appendChild(artistaNome)

  const artistaCnpj= document.createElement("h4");
  artistaCnpj.innerText = arr[1];
  artista.appendChild(artistaCnpj)

  const artistaShows= document.createElement("h4");
  artistaShows.innerText = "0";
  artista.appendChild(artistaShows)

  const artistaEmpresa = document.createElement("h4");
  artistaEmpresa.innerText = arr[2];
  artista.appendChild(artistaEmpresa)

  const artistaTelefone= document.createElement("h4");
  artistaTelefone.innerText = arr[3];
  artista.appendChild(artistaTelefone) 

  const artistaEmail= document.createElement("h4");
  artistaEmail.innerText = arr[4];
  artista.appendChild(artistaEmail)

  const editButton= document.createElement("button");
  editButton.innerHTML = '<i class="material-symbols-outlined editar">edit_square</i>';
  artista.appendChild(editButton)

  const excludeButton= document.createElement("button");
  excludeButton.innerHTML = '<i class="material-symbols-outlined deletar">delete</i>';
  artista.appendChild(excludeButton)

  mostraArtista.appendChild(artista);

  console.log(artista);
}


//Gerencia eventos de clique
document.addEventListener("click", (e) => {
  console.log("clique detectado", e.target);
  const targetEl = e.target;
  const parentEventEl = targetEl.closest(".artista");

  if (targetEl.classList.contains("deletar") && parentEventEl) {
      parentEventEl.remove();
      console.log("Identificou o botão excluir");

  }
  if(targetEl.classList.contains("editar") && parentEventEl){

  }

});