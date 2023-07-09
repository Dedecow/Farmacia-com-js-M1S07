document.addEventListener("DOMContentLoaded", function() {
    const formMedicamento = document.getElementById("formMedicamento");
    const formBusca = document.getElementById("formBusca");
    const listaMedicamentos = document.getElementById("listaMedicamentos");
    const formEdicao = document.getElementById("formEdicao");
  
    formMedicamento.addEventListener("submit", function(event) {
      event.preventDefault();
      
      const titulo = document.getElementById("titulo").value;
      const imagemSrc = document.getElementById("imagemSrc").value;
      const descricao = document.getElementById("descricao").value;
      const valor = document.getElementById("valor").value;
      const dataCadastro = document.getElementById("dataCadastro").value;
      // Lógica para adicionar o medicamento importar de criarMedicamento.js
    
      formMedicamento.reset();
    });
  
    formBusca.addEventListener("submit", function(event) {
      event.preventDefault();

      const buscaTitulo = document.getElementById("buscaTitulo").value;
      const buscaDescricao = document.getElementById("buscaDescricao").value;
      const buscaValor = document.getElementById("buscaValor").value;
      const buscaDataCadastro = document.getElementById("buscaDataCadastro").value;
      // Lógica para filtrar a lista de medicamentos com base nos critérios de busca
      // ...
  
      
      formBusca.reset();
    });
  
    listaMedicamentos.addEventListener("click", function(event) {
      if (event.target.classList.contains("editar-medicamento")) {
        const medicamentoId = event.target.dataset.medicamentoId;
        // Lógica para exibir o formulário de edição com os dados do medicamento selecionado
        // ...
  
        // Exibir o formulário de edição
        formEdicao.style.display = "block";
      }
    });
  
    formEdicao.addEventListener("submit", function(event) {
      event.preventDefault();
      // Lógica para gravar as alterações do medicamento editado
      const edicaoTitulo = document.getElementById("edicaoTitulo").value;
      const edicaoImagemSrc = document.getElementById("edicaoImagemSrc").value;
      const edicaoDescricao = document.getElementById("edicaoDescricao").value;
      const edicaoValor = document.getElementById("edicaoValor").value;
      const edicaoDataCadastro = document.getElementById("edicaoDataCadastro").value;
      // Lógica para atualizar os dados do medicamento na lista
      // ...
  
      // Limpar os campos do formulário de edição
      formEdicao.reset();
  
      // Ocultar o formulário de edição
      formEdicao.style.display = "none";
    });
  });
  