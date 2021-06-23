<?php

namespace App\Http\Controllers;

use App\Traits\Job;
use App\Models\User;
use App\Traits\Admin;
use App\Traits\Shift;
use App\Traits\Staff;
use App\Traits\Organization;
use App\Traits\StaffProfile;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App as app;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Gate;
use Stichoza\GoogleTranslate\GoogleTranslate;

class DashboarController extends Controller
{
    use Admin, Job, Staff, Organization, StaffProfile, Shift;

    public function __construct()
    {
        $this->middleware('auth');
    }
    public function index()
    {
        if (!Gate::allows('ess', Auth::user())) {
            abort(401);
        }
        // return response(['Accept-Language' => 'fr'])->json([]);
        // Session()->put('locale', 'fr');
        return inertia('Dashboard', [
            'jobTitles' => $this->getJobTitle(),
        ]);
    }
    public function admin(Request $request)
    {
        if (!Gate::allows('admin', Auth::user())) {
            abort(401);
        }
        return inertia('Administration', [
            'jobCategories' => $this->getJobCategory(),
            'jobTitles' => $this->getJobTitle(),
            'workShifts' => $this->getShifts(),
            'employmentStatuses' => $this->getEmploymentStatus(),
            'branches' => $this->getBranches(),
            'departments' => $this->getDepartments(),
            'positions' => $this->getPositions(),
            'staffCount' => $this->getStaffCount(),
            'rolePermissions' => $this->getRolePermissions()
        ]);
    }
    public function manager()
    {
        if (!Gate::allows('manager', Auth::user())) {
            abort(401);
        }
        return inertia('Manager', [
            'jobCategories' => $this->getJobCategory(),
            'jobTitles' => $this->getJobTitle(),
            'workShifts' => $this->getShifts(),
            'employmentStatuses' => $this->getEmploymentStatus(),
            'branches' => $this->getBranches(),
            'departments' => $this->getDepartments(),
            'positions' => $this->getPositions(),
            'staffCount' => $this->getStaffCount(),
            'rolePermissions' => $this->getRolePermissions()
        ]);
    }
    public function supervisor()
    {
        if (!Gate::allows('supervisor', Auth::user())) {
            abort(401);
        }
        return inertia('Supervisor', [
            'jobCategories' => $this->getJobCategory(),
            'jobTitles' => $this->getJobTitle(),
            'workShifts' => $this->getShifts(),
            'employmentStatuses' => $this->getEmploymentStatus(),
            'branches' => $this->getBranches(),
            'departments' => $this->getDepartments(),
            'positions' => $this->getPositions(),
            'staffCount' => $this->getStaffCount(),
            'rolePermissions' => $this->getRolePermissions()
        ]);
    }
    public function ess($user = null, $slug = null)
    {
        if (!Gate::allows('ess', Auth::user()))
            abort(401);
        if ($user || $slug) {
            if (!Gate::any(['admin', 'manager', 'supervisor'], Auth::user()))
                abort(401);
            if (!$this->getProfile($user, $slug))
                abort(404);
        }
        return inertia('ESS', [
            'profile' => $user ? $this->getProfile($user, $slug) : $this->getProfile(),
            'jobCategories' => $this->getJobCategory(),
            'jobTitles' => $this->getJobTitle(),
            'employmentStatuses' => $this->getEmploymentStatus(),
            'branches' => $this->getBranches(),
            'departments' => $this->getDepartments(),
        ]);
    }
    public function pim()
    {
        if (!Gate::any(['admin', 'manager', 'supervisor'], Auth::user())) {
            abort(403);
        }
        return inertia('PIM', [
            'staffList' => $this->getStaffList(),
            'jobTitles' => $this->getJobTitle(),
            'employmentStatuses' => $this->getEmploymentStatus(),
            'positions' => $this->getPositions(),
            'jobCategories' => $this->getJobCategory(),
            'branches' => $this->getBranches(),
            'departments' => $this->getDepartments(),
            'rolePermissions' => $this->getRolePermissions(),
            'workShifts' => $this->getShifts(),
        ]);
    }
    public function leave()
    {
        if (!Gate::any(['admin', 'manager', 'supervisor'], Auth::user())) {
            abort(403);
        }
        return inertia('Leave');
    }
    public function kpi()
    {
        if (!Gate::any(['admin', 'manager', 'supervisor'], Auth::user())) {
            abort(403);
        }
        return inertia('KPI', [
            'branches' => $this->getBranches(),
            'departments' => $this->getDepartments(),
            'rolePermissions' => $this->getRolePermissions(),
            'jobTitles' => $this->getJobTitle(),
        ]);
    }
    public function staffDirectory()
    {
        if (!Gate::allows('ess', Auth::user())) {
            abort(403);
        }
        return inertia('StaffDirectory', [
            "staffList" => $this->getStaffList(),
        ]);
    }
}
