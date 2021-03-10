<!DOCTYPE html>
<html lang="pt-BR">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="index.css">
    <script defer src="index.js"></script>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
  <title>Databases</title>
</head>

<body>
  <form action="backend.php" method="post" class="container">
    <label for="username">Username</label>
    <input type="text" name="username" id="username">
    <label for="email">Email</label>
    <input type="email" name="email" id="email">
    <label for="country">País</label>
    <input type="text" name="country" id="country">
    <label for="state">Estado</label>
    <select name="state" id="state"></select>
    <button type="submit" id="submit">Registrar-se</button>
  </form>
</body>

</html>