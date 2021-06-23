<?php

namespace App\Traits;

use App\Models\User;
use App\Models\Profile;
use App\Models\Appraisal;
use Illuminate\Support\Facades\DB;

/**
 * ManageKPI
 */
trait ManageKPI
{
  public function getAppraisals()
  {
    return Appraisal::paginate(100);
  }
  public function getAppraisees($appraisal)
  {
    return Profile::whereIn('user_id', json_decode($appraisal->staff))
      ->leftJoin('branches', 'branches.id', '=', 'profiles.branch_id')
      ->leftJoin('departments', 'departments.id', '=', 'profiles.department_id')
      ->select(
        'profiles.personal_details->title as title',
        'profiles.personal_details->firstName as firstName',
        'profiles.personal_details->middleName as middleName',
        'profiles.personal_details->lastName as lastName',
        'profiles.job->title as jobTitle',
        'branches.name as branch',
        'departments.name as department',
      )
      ->orderBy('profiles.user_id', 'desc')
      ->paginate(100);
  }
  public function createAppraisal($request)
  {
    // dd($request->applicableFor['branch']);
    $branches = $request->applicableFor['branch'];
    $departments = $request->applicableFor['department'];
    $roles = $request->applicableFor['role'];

    if (in_array(0, $branches) && !in_array(0, $departments)) {
      $branches = $this->getModelIds('branches');
    }
    if (!in_array(0, $branches) && in_array(0, $departments)) {
      $departments = $this->getModelIds('departments');
    }
    if (in_array(0, $branches) && in_array(0, $departments)) {
      $branches = $this->getModelIds('branches');
      $departments = $this->getModelIds('departments');
    }
    $staff = $this->filterUsers($this->filterProfile($branches, $departments), $roles);
    $appraisal = Appraisal::create([
      'name' => $request->name,
      'period' => json_encode($request->period),
      'sap_timestamp' => json_encode($request->sap),
      'np_timestamp' => json_encode($request->np),
      'description' => $request->description,
      'branches' => json_encode($branches),
      'departments' => json_encode($departments),
      'roles' => json_encode($roles),
      'staff' => json_encode($staff),
    ]);
    return response()->json(['created' => true, 'data' => Appraisal::find($appraisal->id)]);
  }
  public function getModelIds($model)
  {
    $data = DB::table($model)->get();
    $ids = [];
    for ($i = 0; $i < count($data); $i++) {
      array_push($ids, $data[$i]->id);
    }
    return $ids;
  }
  public function filterProfile($branches, $departments)
  {
    $data = Profile::whereIn('branch_id', $branches)
      ->whereIn('department_id', $departments)
      ->get();
    $ids = [];
    for ($i = 0; $i < count($data); $i++) {
      array_push($ids, $data[$i]->user_id);
    }
    return $ids;
  }
  public function filterUsers($users, $roles)
  {
    $data = User::whereIn('id', $users)->get();
    $ids = [];
    for ($i = 0; $i < count($data); $i++) {
      if ($this->checkUserRole($data[$i]->role, $roles)) {
        array_push($ids, $data[$i]->id);
      }
    }
    return $ids;
  }
  public function checkUserRole($role, $roles)
  {
    if ($role) {
      $userRoles = json_decode($role);
      return count(array_intersect($roles, $userRoles)) ? true : false;
    }
    return false;
  }
}
