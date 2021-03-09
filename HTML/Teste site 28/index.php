<!doctype html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script defer src="JS/index.js"></script>
    <title>Teste Site 28</title>
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
        <form class="container">
            <label for="name" class="container__label">Name</label>
            <input type="text" name="name" id="name" class="container__input">
            <label for="email" class="container__label">Email</label>
            <input type="email" name="email" id="email" class="container__input">
            <button type="submit" class="container__submit">Registrar-se</button>
        </form>
    </main>
</body>
</html>