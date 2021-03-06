<?php
$isEmailValid = true;
$isPasswordValid = false;
$isEmpty = false;

if ($isEmailValid && $isPasswordValid && !$isEmpty) {
    echo "Registrando...\n";
} elseif ($isEmpty) {
    echo "Preencha os campos\n";
} elseif (!$isEmailValid) {
    echo "Coloque um Email válido...\n";
} else {
    echo "Coloque uma senha válida\n";
}

$previsao = "Sol";

switch ($previsao) {
    case 'Chuva':
        echo "Tire as roupas do varal!\n";
        break;
    case 'Sol':
        echo "Coloque as roupas no varal\n";
        break;
    case 'Neve':
        echo "Coloque os casacos!\n";
        break;
    default:
        echo "Não faça nada\n";
}