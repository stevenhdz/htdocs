<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRevistasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('revistas', function (Blueprint $table) {
            $table->bigInteger('IdRevista')->autoIncrement();
            $table->longText('Nombre');
            $table->string('Pais');
            $table->integer('Detalles_Publicidad');
            $table->bigInteger('idClasificacion');
            $table->foreign('idClasificacion')->references('idClasificacion')->on('clasificacion_revistas');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('revistas');
    }
}
