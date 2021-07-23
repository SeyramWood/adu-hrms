<?php

namespace App\Traits;

use App\Models\Role;
use App\Models\User;
use App\Models\Profile;
use App\Models\WorkShift;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Gate;

/**
 * Staff
 */
trait Staff
{
  public function getStaffList($id = null)
  {
    if ($id) {
      return User::where('users.id', $id)
        ->join('profiles', 'profiles.user_id', '=', 'users.id')
        ->leftJoin('branches', 'branches.id', '=', 'profiles.branch_id')
        ->leftJoin('departments', 'departments.id', '=', 'profiles.department_id')
        ->leftJoin('units', 'units.id', '=', 'profiles.unit_id')
        ->leftJoin('positions', 'positions.id', '=', 'profiles.position_id')
        ->select(
          'users.*',
          'profiles.branch_id',
          'profiles.department_id',
          'profiles.unit_id',
          'profiles.position_id',
          'profiles.job->title as jobTitleId',
          'profiles.job->employmentStatus as employmentStatusId',
          'profiles.personal_details',
          'contact_details->mobile as mobile',
          'profiles.job',
          'profiles.slug',
          'branches.name as branch',
          'departments.name as department',
          'units.name as unit',
          'positions.name as position',
        )
        ->orderBy('users.id', 'desc')
        ->first();
    }
    if (Gate::any(['admin', 'president'], Auth::user())) {
      return User::join('profiles', 'profiles.user_id', '=', 'users.id')
        ->leftJoin('branches', 'branches.id', '=', 'profiles.branch_id')
        ->leftJoin('departments', 'departments.id', '=', 'profiles.department_id')
        ->leftJoin('units', 'units.id', '=', 'profiles.unit_id')
        ->leftJoin('positions', 'positions.id', '=', 'profiles.position_id')
        ->select(
          'users.*',
          'profiles.branch_id',
          'profiles.department_id',
          'profiles.unit_id',
          'profiles.position_id',
          'profiles.job->title as jobTitleId',
          'profiles.job->employmentStatus as employmentStatusId',
          'profiles.personal_details',
          'contact_details->mobile as mobile',
          'profiles.job',
          'profiles.slug',
          'branches.name as branch',
          'departments.name as department',
          'units.name as unit',
          'positions.name as position',
        )
        ->orderBy('users.id', 'desc')
        ->get();
    }

    if (Gate::allows('branch_manager', Auth::user())) {
      return User::join('profiles', 'profiles.user_id', '=', 'users.id')
        ->where('profiles.branch_id', '=', Auth::user()->profile->branch_id)
        ->leftJoin('branches', 'branches.id', '=', 'profiles.branch_id')
        ->leftJoin('departments', 'departments.id', '=', 'profiles.department_id')
        ->leftJoin('units', 'units.id', '=', 'profiles.unit_id')
        ->leftJoin('positions', 'positions.id', '=', 'profiles.position_id')
        ->select(
          'users.*',
          'profiles.branch_id',
          'profiles.department_id',
          'profiles.unit_id',
          'profiles.position_id',
          'profiles.job->title as jobTitleId',
          'profiles.job->employmentStatus as employmentStatusId',
          'profiles.personal_details',
          'contact_details->mobile as mobile',
          'profiles.job',
          'profiles.slug',
          'branches.name as branch',
          'departments.name as department',
          'units.name as unit',
          'positions.name as position',
        )
        ->orderBy('users.id', 'desc')
        ->get();
    }
    if (Gate::allows('hod', Auth::user())) {
      return User::join('profiles', 'profiles.user_id', '=', 'users.id')
        ->where('profiles.branch_id', '=', Auth::user()->profile->branch_id)
        ->where('profiles.department_id', '=', Auth::user()->profile->department_id)
        ->leftJoin('branches', 'branches.id', '=', 'profiles.branch_id')
        ->leftJoin('departments', 'departments.id', '=', 'profiles.department_id')
        ->leftJoin('units', 'units.id', '=', 'profiles.unit_id')
        ->leftJoin('positions', 'positions.id', '=', 'profiles.position_id')
        ->select(
          'users.*',
          'profiles.branch_id',
          'profiles.department_id',
          'profiles.unit_id',
          'profiles.position_id',
          'profiles.job->title as jobTitleId',
          'profiles.job->employmentStatus as employmentStatusId',
          'profiles.personal_details',
          'contact_details->mobile as mobile',
          'profiles.job',
          'profiles.slug',
          'branches.name as branch',
          'departments.name as department',
          'units.name as unit',
          'positions.name as position',
        )
        ->orderBy('users.id', 'desc')
        ->get();
    }
    if (Gate::allows('supervisor', Auth::user())) {
      return User::join('profiles', 'profiles.user_id', '=', 'users.id')
        ->where('profiles.branch_id', '=', Auth::user()->profile->branch_id)
        ->where('profiles.department_id', '=', Auth::user()->profile->department_id)
        ->where('profiles.unit_id', '=', Auth::user()->profile->unit_id)
        ->leftJoin('branches', 'branches.id', '=', 'profiles.branch_id')
        ->leftJoin('departments', 'departments.id', '=', 'profiles.department_id')
        ->leftJoin('units', 'units.id', '=', 'profiles.unit_id')
        ->leftJoin('positions', 'positions.id', '=', 'profiles.position_id')
        ->select(
          'users.*',
          'profiles.branch_id',
          'profiles.department_id',
          'profiles.unit_id',
          'profiles.position_id',
          'profiles.job->title as jobTitleId',
          'profiles.job->employmentStatus as employmentStatusId',
          'profiles.personal_details',
          'contact_details->mobile as mobile',
          'profiles.job',
          'profiles.slug',
          'branches.name as branch',
          'departments.name as department',
          'units.name as unit',
          'positions.name as position',
        )
        ->orderBy('users.id', 'desc')
        ->get();
    }
    return User::join('profiles', 'profiles.user_id', '=', 'users.id')
      ->where('profiles.branch_id', '=', Auth::user()->profile->branch_id)
      ->orWhere('profiles.department_id', '=', Auth::user()->profile->department_id)
      ->orWhere('profiles.unit_id', '=', Auth::user()->profile->unit_id)
      ->leftJoin('branches', 'branches.id', '=', 'profiles.branch_id')
      ->leftJoin('departments', 'departments.id', '=', 'profiles.department_id')
      ->leftJoin('units', 'units.id', '=', 'profiles.unit_id')
      ->leftJoin('positions', 'positions.id', '=', 'profiles.position_id')
      ->select(
        'users.*',
        'profiles.branch_id',
        'profiles.department_id',
        'profiles.unit_id',
        'profiles.position_id',
        'profiles.job->title as jobTitleId',
        'profiles.job->employmentStatus as employmentStatusId',
        'profiles.personal_details',
        'contact_details->mobile as mobile',
        'profiles.job',
        'profiles.slug',
        'branches.name as branch',
        'departments.name as department',
        'units.name as unit',
        'positions.name as position',
      )
      ->orderBy('users.id', 'desc')
      ->get();
  }
  public function getStaffCount()
  {
    $current = Profile::where('employee_status', '=', 'current')->count();
    $past = Profile::where('employee_status', '=', 'past')->count();
    $data = [
      'current' => $current,
      'past' => $past,
      'total' => $current + $past
    ];
    return (object)$data;
  }

