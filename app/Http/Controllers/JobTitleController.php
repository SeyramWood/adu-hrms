<?php

namespace App\Http\Controllers;

use App\Models\JobTitle;
use App\Traits\Job;
use Illuminate\Http\Request;

class JobTitleController extends Controller
{
    use Job;

    public function create(Request $request)
    {
        return $this->createJobTitle($request);
    }
    public function edit(Request $request, JobTitle $jobTitle)
    {
        return $this->updateJobTitle($request, $jobTitle);
    }
    public function delete(JobTitle $jobTitle)
    {
        if ($this->deleteJobSpecification($jobTitle->specification)) {
            $jobTitle->delete();
        }
        return response()->json(['deleted' => true]);
    }
    public function deleteTitles($jobTitles)
    {
        $ids = json_decode($jobTitles);
        for ($i = 0; $i < count($ids); $i++) {
            $jobTitle = JobTitle::find($ids[$i]);
            if ($this->deleteJobSpecification($jobTitle->specification)) {
                $jobTitle->delete();
            }
        }
        return response()->json(['deleted' => true]);
    }
}
