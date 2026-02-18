
// Aula 5 Variáveis 

let nome = "ana"
console.log("Nome Inicial:",nome )

nome = "Rafael"
console.log("Nome Atualizado:",nome)

const pais = "Portugal"

//const idade = 23; //INT
const altura = 1.75; //FLOAT
const ativo = true; //BOOL
const email = "ana@gmail.pt"; //STRING

// Operações com numeros.

const precoBase = 100;
const taxaIva = 0.23;
const precoFinal = precoBase + precoBase * taxaIva;
console.log(precoFinal);

// Concatenação com string templates.

//const mensagem = `Utilizador ${nome} (${email}) tem ${idade} anos`  

//console.log(mensagem)


// Condicionais
// Tomar decisões

const idade = 17; //INT

if (idade >= 18){
    console.log("Maior de idade")
} else {
    console.log("Menor de idade")
}

const nota = 14

if (nota >= 18){
    console.log("Nota Excelente")
} else if (nota >= 14){
    console.log("Bom")
} else if (nota >= 10){
    console.log("Suficiente")
} else{ 
    console.log("Insuficiente")
}

const temEmailValido = true;
const aceitouTermos = true;

if (temEmailValido && aceitouTermos){
    console.log("Formulário Válido")
}

const MetodoPagamento = "MBWAY"

    switch(MetodoPagamento){
        case "Cartão":
            console.log("Pagamento com cartão selecionado")
            break;
        case "MBWAY":
            console.log("Pagamento com MBWAY selecionado")
            break;
        case "Transferência":
            console.log("Pagamento com Transfêrencia selecionado")
            break
        default:
            console.log("Método Invalido")
    }