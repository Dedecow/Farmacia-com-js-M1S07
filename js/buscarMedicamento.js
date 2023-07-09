function filtrarMedicamentos() {
    const buscaTitulo = document.getElementById("buscaTitulo").value.toLowerCase();
    const buscaDescricao = document.getElementById("buscaDescricao").value.toLowerCase();
    const buscaValor = document.getElementById("buscaValor").value;
    const buscaDataCadastro = document.getElementById("buscaDataCadastro").value;
  
    const medicamentos = getListaMedicamentos();
  
    for (let i = 0; i < medicamentos.length; i++) {
      const medicamento = medicamentos[i];
      const titulo = getTituloMedicamento(medicamento).toLowerCase();
      const descricao = getDescricaoMedicamento(medicamento).toLowerCase();
      const valor = getValorMedicamento(medicamento);
      const dataCadastro = getDataCadastroMedicamento(medicamento);
  
      const atendeBusca =
        titulo.includes(buscaTitulo) &&
        descricao.includes(buscaDescricao) &&
        (buscaValor === "" || valor === parseFloat(buscaValor)) &&
        (buscaDataCadastro === "" || dataCadastro === buscaDataCadastro);
  
      exibirMedicamento(medicamento, atendeBusca);
    }
  
    limparCamposBusca();
  }
  
  function getListaMedicamentos() {
    return document.getElementById("listaMedicamentos").querySelectorAll("li");
  }
  
  function getTituloMedicamento(medicamento) {
    return medicamento.querySelector(".titulo").textContent;
  }
  
  function getDescricaoMedicamento(medicamento) {
    return medicamento.querySelector(".descricao").textContent;
  }
  
  function getValorMedicamento(medicamento) {
    return parseFloat(medicamento.querySelector(".valor").textContent);
  }
  
  function getDataCadastroMedicamento(medicamento) {
    return medicamento.querySelector(".data-cadastro").textContent;
  }
  
  function exibirMedicamento(medicamento, exibir) {
    medicamento.style.display = exibir ? "block" : "none";
  }
  
  function limparCamposBusca() {
    document.getElementById("formBusca").reset();
  }
  
  document.addEventListener("DOMContentLoaded", function() {
    const formBusca = document.getElementById("formBusca");
    formBusca.addEventListener("submit", function(event) {
      event.preventDefault();
      filtrarMedicamentos();
    });
  });
  