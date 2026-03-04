// ============================================
// EXERCICIO 06: Strings e Formatacao
// Dificuldade: Facil
// Tema: trim, toUpperCase, toLowerCase, replace, includes
// ============================================
//
// Cria cinco funcoes:
//
// limparTexto(frase)                    → remove espacos do inicio e fim
// paraMaiusculas(frase)                 → converte para MAIUSCULAS
// paraMinusculas(frase)                 → converte para minusculas
// substituirPalavra(frase, antiga, nova)→ substitui a palavra antiga pela nova
// contemPalavra(frase, palavra)         → true se a frase contem a palavra
//
// RESULTADO ESPERADO:
//   limparTexto("  ola mundo  ")            → "ola mundo"
//   paraMaiusculas("ola mundo")             → "OLA MUNDO"
//   paraMinusculas("OLA MUNDO")             → "ola mundo"
//   substituirPalavra("ola mundo", "mundo", "JS") → "ola JS"
//   contemPalavra("ola mundo", "mundo")     → true
//   contemPalavra("ola mundo", "Python")    → false
// ============================================

// ---------- ESCREVE O TEU CODIGO AQUI ----------

function limparTexto(frase) {
  // Remove espacos do inicio e fim
  return frase.trim ();
}

function paraMaiusculas(frase) {
  // Converte para maiusculas
  return frase.toUpperCase ();
}

function paraMinusculas(frase) {
  // Converte para minusculas
  return frase.toLowerCase ();
}

function substituirPalavra(frase, antiga, nova) {
  // Substitui a palavra antiga pela nova
  return frase.replace(antiga,nova);
}

function contemPalavra(frase, palavra) {
  // Devolve true ou false
  return frase.includes(palavra);
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

console.log("=== EXERCICIO 06: Strings e Formatacao ===\n");

testar("limparTexto('  ola mundo  ') → 'ola mundo'",
  limparTexto("  ola mundo  "), "ola mundo");

testar("paraMaiusculas('ola mundo') → 'OLA MUNDO'",
  paraMaiusculas("ola mundo"), "OLA MUNDO");

testar("paraMinusculas('OLA MUNDO') → 'ola mundo'",
  paraMinusculas("OLA MUNDO"), "ola mundo");

testar("substituirPalavra('ola mundo', 'mundo', 'JS') → 'ola JS'",
  substituirPalavra("ola mundo", "mundo", "JS"), "ola JS");

testar("contemPalavra('ola mundo', 'mundo') → true",
  contemPalavra("ola mundo", "mundo"), true);

testar("contemPalavra('ola mundo', 'Python') → false",
  contemPalavra("ola mundo", "Python"), false);

console.log(`\nResultado: ${_passou}/${_total} testes passaram`);
