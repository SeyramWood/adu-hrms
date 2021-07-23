<?php

namespace App\Traits;

use App\Models\Role;
use App\Models\User;
use App\Models\Profile;
use App\Models\Appraisal;
use App\Models\UserKeyGoal;
use Illuminate\Support\Arr;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\DB;
use Illuminate\Pagination\Paginator;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Gate;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Pagination\LengthAwarePaginator;

/**
 * ManageKPI
 */
trait ManageKPI
{
  public function getAppraisals($id = null)
  {
    if ($id) {
      return Appraisal::where('id', $id)->first();
    }
    if (Gate::any(['admin', 'president'], Auth::user())) {
      return Appraisal::orderBy('id', 'desc')->paginate(100);
    }
    if (Gate::allows('branch_manager', Auth::user())) {
      return $this->paginate(Appraisal::class, 'branches', Auth::user()->profile->branch_id, 100);
    }
    if (Gate::allows('hod', Auth::user())) {
      return $this->paginate(Appraisal::class, 'departments', Auth::user()->profile->department_id, 100);
    }
    if (Gate::allows('supervisor', Auth::user())) {
      return $this->paginate(Appraisal::class, 'units', Auth::user()->profile->unit_id, 100);
    }
    return $this->paginate(Appraisal::class, 'staff', Auth::id(), 100);
  }
  public function getKeyGoals($id = null)
  {
    if ($id) {

      UserKeyGoal::where('user_id', Auth::id())
        ->where('appraisal_id', $id)
        ->join('profiles', 'user_key_goal.user_id', '=', 'profiles.user_id');
      // ->leftJoin('unit_key_goals', , '=', 'unit_key_goals.unit_id')
    }
  }

  public function paginate($class, $attribute, $attribute_id, $perPage)

  {
    $records = $class::get()->filter(function ($record) use ($attribute, $attribute_id) {
      if ($record[$attribute]) {
        $results = json_decode($record[$attribute]);
        if (in_array($attribute_id, $results)) {
          return $record;
        }
      }
    });
    $page = Paginator::resolveCurrentPage() ?: 1;
    $records = new LengthAwarePaginator(
      $records->forPage($page, $perPage),
      $records->count(),
      $perPage,
      $page,
      ['path' => Paginator::resolveCurrentPath(), "pageName" => "page"]
    );
    return $records;
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
    $branches = $request->applicableFor['branch'];
    $departments = $request->applicableFor['department'];
    $units = $request->applicableFor['unit'];
    $roles = $request->applicableFor['role'];

    if (in_array('all', $branches)) {
      $branches = $this->getModelIds('branches');
    }
    if (in_array('all', $departments)) {
      $departments = $this->getModelIds('departments');
    }
    if (in_array('all', $units)) {
      $units = $this->getModelIds('units');
    }
    if (in_array('all', $roles)) {
      $roles = $this->getModelIds('roles');
    }
    if (in_array('none', $departments)) {
      $departments = [];
    }
    if (in_array('none', $units)) {
      $units = [];
    }
    if (in_array('none', $roles)) {
      $roles = [];
    }
    $staff = $this->filterProfile($branches, $departments, $units, $roles);
    $appraisal = Appraisal::create([
      'name' => $request->name,
      'period' => json_encode($request->period),
      'sap_timestamp' => json_encode($request->sap),
      'np_timestamp' => json_encode($request->np),
      'description' => $request->description,
      'branches' => json_encode($branches),
      'departments' => json_encode($departments),
      'units' => json_encode($units),
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
  public function filterProfile($branches, $departments, $units, $roles)
  {
    $branch = [];
    if (count($departments) === 0 && count($units) === 0 && count($roles) === 0) {
      $branch = Profile::whereIn('branch_id', $branches)
        ->select('user_id')
        ->get()->toArray();
      return array_values(array_unique(array_merge(Arr::flatten($branch))));
    }
    $department = Profile::whereIn('branch_id', $branches)
      ->whereIn('department_id', $departments)
      ->select('user_id')
      ->get()->toArray();
    $unit = Profile::whereIn('branch_id', $branches)
      ->whereIn('unit_id', $units)
      ->select('user_id')
      ->get()->toArray();
    $roleUsers = $this->filterUsers($branches, $roles);
    return array_values(array_unique(array_merge(Arr::flatten($department), Arr::flatten($unit), Arr::flatten($roleUsers))));
  }
  public function filterUsers($branches, $roles)
  {
    $ro = Profile::whereIn('branch_id', $branches)
      ->join('users', 'users.id', '=', 'profiles.user_id')
      ->select('users.roles', 'users.id')
      ->get();
    $ids = [];
    for ($i = 0; $i < count($ro); $i++) {
      if ($this->checkUserRole($ro[$i]->roles, $roles)) {
        array_push($ids, $ro[$i]->id);
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

  public function createKeyGoal($request)
  {
    switch ($request->type) {
      case 'my-goal':
        return UserKeyGoal::create([
          'appraisal_id' => $request->appraisal,
          'user_id' => $request->id,
          'goal' => json_encode($request->goal),
        ]);
      case 'unit':
        return 'unit_id';
      case 'department':
        return 'department_id';
      case 'branch':
        return 'branch_id';
    }
  }
}
