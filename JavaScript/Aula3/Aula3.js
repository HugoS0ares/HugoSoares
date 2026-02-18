// ========================================
// 11.1 EVENTOS BASICOS
// ========================================
// Objetivo: compreender como reagir a interacoes do utilizador.
// Exemplos neste ficheiro: click, input, mouse e teclado.

// Verifica se o script esta a correr no browser.
if (typeof document === "undefined") {
  // Mensagem amigavel para execucao incorreta em Node.
  console.log("Este script usa DOM e deve correr no browser.");
  // Indica o HTML que deve ser aberto.
  console.log("Abre 11_JavaScript_Eventos/11.1_eventos_basicos.html e usa a consola (F12).");
} else {
  // ========================================
  // EXEMPLO 1: CLICK
  // ========================================

  // Elemento que mostra o valor atual do contador.
  const contador = document.querySelector("#contador");
  // Botao para incrementar contador.
  const btnMais = document.querySelector("#btn-mais");
  // Botao para repor contador.
  const btnReset = document.querySelector("#btn-reset");

  // Estado em memoria do contador.
  let valor = 0;

  // Listener de click para incrementar.
  btnMais.addEventListener("click", () => {
    // Soma 1 ao valor atual.
    valor = valor + 1;
    // Atualiza texto no DOM.
    contador.textContent = String(valor);
    // Log de apoio didatico.
    console.log("Click! Valor:", valor);
  });

  // Listener de click para reset.
  btnReset.addEventListener("click", () => {
    // Repor estado em memoria.
    valor = 0;
    // Repor estado no DOM.
    contador.textContent = String(valor);
    // Log de confirmacao.
    console.log("Reset!");
  });

  // ========================================
  // EXEMPLO 2: INPUT
  // ========================================

  // Input onde o utilizador escreve nome.
  const campoNome = document.querySelector("#campo-nome");
  // Span onde mostramos o nome escrito.
  const nomeDisplay = document.querySelector("#nome-display");

  // Evento input dispara a cada mudanca de valor.
  campoNome.addEventListener("input", (evento) => {
    // Valor atual do input.
    const valorDigitado = evento.target.value;

    // Se tiver texto, mostra o valor.
    if (valorDigitado.length > 0) {
      nomeDisplay.textContent = valorDigitado;
    } else {
      // Se vazio, mostra placeholder visual.
      nomeDisplay.textContent = "...";
    }

    // Log para verificar mudancas em tempo real.
    console.log("Input:", valorDigitado);
  });

  // ========================================
  // EXEMPLO 3: EVENTOS DE RATO
  // ========================================

  // Caixa visual que reage ao rato.
  const caixaMouse = document.querySelector("#caixa-mouse");
  // Elemento que mostra estado textual.
  const estadoMouse = document.querySelector("#estado-mouse");

  // Quando o rato entra na caixa.
  caixaMouse.addEventListener("mouseenter", () => {
    // Atualiza texto de estado.
    estadoMouse.textContent = "Estado: DENTRO da caixa";
    // Atualiza texto dentro da caixa.
    caixaMouse.textContent = "Estas ca dentro!";
    // Log didatico.
    console.log("Mouse entrou");
  });

  // Quando o rato sai da caixa.
  caixaMouse.addEventListener("mouseleave", () => {
    // Repor texto de estado.
    estadoMouse.textContent = "Estado: fora da caixa";
    // Repor texto da caixa.
    caixaMouse.textContent = "Passa o rato aqui";
    // Log didatico.
    console.log("Mouse saiu");
  });

  // ========================================
  // EXEMPLO 4: TECLADO
  // ========================================

  // Input para capturar teclas.
  const campoTecla = document.querySelector("#campo-tecla");
  // Elemento para mostrar ultima tecla.
  const teclaDisplay = document.querySelector("#tecla-display");

  // Evento keydown dispara quando tecla e pressionada.
  campoTecla.addEventListener("keydown", (evento) => {
    // Mostra tecla pressionada.
    teclaDisplay.textContent = evento.key;

    // Log de tecla e codigo tecnico.
    console.log("Tecla:", evento.key, "Codigo:", evento.code);

    // Exemplo condicional para tecla Enter.
    if (evento.key === "Enter") {
      console.log("Enter pressionado!");
    }
  });

  // ========================================
  // RESUMO
  // ========================================

  console.log("---");
  console.log("EVENTOS COMUNS:");
  console.log("click - clique do rato");
  console.log("input - valor do campo muda");
  console.log("submit - formulario enviado");
  console.log("keydown - tecla pressionada");
  console.log("mouseenter/mouseleave - rato entra/sai");
  console.log("---");
  console.log('SINTAXE: elemento.addEventListener("evento", funcao)');
}