<?php

namespace App\Traits;

use App\Models\Role;
use App\Models\User;
use App\Models\Profile;
use App\Models\Permission;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\DB;

/**
 * ManageRole
 */
trait ManageRole
{

  public function getUserRoles()
  {
    $roles = DB::table('roles')
      ->orderBy('id', 'desc')
      ->get();
    for ($i = 0; $i < count($roles); $i++) {
      $roles[$i]->staff = $this->getRoleUsers(json_decode($roles[$i]->staff));
    }
    return $roles;
  }
  public function getRoles()
  {
    $roles = DB::table('roles')
      ->orderBy('id', 'desc')
      ->get();
    for ($i = 0; $i < count($roles); $i++) {
      $roles[$i]->staff = Profile::whereIn('user_id', json_decode($roles[$i]->staff))
        ->select(
          'user_id',
          'personal_details->avatar as avatar',
          'personal_details->title as title',
          'personal_details->lastName as lastName',
          'personal_details->firstName as firstName',
          'personal_details->firstName as firstName',
          'personal_details->middleName as middleName',
        )->get();
    }
    return $roles;
  }
  public function getpermissions()
  {
    return Permission::first();
  }
  public function createRole($request)
  {
    $request->validate([
      'role' => 'required|string',
    ]);
    $role = Role::create([
      'role' => $request->role,
      'permissions' => json_encode([
        'page' => [],
        'tab' => [],
        'other' => [],
        'crud' => ['read'],
        'organization' => [],
      ]),
      'staff' => json_encode([]),
    ]);
    return response()->json(['created' => true, 'role' => $role]);
  }
  public function upateRole($request, $role)
  {
    $request->validate([
      'role' => 'required|string',
    ]);
    $role->role = $request->role;
    $role->save();
    return response()->json(['updated' => true]);
  }
  public function createRoleUser($request, $role)
  {
    $request->validate([
      'staff' => 'required|array',
    ]);
    $prevSatff = json_decode($role->staff);
    $newStaff = array_values(array_unique(array_merge($request->staff, $prevSatff)));
    $staff = User::whereIn('id', $request->staff)->get();
    for ($i = 0; $i < count($staff); $i++) {
      if ($staff[$i]->roles) {
        $prevRoles = json_decode($staff[$i]->roles);
        array_push($prevRoles, $role->role);
        if ($role->report_to) {
          $roles = json_decode($role->report_to);
          if ($staff[$i]->report_to_roles) {
            $rtRoles = json_decode($staff[$i]->report_to_roles);
            User::where('id', $staff[$i]->id)->update(['report_to_roles' => json_encode(array_values(array_unique(array_merge($rtRoles, $roles))))]);
          } else {
            User::where('id', $staff[$i]->id)->update(['report_to_roles' => json_encode($roles)]);
          }
        }
        User::where('id', $staff[$i]->id)->update(['roles' => json_encode(array_values(array_unique($prevRoles)))]);
      } else {
        User::where('id', $staff[$i]->id)->update(['roles' => json_encode([$role->role])]);
      }
    }
    $role->staff = json_encode($newStaff);
    $role->save();
    return response()->json(['created' => true, 'staff' => $this->getRoleUsers($newStaff)]);
  }
  public function destroyRoleUser($request, $role, $staff)
  {
    $prevSatff = json_decode($role->staff);
    $newStaff = array_unique(array_values(array_diff($prevSatff, [(int)$staff])));
    $this->deleteStaffRole((int)$staff, $role->role, $role->report_to, $request);
    $role->staff = json_encode($newStaff);
    $role->save();
    return response()->json(['created' => true, 'staff' => $this->getRoleUsers($newStaff)]);
  }
  public function createRolePermission($request, $role)
  {
    $role->permissions = json_encode($request->all());
    $role->save();
    return response()->json(['created' => true]);
  }
  public function createReportToRole($request, $role)
  {
    $request->validate([
      'roles' => 'required|array',
    ]);
    $prevToRoles = $role->report_to ? json_decode($role->report_to) : [];
    $newReportRoles = $this->getReportToRoles($request->roles);
    $newRoles = array_values(array_unique(array_merge($newReportRoles, $prevToRoles)));
    $staff = User::whereIn('id', json_decode($role->staff))->get();

    for ($i = 0; $i < count($staff); $i++) {
      if ($staff[$i]->report_to_roles) {
        $prevRoles = json_decode($staff[$i]->report_to_roles);
        User::where('id', $staff[$i]->id)->update(['report_to_roles' => json_encode(array_values(array_unique(array_merge($prevRoles, $newRoles))))]);
      } else {
        User::where('id', $staff[$i]->id)->update(['report_to_roles' => json_encode($newRoles)]);
      }
    }
    $role->report_to = count($newRoles) ? json_encode($newRoles) : null;
    $role->save();
    return response()->json(['created' => true, 'roles' => $newRoles]);
  }
  public function destroyReportToRole($role, $reportTo)
  {
    $prevToRoles = json_decode($role->report_to);
    $staff = User::whereIn('id', json_decode($role->staff))->get();
    for ($i = 0; $i < count($staff); $i++) {
      if ($staff[$i]->report_to_roles && count(json_decode($staff[$i]->report_to_roles))) {
        $prevRoles = array_unique(array_values(array_diff(json_decode($staff[$i]->report_to_roles), [$reportTo])));
        User::where('id', $staff[$i]->id)->update(['report_to_roles' => json_encode($prevRoles)]);
      }
    }
    $roles = array_unique(array_values(array_diff($prevToRoles, [$reportTo])));
    $role->report_to = count($roles) ? json_encode($roles) : null;
    $role->save();
    return response()->json(['deleted' => true, 'roles' => $roles]);
  }

