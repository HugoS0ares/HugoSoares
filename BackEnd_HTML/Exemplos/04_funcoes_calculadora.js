// ============================================
// EXERCICIO 04: Funcoes (Calculadora)
// Dificuldade: Facil
// Tema: funcoes, parametros, return, validacao
// ============================================
//
// Cria quatro funcoes:
//
// somar(a, b)       → devolve a + b
// subtrair(a, b)    → devolve a - b
// multiplicar(a, b) → devolve a * b
// dividir(a, b)     → devolve a / b
//                      Se b === 0, devolve "Erro: divisao por zero"
//
// RESULTADO ESPERADO:
//   somar(8, 2)       → 10
//   subtrair(8, 2)    → 6
//   multiplicar(8, 2) → 16
//   dividir(8, 2)     → 4
//   dividir(8, 0)     → "Erro: divisao por zero"
// ============================================

// ---------- ESCREVE O TEU CODIGO AQUI ----------

function somar(a, b) {
  // Devolve a soma
  return a + b; 
}

function subtrair(a, b) {
  // Devolve a subtracao
  return a - b;
}

function multiplicar(a, b) {
  // Devolve a multiplicacao
  return a * b;
}

function dividir(a, b) {
  // Devolve a divisao (cuidado com b === 0!)
  if(b != 0){
    return a / b;
  }else{
    return "Erro: divisao por zero";
  }
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

console.log("=== EXERCICIO 04: Funcoes (Calculadora) ===\n");

testar("somar(8, 2) → 10",
  somar(8, 2), 10);

testar("subtrair(8, 2) → 6",
  subtrair(8, 2), 6);

testar("multiplicar(8, 2) → 16",
  multiplicar(8, 2), 16);

testar("dividir(8, 2) → 4",
  dividir(8, 2), 4);

testar("dividir(8, 0) → 'Erro: divisao por zero'",
  dividir(8, 0), "Erro: divisao por zero");

testar("somar(-3, 7) → 4",
  somar(-3, 7), 4);

console.log(`\nResultado: ${_passou}/${_total} testes passaram`);
