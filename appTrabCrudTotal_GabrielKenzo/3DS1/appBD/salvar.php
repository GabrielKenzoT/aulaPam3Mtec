<?php 
require_once("conexao.php");
$tabela = 'Comida';

$postjson = json_decode(file_get_contents('php://input'), true);


$nome_alimento = @$postjson['nome_alimento'];
$preco = @$postjson['preco'];
$descricao = @$postjson['descricao'];
$imagem = @$postjson['imagem'];

$res = $pdo->prepare("INSERT INTO $tabela SET nome_alimento = :nome_alimento, preco = :preco, descricao = :descricao, imagem = :imagem");	


$res->bindValue(":nome_alimento", "$nome_alimento");
$res->bindValue(":preco", "$preco");
$res->bindValue(":descricao", "$descricao");
$res->bindValue(":imagem", "$imagem");

$res->execute();

$result = json_encode(array('mensagem'=>'Salvo com sucesso!', 'sucesso'=>true));

echo $result;

?>