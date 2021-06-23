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
        $ids = json_decode($jobCategories);
        for ($i = 0; $i < count($ids); $i++) {
            $category = JobCategory::find($ids[$i]);
            $category->delete();
        }
        return response()->json(['deleted' => true]);
    }
}
