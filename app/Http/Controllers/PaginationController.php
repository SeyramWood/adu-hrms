<?php

namespace App\Http\Controllers;

use App\Models\Appraisal;
use App\Traits\Admin;
use App\Traits\ManageEquipmentRequest;
use App\Traits\ManageKPI;
use App\Traits\Staff;
use Illuminate\Http\Request;

class PaginationController extends Controller
{
    use Admin, ManageKPI, Staff, ManageEquipmentRequest;
    public function usersPerPage()
    {
        return $this->getUsers();
    }
    public function staffPerPage()
    {
        return $this->getStaffList();
    }
    public function appraisalsPerPage()
    {
        return $this->getAppraisals();
    }
    public function appraiseesPerPage(Appraisal $appraisal)
    {
        return $this->getAppraisees($appraisal);
    }
    public function searchStaffDirectory(Request $request)
    {
        return $this->getStaffDirInfo($request->search ?? null);
    }
    public function myEquipmentRequests()
    {
        return $this->getMyEquipmentRequests();
    }
    public function equipmentRequests()
    {
        return $this->getEquipmentRequests();
    }
    public function myEquipmentAllocations()
    {
        return $this->getMyEquipmentAllocations();
    }
    public function equipmentAllocations()
    {
        return $this->getEquipmentAllocations();
    }
}
