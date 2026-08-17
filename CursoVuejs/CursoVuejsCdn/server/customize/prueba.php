<?php

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

//NOTE MAC
/* require '/Applications/MAMP/htdocs/CursoMongo/vendor/autoload.php'; */
//NOTE: WINDOWS
require '/opt/lampp/htdocs/CursoMongo/vendor/autoload.php';
trait prueba{

    function addproductos($info, $new){
        try {
            $client = new MongoDB\Client("mongodb://127.0.0.1:27017/"); 
            $data['metodo'] = $info; 
            $data['newText'] = $new;
            $collection = $client->mongophp->details;
            
            $time = new DateTimeZone('EST');
            $datetime = new DateTime();
            $datetime->setTimezone($time);
            $utc = new MongoDB\BSON\UTCDateTime($datetime);
            $data['create'] = $utc;
            $result = $collection->insertOne($data);

            $return = ['result' => 'ok', 'id' => (string)$result->getInsertedId()];
            
        } catch (Exception $th) {
            $return = ['result' => 'error', 'error' => $th];
        }
        return json_encode($return, true);
    }


  

    function listOproductos(){
        try {
            $client = new MongoDB\Client("mongodb://127.0.0.1:27017/"); 
            
            $collection = $client->mongophp->details;

            $return = $collection->find()->toArray();

                foreach ($return as $key ) {
                  $key['_id'];
                }
                $key['_id'];
        } catch (Exception $th) {
            $return = ['result' => 'error', 'error' => $th];
        }
        return json_encode($return, true);

    }


    function listOproduct($info, $new){
        try {
            $client = new MongoDB\Client("mongodb://127.0.0.1:27017/"); 

            $data = [];
            $data['data'] = $info; 
            $data['info'] = $new; 
            
            $collection = $client->mongophp->details;

            $return = $collection->findOne(['_id' => new MongoDB\BSON\ObjectID($new)]);

            $collection->updateOne(
                ["_id" => new MongoDB\BSON\ObjectID($new)],
                ['$set' => $data]
            );
            
            $return = ['result' => 'ok','datos' => $return];
        } catch (Exception $th) {
            $return = ['result' => 'error', 'error' => $th];
        }
        return json_encode($return, true);

    }

//data->id
    function deleteProducts($id){
        try {
            $client = new MongoDB\Client("mongodb://127.0.0.1:27017/"); 
            
            $collection = $client->mongophp->details;

            $return = $collection->deleteOne(['_id' => new MongoDB\BSON\ObjectId($id)]);

            $return = ['result' => 'ok'];
        } catch (Exception $th) {
            $return = ['result' => 'error', 'error' => $th];
        }
        return json_encode($return, true);
    }


    function editProducts($info, $id){
        try {
            $client = new MongoDB\Client("mongodb://127.0.0.1:27017/"); 
            
            $collection = $client->mongophp->details;
            $time = new DateTimeZone('EST');
            $datetime = new DateTime();
            $datetime->setTimezone($time);
            $utc = new MongoDB\BSON\UTCDateTime($datetime);

            $data = (array)$info;
            unset($data['_id']);

            $return = $collection->updateOne(
                ['_id' =>  new MongoDB\BSON\ObjectId($id)],
                ['$set' => ['newText' => $data['newText']]]
            );

            $return = ['result' => 'ok'];
        } catch (Exception $th) {
            $return = ['result' => 'error', 'error' => $th];
        }
        return json_encode($return, true);
    }

}

?>