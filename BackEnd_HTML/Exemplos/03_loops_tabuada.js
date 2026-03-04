// ============================================
// EXERCICIO 03: Loops (Tabuada)
// Dificuldade: Facil
// Tema: for, while, arrays
// ============================================
//
// Cria a funcao:
//
// tabuada(numero)
//   - Recebe um numero
//   - Devolve um array com os 10 resultados da tabuada
//     (numero x 1, numero x 2, ..., numero x 10)
//
// RESULTADO ESPERADO:
//   tabuada(7)  → [7, 14, 21, 28, 35, 42, 49, 56, 63, 70]
//   tabuada(1)  → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//   tabuada(12) → [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]
// ============================================

// ---------- ESCREVE O TEU CODIGO AQUI ----------

function tabuada(numero) {
  // Devolve array com os 10 resultados da tabuada
  let resultados = [];

// 2. Criamos um loop que começa em 1 e vai até 10
  for (let i = 1; i <= 10; i++) {
// 3. Multiplicamos o número pelo valor atual de 'i' e adicionamos ao array
    resultados.push(numero * i);
  }

  // 4. Devolvemos o array preenchido
  return resultados;
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

console.log("=== EXERCICIO 03: Loops (Tabuada) ===\n");

testar("tabuada(7) → [7, 14, 21, ..., 70]",
  tabuada(7), [7, 14, 21, 28, 35, 42, 49, 56, 63, 70]);

testar("tabuada(1) → [1, 2, 3, ..., 10]",
  tabuada(1), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

testar("tabuada(12) → [12, 24, 36, ..., 120]",
  tabuada(12), [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]);

testar("tabuada(0) → [0, 0, 0, ..., 0]",
  tabuada(0), [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);

console.log(`\nResultado: ${_passou}/${_total} testes passaram`);
