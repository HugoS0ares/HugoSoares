// ============================================
// EXERCICIO 10: Mini Projeto - Caixa de Compras
// Dificuldade: Facil-Medio
// Tema: combinar arrays, objetos, funcoes, calculos
// ============================================
//
// Cria tres funcoes:
//
// calcularSubtotal(item)
//   - Recebe um objeto { nome, preco, quantidade }
//   - Devolve preco * quantidade
//
// calcularTotalCarrinho(itens)
//   - Recebe um array de itens
//   - Devolve a soma de todos os subtotais
//
// aplicarDesconto(total, percentagem)
//   - Recebe o total e a percentagem de desconto (ex: 10 para 10%)
//   - Devolve o total com desconto aplicado
//
// RESULTADO ESPERADO:
//   calcularSubtotal({ nome: "Caderno", preco: 3.50, quantidade: 2 }) → 7
//   calcularTotalCarrinho(itens) → 42.5
//   aplicarDesconto(100, 10) → 90
//   aplicarDesconto(50, 20) → 40
// ============================================

// ---------- ESCREVE O TEU CODIGO AQUI ----------

 function calcularSubtotal(item) {
  // Devolve o preço multiplicado pela quantidade
  return item.preco * item.quantidade;
}

function calcularTotalCarrinho(itens) {
  // Usamos o reduce para somar os subtotais de todos os itens do carrinho.
  // Repara como chamamos a função calcularSubtotal(item) aqui dentro!
  return itens.reduce((soma, item) => soma + calcularSubtotal(item), 0);
}

function aplicarDesconto(total, percentagem) {
  // Calculamos o valor a descontar e subtraímos ao total
  const valorDesconto = total * (percentagem / 100);
  return total - valorDesconto;
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

console.log("=== EXERCICIO 10: Mini Projeto - Caixa de Compras ===\n");

const itens = [
  { nome: "Caderno", preco: 3.50, quantidade: 2 },
  { nome: "Caneta", preco: 1.50, quantidade: 4 },
  { nome: "Mochila", preco: 28.00, quantidade: 1 },
  { nome: "Borracha", preco: 0.50, quantidade: 3 }
];

testar("calcularSubtotal({ preco: 3.50, quantidade: 2 }) → 7",
  calcularSubtotal(itens[0]), 7);

testar("calcularSubtotal({ preco: 1.50, quantidade: 4 }) → 6",
  calcularSubtotal(itens[1]), 6);

testar("calcularTotalCarrinho(itens) → 42.5",
  calcularTotalCarrinho(itens), 42.5);

testar("calcularTotalCarrinho([]) → 0",
  calcularTotalCarrinho([]), 0);

testar("aplicarDesconto(100, 10) → 90",
  aplicarDesconto(100, 10), 90);

testar("aplicarDesconto(50, 20) → 40",
  aplicarDesconto(50, 20), 40);

console.log(`\nResultado: ${_passou}/${_total} testes passaram`);
