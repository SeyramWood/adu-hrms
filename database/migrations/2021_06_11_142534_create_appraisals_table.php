<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAppraisalsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('appraisals', function (Blueprint $table) {
            $table->id();
            $table->string('name')->nullable();
            $table->string('period')->nullable();
            $table->string('sap_timestamp')->nullable();
            $table->string('np_timestamp')->nullable();
            $table->string('description')->nullable();
            $table->string('branches')->nullable();
            $table->string('departments')->nullable();
            $table->string('roles')->nullable();
            $table->text('staff')->nullable();
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
        Schema::dropIfExists('appraisals');
    }
}
