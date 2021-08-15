<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEquipmentAllocationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('equipment_allocations', function (Blueprint $table) {
            $table->id();
            $table->foreignId('equipment_request_id')->constrained('equipment_requests')->onDelete('cascade');
            $table->unsignedBigInteger('user_id', false)->nullable();
            $table->unsignedBigInteger('requester_dpt_id', false)->nullable();
            $table->string('request_name')->nullable();
            $table->string('equipment')->nullable();
            $table->string('model')->nullable();
            $table->string('serial_number')->nullable();
            $table->string('manufacturer')->nullable();
            $table->unsignedBigInteger('quantity', false)->default(0);
            $table->string('approver_initials')->nullable();
            $table->json('dpt_unit_approval')->nullable();
            $table->json('staff_approval')->nullable();
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
        Schema::dropIfExists('equipment_allocations');
    }
}