  public function staffDirInfo()
  {
    return User::join('profiles', 'profiles.user_id', '=', 'users.id')
      ->leftJoin('branches', 'branches.id', '=', 'profiles.branch_id')
      ->leftJoin('departments', 'departments.id', '=', 'profiles.department_id')
      ->select(
        'users.*',
        'profiles.personal_details',
        'profiles.job',
        'profiles.slug',
        'branches.name as branch',
        'departments.name as department',
      )
      ->orderBy('users.id', 'desc')
      ->get();
  }
  public function getSupervisors()
  {
    $supervisors = [];
    $profiles = User::join('profiles', 'profiles.user_id', '=', 'users.id')
      ->where('users.id', '!=', Auth::id())
      ->where('profiles.branch_id', '=', Auth::user()->profile->branch_id)
      ->where('profiles.unit_id', '=', Auth::user()->profile->unit_id)
      ->leftJoin('positions', 'positions.id', '=', 'profiles.position_id')
      ->select(
        'users.*',
        'profiles.branch_id',
        'profiles.department_id',
        'profiles.unit_id',
        'profiles.position_id',
        'profiles.personal_details->title as title',
        'profiles.personal_details->lastName as lastName',
        'profiles.personal_details->firstName as firstName',
        'profiles.personal_details->middleName as middleName',
        'profiles.contact_details->mobile as mobile',
        'profiles.contact_details->workEmail as mail',
        'positions.name as position',
      )
      ->orderBy('users.id', 'desc')
      ->get();

    for ($i = 0; $i < count($profiles); $i++) {
      if ($profiles[$i]->roles) {
        if ($this->checkUserPermissions('supervisor', $profiles[$i]->roles)) {
          array_push($supervisors, $profiles[$i]);
        }
      }
    }
    return $supervisors;
  }
  public function getHODs()
  {
    $hods = [];
    $profiles = User::join('profiles', 'profiles.user_id', '=', 'users.id')
      ->where('users.id', '!=', Auth::id())
      ->where('profiles.branch_id', '=', Auth::user()->profile->branch_id)
      ->where('profiles.department_id', '=', Auth::user()->profile->department_id)
      ->leftJoin('positions', 'positions.id', '=', 'profiles.position_id')
      ->select(
        'users.*',
        'profiles.branch_id',
        'profiles.department_id',
        'profiles.unit_id',
        'profiles.position_id',
        'profiles.personal_details->title as title',
        'profiles.personal_details->lastName as lastName',
        'profiles.personal_details->firstName as firstName',
        'profiles.personal_details->middleName as middleName',
        'profiles.contact_details->mobile as mobile',
        'profiles.contact_details->workEmail as mail',
        'positions.name as position',
      )
      ->orderBy('users.id', 'desc')
      ->get();
    for ($i = 0; $i < count($profiles); $i++) {
      if ($profiles[$i]->roles) {
        if ($this->checkUserPermissions('hod', $profiles[$i]->roles)) {
          array_push($hods, $profiles[$i]);
        }
      }
    }
    return $hods;
  }
  public function getManagers()
  {
    $managers = [];
    $profiles = User::join('profiles', 'profiles.user_id', '=', 'users.id')
      ->where('users.id', '!=', Auth::id())
      ->where('profiles.branch_id', '=', Auth::user()->profile->branch_id)
      ->leftJoin('positions', 'positions.id', '=', 'profiles.position_id')
      ->select(
        'users.*',
        'profiles.branch_id',
        'profiles.department_id',
        'profiles.unit_id',
        'profiles.position_id',
        'profiles.personal_details',
        'contact_details',
        'positions.name as position',
      )
      ->orderBy('users.id', 'desc')
      ->get();
    for ($i = 0; $i < count($profiles); $i++) {
      if ($profiles[$i]->roles) {
        if ($this->checkUserPermissions('branch_manager', $profiles[$i]->roles)) {
          array_push($managers, $profiles[$i]);
        }
      }
    }
    return $managers;
  }
  public function getPresidents()
  {
    $presidents = [];
    $profiles = User::join('profiles', 'profiles.user_id', '=', 'users.id')
      ->where('users.id', '!=', Auth::id())
      ->leftJoin('positions', 'positions.id', '=', 'profiles.position_id')
      ->select(
        'users.*',
        'profiles.branch_id',
        'profiles.department_id',
        'profiles.unit_id',
        'profiles.position_id',
        'profiles.personal_details->title as title',
        'profiles.personal_details->lastName as lastName',
        'profiles.personal_details->firstName as firstName',
        'profiles.personal_details->middleName as middleName',
        'profiles.contact_details->mobile as mobile',
        'profiles.contact_details->workEmail as mail',
        'positions.name as position',
      )
      ->orderBy('users.id', 'desc')
      ->get();
    for ($i = 0; $i < count($profiles); $i++) {
      if ($profiles[$i]->roles) {
        if ($this->checkUserPermissions('president', $profiles[$i]->roles)) {
          array_push($presidents, $profiles[$i]);
        }
      }
    }
    return $presidents;
  }

