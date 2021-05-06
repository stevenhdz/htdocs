<?php
require 'vendor/autoload.php';
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div>
    <form method="post" action="">
        <input type="text" name="text">
        <input type="text" name="text2">
        <input type="text" name="country">
        <input type="submit" value="Save" name="submit">
    </form>
    </div>
    <br>
    <div>
        <form action="" method="post">
            <span>show</span>
            <input type="submit" name="show" value="Ver todos">
        </form>
        <form action="" method="post">
            <span>show1</span>
            <input type="submit" name="show1" value="Ver uno">
            <input type="text" name="id">
        </form>
        <form action="" method="post">
            <span>update</span>
            <input type="submit" name="updateone" value="Actualizar uno">
        </form>
        <form action="" method="post">
            <span>update all</span>
            <input type="submit" name="update" value="Actualizar un registro en varios">
        </form>
        <form action="" method="post">
            <span>delete</span>
            <input type="submit" name="deleteone" value="Delete">
            <input type="text" name="id">
        </form>
        <form action="" method="post">
            <span>delete all</span>
            <input type="submit" name="delete" value="Delete all">
        </form>
        <form action="" method="post">
            <span>Buscar regex</span>
            <input type="submit" name="regex" value="Buscar con expresiones regex">
        </form>
        <form action="" method="post">
            <span>Aggregation</span>
            <input type="submit" name="aggregation" value="Agregar algo mas">
        </form>
        <form action="" method="post">
            <span>Upsert</span>
            <input type="submit" name="upsert" value="sss">
        </form>
        <form action="" method="post">
            <span>Replace</span>
            <input type="submit" name="replace" value="replace">
        </form>
        <br>
        <br>
    </div>
</body>
</html>
<?php
$client = new MongoDB\Client("mongodb://127.0.0.1:27017/");
$collection = $client->mongophp->details;

//insert iD 
if(isset($_POST['submit'])){
    $text = $_POST['text'];
    $text2 = $_POST['text2'];
    $text3= $_POST['country'];
    $result = $collection->insertOne(['newText'=> $text,'newText2'=> $text2,'country'=> $text3]);
    echo 'insert: '.$result->getInsertedId();
}

//Find all
if($_POST['show']){
    $result = $collection->find()->toArray();
    foreach($result as $temp){
        echo 'Nombres: '.$temp['newText'];
        echo '<br>';
        echo 'Apellidos: '.$temp['newText2'];
        echo '<br>';
        echo 'Ciudad: '.$temp['country'];
        echo '<br>';
        echo 'Id: '. $temp['_id'];
        echo '<br>';
        echo '<br>';
    }
}

//find one
if($_POST['show1']){
    $document = $collection->findOne(['_id' => new MongoDB\BSON\ObjectID($_POST['id'])]);
    var_dump($document['newText']);
    echo '<br>';
}

//update one
if($_POST['updateone']){
    $updateResult = $collection->updateOne(
        ['newText' => 'alex'],
        ['$set' => ['country' => 'asasa']]
    );
    printf("Matched %d document(s)\n", $updateResult->getMatchedCount());
    echo '<br>';
    printf("Modified %d document(s)\n", $updateResult->getModifiedCount());
}


//update all
if($_POST['update']){
    $updateResult = $collection->updateMany(
        ['newText' => 'alex'],
        ['$set' => ['country' => '111']]
    );
    echo '<br>';
    printf("Matched %d document(s)\n", $updateResult->getMatchedCount());
    echo '<br>';
    printf("Modified %d document(s)\n", $updateResult->getModifiedCount());
}

//delete one
if($_POST['deleteone']){
    $document = $collection->deleteOne(['_id' => new MongoDB\BSON\ObjectID($_POST['id'])]);
    printf("Deleted %d document(s)\n", $document->getDeletedCount());
    echo '<br>';
}

//delete all
if($_POST['delete']){
    $deleteResult = $collection->deleteMany(['newText' => '*']);
    printf("Deleted %d document(s)\n", $deleteResult->getDeletedCount());
}



//regex
if($_POST['regex']){
$cursor = $collection->find([
    'newText' => new MongoDB\BSON\Regex('^alex', 'i'), //donde comienze con alex
    'newText2' => 'alex2', //donde comienze con alex2
]);

foreach ($cursor as $document) {
   printf("%s: %s, %s\n", $document['_id'], $document['newText'], $document['newText2']);
   echo '<br>';
}
}


//add TODO: DKDKD
if($_POST['aggregation']){
$cursor = $collection->aggregate([
    ['$group' => ['_id' => '$state', 'newText' => ['$sum' => 1]]],
    ['$sort' => ['count' => -1]],
    ['$limit' => 50],
]);

foreach ($cursor as $state) {
    printf("%s has %d zip codes\n", $state['_id'], $state['newText']);
}
}



//upsert
if($_POST['upsert']){

$updateResult = $collection->replaceOne(
    ['newText' => 'alex'],
    ['newText' => 'alex32', 'newText2' => 'alex2']
);

printf("Matched %d document(s)\n", $updateResult->getMatchedCount());
printf("Modified %d document(s)\n", $updateResult->getModifiedCount());
}



//replace
$updateResult = $collection->updateOne(
    ['newText' => null], //busca
    ['$set' => ['newText2' => 'alex34444']], //remplaza
    ['upsert' => true]
);

printf("Matched %d document(s)\n", $updateResult->getMatchedCount());
printf("Modified %d document(s)\n", $updateResult->getModifiedCount());
printf("Upserted %d document(s)\n", $updateResult->getUpsertedCount());

$upsertedDocument = $collection->findOne([
    '_id' => $updateResult->getUpsertedId(),
]);

var_dump($upsertedDocument);

?>

