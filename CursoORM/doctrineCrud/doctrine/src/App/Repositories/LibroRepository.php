<?php

namespace App\Repositories;

use App\Entities\Libro;
use Doctrine\ORM\EntityRepository;


class LibroRepository extends EntityRepository {
   
    public function findBookForCode(string $titulo){
        return $this->_em->getRepository(Libro::class)->findOneBy(["titulo" => $titulo]);
    }
}