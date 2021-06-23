<?php

namespace App\Http\Controllers;

use App\Models\WorkShift;
use App\Traits\Shift;
use Illuminate\Http\Request;

class WorkShiftController extends Controller
{
    use Shift;
    public function store(Request $request)
    {
        return $this->createWorkShift($request);
    }
    public function edit(Request $request, WorkShift $workShift)
    {
        return $this->updateWorkShift($request, $workShift);
    }
    public function deleteShift(WorkShift $workShift)
    {
        return $this->destroyShift($workShift);
    }
    public function deleteShifts($workShifts)
    {
        return $this->destroyShifts($workShifts);
    }
}
