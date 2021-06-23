<?php

namespace App\Traits;

use App\Models\User;
use App\Models\Profile;
use App\Models\WorkShift;
use Illuminate\Support\Facades\Auth;

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
        ->select(
          'users.*',
          'profiles.personal_details',
          'profiles.job',
          'profiles.slug',
          'branches.name as branch',
          'departments.name as department',
        )
        ->orderBy('users.id', 'desc')
        ->first();
    }
    if ($user = User::find(Auth::id())) {
      if ($user->role) {
        if (in_array(ucfirst('admin'), json_decode($user->role))) {
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
        if (in_array(ucfirst('manager'), json_decode($user->role))) {
          return User::join('profiles', 'profiles.user_id', '=', 'users.id')
            ->where('profiles.branch_id', '=', $user->profile->branch_id)
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
        if (in_array(ucfirst('supervisor'), json_decode($user->role))) {
          return User::join('profiles', 'profiles.user_id', '=', 'users.id')
            ->where('profiles.branch_id', '=', $user->profile->branch_id)
            ->where('profiles.department_id', '=', $user->profile->department_id)
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
      }
    }
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
  public function getStaffSupervisor($staffId)
  {
    $staff = Profile::find($staffId);
    $profiles = Profile::where('branch_id', $staff->branch_id)
      ->where('department_id', $staff->department_id)
      ->join('users', 'users.id', '=', 'profiles.user_id')
      ->get();
  }
}
