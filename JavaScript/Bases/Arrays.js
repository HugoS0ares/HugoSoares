const tarefas = ["Estudar HTML","Praticar CSS","Rever JavaScript"];

console.log("Primeira tarefa:",tarefas[0]);
console.log("Segunda tarefa:",tarefas[1]);
console.log("Terçeira tarefa:",tarefas[2]);

tarefas.push("Construir página final")
console.log(tarefas)

tarefas.pop()
console.log("Depois de pop:", tarefas);

for (let i = 0; i < tarefas.length; i +=1 ){
    console.log(`Tarefa ${i + 1}: ${tarefas[i]}`);
}

const tarefasMaiusculas = tarefas.map((tarefa) => tarefa.toUpperCase());
    console.log("Maiusculas:",tarefasMaiusculas);


const tarefasComCss = tarefas.filter((tarefa) => tarefa.includes("CSS"));
    console.log("Com CSS:",tarefasComCss);