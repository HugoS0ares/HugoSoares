// PEDIDOS HTTPS 

const pedidoGET = {
    metodo: "GET",
    url: "/api/marcacoes",
    Headers: {
        "content-type": "application/json",
        "user-agent": "browser"
    },
    body: null
}

console.log(pedidoGET)


const pedidoPOST = {
    metodo: "POST",
    url: "/api/marcacoes",
    Headers: {
        "content-type": "application/json",
        "authorization": "brearer token123"
    },
    body: {
        nome: "carlos",
        data: "2026-02-18"
    }
}

console.log(pedidoPOST)

// RESPOSTAS 

const statusCodes = {
    // ── 2xx: SUCESSO ──
    200: "OK - Pedido bem sucedido",
    201: "Created - Recurso criado com sucesso",
    204: "No Content - Sucesso, sem dados para devolver",
  
    // ── 3xx: REDIRECAO ──
    301: "Moved Permanently - Recurso mudou de URL",
    302: "Found - Recurso temporariamente noutro URL",
    304: "Not Modified - Dados nao mudaram (usar cache)",
  
    // ── 4xx: ERRO DO CLIENTE ──
    400: "Bad Request - Pedido invalido (dados em falta ou errados)",
    401: "Unauthorized - Sem autorizacao (login necessario)",
    403: "Forbidden - Sem permissao (mesmo autenticado)",
    404: "Not Found - Recurso nao existe",
    409: "Conflict - Conflito (ex: horario ja ocupado)",
    422: "Unprocessable Entity - Dados bem formatados mas invalidos",
    429: "Too Many Requests - Demasiados pedidos (rate limit)",
  
    // ── 5xx: ERRO DO SERVIDOR ──
    500: "Internal Server Error - Erro interno do servidor",
    502: "Bad Gateway - Servidor intermediario falhou",
    503: "Service Unavailable - Servidor em manutencao"
  };

  const respostaOK = {
    status: 200,
    Headers: {
        "CONTENT-TYPE": "aplicattion/json",
        "location": "/api/marcacoes"
    },
    body: "Resposta OK"
  }

  //JSON 

  // OBEJTO JS -> TEXTO
//cli
  const marcacao = {id: 1, "nome": "Ana", data: "2026-02-18", hora:"10:00"}
  const marcacaoJSON = JSON.stringify(marcacao) // converter a JSON string
  console.log(marcacao)
 

// RECEBER
const jsonrecebido = '{"id":2,"nome":"Rui","servico":"Exame"}';
const objetoRecebido = JSON.parse(jsonrecebido) // converte o texto JSON para objeto js
console.log(objetoRecebido)

    
    
const listaJSON = '[{"id":1,"nome":"Ana"},{"id":2,"nome":"Rui"},{"id":3,"nome":"Maria"}]';
const lista = JSON.parse(listaJSON) // converte o texto JSON para array de objetos js
   
console.log(lista.length) 
console.log(lista[0])
console.log(lista[1].nome)

const marcacoesAna = lista.filter(pessoa => pessoa.nome === "Ana");
console.log(marcacoesAna); 


