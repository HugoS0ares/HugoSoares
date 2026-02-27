<?php
// 1. Liga ao ficheiro de ligação
include_once("ligar.php");

// Verifica se a ligação foi bem sucedida
if (!$conn) {
    die("Erro: Falha na ligação com a base de dados.");
}

// 2. Apenas executa o código se o formulário for submetido via POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    // Captura e limpa os dados principais para evitar SQL Injection
    $id_cliente     = $conn->real_escape_string($_POST['id_cliente']);
    $id_veiculo     = $conn->real_escape_string($_POST['id_veiculo']);
    $id_funcionario = $conn->real_escape_string($_POST['id_funcionario']);
    $estado         = $conn->real_escape_string($_POST['estado']);
    $observacoes    = $conn->real_escape_string($_POST['observacoes']);

    // Tratamento das datas: Substituir o 'T' (que vem do input datetime-local do HTML) por espaço
    $data_inicio_raw       = str_replace("T", " ", $_POST['data_inicio']);
    $data_fim_prevista_raw = str_replace("T", " ", $_POST['data_fim_prevista']);
    
    // Limpeza por segurança nas datas já corrigidas
    $data_inicio       = $conn->real_escape_string($data_inicio_raw);
    $data_fim_prevista = $conn->real_escape_string($data_fim_prevista_raw);

    // 3. Query SQL de Inserção
    $sql = "INSERT INTO Aluguer (Id_Cliente, Id_Veiculo, Id_Funcionario, Data_Inicio, Data_Fim_Prevista, Estado, Observacoes) 
            VALUES ('$id_cliente', '$id_veiculo', '$id_funcionario', '$data_inicio', '$data_fim_prevista', '$estado', '$observacoes')";

    // 4. Executa a query e devolve o resultado ao JavaScript
    if ($conn->query($sql) === TRUE) {
        // AQUI ESTÁ A MAGIA: Puxa o ID do Aluguer que o MySQL acabou de criar automaticamente
        $novo_id = $conn->insert_id; 
        
        // Devolve "Sucesso" acompanhado do ID (Ex: "Sucesso|45") para o JavaScript criar o botão Apagar
        echo "Sucesso|" . $novo_id;
    } else {
        // Se der erro, devolve o erro para o JavaScript apanhar
        echo "Erro no MySQL: " . $conn->error;
    }
}

// Fecha a ligação
$conn->close();
?>