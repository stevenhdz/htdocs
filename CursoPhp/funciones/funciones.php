<?php
$x = 24;
$y = -14;

suma();
echo $z;

function suma() {
	$GLOBALS['z'] = $GLOBALS['x'] + $GLOBALS['y'];
}

//10
