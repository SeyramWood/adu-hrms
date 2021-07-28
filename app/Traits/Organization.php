<?php

namespace App\Traits;

use Image;
use App\Models\Branch;
use App\Models\Position;
use App\Models\Department;
use Illuminate\Support\Facades\DB;
use App\Models\OrganizationMetadata;
use App\Models\Unit;
use Illuminate\Support\Facades\Storage;

/**
 * Organization
 */
trait Organization
{
  use Generator;

  public function getBranches()
  {
    return DB::table('branches')
      ->orderBy('id', 'desc')
      ->get();
  }
  public function getDepartments()
  {
    return DB::table('departments')
      ->orderBy('id', 'desc')
      ->get();
  }
  public function getUnits($id = null)
  {
    if ($id) {
      return DB::table('units')
        ->where('units.id', $id)
        ->leftJoin('departments', 'departments.id', '=', 'units.department_id')
        ->select(
          'units.*',
          'departments.name as department'
        )
        ->first();
    }
    return DB::table('units')
      ->leftJoin('departments', 'departments.id', '=', 'units.department_id')
      ->select(
        'units.*',
        'departments.name as department'
      )
      ->orderBy('id', 'desc')
      ->get();
  }
  public function getPositions()
  {
    return DB::table('positions')
      ->orderBy('id', 'desc')
      ->get();
  }
  public function getOrganizationMetadata()
  {
    return DB::table('organization_metadata')->first();
  }
  public function createBranch($request)
  {
    $request->validate([
      'name' => 'required|string',
      'city' => 'required|string',
      'telephone' => 'required|string',
      'landmark' => 'required|string',
      'email' => 'required|string|email|unique:branches',
      'address' => 'required|string',
    ]);

    return Branch::create($request->all());
  }
  public function createDepartment($request)
  {
    $request->validate([
      'name' => 'required|string',
    ]);

    return Department::create($request->all());
  }
  public function updateDepartment($request, $department)
  {
    $request->validate([
      'name' => 'required|string',
    ]);
    $department->name = $request->name;
    $department->save();
    return response()->json(['updated' => true, 'department' => Department::where('id', $department->id)->first()]);
  }

  public function createUnit($request)
  {
    $request->validate([
      'name' => 'required|string',
      'department' => 'required|numeric',
    ]);
    $unit = Unit::create([
      'department_id' => $request->department,
      'name' => $request->name,
    ]);
    return response()->json(['created' => true, 'unit' => $this->getUnits($unit->id)]);
  }
  public function updateUnit($request, $unit)
  {
    $request->validate([
      'name' => 'required|string',
      'department' => 'required|numeric',
    ]);
    $unit->name = $request->name;
    $unit->department_id = $request->department;
    $unit->save();
    return response()->json(['updated' => true, 'unit' => $this->getUnits($unit->id)]);
  }
  public function createPosition($request)
  {
    $request->validate([
      'name' => 'required|string',
    ]);

    return Position::create($request->all());
  }
  public function updateBranch($request, $branch)
  {
    $request->validate([
      'name' => 'required|string',
      'city' => 'required|string',
      'telephone' => 'required|string',
      'landmark' => 'required|string',
      'email' => 'required|string|email',
      'address' => 'required|string',
    ]);
    $branch->name = $request->name;
    $branch->city = $request->city;
    $branch->telephone = $request->telephone;
    $branch->landmark = $request->landmark;
    $branch->email = $request->email;
    $branch->address = $request->address;
    $branch->save();
    return response()->json(['updated' => true, 'branch' => Branch::find($branch->id)]);
  }
  public function updatePosition($request, $position)
  {
    $request->validate([
      'name' => 'required|string',
    ]);
    $position->name = $request->name;
    $position->save();
    return response()->json(['updated' => true, 'position' => Position::find($position->id)]);
  }
  public function updateBrandLogo($request)
  {
    $request->validate([
      'logo' => 'required|file|mimes:png,jpg,jpeg,svg|max:2048',
    ]);
    $meta = DB::table('organization_metadata')->first();
    $file = $this->processBrandLogo($request, $meta);
    if ($meta) {
      DB::table('organization_metadata')->where('id', $meta->id)->update([
        'logo' => $file
      ]);
    } else {
      OrganizationMetadata::create(['logo' => $file]);
      return response()->json(['updated' => true, 'org' => OrganizationMetadata::first()]);
    }
    return response()->json(['updated' => true, 'logo' => $file]);
  }
  public function updateMetadata($request)
  {
    $request->validate([
      'name' => 'required|string',
      'city' => 'required|string',
      'telephone' => 'required|string',
      'landmark' => 'required|string',
      'email' => 'required|string|email',
      'address' => 'required|string',
      "district" => 'required|string',
      "region" => 'required|string',
      "regNumber" => 'string|nullable',
      "tin" => 'string|nullable',
    ]);
    $data = DB::table('organization_metadata')->first();
    if ($data) {
      DB::table('organization_metadata')->where('id', $data->id)->update([
        'name' => $request->name,
        'city' => $request->city,
        'telephone' => $request->telephone,
        'landmark' => $request->landmark,
        'email' => $request->email,
        'address' => $request->address,
        "district" => $request->district,
        "region" => $request->region,
        "reg_number" => $request->regNumber,
        "tin" => $request->tin,
      ]);
    } else {
      OrganizationMetadata::create([
        'name' => $request->name,
        'city' => $request->city,
        'telephone' => $request->telephone,
        'landmark' => $request->landmark,
        'email' => $request->email,
        'address' => $request->address,
        "district" => $request->district,
        "region" => $request->region,
        "reg_number" => $request->regNumber,
        "tin" => $request->tin,
      ]);
    }
    return response()->json(['updated' => true, 'info' => DB::table('organization_metadata')->first()]);
  }

  protected function processBrandLogo($request, $meta = null)
  {
    $image = $request->file('logo');
    $fileName = strtolower("{$this->uuid(16)}") . '.' . $image->extension();
    if ($meta && $meta->logo) {
      if (Storage::disk('public')->exists("logo/{$meta->logo}")) {
        Storage::disk('public')->delete("logo/{$meta->logo}");
      }
      Storage::putFileAs('public/logo', $image, $fileName);
      // Image::make($image->path())->resize(250, 100, function ($const) {
      //   $const->aspectRatio();
      // })->save(storage_path("app/public/logo/{$fileName}"), 100, 'jpg');
    } else {
      if (!Storage::disk('public')->exists("logo")) {
        Storage::disk('public')->makeDirectory('logo');
      }
      Storage::putFileAs('public/logo', $image, $fileName);
      // Image::make($image->path())->resize(250, 100, function ($const) {
      //   $const->aspectRatio();
      // })->save(storage_path("app/public/logo/{$fileName}"), 100, 'jpg');
    }
    return $fileName;
  }
  // protected function processAvatar($request, $id)
  // {
  //   $userProfile = json_decode(Profile::where('user_id', $id)->first()->personal_details);
  //   $fileName = strtolower("{$userProfile->firstName}{$userProfile->lastName}_avatar") . '_' . time() . '.' . $request->file('avatar')->extension();
  //   if (Storage::disk('public')->exists("avatar/{$userProfile->avatar}")) {
  //     Storage::disk('public')->delete("avatar/{$userProfile->avatar}");
  //     Storage::putFileAs('public/avatar', $request->file('avatar'), $fileName);
  //   } else {
  //     Storage::putFileAs('public/avatar', $request->file('avatar'), $fileName);
  //   }
  //   return $fileName;
  // }
}
