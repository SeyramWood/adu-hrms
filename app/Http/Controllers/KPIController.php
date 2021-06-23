<?php

namespace App\Http\Controllers;

use App\Http\Requests\AppraisalRequest;
use App\Traits\ManageKPI;
use Illuminate\Http\Request;

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
}
