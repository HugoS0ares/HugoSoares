// ============================================
// EXERCICIO 01: Variaveis e Tipos
// Dificuldade: Muito Facil
// Tema: const, let, typeof, operacoes basicas
// ============================================
//
// Cria duas funcoes:
//
// 1) criarPerfil()
//    - Deve devolver um OBJETO com as propriedades:
//      nome (string), idade (number), ativo (boolean), altura (number)
//    - Podes usar os valores que quiseres
//
// 2) calcularAnoNascimento(idade, anoAtual)
//    - Recebe a idade e o ano atual
//    - Devolve o ano de nascimento (aproximado)
//
// RESULTADO ESPERADO:
//   criarPerfil() → { nome: "Ana", idade: 24, ativo: true, altura: 1.67 }
//   calcularAnoNascimento(24, 2026) → 2002
//   calcularAnoNascimento(30, 2026) → 1996
// ============================================

// ---------- ESCREVE O TEU CODIGO AQUI ----------

function criarPerfil() {
  // Devolve um objeto com: nome, idade, ativo, altura
 return {
    nome: "Hugo",
    idade: 24,
    ativo: true,
    altura: 1.75
  };
}

function calcularAnoNascimento(idade, anoAtual) {
  // Devolve o ano de nascimento
  return anoAtual - idade;
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

console.log("=== EXERCICIO 01: Variaveis e Tipos ===\n");

const perfil = criarPerfil();

testar("criarPerfil() devolve objeto com 'nome' (string)",
  typeof perfil.nome, "string");

testar("criarPerfil() devolve objeto com 'idade' (number)",
  typeof perfil.idade, "number");

testar("criarPerfil() devolve objeto com 'ativo' (boolean)",
  typeof perfil.ativo, "boolean");

testar("criarPerfil() devolve objeto com 'altura' (number)",
  typeof perfil.altura, "number");

testar("calcularAnoNascimento(24, 2026) → 2002",
  calcularAnoNascimento(24, 2026), 2002);

testar("calcularAnoNascimento(30, 2026) → 1996",
  calcularAnoNascimento(30, 2026), 1996);

console.log(`\nResultado: ${_passou}/${_total} testes passaram`);
