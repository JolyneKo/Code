<?php

// Loops são usados para repetir um bloco de código.

// While loop
// Dado uma condição, caso for verdadeira, ele executa o bloco de código entre chaves, até essa condição for falsa.

$i = 0;

while($i < 10) {
    echo "i: $i\n";
    ++$i;
}

// É preciso modificar o valor para evitar que o loop seja infinito.

// Inicia $i com valor 0, enquanto $i for menor do que 10, vai executar o bloco.
// O bloco incrementa o $i.

// Nesse mesmo sentido, o for loop funciona desse jeito
// For loop inicia um iterador, executa o bloco enquanto uma condição for verdadeira, e incrementa.

// Ele coloca essas três pares dentro dos parênteses, e separa elas com ;
for ($k = 0; $k < 10; $k++) {
    echo "K: $k\n";
}

// Foreach

// Foreach é usado para iterar um array, e guardar cada valor em um valor
$comidas = ["Arroz", "Feijão", "Macarrão"];

// Itera array, guarda cada valor no $comida
foreach ($comidas as $comida) {
    echo "$comida\n";
}

$nums = ["um" => 1, "dois" => 2, "três" => 3];

foreach ($nums as $numKey => $numValue) {
    echo "$numValue ";
    echo "$numKey\n";
}

