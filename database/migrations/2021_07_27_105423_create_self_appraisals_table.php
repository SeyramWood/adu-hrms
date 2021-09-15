<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSelfAppraisalsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('self_appraisals', function (Blueprint $table) {
            $table->id();
            $table->foreignId('appraisal_id')->constrained('appraisals')->onDelete('cascade');
            $table->unsignedBigInteger('user_id', false)->nullable();
            $table->json('goals')->nullable();
            $table->json('achievements')->nullable();
            $table->json('difficulties')->nullable();
            $table->json('initiatives')->nullable();
            $table->json('other_initiatives')->nullable();
            $table->longText('feedback')->nullable();
            $table->json('metrics')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('self_appraisals');
    }
}
