<?php
$string = "Hello World";
$int = 12;
$float = 3.1415926535;
$boolean = true;
$null = null;
$array = [1, 2, 3, 4, 5];

class Dog {
    private string $nome;
    private int $idade;

    public function __construct($nome, $idade) {
        $this->nome = $nome;
        $this->idade = $idade;
    }

    public function bark() {
        echo '<pre>';
        echo "Bark";
        echo '</pre>';
    }
}

$object = new Dog("Pedro", 12);
$object->bark();
// Resource

$fruits = ['Banana', 'Abacate', 'Mamão'];
array_push($fruits, 'Tomate');
array_pop($fruits);
array_unshift($fruits, 'Tomate');
array_shift($array);
// echo var_dump($fruits);

$texto = '    Hello World    ';
echo trim($texto);
echo strlen($texto);
echo str_word_count($texto);
echo strrev($texto);
echo strpos($texto, "World");
echo str_ireplace($texto, 'world', 'Mars');
echo str_replace($texto, 'World', 'Mars');