<?php

namespace App\Http\Controllers;

use App\Traits\ManageKPI;
use Illuminate\Http\Request;
use App\Http\Requests\KeyGoalRequest;
use App\Models\SelfAppraisal;

class SelfAppraisalController extends Controller
{
    use ManageKPI;


    public function storeKeyGoal(KeyGoalRequest $request)
    {
        return $this->createSelfAppraisal($request);
    }
    public function storeSelfAppraisal(Request $request)
    {
        return $this->createSelfAppraisal($request);
    }
    public function editUserGoal(Request $request, $appraisal)
    {
        return $this->updateUserGoal($request, $appraisal);
    }
    public function editDepartmentGoal(Request $request, $appraisal)
    {
        return $this->updateDepartmentGoal($request, $appraisal);
    }
    public function editUnitGoal(Request $request, $appraisal)
    {
        return $this->updateUnitGoal($request, $appraisal);
    }
    public function editUserAppraisal(Request $request, $appraisal)
    {
        return $this->updateUserAppraisal($request, $appraisal);
    }
    public function editUserAppraisalMetrics(Request $request, $appraisal, $user)
    {
        return $this->updateUserAppraisalMetrics($request, $appraisal, $user);
    }
    public function deleteUserGoal($appraisal, $goal)
    {
        return $this->destroyUserGoal($appraisal, $goal);
    }
    public function deleteDepartmentGoal($appraisal, $goal)
    {
        return $this->destroyDepartmentGoal($appraisal, $goal);
    }
    public function deleteUnitGoal($appraisal, $goal)
    {
        return $this->destroyUnitGoal($appraisal, $goal);
    }
    public function deleteUserAppraisal($appraisal, $id, $type)
    {
        return $this->destroyUserAppraisal($appraisal, $id, $type);
    }
}
