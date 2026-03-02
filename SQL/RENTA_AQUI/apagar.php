<?php
// apagar.php
include_once("ligar.php");

if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['id_aluguer'])) {
    $id_aluguer = $conn->real_escape_string($_POST['id_aluguer']);

    // Comando SQL para apagar apenas a linha com o ID específico
    $sql = "DELETE FROM Aluguer WHERE Id_Aluguer = '$id_aluguer'";

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