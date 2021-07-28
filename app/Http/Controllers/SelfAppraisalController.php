<?php

namespace App\Http\Controllers;

use App\Traits\ManageKPI;
use Illuminate\Http\Request;
use App\Http\Requests\KeyGoalRequest;

class SelfAppraisalController extends Controller
{
    use ManageKPI;


    public function storeKeyGoal(KeyGoalRequest $request)
    {
        return $this->createSelfAppraisal($request);
    }
    function storeSelfAppraisal(Request $request)
    {
        return $this->createSelfAppraisal($request);
    }
}
