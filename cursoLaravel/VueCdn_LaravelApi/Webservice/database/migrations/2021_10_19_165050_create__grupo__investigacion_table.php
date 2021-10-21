<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateGrupoInvestigacionTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('_grupo__investigacion', function (Blueprint $table) {
            $table->bigInteger('idG')->autoIncrement();
            $table->longText('Nombre');
            $table->string('Categoria_Minciencias');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('_grupo__investigacion');
    }
}
