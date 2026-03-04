// ============================================
// EXERCICIO 02: Operadores e Condicoes
// Dificuldade: Facil
// Tema: if/else, operadores de comparacao, &&
// ============================================
//
// Cria a funcao:
//
// avaliarAluno(nota, faltas)
//   - Aprovado se nota >= 10 E faltas <= 5
//   - Caso contrario, Reprovado
//   - Devolve a string "Aprovado" ou "Reprovado"
//
// RESULTADO ESPERADO:
//   avaliarAluno(13, 3)  → "Aprovado"
//   avaliarAluno(8, 2)   → "Reprovado"  (nota baixa)
//   avaliarAluno(15, 8)  → "Reprovado"  (muitas faltas)
//   avaliarAluno(10, 5)  → "Aprovado"   (caso limite)
// ============================================

// ---------- ESCREVE O TEU CODIGO AQUI ----------

function avaliarAluno(nota, faltas) {
  // Devolve "Aprovado" ou "Reprovado"
  if (nota >= 10 && faltas <= 5){
    return "Aprovado"
  }else{
    return "Reprovado"
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

console.log("=== EXERCICIO 02: Operadores e Condicoes ===\n");

testar("avaliarAluno(13, 3) → 'Aprovado'",
  avaliarAluno(13, 3), "Aprovado");

testar("avaliarAluno(8, 2) → 'Reprovado' (nota baixa)",
  avaliarAluno(8, 2), "Reprovado");

testar("avaliarAluno(15, 8) → 'Reprovado' (muitas faltas)",
  avaliarAluno(15, 8), "Reprovado");

testar("avaliarAluno(10, 5) → 'Aprovado' (caso limite)",
  avaliarAluno(10, 5), "Aprovado");

testar("avaliarAluno(9, 5) → 'Reprovado' (nota = 9)",
  avaliarAluno(9, 5), "Reprovado");

console.log(`\nResultado: ${_passou}/${_total} testes passaram`);
