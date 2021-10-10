<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateArticulos1Table extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('articulos1', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->unsignedBigInteger('profession_id'); 
            $table->foreign('profession_id')->references('id')->on('articulos');
            //php artisan migrate:fresh
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('articulos1');
    }
}
