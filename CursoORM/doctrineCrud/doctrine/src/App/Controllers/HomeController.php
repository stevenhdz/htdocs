<?php

namespace App\Controllers;

use App\Entities\Libro;
use App\Entities\Vendedor;
use App\Services\Doctrine;
use DateTime;
use DateTimeZone;
use Exception;
use Twig\Environment;

class HomeController {

    public function index(Doctrine $doctrine) {
        var_dump($doctrine);
    }

    public function insert(Doctrine $doctrine, Environment $twig) {
        
        try {
            $errors = [];
            $msg =  [];
            if (isset($_POST["btn_guardar"])) {
                if (empty($_POST['titulo'])) {
                    $errors[] = "Se requiere titulo !";
                }
                if (empty($_POST['isbn'])) {
                    $errors[] = "Se requiere isbn !";
                }
                if (empty($_POST['fechaIngreso'])) {
                    $errors[] = "Se requiere fechaIngreso !";
                }
                if (empty($_POST['estado'])) {
                    $errors[] = "Se requiere estado !";
                }
                if (empty($_POST['disponible'])) {
                    $errors[] = "Se requiere si esta disponible !";
                }
                if (empty($_POST['autor'])) {
                    $errors[] = "Se requiere autor !";
                }
                if (empty($_POST['anio'])) {
                    $errors[] = "Se requiere año !";
                }

                if(empty($errors)){
                    $titulo = filter_input(INPUT_POST, "titulo", FILTER_SANITIZE_STRING);
                    $isbn = filter_input(INPUT_POST, "isbn");
                    $fechaIngreso = filter_input(INPUT_POST, "fechaIngreso");
                    $estado = filter_input(INPUT_POST, "estado", FILTER_SANITIZE_STRING);
                    $disponible = filter_input(INPUT_POST, "disponible");
                    $autor = filter_input(INPUT_POST, "autor", FILTER_SANITIZE_STRING);
                    $anio = filter_input(INPUT_POST, "anio", FILTER_SANITIZE_NUMBER_INT);
                    
                    $libro = new Libro();
                    $libro->setTitulo($titulo);
                    $libro->setIsbn($isbn);
                    $libro->setEstado($estado);
                    $libro->setFechaIngreso(new DateTime($fechaIngreso, new DateTimeZone("America/Bogota")));
                    $libro->setDisponible(isset($_POST['disponible']) ? true : false);
                    $libro->setAutor($autor);
                    $libro->setAnio($anio);
                    $doctrine->em->persist($libro);
                    $doctrine->em->flush();
                    $msg[] = "A SIDO GUARDADO";
                }
                
            }  
            echo $twig->render("insert_book.twig",['errors' => $errors, "book" => $_POST , 'msg' => $msg ]);
        } catch (Exception $ex) {
            var_dump($ex);
        }
    }

    public function findAll(Doctrine $doctrine, Environment $twig) {
        $libros = $doctrine->em->getRepository('App\Entities\Libro')->findAll();
        foreach ($libros as $v){
            echo "Libro con id {$v->getId()} : {$v->getTitulo()} <br>"; 
        }

        $twig->render("findAll_book.twig",['libros' => $libros]);
    }

    public function findOne(Doctrine $doctrine, int $id) {
        $libros = $doctrine->em->getRepository(Libro::class)->find($id);
        if($libros){
            var_dump($libros);
        }else{
            echo 'NO EXISTE';
        }
    }

    public function deleteOnes(Doctrine $doctrine, Environment $twig) {
       try {


            if (!empty($_POST['id'])) {
                $libros = $doctrine->em->find(Libro::class,$_POST['id']);
                if($libros){
                  
                    $msg =  [];
                    if (isset($_POST["btn_guardar"])) {
                        if(empty($errors)){
                            $doctrine->em->remove($libros);
                            $doctrine->em->flush();
                            $msg[] = "A SIDO eliminado";
                        }
                    }

                    
                }else{
                    echo 'NO EXISTE';
                }
            }else{
                $errors = [];
                if (empty($_POST['id'])) {
                    $errors[] = "Se requiere id a eliminar !";
                }
            echo $twig->render("delete_book.twig",['errors' => $errors, "book" => $_POST , 'msg' => $msg ]);
        }
            
       } catch (Exception $th) {
           echo $th->getMessage();
       }

    }

    public function updateOne(Doctrine $doctrine, int $id, Environment $twig) {

        try {
            $libros = $doctrine->em->getRepository(Libro::class)->find($id);
           
            if($libros){
               $errors = [];
               $msg =  [];
               if (isset($_POST["btn_guardar"])) {
                       
                   if (empty($_POST['titulo'])) {
                       $errors[] = "Se requiere titulo !";
                   }
                   if (empty($_POST['isbn'])) {
                       $errors[] = "Se requiere isbn !";
                   }
                   if (empty($_POST['fechaIngreso'])) {
                       $errors[] = "Se requiere fechaIngreso !";
                   }
                   if (empty($_POST['estado'])) {
                       $errors[] = "Se requiere estado !";
                   }
                   if (empty($_POST['disponible'])) {
                       $errors[] = "Se requiere si esta disponible !";
                   }
                   if (empty($_POST['autor'])) {
                       $errors[] = "Se requiere autor !";
                   }
                   if (empty($_POST['anio'])) {
                       $errors[] = "Se requiere año !";
                   }

               if(empty($errors)){
                    $titulo = filter_input(INPUT_POST, "titulo", FILTER_SANITIZE_STRING);
                    $isbn = filter_input(INPUT_POST, "isbn");
                    $fechaIngreso = filter_input(INPUT_POST, "fechaIngreso");
                    $estado = filter_input(INPUT_POST, "estado", FILTER_SANITIZE_STRING);
                    $disponible = filter_input(INPUT_POST, "disponible");
                    $autor = filter_input(INPUT_POST, "autor", FILTER_SANITIZE_STRING);
                    $anio = filter_input(INPUT_POST, "anio", FILTER_SANITIZE_NUMBER_INT);
                    $libros->setTitulo($titulo);
                    $libros->setIsbn($isbn);
                    $libros->setEstado($estado);
                    $libros->setFechaIngreso(new DateTime($fechaIngreso, new DateTimeZone("America/Bogota")));
                    $libros->setDisponible(isset($_POST['disponible']) ? true : false);
                    $libros->setAutor($autor);
                    $libros->setAnio($anio);
                    $doctrine->em->persist($libros);
                    $doctrine->em->flush();
                    $msg[] = "A SIDO ACTUALIZADO";
                }  
            }  
            echo $twig->render("update_book.twig",['errors' => $errors, "book" => $_POST , 'msg' => $msg ]);

        }else{
            echo 'NO EXISTE';
        }
                
            
        } catch (Exception $th) {
            echo $th->getMessage();
        }




     }

     public function findCode(Doctrine $doctrine, string $titulo) {
        try {
             $libros = $doctrine->em->getRepository(Libro::class)->findBookForCode($titulo);
             if($libros){
                var_dump($libros);
            }else{
                echo 'NO EXISTE';
            }
        } catch (Exception $th) {
            echo $th->getMessage();
        }
     }


}