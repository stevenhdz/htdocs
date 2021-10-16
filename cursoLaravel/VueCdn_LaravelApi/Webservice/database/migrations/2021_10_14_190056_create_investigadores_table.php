<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateInvestigadoresTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('investigadores', function (Blueprint $table) {
            $table->id('Cedula');
            $table->string('Nombre');
            $table->string('Apellidos');
            $table->string('Email');
            $table->string('Celular');
            $table->bigInteger('CodigoRol1');
            $table->foreign('CodigoRol1')->references('CodigoRol')->on('rols');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('investigadores');
    }
}
