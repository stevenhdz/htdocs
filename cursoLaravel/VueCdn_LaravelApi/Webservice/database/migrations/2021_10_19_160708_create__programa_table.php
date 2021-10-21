<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProgramaTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('_programa', function (Blueprint $table) {
            $table->bigInteger('IdPrograma')->autoIncrement();
            $table->longText('Nombre');
            $table->bigInteger('idF');
            $table->foreign('idF')->references('idFacultad')->on('facultad');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('_programa');
    }
}
