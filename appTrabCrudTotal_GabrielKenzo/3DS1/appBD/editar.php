<?php 

include_once('conexao.php');

$postjson = json_decode(file_get_contents("php://input"), true);

 $query = $pdo->prepare("UPDATE Comida SET nome_alimento = :nome_alimento, preco = :preco, descricao = :descricao, imagem =:imagem WHERE id = :id ");
  
       $query->bindValue(":nome_alimento", $postjson['nome_alimento']);
       $query->bindValue(":preco", $postjson['preco']);
       $query->bindValue(":descricao", $postjson['descricao']);
      $query->bindValue(":imagem", $postjson['imagem']);
       $query->bindValue(":id", $postjson['id']);
      
       $query->execute();
             
  
      if($query){
        $result = json_encode(array('success'=>true));
  
        }else{
        $result = json_encode(array('success'=>false));
    
        }
     echo $result;


?>

