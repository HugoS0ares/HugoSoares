<?php
// 1. Liga ao ficheiro de ligação
include_once("ligar.php");

if (!$conn) {
    die("Erro: Falha na ligação com a base de dados.");
}
// No teu submeter.php, antes da query SQL:
$data_inicio = str_replace("T", " ", $_POST['data_inicio']);
$data_fim_prevista = str_replace("T", " ", $_POST['data_fim_prevista']);

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    // 2. Captura os dados
    $id_cliente     = $conn->real_escape_string($_POST['id_cliente']);
    $id_veiculo     = $conn->real_escape_string($_POST['id_veiculo']);
    $id_funcionario = $conn->real_escape_string($_POST['id_funcionario']);
    $estado         = $conn->real_escape_string($_POST['estado']);
    $observacoes    = $conn->real_escape_string($_POST['observacoes']);

    // --- AQUI É ONDE METES AS LINHAS DE CORREÇÃO DA DATA ---
    $data_inicio = str_replace("T", " ", $_POST['data_inicio']);
    $data_fim_prevista = str_replace("T", " ", $_POST['data_fim_prevista']);
    
    // Aplicar o escape_string também nas datas corrigidas por segurança
    $data_inicio = $conn->real_escape_string($data_inicio);
    $data_fim_prevista = $conn->real_escape_string($data_fim_prevista);
    // -------------------------------------------------------

    // 3. Query SQL
    $sql = "INSERT INTO Aluguer (Id_Cliente, Id_Veiculo, Id_Funcionario, Data_Inicio, Data_Fim_Prevista, Estado, Observacoes) 
            VALUES ('$id_cliente', '$id_veiculo', '$id_funcionario', '$data_inicio', '$data_fim_prevista', '$estado', '$observacoes')";

    if ($conn->query($sql) === TRUE) {
        echo "Sucesso";
    } else {
        // Se der erro, o JavaScript vai mostrar este erro na Consola (F12)
        echo "Erro no MySQL: " . $conn->error;
    }
}

$conn->close();
?>