<?php

namespace App\Http\Controllers;

use App\Traits\Job;
use Illuminate\Http\Request;
use App\Models\EmploymentStatus;

class EmploymentStatusController extends Controller
{
    use Job;

    public function create(Request $request)
    {
        return $this->createEmploymentStatus($request);
    }
    public function edit(Request $request, EmploymentStatus $employmentStatus)
    {
        return $this->updateEmploymentStatus($request, $employmentStatus);
    }
    public function delete(EmploymentStatus $employmentStatus)
    {
        $employmentStatus->delete();
        return response()->json(['deleted' => true]);
    }
    public function deleteEmpStatuses($employmentSatuses)
    {
        EmploymentStatus::whereIn('id', json_decode($employmentSatuses))->delete();
        return response()->json(['deleted' => true]);
    }
}
