const fs = require("fs");
const path = require("path");

// 1. Descobrimos e montamos o caminho exato do arquivo
console.log("Minha pasta atual é:", __dirname);
const caminho = path.join(__dirname, "ex1.json");
console.log("O arquivo será salvo em:", caminho);

// 2. Criamos os nossos dados (A lista de objetos)
const formandos = [
    {
        nome: "Cintia",
        idade: 21,
        frase: "Nem todo o Mundo tem criatividade."
    },
    {
        nome: "João",
        idade: 18,
        frase: "Porto é o melhor."
    },
    {
        nome: "Gui",
        idade: 21,
        frase: "Deus te pague..."
    }
];

// 3. Convertendo a lista para o formato de texto JSON
const formandosJson = JSON.stringify(formandos, null, 2);
console.log("\nDados que serão salvos:\n", formandosJson);

// 4. Salvando o arquivo no computador!
// Usamos a variável 'caminho' que criamos lá na linha 6
fs.writeFileSync(caminho, formandosJson);

console.log("\nSucesso! O arquivo ex1.json foi criado na sua pasta!");

const lido = fs.readFileSync(caminho,"UTF-8");
const formandosRecuperados = JSON.parse(lido);


const novoFormando = {
    nome: "Hugo",
    idade: 24,
    frase: "Hoje vamos sair mais cedo!"
};

formandosRecuperados.push(novoFormando);
console.log("O Hugo Foi adiciona a lista na memória!");

const novaListaJson = JSON.stringify(formandosRecuperados);

fs.writeFileSync(caminho,novaListaJson);
console.log("O arquivo ex1.json foi atualizado!");




