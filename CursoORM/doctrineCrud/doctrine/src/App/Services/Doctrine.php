<?php

namespace App\Services;

use Doctrine\ORM\EntityManager;
use Doctrine\ORM\Tools\Setup;

class Doctrine {
    public $em = null;

    public function __construct($connection) {
        $paths =  [
            rtrim(__DIR__ . "/../Entities"),
            rtrim(__DIR__ . "/../Repositories"),
        ];

        $isDevMode = true;

        $config = Setup::createAnnotationMetadataConfiguration($paths, $isDevMode);
        $this->em = EntityManager::create($connection, $config);
    }
    
}