
// --- 1. SELECIONAR UM ÚNICO ELEMENTO ---

// Seleciona o primeiro <h1> que encontrar
const titulo = document.querySelector("h1");
console.log(titulo.textContent); // Exibe o texto do título

// Seleciona o primeiro elemento que tiver a classe "caixa"
const primeiroDiv = document.querySelector(".caixa");


// --- 2. SELECIONAR MÚLTIPLOS ELEMENTOS ---

// querySelectorAll retorna uma NodeList (aceita forEach nativo)
const todos = document.querySelectorAll(".caixa");

// Percorrer todos os elementos e imprimir o conteúdo do h2 interno
todos.forEach(function(caixa, indice) {
    // Note que usamos querySelector dentro da "caixa" atual
    const textoH2 = caixa.querySelector("h2").textContent;
    console.log(`Posição ${indice + 1}: ${textoH2}`);
});


// --- 3. MÉTODOS TRADICIONAIS (LEGACY) ---

// Selecionar por ID (muito rápido, mas específico)
const lista = document.getElementById("lista");

// Selecionar por Classe (Retorna um HTMLCollection - não tem forEach nativo)
const colecaoCaixas = document.getElementsByClassName("caixa");


// --- 4. EXTRAS ÚTEIS ---

// Se precisar transformar uma Coleção em Array para usar Map/Filter:
const arrayDeCaixas = Array.from(colecaoCaixas);
