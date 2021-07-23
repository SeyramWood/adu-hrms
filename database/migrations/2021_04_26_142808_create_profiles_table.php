<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProfilesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('profiles', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained('users')->onDelete('cascade');
            $table->unsignedBigInteger('branch_id', false)->nullable();
            $table->unsignedBigInteger('department_id', false)->nullable();
            $table->unsignedBigInteger('unit_id', false)->nullable();
            $table->unsignedBigInteger('position_id', false)->nullable();
            $table->string('employee_status')->default('current');
            $table->json('personal_details')->nullable();
            $table->json('contact_details')->nullable();
            $table->json('emergency_contacts')->nullable();
            $table->json('job')->nullable();
            $table->json('report_to')->nullable();
            $table->json('qualifications')->nullable();
            $table->json('memberships')->nullable();
            $table->string('slug')->nullable();
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
        Schema::dropIfExists('profiles');
    }
}
