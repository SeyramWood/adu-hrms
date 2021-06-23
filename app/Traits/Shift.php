<?php

namespace App\Traits;

use App\Models\User;
use App\Models\JobTitle;
use App\Models\WorkShift;
use App\Models\JobCategory;
use App\Models\EmploymentStatus;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

/**
 * Shift
 */
trait Shift
{
  public function createWorkShift($request)
  {
    $request->validate([
      "name" => 'required|string',
      "from" => 'required|string',
      "to" => 'required|string',
      "duration" => 'required|string',
      "days" => [
        'array',
        function ($attribute, $value, $fail) {
          count($value) === 0 && $fail('At least a day is required.');
        }
      ],
    ]);
    $shift = WorkShift::create([
      'name' => $request->name,
      'from' => $request->from,
      'to' => $request->to,
      'duration' => $request->duration,
      'days' => json_encode($request->days),
    ]);
    return response()->json(['created' => true, 'data' => WorkShift::find($shift->id)]);
  }
  public function updateWorkShift($request, $workShift)
  {
    $request->validate([
      "name" => 'required|string',
      "from" => 'required|string',
      "to" => 'required|string',
      "duration" => 'required|string',
      "days" => [
        'array',
        function ($attribute, $value, $fail) {
          count($value) === 0 && $fail('At least a day is required.');
        }
      ],
    ]);
    $workShift->name = $request->name;
    $workShift->from = $request->from;
    $workShift->to = $request->to;
    $workShift->duration = $request->duration;
    $workShift->days = json_encode($request->days);
    $workShift->save();
    return response()->json(['created' => true, 'data' => WorkShift::find($workShift->id)]);
  }

  public function destroyShift($workShift)
  {
    $workShift->delete();
    return response()->json(['deleted' => true]);
  }
  public function destroyShifts($workShifts)
  {
    $ids = explode(',', $workShifts);

    for ($i = 0; $i < count($ids); $i++) {
      $shift = WorkShift::find((int)$ids[$i]);
      $shift->delete();
    }
    return response()->json(['deleted' => true]);
  }
}
