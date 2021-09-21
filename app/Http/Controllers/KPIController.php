<?php

namespace App\Http\Controllers;

use App\Models\Appraisal;
use App\Traits\ManageKPI;
use Illuminate\Http\Request;
use App\Http\Requests\AppraisalRequest;

class KPIController extends Controller
{
    use ManageKPI;

    public function storeAppraisal(AppraisalRequest $request)
    {
        return $this->createAppraisal($request);
    }
    public function updateAppraisal(AppraisalRequest $request, Appraisal $appraisal)
    {
        return $this->saveAppraisal($request, $appraisal);
    }


    public function userAppraisal($appraisal, $user = null)
    {
        return $this->getUserAppraisal($appraisal, $user);
    }
    public function removeAppraisee(Request $request, Appraisal $appraisal)
    {
        $appraisal->staff = json_encode($request->staff);
        $appraisal->save();
        return response()->json(['removed' => true]);
    }

    public function deleteAppraisal(Appraisal $appraisal)
    {
        $appraisal->delete();
        return response()->json(['deleted' => true]);
    }
    public function deleteAppraisals($appraisals)
    {
        Appraisal::whereIn('id', explode(',', $appraisals))->delete();
        return response()->json(['deleted' => true]);
    }
}
