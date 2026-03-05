// ============================================
// EXERCICIO 04: Async/Await com Ficheiros
// Dificuldade: Facil
// Tema: async/await, fs/promises, try/catch
// ============================================
//
// Correr: node exercicios/04_tarefas_async.js
//
// PASSOS:
//   1. Criar funcao async guardarTarefas(lista)
//      - Guarda o array num ficheiro "tarefas.json"
//      - Usa await fs.writeFile(...)
//      - Imprime: "Ficheiro guardado com X tarefas."
//
//   2. Criar funcao async lerTarefas()
//      - Le o ficheiro "tarefas.json"
//      - Usa await fs.readFile(...)
//      - Se o ficheiro NAO existir (erro.code === "ENOENT"),
//        devolve array vazio [] (sem crashar!)
//      - Usa try/catch para tratar erros
//
//   3. Na funcao main():
//      - Guardar 2 tarefas iniciais
//      - Ler as tarefas do ficheiro
//      - Adicionar uma 3a tarefa
//      - Guardar novamente
//
// Cada tarefa tem: id, titulo, concluida (true/false)
//
// REQUISITOS:
//   - Usar require("fs/promises") (NAO fs normal)
//   - Usar async/await (NAO callbacks)
//   - Usar try/catch para tratar erros
//
// OUTPUT ESPERADO:
//   Ficheiro guardado com 2 tarefas.
//   Tarefas lidas: 2
//   Adicionada: Praticar async/await
//   Ficheiro guardado com 3 tarefas.
// ============================================

const fs = require("fs/promises");
const path = require("path");

const FICHEIRO = path.join(__dirname, "tarefas.json");

// ---------- ESCREVE O TEU CODIGO AQUI ----------

// 1. Funcao async para guardar tarefas no ficheiro


// 2. Funcao async para ler tarefas do ficheiro
//    (se nao existir, devolver [])


// 3. Funcao main que orquestra tudo
async function main() {
  try {
    // Guardar 2 tarefas iniciais

    // Ler do ficheiro

    // Adicionar nova tarefa e guardar

  } catch (erro) {
    console.log("Erro:", erro.message);
  }
}

main();
