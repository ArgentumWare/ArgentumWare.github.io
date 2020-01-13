<html>
    <head>
        <title>AuragentumWare</title>
        <link rel="stylesheet" href="/CSS/index.css">
    </head>
    <body>
        <h1>Place an order!</h1>
        <p style="text-align: center;">Order confirmed!</p>
    </body>
</html>

<?php
if (isset($_POST['textdata']))
{
    $data=$_POST['textdata'];
    $fp = fopen('data.txt', 'a');
    fwrite($fp, $data);
    fclose($fp)
}
?>