  public function getRoleUsers($ids)
  {
    return Profile::whereIn('user_id', $ids)
      ->select(
        'user_id',
        'personal_details->avatar as avatar',
        'personal_details->title as title',
        'personal_details->lastName as lastName',
        'personal_details->firstName as firstName',
        'personal_details->firstName as firstName',
        'personal_details->middleName as middleName',
      )
      ->get();
  }
  public function getReportToRoles($ids)
  {
    $roles = Role::whereIn('id', $ids)
      ->select(
        'role',
      )
      ->get();
    return Arr::flatten($roles->toArray());
  }

  public function deleteStaffRole($staff, $role, $reportTo = null, $request = null)
  {


    if (is_array($staff)) {
      $users = User::whereIn('id', $staff)->get();
      for ($i = 0; $i < count($users); $i++) {
        $newStaffRoles = array_filter(json_decode($users[$i]->roles), function ($r) use ($role) {
          return $r !== $role;
        });
        $newRoles = array_filter(json_decode($users[$i]->report_to_roles), function ($r) use ($role) {
          return $r !== $role;
        });
        User::where('id', $users[$i]->id)->update([
          'roles' => json_encode(array_values($newStaffRoles)),
          'report_to_roles' => json_encode(array_values($newRoles))
        ]);
      }
    }

    if (!is_array($staff)) {
      $roleUser = User::find($staff);
      $staffRoles = json_decode($roleUser->roles);
      $newStaffRoles = array_filter($staffRoles, function ($r) use ($role) {
        return $r !== $role;
      });
      $reportToRoles = [];
      if ($roleUser->report_to_roles) {
        $reportToRoles = json_decode($roleUser->report_to_roles);
      }
      $reportToRoles = array_unique(array_values(array_diff(json_decode($reportTo), $reportToRoles)));
      if ($request && $reportTo && count($request->roles)) {
        $allRoles = Role::whereIn('id', $request->roles)->get();
        $counter = 0;
        for ($i = 0; $i < count($allRoles); $i++) {
          if (count(array_intersect(json_decode($allRoles[$i]->report_to), json_decode($reportTo)))) {
            $counter += 1;
          }
        }

        if ($counter === 0) {
          $newReportToRoles = array_filter($reportToRoles, function ($r) use ($role) {
            return $r !== $role;
          });
          $roleUser->report_to_roles = json_encode(array_values($newReportToRoles));
        }
      } else {
        $newReportToRoles = array_filter($reportToRoles, function ($r) use ($role) {
          return $r !== $role;
        });
        $roleUser->report_to_roles = json_encode(array_values($newReportToRoles));
      }

      $roleUser->roles = json_encode(array_values($newStaffRoles));
      $roleUser->save();
    }
  }
}
