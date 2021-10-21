<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateInvestigadoresProyectoTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('_investigadores__proyecto', function (Blueprint $table) {
            $table->bigInteger('idProyecto');
            $table->foreign('idProyecto')->references('idProyecto')->on('_proyecto_investigaciones');
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
        Schema::dropIfExists('_investigadores__proyecto');
    }
}
