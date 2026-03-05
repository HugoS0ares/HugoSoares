<?php
// editar.php
include_once("ligar.php");

if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['edit_id_aluguer']) && $_POST['edit_id_aluguer'] != "") {
    
    $id_aluguer = $conn->real_escape_string($_POST['edit_id_aluguer']);
    $id_cliente = $conn->real_escape_string($_POST['id_cliente']);
    $id_veiculo = $conn->real_escape_string($_POST['id_veiculo']);
    $id_func    = $conn->real_escape_string($_POST['id_funcionario']);
    $estado     = $conn->real_escape_string($_POST['estado']);
    $obs        = $conn->real_escape_string($_POST['observacoes']);
    
    // Tratamento das datas
    $data_inicio = $conn->real_escape_string(str_replace("T", " ", $_POST['data_inicio']));
    $data_fim    = $conn->real_escape_string(str_replace("T", " ", $_POST['data_fim_prevista']));

    // Atualiza APENAS o aluguer que tem este ID
    $sql = "UPDATE Aluguer SET 
            Id_Cliente = '$id_cliente', 
            Id_Veiculo = '$id_veiculo', 
            Id_Funcionario = '$id_func',
            Estado = '$estado', 
            Data_Inicio = '$data_inicio', 
            Data_Fim_Prevista = '$data_fim',
            Observacoes = '$obs'
            WHERE Id_Aluguer = '$id_aluguer'";

    if ($conn->query($sql) === TRUE) {
        echo "Sucesso";
    } else {
        echo "Erro no MySQL: " . $conn->error;
    }
} else {
    echo "Pedido inválido.";
}
$conn->close();
?>