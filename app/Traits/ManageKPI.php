<?php

namespace App\Traits;

use App\Models\Role;
use App\Models\User;
use App\Models\Profile;
use App\Models\Appraisal;
use App\Models\UnitKeyGoal;
use App\Models\UserKeyGoal;
use Illuminate\Support\Arr;
use App\Models\SelfAppraisal;
use App\Models\DepartmentKeyGoal;
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

  public function createSelfAppraisal($request)
  {
    $appraisal = $this->checkNewAppraisal($request->appraisal, $request->id);
    switch ($request->type) {
      case 'my-goal':
        if ($appraisal) {
          $prevApp = json_decode($appraisal->goals) ?? [];
          foreach ($request->goal as $key => $value) {
            array_push($prevApp, (object)$request->goal[$key]);
          }
          $appraisal->goals = json_encode($prevApp);
          $appraisal->save();
          return response()->json(['created' => true, 'appraisal' => $this->checkNewAppraisal($request->appraisal, $request->id)]);
        }
        SelfAppraisal::create([
          'appraisal_id' => $request->appraisal,
          'user_id' => $request->id,
          'goals' => json_encode($request->goal),
        ]);
        return response()->json(['created' => true, 'appraisal' => $this->checkNewAppraisal($request->appraisal, $request->id)]);
      case 'achievement':
        $request->validate([
          'achievement.*.achievement' => 'required|string'
        ], [], ['achievement.*.achievement' => 'achievement']);
        if ($appraisal) {
          $prevApp = json_decode($appraisal->achievements) ?? [];
          foreach ($request->achievement as $key => $value) {
            array_push($prevApp, (object)$request->achievement[$key]);
          }
          $appraisal->achievements = json_encode($prevApp);
          $appraisal->save();
          return response()->json(['created' => true, 'appraisal' => $this->checkNewAppraisal($request->appraisal, $request->id)]);
        }
        SelfAppraisal::create([
          'appraisal_id' => $request->appraisal,
          'user_id' => $request->id,
          'achievements' => json_encode($request->achievement),
        ]);
        return response()->json(['created' => true, 'appraisal' => $this->checkNewAppraisal($request->appraisal, $request->id)]);
      case 'difficulty':
        $request->validate([
          'difficulty.*.difficulty' => 'required|string'
        ], [], ['difficulty.*.difficulty' => 'difficulty']);
        if ($appraisal) {
          $prevApp = json_decode($appraisal->difficulties) ?? [];
          foreach ($request->difficulty as $key => $value) {
            array_push($prevApp, (object)$request->difficulty[$key]);
          }
          $appraisal->difficulties = json_encode($prevApp);
          $appraisal->save();
          return response()->json(['created' => true, 'appraisal' => $this->checkNewAppraisal($request->appraisal, $request->id)]);
        }
        SelfAppraisal::create([
          'appraisal_id' => $request->appraisal,
          'user_id' => $request->id,
          'difficulties' => json_encode($request->difficulty),
        ]);
        return response()->json(['created' => true, 'appraisal' => $this->checkNewAppraisal($request->appraisal, $request->id)]);
      case 'initiative':
        $request->validate([
          'initiative.*.initiative' => 'required|string'
        ], [], ['initiative.*.initiative' => 'initiative']);
        if ($appraisal) {
          $prevApp = json_decode($appraisal->initiatives) ?? [];
          foreach ($request->initiative as $key => $value) {
            array_push($prevApp, (object)$request->initiative[$key]);
          }
          $appraisal->initiatives = json_encode($prevApp);
          $appraisal->save();
          return response()->json(['created' => true, 'appraisal' => $this->checkNewAppraisal($request->appraisal, $request->id)]);
        }
        SelfAppraisal::create([
          'appraisal_id' => $request->appraisal,
          'user_id' => $request->id,
          'initiatives' => json_encode($request->initiative),
        ]);
        return response()->json(['created' => true, 'appraisal' => $this->checkNewAppraisal($request->appraisal, $request->id)]);
      case 'otherInitiative':
        $request->validate([
          'initiative.*.initiative' => 'required|string'
        ], [], ['initiative.*.initiative' => 'initiative']);
        if ($appraisal) {
          $prevApp = json_decode($appraisal->other_initiatives) ?? [];
          foreach ($request->initiative as $key => $value) {
            array_push($prevApp, (object)$request->initiative[$key]);
          }
          $appraisal->other_initiatives = json_encode($prevApp);
          $appraisal->save();
          return response()->json(['created' => true, 'appraisal' => $this->checkNewAppraisal($request->appraisal, $request->id)]);
        }
        SelfAppraisal::create([
          'appraisal_id' => $request->appraisal,
          'user_id' => $request->id,
          'other_initiatives' => json_encode($request->initiative),
        ]);
        return response()->json(['created' => true, 'appraisal' => $this->checkNewAppraisal($request->appraisal, $request->id)]);
      case 'feedback':
        $request->validate([
          'feedback' => 'required|string'
        ]);
        if ($appraisal) {
          $appraisal->feedback = json_encode($request->feedback);
          $appraisal->save();
          return response()->json(['created' => true, 'appraisal' => $this->checkNewAppraisal($request->appraisal, $request->id)]);
        }
        SelfAppraisal::create([
          'appraisal_id' => $request->appraisal,
          'user_id' => $request->id,
          'feedback' => json_encode($request->feedback),
        ]);
        return response()->json(['created' => true, 'appraisal' => $this->checkNewAppraisal($request->appraisal, $request->id)]);
      case 'unit-goal':
        $appraisal = UnitKeyGoal::where('appraisal_id', $request->appraisal)->where('unit_id', $request->id)->first();
        if ($appraisal) {
          $prevApp = json_decode($appraisal->goals);
          foreach ($request->goals as $key => $value) {
            array_push($prevApp, (object)$request->goals[$key]);
          }
          $appraisal->goals = json_encode($prevApp);
          $appraisal->save();
          return response()->json(['created' => true, 'appraisal' => UnitKeyGoal::where('appraisal_id', $request->appraisal)->where('unit_id', $request->id)->first()]);
        }
        return UnitKeyGoal::create([
          'appraisal_id' => $request->appraisal,
          'unit_id' => $request->id,
          'goals' => json_encode($request->goals),
        ]);
      case 'department-goal':
        $appraisal = DepartmentKeyGoal::where('appraisal_id', $request->appraisal)->where('department_id', $request->id)->first();
        if ($appraisal) {
          $prevApp = json_decode($appraisal->goals);
          foreach ($request->goals as $key => $value) {
            array_push($prevApp, (object)$request->goals[$key]);
          }
          $appraisal->goals = json_encode($prevApp);
          $appraisal->save();
          return response()->json(['created' => true, 'appraisal' => DepartmentKeyGoal::where('appraisal_id', $request->appraisal)->where('department_id', $request->id)->first()]);
        }
        return DepartmentKeyGoal::create([
          'appraisal_id' => $request->appraisal,
          'department_id' => $request->id,
          'goals' => json_encode($request->goals),
        ]);
    }
  }
  public function checkNewAppraisal($id, $userId)
  {
    return SelfAppraisal::where('appraisal_id', $id)->where('user_id', $userId)->first();
  }
}
