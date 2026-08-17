<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('productos', function (Blueprint $table) {
            $table->bigInteger('Idproducto')->autoIncrement();
            $table->longText('Descripcion');
            $table->string('Titulo_Detalle');
            $table->integer('Nropaginas');
            $table->bigInteger('idP');
            $table->foreign('idP')->references('idProyecto')->on('proyecto_investigaciones');
            $table->bigInteger('IdRevista');
            $table->foreign('IdRevista')->references('IdRevista')->on('revistas');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('productos');
    }
}
