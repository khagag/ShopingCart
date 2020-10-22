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
  $data = [
    ['name'=>'T-shirt ','price'=>10.99,'id'=>0],
    ['name'=>'Pants','price'=>14.99,'id'=>1],
    ['name'=>'Jacket','price'=>19.99,'id'=>2],
    ['name'=>'Shoes','price'=>24.99,'id'=>3],
  ];
  switch ($parameters[2]) {
    case 'goods':
      // code...
      respond(
        json_encode($data));
      break;
    case 'checkout':
      $subtotal = $s_discount =$t_discount=$total = 0.0;
      if($_SERVER['REQUEST_METHOD']== 'POST'){
        foreach($_POST['items'] as $item){
          $subtotal+=$item->count * $data[$item->id]->price;
          if($data[$item->id] == 3){
            $s_discount+=$item->count * $data[$item->id]->price * 0.1;
          }else if($data[$item->id] == 0){
            $m = floor($data[$item->id] / 3);
            $t_discount += $m * $data[$item->id];
          }
        }
      }
      $tax = $subtotal * 0.14;
      $total = $subtotal - $s_discount - $t_discount - $tax;
        respond(json_encode([
          'success'=>true,
          'total'=>$total,
          'subtotal'=>$subtotal,
          's_discount'=>$s_discount,
          't_discount'=>$t_discount,
          'tax' => $tax
        ]));
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
