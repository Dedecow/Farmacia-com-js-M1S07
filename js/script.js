function cabecalho(logoSrc, logoAlt, opcoesMenu) {
    this.logo = {
      src: logoSrc,
      alt: logoAlt
    };
    this.menu = opcoesMenu;
  }
  
  var elementoCabecalho = new cabecalho(
    "img/icone-pharma.jpeg",
    "Logo da farmácia Devinpharma",
    ["Opção 1", "Opção 2", "Opção 3", "Opção 4"]
  );
  
  var elementoCabecalhoDom = document.querySelector("#elementoHeader");
  
  function criarElementoLogo(logo) {
    var elementoLogo = document.createElement("img");
    elementoLogo.src = logo.src;
    elementoLogo.alt = logo.alt;
    return elementoLogo;
  }
  
  var elementoLogo = criarElementoLogo(elementoCabecalho.logo);
  elementoCabecalhoDom.appendChild(elementoLogo);
  
  function criarItemLista() {
    return document.createElement("li");
  }
  
  function criarElementoLink(text) {
    var elementoLink = document.createElement("a");
    elementoLink.textContent = text;
    return elementoLink;
  }
  
  function criarListaMenu(opcoesMenu) {
    var listaOpcoesMenu = document.createElement("ul");
  
    opcoesMenu.forEach(function(option) {
      var itemListaElemento = criarItemLista();
      var elementoLink = criarElementoLink(option);
  
      itemListaElemento.appendChild(elementoLink);
      listaOpcoesMenu.appendChild(itemListaElemento);
    });
  
    return listaOpcoesMenu;
  }
  
  var listaOpcoesMenu = criarListaMenu(elementoCabecalho.menu);
  elementoCabecalhoDom.appendChild(listaOpcoesMenu);
  
  var BtnModoEscuro = document.querySelector("#modoEscuro");
  