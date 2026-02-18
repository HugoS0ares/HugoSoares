// ========================================
// 10.3 LITE: LISTA DE TAREFAS
// ========================================
// Este ficheiro foi pensado para iniciantes.
// Objetivo: praticar 3 operacoes base com DOM:
// 1) adicionar tarefa
// 2) listar tarefas
// 3) remover tarefa

// Verifica se este codigo esta a correr num ambiente com DOM.
// Em Node.js nao existe o objeto "document".
if (typeof document === "undefined") {
  // Mensagem amigavel quando alguem tenta correr com "node ficheiro.js".
  console.log("Este script usa DOM e deve correr no browser.");
  // Indica o ficheiro HTML correto para abrir.
  console.log("Abre 10_JavaScript_DOM/10.3_lite_lista_tarefas.html e usa a consola (F12).");
} else {
  // ========================================
  // ESTADO DA APLICACAO
  // ========================================

  // Array em memoria onde vamos guardar as tarefas.
  // Cada tarefa sera um objeto: { id, titulo }.
  const tarefas = [];

  // ========================================
  // REFERENCIAS AO DOM
  // ========================================

  // Captura o formulario de criacao de tarefa.
  const formTarefa = document.getElementById("form-tarefa");
  // Captura o input onde o utilizador escreve o titulo.
  const inputTitulo = document.getElementById("titulo");
  // Captura a ul onde os items vao ser desenhados.
  const listaTarefas = document.getElementById("lista-tarefas");
  // Captura o paragrafo de feedback (erro/sucesso).
  const feedback = document.getElementById("feedback");

  // ========================================
  // FUNCAO: FEEDBACK
  // ========================================

  // Mostra uma mensagem no ecra.
  // Parametros:
  // - mensagem: texto a apresentar
  // - erro: true para erro (vermelho), false para sucesso (verde)
  function mostrarFeedback(mensagem, erro = false) {
    // Define o texto do feedback.
    feedback.textContent = mensagem;
    // Define a cor com base no tipo de mensagem.
    feedback.style.color = erro ? "#b91c1c" : "#0f766e";
  }

  // ========================================
  // FUNCAO: RENDERIZAR LISTA
  // ========================================

  // Reconstrui a lista visual com base no estado "tarefas".
  function renderizar() {
    // Limpa a lista atual antes de redesenhar.
    listaTarefas.innerHTML = "";

    // Se nao houver tarefas, mostra estado vazio e termina.
    if (tarefas.length === 0) {
      // Cria um elemento li para mensagem de lista vazia.
      const vazio = document.createElement("li");
      // Define texto de estado vazio.
      vazio.textContent = "Sem tarefas.";
      // Adiciona o li na ul.
      listaTarefas.appendChild(vazio);
      // Interrompe a funcao porque nao ha mais nada para desenhar.
      return;
    }

    // Percorre cada tarefa do array para criar os elementos HTML.
    tarefas.forEach((tarefa) => {
      // Cria o item li que representa a tarefa.
      const item = document.createElement("li");
      // Guarda o id da tarefa no dataset do li (util para remover depois).
      item.dataset.id = String(tarefa.id);

      // Cria span para texto da tarefa.
      const texto = document.createElement("span");
      // Define o conteudo textual com o titulo da tarefa.
      texto.textContent = tarefa.titulo;

      // Cria botao de remover.
      const botaoRemover = document.createElement("button");
      // Define explicitamente tipo button para nao disparar submit.
      botaoRemover.type = "button";
      // Classe CSS para estilo do botao.
      botaoRemover.className = "btn-remover";
      // Texto visivel do botao.
      botaoRemover.textContent = "Remover";
      // Guarda acao no dataset para identificar no clique.
      botaoRemover.dataset.acao = "remover";

      // Junta o texto ao item.
      item.appendChild(texto);
      // Junta o botao ao item.
      item.appendChild(botaoRemover);
      // Adiciona item completo na lista principal.
      listaTarefas.appendChild(item);
    });
  }

  // ========================================
  // EVENTO: SUBMIT DO FORMULARIO
  // ========================================

  // Sempre que o formulario e submetido, cria nova tarefa.
  formTarefa.addEventListener("submit", (evento) => {
    // Impede o comportamento padrao do browser (reload da pagina).
    evento.preventDefault();

    // Le valor do input e remove espacos no inicio/fim.
    const titulo = inputTitulo.value.trim();

    // Regra de validacao minima para evitar strings curtas.
    if (titulo.length < 3) {
      // Mostra erro ao utilizador.
      mostrarFeedback("O titulo deve ter pelo menos 3 caracteres.", true);
      // Interrompe fluxo para nao criar tarefa invalida.
      return;
    }

    // Adiciona nova tarefa ao array de estado.
    tarefas.push({
      // Date.now gera um numero unico (timestamp) para usar como id.
      id: Date.now(),
      // Guarda o titulo validado.
      titulo,
    });

    // Limpa os campos do formulario para nova entrada.
    formTarefa.reset();
    // Mostra mensagem de sucesso.
    mostrarFeedback("Tarefa adicionada.");
    // Atualiza lista visivel no ecra.
    renderizar();
  });

  // ========================================
  // EVENTO: CLIQUE NA LISTA (DELEGACAO)
  // ========================================

  // Um unico listener para tratar cliques em botoes de remover.
  listaTarefas.addEventListener("click", (evento) => {
    // Procura botao mais proximo da origem do clique.
    const botao = evento.target.closest("button");
    // Se nao clicou num botao, ignora.
    if (!botao) return;

    // Se botao nao for de remover, ignora.
    if (botao.dataset.acao !== "remover") return;

    // Procura item li associado ao botao clicado.
    const item = evento.target.closest("li");
    // Se nao encontrou li, ignora.
    if (!item) return;

    // Le id guardado no dataset do li.
    const id = Number(item.dataset.id);
    // Encontra posicao da tarefa no array.
    const indice = tarefas.findIndex((tarefa) => tarefa.id === id);
    // Se nao encontrou, ignora.
    if (indice === -1) return;

    // Remove exatamente 1 elemento na posicao encontrada.
    tarefas.splice(indice, 1);
    // Atualiza lista no ecra.
    renderizar();
  });

  // ========================================
  // ARRANQUE DA PAGINA
  // ========================================

  // Primeiro desenho ao abrir a pagina.
  renderizar();
}