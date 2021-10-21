<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProyectoInvestigacionesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('_proyecto_investigaciones', function (Blueprint $table) {
            $table->bigInteger('idProyecto')->autoIncrement();
            $table->string('nombre');
            $table->longText('detalles');
            $table->dateTime('fechaApertura');
            $table->dateTime('fechaCierre');
            $table->bigInteger('idG');
            $table->foreign('idG')->references('idG')->on('_grupo__investigacion');
            $table->bigInteger('idProg');
            $table->foreign('idProg')->references('IdPrograma')->on('_programa');
            $table->bigInteger('CodigoV');
            $table->foreign('CodigoV')->references('CodigoV')->on('_departamento__investigacion');
        });

    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('_proyecto_investigaciones');
    }
}
