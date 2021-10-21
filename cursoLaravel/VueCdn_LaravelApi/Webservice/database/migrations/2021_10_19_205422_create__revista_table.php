<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRevistaTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('_revista', function (Blueprint $table) {
            $table->bigInteger('IdRevista')->autoIncrement();
            $table->longText('Nombre');
            $table->string('Pais');
            $table->integer('Detalles_Publicidad');
            $table->bigInteger('idClasificacion');
            $table->foreign('idClasificacion')->references('idClasificacion')->on('_clasificacion__revista');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('_revista');
    }
}
