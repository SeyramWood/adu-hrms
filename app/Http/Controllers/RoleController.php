<?php

namespace App\Http\Controllers;

use App\Models\Role;
use App\Traits\ManageRole;
use Illuminate\Http\Request;

class RoleController extends Controller
{
    use ManageRole;
    public function addNewRole(Request $request)
    {
        return $this->createRole($request);
    }
    public function editRole(Request $request, Role $role)
    {
        return $this->upateRole($request, $role);
    }
    public function deleteRole(Role $role)
    {
        $this->deleteStaffRole(json_decode($role->staff), $role->role);
        $role->delete();
        return response()->json(['deleted' => true]);
    }
    public function deleteRoles($roles)
    {
        $allRoles = Role::whereIn('id', explode(',', $roles))->get();
        for ($i = 0; $i < count($allRoles); $i++) {
            $this->deleteStaffRole(json_decode($allRoles[$i]->staff), $allRoles[$i]->role);
            Role::where('id', $allRoles[$i]->id)->delete();
        }
        return response()->json(['deleted' => true]);
    }
    public function addRoleUser(Request $request, Role $role)
    {
        return $this->createRoleUser($request, $role);
    }

    public function deleteRoleUser(Request $request, Role $role, $staff)
    {
        return $this->destroyRoleUser($request, $role, $staff);
    }
    public function addRolePermission(Request $request, Role $role)
    {
        return $this->createRolePermission($request, $role);
    }
    public function addReportToStaff(Request $request, Role $role)
    {
        return $this->createReportToStaff($request, $role);
    }
    public function deleteReportToStaff(Role $role, $reportTo)
    {
        return $this->destroyReportToStaff($role, $reportTo);
    }
}
