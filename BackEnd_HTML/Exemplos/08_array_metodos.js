// ============================================
// EXERCICIO 08: map, filter, reduce
// Dificuldade: Facil
// Tema: metodos de arrays, callbacks
// ============================================
//
// Usa este array de produtos:
//   [
//     { id: 1, nome: "Teclado", preco: 25, ativo: true },
//     { id: 2, nome: "Rato", preco: 15, ativo: true },
//     { id: 3, nome: "Monitor", preco: 140, ativo: false }
//   ]
//
// Cria tres funcoes:
//
// extrairNomes(produtos)   → array so com os nomes (usa map)
// filtrarAtivos(produtos)  → array so com produtos ativos (usa filter)
// calcularTotal(produtos)  → soma de todos os precos (usa reduce)
//
// RESULTADO ESPERADO:
//   extrairNomes(produtos)  → ["Teclado", "Rato", "Monitor"]
//   filtrarAtivos(produtos) → [{ id:1, ... }, { id:2, ... }]
//   calcularTotal(produtos) → 180
// ============================================

// ---------- ESCREVE O TEU CODIGO AQUI ----------

function extrairNomes(produtos) {
  // Devolve array so com os nomes (usa .map)
  return produtos.map (produto => produto.nome);

}

function filtrarAtivos(produtos) {
  // Devolve array so com produtos ativos (usa .filter)
  return produtos.filter(produto => produto.ativo);
}

function calcularTotal(produtos) {
  // Devolve a soma de todos os precos (usa .reduce)
  return produtos.reduce((acumulador, produto) => acumulador + produto.preco, 0);
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

console.log("=== EXERCICIO 08: map, filter, reduce ===\n");

const produtos = [
  { id: 1, nome: "Teclado", preco: 25, ativo: true },
  { id: 2, nome: "Rato", preco: 15, ativo: true },
  { id: 3, nome: "Monitor", preco: 140, ativo: false }
];

testar("extrairNomes() → ['Teclado', 'Rato', 'Monitor']",
  extrairNomes(produtos), ["Teclado", "Rato", "Monitor"]);

testar("filtrarAtivos() → 2 produtos ativos",
  filtrarAtivos(produtos), [
    { id: 1, nome: "Teclado", preco: 25, ativo: true },
    { id: 2, nome: "Rato", preco: 15, ativo: true }
  ]);

testar("calcularTotal() → 180",
  calcularTotal(produtos), 180);

const vazio = [];
testar("calcularTotal([]) → 0",
  calcularTotal(vazio), 0);

console.log(`\nResultado: ${_passou}/${_total} testes passaram`);
