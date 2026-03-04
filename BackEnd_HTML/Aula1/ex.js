// EXERCICIO 1 
// Criar um objeto 'produto' com nome, preco e categoria.
// Converter para JSON string e imprimir formatado.
// Depois converter de volta para objeto e aceder ao preco.

// 1. Criar o objeto 'produto'
const produto = {
    nome: "Iphone",
    preco: 1299.50,
    categoria: "telemoveis"
};
// 2. Converter para JSON string e imprimir formatado
const produtoJSON = JSON.stringify(produto, null, 2);
console.log("JSON Formatado: ", produto);
// 3. Converter de volta para objeto JS
const produtoConvertido = JSON.parse(produtoJSON);
// 4. Aceder e imprimir o preço
console.log("Preço do produto: ", produtoConvertido.preco);


// EXERCICIO 2 
// Fazer parse desta string JSON e imprimir o email:
// '{"utilizador": {"nome": "Carlos", "email": "carlos@email.pt", "idade": 28}}'

const stringJSON = '{"utilizador": {"nome": "Carlos", "email": "carlos@email.pt", "idade": 28}}';
// 1. Fazer o parse da string para um objeto real
const dados = JSON.parse(stringJSON);
// 2. Imprimir o email acedendo através do objeto 'utilizador'
console.log("Email do Utilizador: ", dados.utilizador.email);


// EXERCICIO 3 (
// Criar um array de 3 marcacoes como string JSON.
// Fazer parse, filtrar as do dia "2026-02-15", e imprimir o resultado.

// 1. Criar o array de marcações diretamente como uma string JSON
const marcacoesJSON = `[
  {"id": 101, "cliente": "Sofia", "data": "2026-02-15"},
  {"id": 102, "cliente": "Pedro", "data": "2026-02-16"},
  {"id": 103, "cliente": "Tiago", "data": "2026-02-15"}
]`;
// 2. Fazer o parse para transformar num array de objetos
const marcacoes = JSON.parse(marcacoesJSON);
// 3. Filtrar as marcações do dia específico
const marcacoesDia15 = marcacoes.filter(marcacao => marcacao.data === "2026-02-15");
// 4. Imprimir o resultado
console.log("Marcações para o dia 2026-02-15:", marcacoesDia15);