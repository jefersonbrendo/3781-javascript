import api from "./api.js";
const listaPensamentos = document.querySelector("#lista-pensamentos");

const ui = {
  limparFormulario() {
    document.getElementById("pensamento-form").reset();
  },

  async renderizarPensamentos() {
    try {
      const pensamentos = await api.buscarPensamentos();
      pensamentos.forEach(ui.adicionarPensamentoNaLista)
    } catch (err) {
      alert("Erro ao renderizar pensamentos: " + err.message);
    }
  },

  adicionarPensamentoNaLista(pensamento) {
    const li = document.createElement("li");
    li.setAttribute("data-id", pensamento.id);
    li.classList.add("li-pensamento");

    const iconeAspas = document.createElement("img");
    iconeAspas.src = "assets/imagens/aspas-azuis.png";
    iconeAspas.alt = "Aspas azuis";
    iconeAspas.classList.add("icone-aspas");

    const pensamentoConteudo = document.createElement("div");
    pensamentoConteudo.textContent = pensamento.conteudo;
    pensamentoConteudo.classList.add("pensamento-conteudo");
    
    const pensamentoAutoria = document.createElement("div");
    pensamentoAutoria.textContent = pensamento.autoria;
    pensamentoAutoria.classList.add("pensamento-autoria");
    
    li.appendChild(iconeAspas);
    li.appendChild(pensamentoConteudo);
    li.appendChild(pensamentoAutoria);
    listaPensamentos.appendChild(li)
    
  },
};

export default ui;
