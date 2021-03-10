<?php
$username = "jolyneko";
$password = "JEanluc2021;";

$conn = new mysqli("localhost", $username, $password, "testes");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST["username"];
    $email = $_POST["email"];
    $country = $_POST["country"];
    $state = $_POST["state"];
    $queryInsert = "INSERT INTO users01 (Username, Email, Country, State) VALUES ('$username', '$email', '$country', '$state')";
    $conn->query($queryInsert);
}

if ($_SERVER["REQUEST_METHOD"] == "GET") {
    $emails = $conn->query("SELECT DISTINCT Email FROM users01;");

    while($row = $emails->fetch_assoc()) {
        if ($row['Email'] === $_GET['email']) {
            $exists = true;
            break;
        }
    }

    http_response_code($exists ? 404 : 200);
}

$conn->close();