// ============================================
// EXERCICIO 02: Guardar e Ler JSON
// Dificuldade: Facil
// Tema: fs.writeFileSync, fs.readFileSync, JSON
// ============================================
//
// Correr: node exercicios/02_guardar_agenda.js
//
// PASSOS:
//   1. Criar um array com 3 marcacoes
//      (cada uma com: id, cliente, servico)
//   2. Guardar o array num ficheiro "agenda.json"
//      usando fs.writeFileSync e JSON.stringify
//   3. Ler o ficheiro com fs.readFileSync
//      e converter de volta com JSON.parse
//   4. Imprimir o nome do primeiro cliente lido
//   5. Adicionar uma nova marcacao ao array lido
//      e guardar novamente no ficheiro
//   6. Confirmar que o ficheiro tem agora 4 marcacoes
//
// DICA: Usar path.join(__dirname, "agenda.json")
//       para o caminho do ficheiro
//
// OUTPUT ESPERADO:
//   Ficheiro guardado com 3 marcacoes.
//   Primeiro cliente: Ana Silva
//   Ficheiro atualizado: 4 marcacoes.
// ============================================

const fs = require("fs");
const path = require("path");

const FICHEIRO = path.join(__dirname, "agenda.json");

// ---------- ESCREVE O TEU CODIGO AQUI ----------

// 1. Criar array com 3 marcacoes


// 2. Guardar no ficheiro com fs.writeFileSync


// 3. Ler o ficheiro com fs.readFileSync e JSON.parse


// 4. Imprimir o nome do primeiro cliente


// 5. Adicionar uma nova marcacao e guardar novamente


// 6. Confirmar lendo o ficheiro outra vez
