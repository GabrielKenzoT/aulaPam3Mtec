<?php 

include_once('conexao.php');

$postjson = json_decode(file_get_contents('php://input'), true);


$query = $pdo->prepare("SELECT * from Comida");

$query->execute();

$res = $query->fetchAll(PDO::FETCH_ASSOC);

for ($i=0; $i < count($res); $i++) { 
    foreach ($res[$i] as $key => $value) {  }      

    $dados[] = array(
        'id' => $res[$i]['id'],
        'nome_alimento' => $res[$i]['nome_alimento'],
        'preco' => $res[$i]['preco'],      
        'descricao' => $res[$i]['descricao'], 
        'imagem' => $res[$i]['imagem']
       
                         
    );

    }

   if(count($res) > 0){
           $result = json_encode(array('success'=>true, 'result'=>$dados));

       }else{
           $result = json_encode(array('success'=>false, 'result'=>'0'));

       }

echo $result;

?>