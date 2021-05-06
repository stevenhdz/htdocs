<?php

function checkNum($number) {
    if($number>1) {
      throw new Exception($number);
    }
    return true;
}

  try {
    checkNum(2);
    echo 'If you see this, the number is 1 or below';
  }
  catch(Throwable $t){
    echo '<br> <pre>Exceptions: </pre>';
    echo '<p style="background-color:powderblue;">Messaged:</p> '.$t->getMessage().
    '<br> <p style="background-color:powderblue;">Linea:</p> '.$t->getLine().
    '<br> <p style="background-color:powderblue;">Previos:</p>'.$t->getPrevious().
    '<br> <p style="background-color:powderblue;">Codigo:</p> '.$t->getCode().
    '<br> <p style="background-color:powderblue;">Archivo:</p> '.$t->getFile().
    '<br> <p style="background-color:powderblue;">Trace:</p> '.$t->getTrace().
    '<br> <p style="background-color:powderblue;">Trace as string:</p>'.$t->getTraceAsString().
    '<br> <p style="background-color:powderblue;">string:</p>'.$t->__toString().
    '<br> <p style="background-color:powderblue;">Construct:</p>'.$t->__construct(); //php 7
  }
  //catch exception
  catch(Exception $e) {
    echo '<br>';
    echo 'Message: ' .$e->getMessage().
    '<br> Linea: '.$e->getLine().
    '<br> Previos:'.$e->getPrevious().
    '<br> Codigo: '.$e->getCode().
    '<br> Archivo: '.$e->getFile().
    '<br> Trace: '.$e->getTrace().
    '<br> Trace as string:'.$e->getTraceAsString(); //php 5
  }
  finally{
      echo '<br>';
      echo '<br>'.'hola';
  }

?>