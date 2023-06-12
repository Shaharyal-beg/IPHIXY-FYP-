<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('email')->unique();
            $table->integer('type');
            $table->integer('gender')->nullable();
            $table->string('avatar')->nullable();
            $table->date('dob')->nullable();
            $table->string('city')->nullable();
            $table->string('institute_uni')->nullable();
            $table->string('degree_name')->nullable();
            $table->date('uni_start')->nullable();
            $table->date('uni_end')->nullable();
            $table->string('institute_job')->nullable();
            $table->string('position_name')->nullable();
            $table->string('detail')->nullable();
            $table->date('job_start')->nullable();
            $table->date('job_end')->nullable();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->rememberToken();
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
        Schema::dropIfExists('users');
    }
};
