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
    public function update(AppraisalRequest $request, $id)
    {
        //
    }

    public function destroy($id)
    {
        //
    }

    public function userAppraisal($appraisal, $user = null)
    {
        // dd($appraisal);
        return $this->getUserAppraisal($appraisal, $user);
    }
}
