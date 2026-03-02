<?php
// listar.php
include_once("ligar.php");
header('Content-Type: application/json');

// O "ORDER BY Id_Aluguer DESC" é o que garante que o mais novo fica SEMPRE no topo!
$sql = "SELECT Id_Aluguer, Id_Cliente, Id_Veiculo, Id_Funcionario, Estado, Data_Inicio, Data_Fim_Prevista, Observacoes 
        FROM Aluguer 
        ORDER BY Id_Aluguer DESC";

$result = $conn->query($sql);
$alugueres = array();

if ($result && $result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $alugueres[] = $row;
    }
}
echo json_encode($alugueres);
$conn->close();
?>