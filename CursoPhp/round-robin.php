<?php

  $ap = array();
  $users = array('Steven', 'Camila', 'Julieth','Alex');

  for ($i = 0, $max=count($users); $i < $max; $i++) {
    for($j = $i+1; $j < $max; $j++) {
      $ap[] = array($users[$i], $users[$j]);
    }
  }

  echo json_encode($ap);

?>