<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateInvestigadoresProyectosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('investigadores_proyectos', function (Blueprint $table) {
            $table->bigInteger('idProyecto');
            $table->foreign('idProyecto')->references('idProyecto')->on('proyecto_investigaciones');
            $table->bigInteger('Cedula');
            $table->foreign('Cedula')->references('Cedula')->on('investigadores');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('investigadores_proyecto');
    }
}
