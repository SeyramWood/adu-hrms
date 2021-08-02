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
 * Job
 */
trait Job
{
  public function getJobCategory()
  {
    return DB::table('job_categories')
      ->orderBy('id', 'desc')
      ->get();
  }
  public function getJobTitle()
  {
    return DB::table('job_titles')
      ->orderBy('id', 'desc')
      ->get();
  }
  public function getEmploymentStatus()
  {
    return DB::table('employment_statuses')
      ->orderBy('id', 'desc')
      ->get();
  }
  public function createJobCategory($request)
  {
    $request->validate([
      'categoryName' => 'required|string',
    ]);
    return JobCategory::create([
      'category' => $request->categoryName
    ]);
  }
  public function updateJobCategory($request, $jobCategory)
  {
    $request->validate([
      'categoryName' => 'required|string',
    ]);
    $jobCategory->category = $request->categoryName;
    $jobCategory->save();
    return response()->json(['updated' => true, 'category' => JobCategory::find($jobCategory->id)]);
  }
  public function createJobTitle($request)
  {
    $request->validate([
      'category' => 'required|numeric',
      'title' => 'required|string',
      'description' => 'nullable|string',
      'specification' => 'nullable|file|mimes:pdf|max:2048',
    ]);
    if ($request->file('specification')) {
      return JobTitle::create([
        'job_category_id' => $request->category,
        'title' => $request->title,
        'description' => $request->description,
        'specification' => $this->processJobSpecification($request),
      ]);
    }
    return JobTitle::create([
      'job_category_id' => $request->category,
      'title' => $request->title,
      'description' => $request->description,
    ]);
  }
  public function updateJobTitle($request, $jobTitle)
  {
    if ($request->has('specification')) {
      $request->validate([
        'category' => 'required|numeric',
        'title' => 'required|string',
        'description' => 'nullable|string',
        'specification' => 'nullable|file|mimes:pdf|max:2048',
      ]);
      $jobTitle->title = $request->title;
      $jobTitle->description = $request->description;
      $jobTitle->specification = $this->processJobSpecification($request, $jobTitle->specification);
      $jobTitle->save();
    } else {
      $request->validate([
        'category' => 'required|numeric',
        'title' => 'required|string',
        'description' => 'required|string'
      ]);
      $jobTitle->title = $request->title;
      $jobTitle->description = $request->description;
      $jobTitle->save();
    }
    return response()->json(['updated' => true, 'job' => JobTitle::find($jobTitle->id)]);
  }
  public function createEmploymentStatus($request)
  {
    $request->validate([
      'status' => 'required|string',
    ]);
    return EmploymentStatus::create($request->all());
  }
  public function updateEmploymentStatus($request, $employmentStatus)
  {
    $employmentStatus->status = $request->status;
    $employmentStatus->save();
    return response()->json(['updated' => true, 'status' => EmploymentStatus::find($employmentStatus->id)]);
  }
  public function processJobSpecification($request, $prevFile = null)
  {
    $fileName = strtolower(str_replace(' ', '_', $request->title)) . '_' . time() . '.' . $request->file('specification')->extension();
    if ($prevFile) {
      if (Storage::disk('public')->exists("job-specifications/{$prevFile}")) {
        Storage::disk('public')->delete("job-specifications/{$prevFile}");
        Storage::putFileAs('public/job-specifications', $request->file('specification'), $fileName);
      }
    } else {
      Storage::putFileAs('public/job-specifications', $request->file('specification'), $fileName);
    }
    return $fileName;
  }
  public function deleteJobSpecification($file)
  {
    if (Storage::disk('public')->exists("job-specifications/{$file}")) {
      Storage::disk('public')->delete("job-specifications/{$file}");
    }
    return true;
  }
}
