// ========================================
// 11.1 EVENTOS AVANCADOS
// ========================================
// Objetivo: praticar delegacao, preventDefault e stopPropagation.

// Verifica ambiente de execucao.
if (typeof document === "undefined") {
  // Mensagem amigavel quando corre fora do browser.
  console.log("Este script usa DOM e deve correr no browser.");
  // Indica ficheiro HTML correto.
  console.log("Abre 11_JavaScript_Eventos/11.1_eventos_avancados.html e usa a consola (F12).");
} else {
  // ========================================
  // BLOCO 1: DELEGACAO DE EVENTOS
  // ========================================

  // Lista de alertas onde os itens podem ser clicados/removidos.
  const listaAlertas = document.querySelector("#lista-alertas");

  // So liga listener se a lista existir no HTML.
  if (listaAlertas) {
    // Um unico listener para toda a lista (delegacao).
    listaAlertas.addEventListener("click", (evento) => {
      // Procura item li mais proximo da origem do click.
      const item = evento.target.closest("li");

      // Se click nao foi dentro de li, ignora.
      if (!item) return;

      // Le codigo do alerta guardado no dataset.
      const codigo = item.dataset.alerta;

      // Verifica se click foi no botao de fechar.
      if (evento.target.matches("button[data-acao='fechar']")) {
        // Remove item da lista.
        item.remove();
        // Log para confirmar remocao.
        console.log("Alerta removido:", codigo);
        return;
      }

      // Caso contrario, trata como abertura de detalhe.
      console.log("Abrir detalhes do alerta:", codigo);
    });
  }

  // ========================================
  // BLOCO 2: SUBMIT COM preventDefault
  // ========================================

  // Formulario de pesquisa de alertas.
  const formPesquisa = document.querySelector("#form-pesquisa-alertas");

  // Liga submit apenas se formulario existir.
  if (formPesquisa) {
    // Listener de submit.
    formPesquisa.addEventListener("submit", (evento) => {
      // Evita comportamento padrao (refresh/pedido real).
      evento.preventDefault();

      // Le termo de pesquisa no input.
      const termo = formPesquisa.querySelector("input")?.value?.trim() || "";

      // Log didatico do termo pesquisado.
      console.log("Pesquisar alertas por:", termo);
    });
  }

  // ========================================
  // BLOCO 3: stopPropagation
  // ========================================

  // Todos os cartoes clicaveis da secao.
  const cartoes = document.querySelectorAll(".cartao-alerta");

  // Percorre cartoes para ligar listeners.
  cartoes.forEach((cartao) => {
    // Click no cartao inteiro.
    cartao.addEventListener("click", () => {
      // Mostra id do cartao selecionado.
      console.log("Cartao selecionado:", cartao.dataset.id);
    });

    // Seleciona botao interno de acao rapida.
    const botaoAcao = cartao.querySelector("button[data-acao='acao-rapida']");

    // Se botao existir, liga listener proprio.
    if (botaoAcao) {
      botaoAcao.addEventListener("click", (evento) => {
        // Impede propagacao para listener do cartao pai.
        evento.stopPropagation();
        // Executa apenas acao do botao.
        console.log("Acao rapida executada no cartao:", cartao.dataset.id);
      });
    }
  });
}