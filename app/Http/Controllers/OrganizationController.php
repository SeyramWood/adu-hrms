<?php

namespace App\Http\Controllers;

use App\Models\Branch;
use App\Models\Position;
use App\Models\Department;
use App\Models\Unit;
use App\Traits\Organization;
use Illuminate\Http\Request;

class OrganizationController extends Controller
{
    use Organization;
    public function addBranch(Request $request)
    {
        return $this->createBranch($request);
    }

    public function addDepartment(Request $request)
    {
        return $this->createDepartment($request);
    }
    public function addUnit(Request $request)
    {
        return $this->createUnit($request);
    }
    public function addPosition(Request $request)
    {
        return $this->createPosition($request);
    }

    public function editBranch(Request $request, Branch $branch)
    {
        return $this->updateBranch($request, $branch);
    }
    public function editDepartment(Request $request, Department $department)
    {
        return $this->updateDepartment($request, $department);
    }
    public function editUnit(Request $request, Unit $unit)
    {
        return $this->updateUnit($request, $unit);
    }
    public function editPosition(Request $request, Position $position)
    {
        return $this->updatePosition($request, $position);
    }

    public function deleteBranch(Branch $branch)
    {
        $branch->delete();
        return response()->json(['deleted' => true]);
    }
    public function deleteBranches($branches)
    {
        Branch::whereIn('id', json_decode($branches))->delete();
        return response()->json(['deleted' => true]);
    }
    public function deleteDepartment(Department $department)
    {
        $department->delete();
        return response()->json(['deleted' => true]);
    }

    public function deleteUnit(Unit $unit)
    {
        $unit->delete();
        return response()->json(['deleted' => true]);
    }

    public function deleteDepartments($departments)
    {

        Department::whereIn('id', json_decode($departments))->delete();
        return response()->json(['deleted' => true]);
    }
    public function deleteUnits($units)
    {
        Unit::whereIn('id', json_decode($units))->delete();
        return response()->json(['deleted' => true]);
    }
    public function deletePosition(Position $position)
    {
        $position->delete();
        return response()->json(['deleted' => true]);
    }
    public function deletePositions($positions)
    {
        Position::whereIn('id', json_decode($positions))->delete();
        return response()->json(['deleted' => true]);
    }

    public function editBrandLogo(Request $request)
    {
        return $this->updateBrandLogo($request);
    }
    public function editMetadata(Request $request)
    {
        return $this->updateMetadata($request);
    }
}
