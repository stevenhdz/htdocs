<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductoTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('_producto', function (Blueprint $table) {
            $table->bigInteger('Idproducto')->autoIncrement();
            $table->longText('Descripcion');
            $table->string('Titulo_Detalle');
            $table->integer('Nropaginas');
            $table->bigInteger('idP');
            $table->foreign('idP')->references('idProyecto')->on('_proyecto_investigaciones');
            $table->bigInteger('IdRevista');
            $table->foreign('IdRevista')->references('IdRevista')->on('_revista');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('_producto');
    }
}
