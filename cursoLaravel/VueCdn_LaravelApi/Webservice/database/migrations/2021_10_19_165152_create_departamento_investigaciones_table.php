<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDepartamentoInvestigacionesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('departamento_investigaciones', function (Blueprint $table) {
            $table->bigInteger('CodigoV')->autoIncrement();
            $table->string('Nombre');
            $table->longText('Ubicación');
            $table->string('Contacto_Tel');
            $table->string('Email');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('departamento_investigaciones');
    }
}
