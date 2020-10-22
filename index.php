<?php
// converting url to array
$req_uri = $_SERVER['REQUEST_URI'];
$parameters = explode('/',$req_uri);

function respond($data){
  header('Content-Type: application/json');
  echo($data);
}
function abort($state){
  header('Content-Type: application/json');
  header('Status: 400 Bad Request');
  echo json_encode([
    'status'=>'failed'
  ]);
}
//routing
// var_dump($parameters);
if($parameters[1]=='api'){
  switch ($parameters[2]) {
    case 'goods':
      // code...
      respond(
        json_encode([
          ['name'=>'T-shirt ','price'=>10.99,'id'=>1],
          ['name'=>'Pants','price'=>14.99,'id'=>2],
          ['name'=>'Jacket','price'=>19.99,'id'=>3],
          ['name'=>'Shoes','price'=>24.99,'id'=>4],
        ]));
      break;
    case 'checkout':
      if($_SERVER['REQUEST_METHOD']== 'POST')
        respond(json_encode([]));
      break;
    default:
      require('./src/views/index.html');
      // code...
      break;
  }
}else{
  require('./src/views/index.html');
}

?>
