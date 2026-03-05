//criar as marcacacoes
class Marcacao {
    constructor(id, cliente, data, hora, preco, servico) {
        this.id = id;
        this.cliente = cliente;
        this.data = data;
        this.hora = hora;
        this.preco = preco;
        this.servico = servico;
    }

    resumo() {
        return `Cliente [${this.id}], nome: ${this.cliente}, marcação no dia ${this.data} às ${this.hora} - ${this.preco} (Serviço: ${this.servico})`;
    }
}
 
const marcacao1 = new Marcacao(1, "Ana", "10/03/2026", "14:00", "55.00€", "Corte de Cabelo");
const marcacao2 = new Marcacao(2, "Bruno", "11/03/2026", "09:30", "150.00€", "Tatuagem");
const marcacao3 = new Marcacao(3, "Carlos", "12/03/2026", "16:15", "40.00€", "Consulta Médica");

const agenda = [marcacao1, marcacao2, marcacao3];

console.log("--- AGENDA DO DIA ---");
agenda.forEach(agendamento => {
console.log(agendamento.resumo());
});


console.log(); // Isso cria uma linha vazia!

// primeiro e penultimo cliente
const marcacoesAna = agenda.filter(pessoa => pessoa.cliente === "Ana");
console.log("Marcações da Ana:", marcacoesAna); 

console.log(); // Isso cria uma linha vazia!

const marcacoesBruno = agenda.filter(pessoa => pessoa.cliente === "Bruno");
console.log("Marcações do Bruno:", marcacoesBruno);

//funcao encontrar marcacao por ID 
console.log(); // Isso cria uma linha vazia!

const marcacaoEncontrada = agenda.find(agendamento => agendamento.id === 3);
console.log("Resultado da busca por ID 3:");
console.log(marcacaoEncontrada.resumo());


//nova marcacao;
const marcacao4 = new Marcacao(4, "Hugo", "07/03/2026", "11:15", "20.00$", "Barbeiro");
agenda.push(marcacao4);

// nova marcacao andreila e encontrar

console.log(); // Isso cria uma linha vazia!
const marcacao5 = new Marcacao(5, "Andreila", "06/03/2026", "14:00", "", "Exame");
agenda.push(marcacao5);

console.log(); // Isso cria uma linha vazia!
const marcacoesAndreila = agenda.filter(pessoa => pessoa.cliente === "Andreila");
console.log("Marcações da Andreila:", marcacoesAndreila); 