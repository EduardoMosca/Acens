//Contadores para criar id dos elementos criados
var conte = 0;
var conta = 0;
var contc = 0;
var num;

//Apaga o item
function apagar(event) {
  event.target.parentElement.parentElement.remove();
}

//Função que desabilita o botão enquanto se está editando um item (evita um bug kkkk)
const handler = (event) => {
  try {
    const text = event.target.textContent;
    const butao = document.querySelector("#butao");
    if (text === "Editar") {
      butao.disabled = true;
      return editar(event);
    } else {
      butao.disabled = false;
      return editor(event);
    }
  } catch (err) {
    console.log(err);
  }
};

function editor(event) {
  let valor = document.querySelector(`#${event.target.id}`).parentElement
    .parentElement;
  let id = valor.childNodes;
  let v1 = id[0].childNodes[0].value;
  let v2 = id[1].childNodes[0].value;
  let v3 = id[2].childNodes[0].value;
  id[0].innerHTML = v1;
  id[1].innerHTML = v2;
  id[2].innerHTML = v3;
  event.target.textContent = "Editar";
}

//Função que edita o item
function editar(event) {
  let entrada1 = document.createElement("INPUT");
  let entrada2 = document.createElement("INPUT");
  let entrada3 = document.createElement("INPUT");
  let valor = document.querySelector(`#${event.target.id}`).parentElement
    .parentElement;
  let id = valor.childNodes;
  entrada1.value = id[0].textContent;
  entrada2.value = id[1].textContent;
  entrada3.value = id[2].textContent;

  if (event.target.textContent === "Concluído") {
    // event.target.onclick = editor(event);
  } else {
    id[0].textContent = "";
    id[1].textContent = "";
    id[2].textContent = "";
    id[0].appendChild(entrada1);
    id[1].appendChild(entrada2);
    id[2].appendChild(entrada3);
    event.target.textContent = "Concluído";
  }
}

//Função que insere o item
function inserir() {
  //Verifica se o item a ser criado está vazio
  if (
    document.getElementById("projeto").value === "" ||
    document.getElementById("valor").value === ""
  ) {
    return;
  }

  //Adiciona os novos elementos e procura os novos elementos
  const x = document.getElementById("tabela");
  const y = document.querySelectorAll("input");
  const tr = document.createElement("TR");
  const texto = [];
  const addtr = x.appendChild(tr);
  const bt1 = document.createElement("button");
  const bt2 = document.createElement("button");

  for (let i = 0; i < y.length - 1; i++) {
    texto.push(y[i]);
  }

  for (let i = 0; i < 3; i++) {
    let muda = (addtr.appendChild(document.createElement("TD")).innerHTML =
      texto[i].value);
  }

  //Adiciona um id para os itens criados(para editálos depois com css)
  tr.id = `tr${contc}`;

  bt1.innerHTML = "Editar";
  bt1.id = `edit${conte}`;
  bt1.onclick = handler;

  bt2.innerHTML = "Apagar";
  bt2.id = `apag${conta}`;
  bt2.onclick = apagar;

  //Adiciona os itens a td gerada
  addtr.appendChild(document.createElement("TD")).appendChild(bt1);
  addtr.appendChild(document.createElement("TD")).appendChild(bt2);

  document.getElementById(`edit${conte}`).style.width = "100%";
  document.getElementById(`edit${conte}`).style.height = "100%";

  document.getElementById(`apag${conta}`).style.width = "100%";
  document.getElementById(`apag${conta}`).style.height = "100%";

  //Incrementa os contadores, pois cada item gerado possui seu próprio ID
  conte++;
  conta++;
  contc++;

  for (let i = 0; i < texto.length; i++) {
    texto[i].value = " ";
  }
}
