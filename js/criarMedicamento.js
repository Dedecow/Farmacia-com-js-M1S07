function criarMedicamento(titulo, imagemSrc, descricao, valor) {
  var cardElement = document.createElement("div");
  cardElement.classList.add("card", "mb-4");

  var imagemElement = criarImagem(imagemSrc, titulo);

  var cardBodyElement = criarCardBody(titulo, descricao, valor);

  cardElement.appendChild(imagemElement);
  cardElement.appendChild(cardBodyElement);

  var containerElement = document.querySelector(".container.mb-4 .row");

  var elementoWidth = calcularLarguraElemento(containerElement);

  cardElement.style.width = elementoWidth + "px";

  containerElement.appendChild(cardElement);
}

function criarImagem(imagemSrc, titulo) {
  var imagemElement = document.createElement("img");
  imagemElement.src = imagemSrc;
  imagemElement.alt = titulo;
  imagemElement.classList.add("card-img");
  return imagemElement;
}

function criarCardBody(titulo, descricao, valor) {
  var cardBodyElement = document.createElement("div");
  cardBodyElement.classList.add("card-body");

  var tituloElement = document.createElement("h5");
  tituloElement.classList.add("card-title");
  tituloElement.textContent = titulo;

  var descricaoElement = document.createElement("p");
  descricaoElement.classList.add("card-text");
  descricaoElement.textContent = descricao;

  var valorElement = document.createElement("p");
  valorElement.classList.add("card-text");
  valorElement.textContent = "R$ " + valor.toFixed(2);

  var botaoElement = document.createElement("a");
  botaoElement.classList.add("btn", "btn-primary", "btn-success");
  botaoElement.href = "#";
  botaoElement.textContent = "Adicionar ao Carrinho";

  cardBodyElement.appendChild(tituloElement);
  cardBodyElement.appendChild(descricaoElement);
  cardBodyElement.appendChild(valorElement);
  cardBodyElement.appendChild(botaoElement);

  return cardBodyElement;
}

function calcularLarguraElemento(containerElement) {
  var containerWidth = containerElement.offsetWidth;
  return Math.floor(containerWidth / 3); // Ajuste aqui para 1/3 da largura
}

criarMedicamento(
  "Loção Pós Barba",
  "img/imagem-de-remedio.jpeg",
  "Uma loção refrescante para acalmar a pele após barbear",
  29.90
);
criarMedicamento(
  "Loção Pós Barba",
  "img/imagem-de-remedio.jpeg",
  "Uma loção refrescante para acalmar a pele após barbear",
  29.90
);
criarMedicamento(
  "Loção Pós Barba",
  "img/imagem-de-remedio.jpeg",
  "Uma loção refrescante para acalmar a pele após barbear",
  29.90
);
criarMedicamento(
  "Loção Pós Barba",
  "img/imagem-de-remedio.jpeg",
  "Uma loção refrescante para acalmar a pele após barbear",
  29.90
);
