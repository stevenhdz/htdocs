<!DOCTYPE html>
<html lang="en">
<!-- 100 100 100 100 desktop
     99 100 100 100 mobile
<label for="s">Arama...</label>
<input type="text" id="s" name="s" value="Arama..." onfocus="if (this.value == 'Arama...') {this.value = '';}" onblur="if (this.value == '') {this.value = 'Arama...';}">

<label>Input here:
    <input type='text' name='theinput' id='theinput'>
</label>

<label id="lbl-main-menu-mob">Select Item</label>
<select id="main-menu-mob" aria-labelledby="lbl-main-menu-mob">

<label for="comment">Enter Comment</label>
<textarea id="comment" name="comment" cols="45" rows="8" maxlength="65525" required="required"></textarea>
-->
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="author" content="SLTECHNOLOGY">
    <meta name="copyright" content="SLTECHNOLOGY">
    <meta name="description" content="Esto es un CURL">
    <meta name=”robots” content=”index, follow”>
    <meta name="theme-color" content="#2bff00"> <!-- pwa + mobile -->
    <title>Document</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">
        <link rel="stylesheet" href="backup.css">
</head>

<body>
    <p> BOOSTRAP + PHP + CURL conectados a API Generico
    falta: falta get id y delete
    </p>

    <?php
   if(isset($_POST['token'])){
        $method = $_POST['method'];  
        $api = $_POST['api'];  
        $type = $_POST['type'];  
        $token = $_POST['token'];  
        $json = $_POST['json'];  
        
        if($method == "" || $api == "" || $type == "" || $token == ""){
            $campos = array();
             array_push($campos, "Asegurese de llenar todo"); 
            $root = "";  
        }elseif ($method == "post" || $method == "get" || $method == "getid" || $method == "put" || $method == "delete"){
            $root = "http://localhost:8888/CursoPhp/cURL/cURLgenerica/generico.php";
        }else{
            $root = "";
        }
            if(count($campos) > 0){
                 echo "<form class='form1'><div class='error'>";
                for($i = 0; $i < count($campos); $i++){
                    echo "<li>".$campos[$i]."</i>";
                }
            }else{
                echo "<form class='form1'><div class='correcto'>
                                Datos correctos";   
             }
        echo "</div></form>";
    }
?>

<form action="<?php echo $root?>" method="POST">
        <div class="container">
            <div class="row">
                <div class="col-sm-12 col-md-12 col-lg-12">
                    <nav class="navbar navbar-dark bg-dark">
                        <div class="container">
                          <p class="modal-title" style="color:#FFFFFF;">Generico</p>
                        </div>
                      </nav>

                    <select name="method" class="form-select" aria-label="Default select example">
                        <option value="">Elige un metodo</option>
                        <option value="post"<?php if($method == "post") echo "selected"?>>post</option>
                        <option value="get"<?php if($method == "get") echo "selected"?>>get</option>
                        <option value="get"<?php if($method == "get") echo "selected"?>>get</option>
                        <option value="put"<?php if($method == "put") echo "selected"?>>put</option>
                        <option value="delete"<?php if($method == "delete") echo "selected"?>>delete</option>
                    </select>

                    <select name="api" class="form-select" aria-label="Default select example">
                        <option value="">Elige un Api</option>
                        <option value="store"<?php if($api == "store") echo "selected"?>>store</option>
                        <option value="user"<?php if($api == "user") echo "selected"?>>user</option>
                        <option value="users"<?php if($api == "users") echo "selected"?>>users</option>
                        <option value="update"<?php if($api == "update") echo "selected"?>>update</option>
                        <option value="destroy"<?php if($api == "destroy") echo "selected"?>>destroy</option>
                    </select>


                    <select name="type" class="form-select" aria-label="Default select example">
                        <option value="">Elige un Tipo</option>
                        <option value="json"<?php if($type == "json") echo "selected"?>>application/json</option>
                    </select>
                    <!-- <input class="form-control" type="text" placeholder="method" name="method"> -->
                   <!--  <input class="form-control" type="text" placeholder="api" name="api"> -->
                    <!-- <input class="form-control" type="text" placeholder="type" name="type"> -->
                    
                    
                    <label class="form-label">Pass:
                        <input class="form-control" type="password" placeholder="token" id="token" name="token" value="<?php echo $token?>">
                    </label>
                    <label for="json" class="form-label">Json</label>
                    <textarea class="form-control" placeholder="JSON" id="json" name="json" cols="30" rows="10"><?php echo $json?></textarea> 
                    <!-- <input class="form-control" type="text" placeholder="name" name="name">
                    <input class="form-control" type="text" placeholder="email" name="email">
                    <input class="form-control" type="password" placeholder="password" name="password"> -->
                    <br>
                    <button class="form-control btn btn-<?php if($root == ""){echo "secondary";}else{echo "danger invisible";} ?>">Comprobar</button>
                    <?php
                        if($root != ""){
                            ?> 
                            <br>
                            <input class="form-control btn btn-primary" type="submit">
                            <?php
                        }
                    ?>                           
                </div>
            </div>
        </div>
    </form>
</body>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"></script>
    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
</html>