<?php

namespace App\Http\Controllers;

use App\Models\Branch;
use App\Models\Position;
use App\Models\Department;
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
        $ids = json_decode($branches);
        for ($i = 0; $i < count($ids); $i++) {
            $branch = Branch::find($ids[$i]);
            $branch->delete();
        }
        return response()->json(['deleted' => true]);
    }
    public function deleteDepartment(Department $department)
    {
        $department->delete();
        return response()->json(['deleted' => true]);
    }
    public function deleteDepartments($departments)
    {
        $ids = json_decode($departments);
        for ($i = 0; $i < count($ids); $i++) {
            $department = Department::find($ids[$i]);
            $department->delete();
        }
        return response()->json(['deleted' => true]);
    }
    public function deletePosition(Position $position)
    {
        $position->delete();
        return response()->json(['deleted' => true]);
    }
    public function deletePositions($positions)
    {
        $ids = json_decode($positions);
        for ($i = 0; $i < count($ids); $i++) {
            $position = Position::find($ids[$i]);
            $position->delete();
        }
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
