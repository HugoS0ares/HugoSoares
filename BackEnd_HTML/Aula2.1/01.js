// ============================================
// EXERCICIO 01: Objetos e Arrays (Marcacoes)
// Dificuldade: Facil
// Tema: arrays, objetos, find, filter, funcoes
// ============================================
//
// Uma clinica precisa de gerir marcacoes.
//
// Cria tres funcoes:
//
// encontrarPorId(marcacoes, id)
//   - Procura a marcacao com esse id (usa .find)
//   - Devolve a marcacao ou undefined se nao existir
//
// filtrarPorServico(marcacoes, servico)
//   - Devolve apenas as marcacoes com esse servico (usa .filter)
//
// criarMarcacao(marcacoes, cliente, servico, data, hora)
//   - Cria um novo objeto marcacao com id automatico
//     (id = tamanho do array + 1)
//   - Devolve o novo objeto (NAO altera o array original)
//
// RESULTADO ESPERADO:
//   encontrarPorId(marcacoes, 2) → { id: 2, cliente: "Bruno Costa", ... }
//   encontrarPorId(marcacoes, 99) → undefined
//   filtrarPorServico(marcacoes, "Consulta") → [{ id:1, ... }]
//   criarMarcacao(marcacoes, "Diana", "Exame", "2026-03-03", "14:00")
//     → { id: 4, cliente: "Diana", servico: "Exame", ... }
// ============================================

// ---------- ESCREVE O TEU CODIGO AQUI ----------

function encontrarPorId(marcacoes, id) {
  // Usa .find() para encontrar a marcacao com esse id
}

function filtrarPorServico(marcacoes, servico) {
  // Usa .filter() para devolver as marcacoes com esse servico
}

function criarMarcacao(marcacoes, cliente, servico, data, hora) {
  // Devolve um novo objeto com id automatico
}

// ---------- TESTES (nao alterar abaixo) ----------

let _passou = 0, _total = 0;
function testar(desc, recebido, esperado) {
  _total++;
  const ok = JSON.stringify(recebido) === JSON.stringify(esperado);
  if (ok) { _passou++; console.log(`  PASS  ${desc}`); }
  else {
    console.log(`  FAIL  ${desc}`);
    console.log(`    Esperado: ${JSON.stringify(esperado)}`);
    console.log(`    Recebido: ${JSON.stringify(recebido)}`);
  }
}

console.log("=== EXERCICIO 01: Objetos e Arrays (Marcacoes) ===\n");

const marcacoes = [
  { id: 1, cliente: "Ana Silva", servico: "Consulta", data: "2026-03-01", hora: "09:00" },
  { id: 2, cliente: "Bruno Costa", servico: "Exame", data: "2026-03-01", hora: "10:00" },
  { id: 3, cliente: "Carla Dias", servico: "Revisao", data: "2026-03-02", hora: "11:00" },
];

// --- encontrarPorId ---
testar("encontrarPorId(2) → Bruno Costa",
  encontrarPorId(marcacoes, 2),
  { id: 2, cliente: "Bruno Costa", servico: "Exame", data: "2026-03-01", hora: "10:00" });

testar("encontrarPorId(1) → Ana Silva",
  encontrarPorId(marcacoes, 1),
  { id: 1, cliente: "Ana Silva", servico: "Consulta", data: "2026-03-01", hora: "09:00" });

testar("encontrarPorId(99) → undefined",
  encontrarPorId(marcacoes, 99), undefined);

// --- filtrarPorServico ---
testar("filtrarPorServico('Consulta') → 1 resultado",
  filtrarPorServico(marcacoes, "Consulta"),
  [{ id: 1, cliente: "Ana Silva", servico: "Consulta", data: "2026-03-01", hora: "09:00" }]);

testar("filtrarPorServico('Yoga') → array vazio",
  filtrarPorServico(marcacoes, "Yoga"), []);

// --- criarMarcacao ---
const nova = criarMarcacao(marcacoes, "Diana Reis", "Consulta", "2026-03-03", "14:00");
testar("criarMarcacao → id = 4",
  nova.id, 4);

testar("criarMarcacao → cliente correto",
  nova.cliente, "Diana Reis");

testar("criarMarcacao → objeto completo",
  nova,
  { id: 4, cliente: "Diana Reis", servico: "Consulta", data: "2026-03-03", hora: "14:00" });

testar("criarMarcacao nao altera array original",
  marcacoes.length, 3);

console.log(`\nResultado: ${_passou}/${_total} testes passaram`);
