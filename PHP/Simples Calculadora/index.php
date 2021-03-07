<?php

if (isset($_POST['num1']) && isset($_POST['num2'])) {
    switch ($_POST['operador']) {
        case '+':
            $resultado = $_POST['num1'] + $_POST['num2'];
            break;
        case '-':
            $resultado = $_POST['num1'] - $_POST['num2'];
            break;
        case '*':
            $resultado = $_POST['num1'] * $_POST['num2'];
            break;
        case '/':
            $resultado = $_POST['num1'] / $_POST['num2'];
            break;
    }
    
    echo "Resultado = $resultado";
}
