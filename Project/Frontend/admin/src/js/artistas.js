//NAVEGACAO PARA A TELA DE EVENTOS
function paraEventos(){
    window.location.href="../index.html";
}

//Captura evento de click em botao editar ou excluir
document.addEventListener("click", (e) => {
  console.log("clique detectado", e.target);
  const targetEl = e.target;
  const parentEventEl = targetEl.closest(".artista");

  if (targetEl.classList.contains("deletar") && parentEventEl) {
      var idElemento = e.target.id;
      var hrefElemento = e.target.getAttribute('href');

      deleteArtista(idElemento, hrefElemento);


      console.log("CNPJ elemento clicado: ", idElemento);
      console.log("NOME elemento clicado: ", hrefElemento);
      console.log("Identificou o botão excluir");

  }
  if(targetEl.classList.contains("editar") && parentEventEl){
    var idElemento = e.target.id;
    console.log("CNPJ elemento clicado: ", idElemento);
    console.log("Identificou o botão editar");
  }

});




// ------ FORM Artista

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


//Manipula os inputs do formulario de adicionar artista
const  formArtista= document.querySelector("#from-add-artista");
const  nomeArtista = document.querySelector("#nome-artista");
const  empresaArtista = document.querySelector("#nome-empresa-artista");
const  cnpjArtista = document.querySelector("#cnpj-artista");
const  telefoneArtista = document.querySelector("#telefone-artista");
const  emailArtista = document.querySelector("#email-artista");

//manipula a tag div do artista formatado
const  mostraArtista = document.querySelector("#artista-formatado");

/*

 ############------------------ CONEXOES COM A API -------------------############

*/



const url = "http://localhost:3000/artista";



//DELETE Artista
async function deleteArtista(cnpj, nome) {

  const response = await fetch(`${url}/${cnpj}/${nome.toString()}`, {
    method: "DELETE",
  });

  const data = await response.json();

  console.log(data);
}


//POST Artista
async function postArtista(artist){

  const response = await fetch(`${url}`, {
    method: "POST",
    body: artist,
    headers:{
      "Content-type": "application/json",
    },
  });

  const data = await response.json();

  console.log(data)

}


//Pega os dados do formulario e manda para a funcao que faz o POST
formArtista.addEventListener("submit", (e) =>{
  e.preventDefault();

  let artist = {

    cnpj: cnpjArtista.value,
    nome: nomeArtista.value,
    empresa: empresaArtista.value,
    telefone: telefoneArtista.value,
    email: emailArtista.value,
    contrato: "https://ufla.br/"

  }

  artist = JSON.stringify(artist)

  console.log(artist);

  postArtista(artist);

});

//faz o GET das informações do artista
async function getAllArtistas(){
  const response = await fetch(url);

  const data = await response.json();

  console.log(data);

  data.map((artista) => {
    const art = document.createElement("div");
    art.classList.add("artista");

    const artistaNome = document.createElement("h4");
    artistaNome.innerText = artista.nome;
    art.appendChild(artistaNome)

    const artistaCnpj = document.createElement("h4");
    artistaCnpj.innerText = artista.cnpj;
    art.appendChild(artistaCnpj)

    const artistaShows= document.createElement("h4");
    artistaShows.innerText = "0";
    art.appendChild(artistaShows)

    const artistaEmpresa = document.createElement("h4");
    artistaEmpresa.innerText = artista.empresa;
    art.appendChild(artistaEmpresa)

    const artistaTelefone = document.createElement("h4");
    artistaTelefone.innerText = artista.telefone;
    art.appendChild(artistaTelefone)

    const artistaEmail = document.createElement("h4");
    artistaEmail.innerText = artista.email;
    art.appendChild(artistaEmail)

    const editButton= document.createElement("button");
    editButton.innerHTML =  '<span>editar</span>';
    editButton.setAttribute("id", `${artista.cnpj}`);
    editButton.classList.add("editar");
    art.appendChild(editButton)

    const excludeButton= document.createElement("button");
    excludeButton.innerHTML =  '<span>excluir</span>';
    excludeButton.setAttribute("id", `${artista.cnpj}`);
    excludeButton.setAttribute("href", `${artista.nome}`);
    excludeButton.classList.add("deletar");
    art.appendChild(excludeButton)

    mostraArtista.appendChild(art);

  });

}

getAllArtistas();