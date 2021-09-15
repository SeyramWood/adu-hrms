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
use App\Models\Unit;
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
      ->leftJoin('departments', 'departments.id', '=', 'profiles.department_id')
      ->leftJoin('units', 'units.id', '=', 'profiles.unit_id')
      ->select(
        'profiles.user_id',
        'profiles.personal_details->title as title',
        'profiles.personal_details->firstName as firstName',
        'profiles.personal_details->middleName as middleName',
        'profiles.personal_details->lastName as lastName',
        'profiles.job->title as jobTitle',
        'departments.name as department',
        'units.name as unit',
      )
      ->orderBy('profiles.user_id', 'desc')
      ->paginate(100);
  }
  public function createAppraisal($request)
  {
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
    $staff = $this->filterProfile($departments, $units, $roles);
    $appraisal = Appraisal::create([
      'name' => $request->name,
      'period' => json_encode($request->period),
      'sap_timestamp' => json_encode($request->sap),
      'np_timestamp' => json_encode($request->np),
      'description' => $request->description,
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
  public function filterProfile($departments, $units, $roles)
  {
    $department = Profile::whereIn('department_id', $departments)
      ->select('user_id')
      ->get()->toArray();
    $unit = Profile::whereIn('unit_id', $units)
      ->select('user_id')
      ->get()->toArray();
    $roleUsers = $this->filterRoleUsers($roles);
    return array_values(array_unique(array_merge(Arr::flatten($department), Arr::flatten($unit), Arr::flatten($roleUsers))));
  }
  public function filterRoleUsers($roles)
  {
    $ro = Role::whereIn('id', $roles)->select('staff')->get();
    $ids = [];

    for ($i = 0; $i < count($ro); $i++) {
      $ids = array_values(array_unique(array_merge(json_decode($ro[$i]->staff ?? '[]'), $ids)));
    }
    return $ids;
  }

  public function createSelfAppraisal($request)
  {
    $appraisal = $this->checkNewAppraisal($request->appraisal, $request->id);

    switch ($request->type) {
      case 'my-goal':
        // $request->validate([
        //   'goals' => 'required|in'
        // ])
        if ($appraisal) {
          $prevApp = json_decode($appraisal->goals ?? '[]');
          foreach ($request->goals as $key => $value) {
            array_push($prevApp, (object)$request->goals[$key]);
          }
          $appraisal->goals = json_encode($prevApp);
          $appraisal->save();
          return response()->json(['created' => true, 'appraisal' => [
            'userAppraisal' => $this->checkNewAppraisal($request->appraisal, $request->id)
          ]]);
        }
        SelfAppraisal::create([
          'appraisal_id' => $request->appraisal,
          'user_id' => $request->id,
          'goals' => json_encode($request->goals),
        ]);
        return response()->json(['created' => true, 'appraisal' => [
          'userAppraisal' => $this->checkNewAppraisal($request->appraisal, $request->id)
        ]]);
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
          return response()->json(['created' => true, 'appraisal' => [
            'userAppraisal' => $this->checkNewAppraisal($request->appraisal, $request->id)
          ]]);
        }
        SelfAppraisal::create([
          'appraisal_id' => $request->appraisal,
          'user_id' => $request->id,
          'achievements' => json_encode($request->achievement),
        ]);
        return response()->json(['created' => true, 'appraisal' => [
          'userAppraisal' => $this->checkNewAppraisal($request->appraisal, $request->id)
        ]]);
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
          return response()->json(['created' => true, 'appraisal' => [
            'userAppraisal' => $this->checkNewAppraisal($request->appraisal, $request->id)
          ]]);
        }
        SelfAppraisal::create([
          'appraisal_id' => $request->appraisal,
          'user_id' => $request->id,
          'difficulties' => json_encode($request->difficulty),
        ]);
        return response()->json(['created' => true, 'appraisal' => [
          'userAppraisal' => $this->checkNewAppraisal($request->appraisal, $request->id)
        ]]);
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
          return response()->json(['created' => true, 'appraisal' => [
            'userAppraisal' => $this->checkNewAppraisal($request->appraisal, $request->id)
          ]]);
        }
        SelfAppraisal::create([
          'appraisal_id' => $request->appraisal,
          'user_id' => $request->id,
          'initiatives' => json_encode($request->initiative),
        ]);
        return response()->json(['created' => true, 'appraisal' => [
          'userAppraisal' => $this->checkNewAppraisal($request->appraisal, $request->id)
        ]]);
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
          return response()->json(['created' => true, 'appraisal' => [
            'userAppraisal' => $this->checkNewAppraisal($request->appraisal, $request->id)
          ]]);
        }
        SelfAppraisal::create([
          'appraisal_id' => $request->appraisal,
          'user_id' => $request->id,
          'other_initiatives' => json_encode($request->initiative),
        ]);
        return response()->json(['created' => true, 'appraisal' => [
          'userAppraisal' => $this->checkNewAppraisal($request->appraisal, $request->id)
        ]]);
      case 'feedback':
        $request->validate([
          'feedback' => 'required|string'
        ]);
        if ($appraisal) {
          $appraisal->feedback = json_encode($request->feedback);
          $appraisal->save();
          return response()->json(['created' => true, 'appraisal' => [
            'userAppraisal' => $this->checkNewAppraisal($request->appraisal, $request->id)
          ]]);
        }
        SelfAppraisal::create([
          'appraisal_id' => $request->appraisal,
          'user_id' => $request->id,
          'feedback' => json_encode($request->feedback),
        ]);
        return response()->json(['created' => true, 'appraisal' => [
          'userAppraisal' => $this->checkNewAppraisal($request->appraisal, $request->id)
        ]]);
      case 'unit-goal':
        $appraisal = UnitKeyGoal::where('appraisal_id', $request->appraisal)->where('unit_id', $request->id)->first();
        if ($appraisal) {
          $prevApp = json_decode($appraisal->goals);
          foreach ($request->goals as $key => $value) {
            array_push($prevApp, (object)$request->goals[$key]);
          }
          $appraisal->goals = json_encode($prevApp);
          $appraisal->save();
          return response()->json([
            'created' => true, 'appraisal' => $this->getUserAppraisal($request->appraisal)
          ]);
        }
        UnitKeyGoal::create([
          'appraisal_id' => $request->appraisal,
          'unit_id' => $request->id,
          'goals' => json_encode($request->goals),
        ]);
        return response()->json([
          'appraisal' => $this->getUserAppraisal($request->appraisal)
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
          return response()->json([
            'created' => true, 'appraisal' => $this->getUserAppraisal($request->appraisal)
          ]);
        }
        DepartmentKeyGoal::create([
          'appraisal_id' => $request->appraisal,
          'department_id' => $request->id,
          'goals' => json_encode($request->goals),
        ]);
        return response()->json([
          'appraisal' => $this->getUserAppraisal($request->appraisal)
        ]);
    }
  }
  public function checkNewAppraisal($id, $userId)
  {
    return SelfAppraisal::where('appraisal_id', $id)->where('user_id', $userId)->first();
  }

  public function getUserAppraisal($id, $userId = null): array
  {
    if ($userId) {
      $profile = Profile::where('user_id', $userId)->first();
      $userAppraisal = SelfAppraisal::where('appraisal_id', $id)->where('user_id', $userId)->first();
      $userUnitGoal = UnitKeyGoal::where('appraisal_id', $id)->where('unit_id', $profile->unit_id)->first();
      $userDepartmentGoal = DepartmentKeyGoal::where('appraisal_id', $id)->where('department_id', $profile->department_id)->first();
    } else {
      $userAppraisal = SelfAppraisal::where('appraisal_id', $id)->where('user_id', Auth::id())->first();
      $userUnitGoal = UnitKeyGoal::where('appraisal_id', $id)->where('unit_id', Auth::user()->profile->unit_id)->first();
      $userDepartmentGoal = DepartmentKeyGoal::where('appraisal_id', $id)->where('department_id', Auth::user()->profile->department_id)->first();
    }
    return [
      'userAppraisal' => $userAppraisal,
      'userUnitGoal' => $userUnitGoal,
      'userDepartmentGoal' => $userDepartmentGoal,
    ];
  }

  public function updateUserGoal($request, $appraisal)
  {
    $selfAppraisal  = SelfAppraisal::where('appraisal_id', $appraisal)->where('user_id', Auth::id())->first();
    $goals = json_decode($selfAppraisal->goals ?? '[]');
    foreach ($goals as $key => $goal) {
      if ($request->id === $goal->id) {
        $goals[$key]->goal = $request->goal;
      }
    }
    $selfAppraisal->goals = json_encode($goals);
    $selfAppraisal->save();
    return response()->json(['appraisal' => $this->getUserAppraisal($selfAppraisal->appraisal_id)]);
  }
  public function updateUserAppraisal($request, $appraisal)
  {
    if ($request->type === 'feedback') {
      $selfAppraisal  = SelfAppraisal::where('appraisal_id', $appraisal)->where('user_id', Auth::id())->first();
      $selfAppraisal->feedback = json_encode($request->feedback);
      $selfAppraisal->save();
      return response()->json(['appraisal' => $this->getUserAppraisal($selfAppraisal->appraisal_id)]);
    }
    $selfAppraisal  = SelfAppraisal::where('appraisal_id', $appraisal)->where('user_id', Auth::id())->first();


    $results = json_decode($selfAppraisal["{$request->type}"] ?? '[]');

    foreach ($results as $key => $result) {
      if ($request->id === $result->id) {
        if ($request->type === 'achievements') {
          $results[$key]->achievement = $request->achievement;
        }
        if ($request->type === 'difficulties') {
          $results[$key]->difficulty = $request->difficulty;
        }
        if ($request->type === 'initiatives' || $request->type === 'other_initiatives') {
          $results[$key]->initiative = $request->initiative;
        }
      }
    }
    $selfAppraisal["{$request->type}"] = json_encode($results);
    $selfAppraisal->save();
    return response()->json(['appraisal' => $this->getUserAppraisal($selfAppraisal->appraisal_id)]);
  }
  public function updateUserAppraisalMetrics($request, $appraisal, $user)
  {
    $selfAppraisal  = SelfAppraisal::where('appraisal_id', $appraisal)->where('user_id', $user)->first();
    $selfAppraisal->metrics = json_encode((object)$request->all());
    $selfAppraisal->save();
    return response()->json(['updated' => true]);
  }



  public function updateDepartmentGoal($request, $appraisal)
  {
    $dptAppraisal  = DepartmentKeyGoal::where('appraisal_id', $appraisal)->where('department_id', Auth::user()->profile->department_id)->first();
    $goals = json_decode($dptAppraisal->goals ?? '[]');
    foreach ($goals as $key => $goal) {
      if ($request->id === $goal->id) {
        $goals[$key]->goal = $request->goal;
      }
    }
    $dptAppraisal->goals = json_encode($goals);
    $dptAppraisal->save();
    return response()->json(['appraisal' => $this->getUserAppraisal($dptAppraisal->appraisal_id)]);
  }
  public function updateUnitGoal($request, $appraisal)
  {
    $unitAppraisal  = UnitKeyGoal::where('appraisal_id', $appraisal)->where('unit_id', Auth::user()->profile->unit_id)->first();
    $goals = json_decode($unitAppraisal->goals ?? '[]');
    foreach ($goals as $key => $goal) {
      if ($request->id === $goal->id) {
        $goals[$key]->goal = $request->goal;
      }
    }
    $unitAppraisal->goals = json_encode($goals);
    $unitAppraisal->save();
    return response()->json(['appraisal' => $this->getUserAppraisal($unitAppraisal->appraisal_id)]);
  }
  public function destroyUserGoal($appraisal, $id)
  {
    $selfAppraisal  = SelfAppraisal::where('appraisal_id', $appraisal)->where('user_id', Auth::id())->first();
    $goals = json_decode($appraisal->goals ?? '[]');
    foreach ($goals as $key => $goal) {
      if ($goal->id === $id) {
        array_splice($goals, $key, 1);
      }
    }
    $selfAppraisal->goals = json_encode($goals);
    $selfAppraisal->save();
    return response()->json(['appraisal' => $this->getUserAppraisal($selfAppraisal->appraisal_id)]);
  }

  public function destroyUserAppraisal($appraisal, $id, $type)
  {
    if ($type === 'feedback') {
      # code...
    }

    $selfAppraisal  = SelfAppraisal::where('appraisal_id', $appraisal)->where('user_id', Auth::id())->first();
    $results = json_decode($selfAppraisal["{$type}"] ?? '[]');

    foreach ($results as $key => $result) {
      if ($result->id === $id) {
        array_splice($results, $key, 1);
      }
    }
    $selfAppraisal["{$type}"] = json_encode($results);
    $selfAppraisal->save();
    return response()->json(['appraisal' => $this->getUserAppraisal($selfAppraisal->appraisal_id)]);
  }
  public function destroyDepartmentGoal($appraisal, $id)
  {
    $dptAppraisal  = DepartmentKeyGoal::where('appraisal_id', $appraisal)->where('department_id', Auth::user()->profile->department_id)->first();
    $goals = json_decode($dptAppraisal->goals ?? '[]');
    foreach ($goals as $key => $goal) {
      if ($goal->id === $id) {
        array_splice($goals, $key, 1);
      }
    }
    $dptAppraisal->goals = json_encode($goals);
    $dptAppraisal->save();
    return response()->json(['appraisal' => $this->getUserAppraisal($dptAppraisal->appraisal_id)]);
  }
  public function destroyUnitGoal($appraisal, $id)
  {
    $unitAppraisal  = UnitKeyGoal::where('appraisal_id', $appraisal)->where('unit_id', Auth::user()->profile->unit_id)->first();
    $goals = json_decode($unitAppraisal->goals ?? '[]');
    foreach ($goals as $key => $goal) {
      if ($goal->id === $id) {
        array_splice($goals, $key, 1);
      }
    }
    $unitAppraisal->goals = json_encode($goals);
    $unitAppraisal->save();
    return response()->json(['appraisal' => $this->getUserAppraisal($unitAppraisal->appraisal_id)]);
  }
}
