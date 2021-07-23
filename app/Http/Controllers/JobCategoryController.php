<?php

namespace App\Http\Controllers;

use App\Models\JobCategory;
use App\Traits\Job;
use Illuminate\Http\Request;

class JobCategoryController extends Controller
{
    use Job;

    public function create(Request $request)
    {
        return $this->createJobCategory($request);
    }
    public function edit(Request $request, JobCategory $jobCategory)
    {
        return $this->updateJobCategory($request, $jobCategory);
    }
    public function delete(JobCategory $jobCategory)
    {
        $jobCategory->delete();
        return response()->json(['deleted' => true]);
    }
    public function deleteCategories($jobCategories)
    {
        JobCategory::whereIn('id', json_decode($jobCategories))->delete();
        return response()->json(['deleted' => true]);
    }
}
