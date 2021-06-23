<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOrganizationMetadataTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('organization_metadata', function (Blueprint $table) {
            $table->id();
            $table->string('logo')->nullable();
            $table->string('name')->nullable();
            $table->string('telephone')->nullable();
            $table->string('email')->nullable();
            $table->string('address')->nullable();
            $table->string('landmark')->nullable();
            $table->string('city')->nullable();
            $table->string('district')->nullable();
            $table->string('region')->nullable();
            $table->string('reg_number')->nullable();
            $table->string('tin')->nullable();
            $table->string('current_staff')->nullable();
            $table->string('pass_staff')->nullable();
            $table->string('total_staff')->nullable();
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
        Schema::dropIfExists('organization_metadata');
    }
}
