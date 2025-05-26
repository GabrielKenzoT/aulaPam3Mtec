<?php 

include_once('conexao.php');

$id = $_GET['id'];

$query = $pdo->query("SELECT * from Comida where id = '$id'");

 $res = $query->fetchAll(PDO::FETCH_ASSOC);

 	for ($i=0; $i < count($res); $i++) { 
      foreach ($res[$i] as $key => $value) {
      }
 		
    $id = $res[$i]['id'];
    $nome_alimento = $res[$i]['nome_alimento'];
    $preco = $res[$i]['preco'];
    $descricao = $res[$i]['descricao'];
    $imagem = $res[$i]['imagem'];


 		}

        if(count($res) > 0){
                $result = json_encode(array('success'=>true, 'id'=>$id, 'nome_alimento'=>$nome_alimento, 'preco'=>$preco, 'descricao'=>$descricao, 'imagem'=>$imagem));

            }else{
                $result = json_encode(array('success'=>false, 'result'=>'0'));

            }
            echo $result;

 ?>