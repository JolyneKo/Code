<?php
$success = (bool) $_GET["success"];
?>

<!doctype html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title><?= ($success) ? "Sucesso" : "Error"; ?></title>
</head>
<body>
    <header class="header">
        <img src="Images/logo.png" alt="logo" class="header__logo">

        <ul class="header__links">
            <li class="header__link"><a href="/">Home</a></li>
            <li class="header__link"><a href="/"></a>News</li>
            <li class="header__link"><a href="/"></a>Contacts</li>
            <li class="header__link"><a href="/"></a>About Us</li>
            <li class="header__link"><a href="/"></a>API</li>
        </ul>

        <div class="header__bars">
            <div class="header__linha"></div>
            <div class="header__linha"></div>
            <div class="header__linha"></div>
        </div>
    </header>

    <main class="main">
        <div class="container">
            <h1><?= ($success) ? "Sucesso" : "Error"; ?></h1>
            <p><?= ($success) ? 'Retornar para a <a href="/">Página inicial</a>' : "Algum erro ocorreu!" ?></p>
        </div>
    </main>
</body>
</html>