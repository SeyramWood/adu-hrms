<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Appraisal extends Model
{
    use HasFactory;
    protected $guarded = [];

    public function keyGoals()
    {
        // return $this->hasMany(KeyGoal::class);
    }
}
