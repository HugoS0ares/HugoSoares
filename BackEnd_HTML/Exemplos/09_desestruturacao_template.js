// ============================================
// EXERCICIO 09: Desestruturacao e Template Strings
// Dificuldade: Facil
// Tema: desestruturacao de objetos/arrays, template literals
// ============================================
//
// Cria duas funcoes:
//
// apresentarAluno(aluno)
//   - Recebe um objeto { nome, curso, idade }
//   - Usa desestruturacao para extrair os campos
//   - Devolve a string: "nome, idade anos, curso: curso"
//
// duasPrimeirasCores(cores)
//   - Recebe um array de cores (ex: ["azul", "verde", "laranja"])
//   - Usa desestruturacao de array para extrair as duas primeiras
//   - Devolve um array com as duas primeiras cores
//
// RESULTADO ESPERADO:
//   apresentarAluno({ nome: "Sofia", curso: "Programacao Web", idade: 22 })
//     → "Sofia, 22 anos, curso: Programacao Web"
//   duasPrimeirasCores(["azul", "verde", "laranja"])
//     → ["azul", "verde"]
// ============================================

// ---------- ESCREVE O TEU CODIGO AQUI ----------

function apresentarAluno(aluno) {
  // 1. Desestruturamos o objeto para extrair as propriedades
  const { nome, curso, idade } = aluno;
  
  // 2. Usamos Template Strings para formatar a frase (usa as crases ` `)
  return `${nome}, ${idade} anos, curso: ${curso}`;
}

function duasPrimeirasCores(cores) {
  // 1. Desestruturamos o array para apanhar os dois primeiros elementos
  const [primeiraCor, segundaCor] = cores;
  
  // 2. Devolvemos um novo array apenas com essas duas cores
  return [primeiraCor, segundaCor];
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

console.log("=== EXERCICIO 09: Desestruturacao e Template Strings ===\n");

testar("apresentarAluno({ nome: 'Sofia', curso: 'Programacao Web', idade: 22 })",
  apresentarAluno({ nome: "Sofia", curso: "Programacao Web", idade: 22 }),
  "Sofia, 22 anos, curso: Programacao Web");

testar("apresentarAluno({ nome: 'Rui', curso: 'Backend', idade: 28 })",
  apresentarAluno({ nome: "Rui", curso: "Backend", idade: 28 }),
  "Rui, 28 anos, curso: Backend");

testar("duasPrimeirasCores(['azul', 'verde', 'laranja'])",
  duasPrimeirasCores(["azul", "verde", "laranja"]),
  ["azul", "verde"]);

testar("duasPrimeirasCores(['vermelho', 'amarelo', 'roxo', 'preto'])",
  duasPrimeirasCores(["vermelho", "amarelo", "roxo", "preto"]),
  ["vermelho", "amarelo"]);

console.log(`\nResultado: ${_passou}/${_total} testes passaram`);
