<?php

namespace App\Http\Controllers;

use App\Traits\Job;
use App\Traits\Admin;
use App\Traits\ManageRole;
use App\Traits\Shift;
use App\Traits\Staff;
use App\Traits\Organization;
use App\Traits\StaffProfile;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Gate;


class DashboarController extends Controller
{
    use Admin, Job, Staff, Organization, StaffProfile, Shift, ManageRole;

    public function __construct()
    {
        $this->middleware('auth');
    }
    public function index()
    {
        if (!Auth::user()) {
            abort(401);
        }
        return inertia('Dashboard', [
            'jobTitles' => fn () => $this->getJobTitle(),
            'staffCount' => fn () => $this->getStaffCount(),
            'departments' => fn () => $this->getDepartments(),
            'units' => fn () => $this->getUnits(),
        ]);
    }
    public function admin()
    {
        if (!Gate::allows('view_admin', Auth::user())) {
            abort(401);
        }
        return inertia('Administration', [
            'jobCategories' => fn () => $this->getJobCategory(),
            'jobTitles' => fn () => $this->getJobTitle(),
            'workShifts' => fn () => $this->getShifts(),
            'employmentStatuses' => fn () => $this->getEmploymentStatus(),
            'departments' => fn () => $this->getDepartments(),
            'units' => fn () => $this->getUnits(),
            'positions' => fn () => $this->getPositions(),
            'staffCount' => fn () => $this->getStaffCount(),
            'roles' => fn () => $this->getRoles(),
            'permissions' => fn () => $this->getpermissions()
        ]);
    }
    public function ess($user = null, $slug = null)
    {
        if (!Auth::user())
            abort(401);
        if ($user || $slug) {
            if (!Gate::any(['view_admin', 'view_pim',], Auth::user()))
                abort(401);
            if (!$this->getProfile($user, $slug))
                abort(404);
        }
        return inertia('ESS', [
            'profile' => $user ? $this->getProfile($user, $slug) : $this->getProfile(),
            'jobCategories' => fn () => $this->getJobCategory(),
            'jobTitles' => fn () => $this->getJobTitle(),
            'employmentStatuses' => fn () => $this->getEmploymentStatus(),
            'branches' => fn () => $this->getBranches(),
            'departments' => fn () => $this->getDepartments(),
            'units' => fn () => $this->getUnits(),
            'positions' => fn () => $this->getPositions(),
            'supervisors' => fn () => $this->getSupervisors(),
            'hods' => fn () => $this->getHODs(),
            'reportTo' => fn () => $this->getReportTo(),
            'reportToMe' => fn () => $this->getReportToMe(),
            'directorates' => fn () => $this->getDirectorates(),
        ]);
    }
    public function pim()
    {
        if (!Gate::allows('view_pim', Auth::user())) {
            abort(403);
        }
        return inertia('PIM', [
            'jobTitles' => fn () => $this->getJobTitle(),
            'employmentStatuses' => fn () => $this->getEmploymentStatus(),
            'positions' => fn () => $this->getPositions(),
            'jobCategories' => fn () => $this->getJobCategory(),
            'departments' => fn () => $this->getDepartments(),
            'units' => fn () => $this->getUnits(),
            'workShifts' => fn () => $this->getShifts(),
        ]);
    }
    public function leave()
    {
        if (!Gate::allows('view_leave', Auth::user())) {
            abort(403);
        }
        return inertia('Leave');
    }
    public function kpi()
    {
        // if (!Auth::user()) {
        //     abort(401);
        // }
        return inertia('KPI', [
            'departments' => $this->getDepartments(),
            'units' => $this->getUnits(),
            'jobTitles' => $this->getJobTitle(),
            'roles' => $this->getRoles(),
        ]);
    }
    public function staffDirectory()
    {
        // if (!Auth::user()) {
        //     abort(401);
        // }
        return inertia('StaffDirectory', [
            //
        ]);
    }
}
