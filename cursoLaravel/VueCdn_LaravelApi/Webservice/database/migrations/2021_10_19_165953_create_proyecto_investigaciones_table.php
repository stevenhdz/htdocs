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
        Schema::create('proyecto_investigaciones', function (Blueprint $table) {
            $table->bigInteger('idProyecto')->autoIncrement();
            $table->string('nombre');
            $table->longText('detalles');
            $table->dateTime('fechaApertura');
            $table->dateTime('fechaCierre');
            $table->bigInteger('idG');
            $table->foreign('idG')->references('idG')->on('grupo_investigaciones');
            $table->bigInteger('idProg');
            $table->foreign('idProg')->references('IdPrograma')->on('programas');
            $table->bigInteger('CodigoV');
            $table->foreign('CodigoV')->references('CodigoV')->on('departamento_investigaciones');
        });

    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('proyecto_investigaciones');
    }
}
