<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('lessons', function (Blueprint $table) {
            $table->id();
            $table-> unsignedBigInteger("teacher_id");
            $table-> unsignedBigInteger("list_id");
            $table-> string("title");
            $table-> string("pdf");
            $table-> string("vedio");
            $table-> text("description");
            $table-> text("Keywords");
            $table->foreign('teacher_id')->references('id')->on('users')->onDelete('cascade');
            $table->foreign('list_id')->references('id')->on('lists')->onDelete('cascade');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('lessons');
    }
};
