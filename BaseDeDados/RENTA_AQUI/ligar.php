<?php
// Configurações de acesso ao MySQL Workbench
$servername = "127.0.0.1";
$username   = "root";
$password   = "hugo1234"; // Confirmaste que esta é a tua senha do Workbench
$dbname     = "RentaAqui"; // Nome exato da base de dados (Schema) no Workbench
$port       = 3306;        // A porta que confirmaste estar a usar

// Criar a ligação incluindo explicitamente a porta
$conn = new mysqli($servername, $username, $password, $dbname, $port);

// Verificar se houve erro na ligação
if ($conn->connect_error) {
    // Se der erro de "Access Denied", verifica se a senha 'hugo1234' está correta
    die("Falha na ligação: " . $conn->connect_error);
}

// Definir o charset para evitar problemas com acentos (ex: observações)
$conn->set_charset("utf8mb4");

// Nota: O "echo" foi removido para não aparecer texto estranho no teu formulário
?>