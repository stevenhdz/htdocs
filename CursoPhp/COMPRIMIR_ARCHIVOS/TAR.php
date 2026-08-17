<?php

//PHAR COMPRIMIDO 
   $carpeta = archivos;
   $root = __dir__.'/'.$carpeta;
   echo $root;
   
   if(!file_exists($root)) mkdir($root, 0777, true);
 
   $archive_name = $root.'reacher.tar';
   $dir_path = $root;
 
   $archive = new PharData($archive_name);
   $archive->buildFromDirectory($dir_path);
   $archive->compress(Phar::GZ);