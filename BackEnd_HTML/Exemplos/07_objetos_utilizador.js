// ============================================
// EXERCICIO 07: Objetos
// Dificuldade: Facil
// Tema: criar objetos, aceder/atualizar campos
// ============================================
//
// Cria tres funcoes:
//
// criarUtilizador(nome, email, idade)
//   → devolve { nome, email, idade, ativo: false }
//
// ativarUtilizador(user)
//   → muda user.ativo para true e devolve o user
//
// registarVisita(user, data)
//   → adiciona campo ultimaVisita com a data e devolve o user
//
// RESULTADO ESPERADO:
//   criarUtilizador("Rui", "rui@mail.com", 28)
//     → { nome: "Rui", email: "rui@mail.com", idade: 28, ativo: false }
//   ativarUtilizador(user) → user.ativo === true
//   registarVisita(user, "2026-03-02") → user.ultimaVisita === "2026-03-02"
// ============================================

// ---------- ESCREVE O TEU CODIGO AQUI ----------
function criarUtilizador(nome, email, idade) {
  // Devolve um objeto usando as variáveis recebidas.
  // Graças ao "shorthand" do JavaScript, fica muito mais curto!
  return {
    nome,     // É o mesmo que escrever nome: nome
    email,    // É o mesmo que escrever email: email
    idade,    // É o mesmo que escrever idade: idade
    ativo: false
  };
}

function ativarUtilizador(user) {
  // Muda user.ativo para true e devolve o user
  user.ativo = true;
  return user;
}

function registarVisita(user, data) {
  // Adiciona campo ultimaVisita e devolve o user
  user.ultimaVisita = data;
  return user;
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

console.log("=== EXERCICIO 07: Objetos ===\n");

const user1 = criarUtilizador("Rui", "rui@mail.com", 28);
testar("criarUtilizador() devolve objeto correto",
  user1, { nome: "Rui", email: "rui@mail.com", idade: 28, ativo: false });

const user2 = criarUtilizador("Ana", "ana@mail.com", 22);
testar("criarUtilizador() funciona com outros valores",
  user2, { nome: "Ana", email: "ana@mail.com", idade: 22, ativo: false });

ativarUtilizador(user1);
testar("ativarUtilizador() muda ativo para true",
  user1.ativo, true);

registarVisita(user1, "2026-03-02");
testar("registarVisita() adiciona campo ultimaVisita",
  user1.ultimaVisita, "2026-03-02");

testar("user1 final tem todos os campos",
  user1, { nome: "Rui", email: "rui@mail.com", idade: 28, ativo: true, ultimaVisita: "2026-03-02" });

console.log(`\nResultado: ${_passou}/${_total} testes passaram`);
