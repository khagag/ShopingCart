<?php
// converting url to array
$req_uri = $_SERVER['REQUEST_URI'];
$parameters = explode('/',$req_uri);

//routing

require('./src/views/index.html');

?>
