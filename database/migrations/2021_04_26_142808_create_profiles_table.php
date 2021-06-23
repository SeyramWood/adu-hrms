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
            $table->bigInteger('branch_id')->nullable();
            $table->bigInteger('department_id')->nullable();
            $table->string('managers')->nullable();
            $table->string('supervisors')->nullable();
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