  public function getDirectorates()
  {
    $directorates = [];
    $roleStaff = Role::whereIn('role', (Auth::user()->report_to_roles ? json_decode(Auth::user()->report_to_roles) : []))
      ->whereNotNull('staff')
      ->select('staff')
      ->get()->toArray();
    foreach ($roleStaff as  $value) {
      array_push($directorates, json_decode($value['staff']));
    }
    return User::join('profiles', 'profiles.user_id', '=', 'users.id')
      ->where('users.id', '!=', Auth::id())
      ->whereIn('users.id', Arr::flatten($directorates))
      ->leftJoin('positions', 'positions.id', '=', 'profiles.position_id')
      ->select(
        'users.*',
        'profiles.branch_id',
        'profiles.department_id',
        'profiles.unit_id',
        'profiles.position_id',
        'profiles.personal_details->title as title',
        'profiles.personal_details->lastName as lastName',
        'profiles.personal_details->firstName as firstName',
        'profiles.personal_details->middleName as middleName',
        'profiles.contact_details->mobile as mobile',
        'profiles.contact_details->workEmail as mail',
        'positions.name as position',
      )
      ->orderBy('users.id', 'desc')
      ->get();
  }

  public function checkUserPermissions($permission, $roles)
  {
    $permissions = $this->getUserPermissions($roles);
    if (in_array($permission, $permissions)) {
      return true;
    }
    return false;
  }
  public function getUserPermissions($roles)
  {
    if ($roles) {
      $userRoles = json_decode($roles);
      if (count($userRoles)) {
        $roles = Role::whereIn('role', $userRoles)->get();
        $permissions = [];
        for ($i = 0; $i < count($roles); $i++) {
          $perm = json_decode($roles[$i]->permissions);
          $permissions = array_values(array_merge($permissions, array_values(array_merge($perm->page, $perm->tab, $perm->other, $perm->crud, $perm->organization))));
        }
        return $permissions;
      }
      return $userRoles;
    }
  }
  public function getReportTo()
  {
    if (Auth::user()->report_to_roles && count(json_decode(Auth::user()->report_to_roles))) {
      $roles = Role::whereIn('role', json_decode(Auth::user()->report_to_roles))->get();
      $allStaff = [];
      for ($i = 0; $i < count($roles); $i++) {
        if ($roles[$i]->staff && count(json_decode($roles[$i]->staff))) {
          $sta = json_decode($roles[$i]->staff);
          $allStaff = array_values(array_merge($allStaff, array_values(array_merge($sta))));
        }
      }
      return User::join('profiles', 'profiles.user_id', '=', 'users.id')
        ->whereIn('users.id', $allStaff)
        ->leftJoin('positions', 'positions.id', '=', 'profiles.position_id')
        ->select(
          'users.*',
          'profiles.branch_id',
          'profiles.department_id',
          'profiles.unit_id',
          'profiles.position_id',
          'profiles.personal_details->title as title',
          'profiles.personal_details->lastName as lastName',
          'profiles.personal_details->firstName as firstName',
          'profiles.personal_details->middleName as middleName',
          'profiles.contact_details->mobile as mobile',
          'profiles.contact_details->workEmail as mail',
          'positions.name as position',
        )
        ->orderBy('users.id', 'desc')
        ->get();
    }
    return [];
  }
  public function getReportToMe()
  {
    if (Auth::user()->roles && count(json_decode(Auth::user()->roles))) {
      $roles = Role::whereNotNull('report_to')->select('staff', 'report_to')->get();
      $allStaff = [];
      for ($i = 0; $i < count($roles); $i++) {
        if ($roles[$i]->report_to && count(json_decode($roles[$i]->report_to))) {
          if (count(array_intersect(json_decode(Auth::user()->roles), json_decode($roles[$i]->report_to)))) {
            if ($roles[$i]->staff && count(json_decode($roles[$i]->staff))) {
              $sta = json_decode($roles[$i]->staff);
              $allStaff = array_values(array_merge($allStaff, array_values($sta)));
            }
          }
        }
      }
      return User::join('profiles', 'profiles.user_id', '=', 'users.id')
        ->whereIn('users.id', $allStaff)
        ->leftJoin('positions', 'positions.id', '=', 'profiles.position_id')
        ->select(
          'users.*',
          'profiles.branch_id',
          'profiles.department_id',
          'profiles.unit_id',
          'profiles.position_id',
          'profiles.personal_details->title as title',
          'profiles.personal_details->lastName as lastName',
          'profiles.personal_details->firstName as firstName',
          'profiles.personal_details->middleName as middleName',
          'profiles.contact_details->mobile as mobile',
          'profiles.contact_details->workEmail as mail',
          'positions.name as position',
        )
        ->orderBy('users.id', 'desc')
        ->get();
    }
    return [];
  }
}
