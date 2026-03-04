// ============================================
// EXERCICIO 05: Arrays e Notas
// Dificuldade: Facil
// Tema: arrays, loops, calculos
// ============================================
//
// Cria quatro funcoes que recebem um array de notas:
//
// calcularMedia(notas)    → media das notas (number)
// notaMaisAlta(notas)     → a nota mais alta (number)
// notaMaisBaixa(notas)    → a nota mais baixa (number)
// contarAprovados(notas)  → quantas notas >= 10 (number)
//
// RESULTADO ESPERADO:
//   calcularMedia([12, 9, 15, 11, 8])   → 11
//   notaMaisAlta([12, 9, 15, 11, 8])    → 15
//   notaMaisBaixa([12, 9, 15, 11, 8])   → 8
//   contarAprovados([12, 9, 15, 11, 8]) → 3
// ============================================

// ---------- ESCREVE O TEU CODIGO AQUI ----------
 

function calcularMedia(notas) {
  // Devolve a media das notas
  let soma  = 0;
  for (let nota of notas){
    soma += nota;
  }
  return soma / notas.length;
  
}

function notaMaisAlta(notas) {
  // Devolve a nota mais alta
  return Math.max (...notas);
}

function notaMaisBaixa(notas) {
  // Devolve a nota mais baixa
   return Math.min (...notas);
}

function contarAprovados(notas) {
  let aprovados = 0;
  // Devolve quantas notas sao >= 10
  for (let nota of notas){
    if (nota >= 10){
      aprovados ++;
    }
  }
  return aprovados;
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

console.log("=== EXERCICIO 05: Arrays e Notas ===\n");

testar("calcularMedia([12, 9, 15, 11, 8]) → 11",
  calcularMedia([12, 9, 15, 11, 8]), 11);

testar("calcularMedia([10, 10, 10]) → 10",
  calcularMedia([10, 10, 10]), 10);

testar("notaMaisAlta([12, 9, 15, 11, 8]) → 15",
  notaMaisAlta([12, 9, 15, 11, 8]), 15);

testar("notaMaisBaixa([12, 9, 15, 11, 8]) → 8",
  notaMaisBaixa([12, 9, 15, 11, 8]), 8);

testar("contarAprovados([12, 9, 15, 11, 8]) → 3",
  contarAprovados([12, 9, 15, 11, 8]), 3);

testar("contarAprovados([5, 6, 7]) → 0",
  contarAprovados([5, 6, 7]), 0);

console.log(`\nResultado: ${_passou}/${_total} testes passaram`);
