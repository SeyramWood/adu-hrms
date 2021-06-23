<?php

namespace App\Traits;

use App\Models\User;
use App\Models\Profile;
use App\Models\WorkShift;
use App\Models\RolePermission;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\App;

/**
 * Admin
 */
trait Admin
{
  public function getUsers()
  {
    return User::join('profiles', 'profiles.user_id', '=', 'users.id')
      ->select(
        'users.*',
        'profiles.personal_details',
        'profiles.slug',
      )
      ->paginate(100);
  }
  public function getUser($id)
  {
    return User::where('users.id', $id)
      ->join('profiles', 'profiles.user_id', '=', 'users.id')
      ->select(
        'users.*',
        'profiles.personal_details',
      )
      ->first();
  }
  public function getShifts()
  {
    return WorkShift::all();
  }
  public function assignRole($request)
  {
    $ids = $request->ids;
    for ($i = 0; $i < count($ids); $i++) {
      $user = User::find($ids[$i]);
      if (in_array('Manager', $request->role)) {
        $profile = Profile::where('user_id', $user->id)->first();
        $profiles = Profile::where('branch_id', $profile->branch_id)
          ->where('user_id', '!=', $user->id)->get();
        if (count($profiles)) {
          for ($i = 0; $i < count($profiles); $i++) {
            if ($profiles[$i]->managers) {
              $managers = json_decode($profiles[$i]->managers);
              if (!in_array($user->id, $managers)) {
                array_push($managers, $user->id);
                DB::table('profiles')->where('branch_id', $profile->branch_id)->where('user_id', '!=', $user->id)->update([
                  'managers' => json_encode($managers)
                ]);
              }
            } else {
              DB::table('profiles')->where('branch_id', $profile->branch_id)->where('user_id', '!=', $user->id)->update([
                'managers' => json_encode([$user->id])
              ]);
            }
          }
        }
      }
      if (in_array('Supervisor', $request->role)) {
        $profile = Profile::where('user_id', $user->id)->first();
        $profiles = Profile::where('branch_id', $profile->branch_id)
          ->where('department_id', $profile->department_id)
          ->where('user_id', '!=', $user->id)->get();
        if (count($profiles)) {
          for ($i = 0; $i < count($profiles); $i++) {
            if ($profiles[$i]->supervisors) {
              $supervisors = json_decode($profiles[$i]->supervisors);
              if (!in_array($user->id, $supervisors)) {
                array_push($supervisors, $user->id);
                DB::table('profiles')->where('branch_id', $profile->branch_id)->where('department_id', $profile->department_id)->where('user_id', '!=', $user->id)->update([
                  'supervisors' => json_encode($supervisors)
                ]);
              }
            } else {
              DB::table('profiles')->where('branch_id', $profile->branch_id)->where('department_id', $profile->department_id)->where('user_id', '!=', $user->id)->update([
                'supervisors' => json_encode([$user->id])
              ]);
            }
          }
        }
      }
      $user->role = json_encode($request->role);
      $user->save();
    }
    return response()->json(['assigned' => true]);
  }
  public function assignStatus($request)
  {
    $ids = $request->ids;
    for ($i = 0; $i < count($ids); $i++) {
      $user = User::find($ids[$i]);
      $user->status = (int)$request->status;
      $user->save();
    }
    return response()->json(['assigned' => true]);
  }
  public function getRolePermissions()
  {
    return RolePermission::get()->first();
  }
}
