<?php

namespace App\Http\Controllers;

use App\Traits\ManageKPI;
use Illuminate\Http\Request;
use App\Http\Requests\KeyGoalRequest;

class KeyGoalController extends Controller
{
    use ManageKPI;


    public function store(KeyGoalRequest $request)
    {
        return $this->createKeyGoal($request);
    }
}
