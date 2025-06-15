import ui from "./ui.js";
import api from "./api.js";

document.addEventListener("DOMContentLoaded", () => {
  ui.renderizarPensamentos();

  const botaoCancelar = document.getElementById("botao-cancelar");
  botaoCancelar.onclick = limparCamposDoFormulario;

  const formularioPensamento = document.getElementById("pensamento-form");
  formularioPensamento.addEventListener("submit", manipularSubmissaoFormulario);
});

function limparCamposDoFormulario() {
  document.getElementById("pensamento-conteudo").value = "";
  document.getElementById("pensamento-autoria").value = "";
}

async function manipularSubmissaoFormulario(event) {
  event.preventDefault();
  const id = document.getElementById("pensamento-id").value;
  console.log(id);
  const conteudo = document.getElementById("pensamento-conteudo").value;
  const autoria = document.getElementById("pensamento-autoria").value;

  try {
    await api.salvarPensamento({ conteudo, autoria });
    ui.renderizarPensamentos();
  } catch {
    alert("Erro ao salvar pensamento");
  }
}
