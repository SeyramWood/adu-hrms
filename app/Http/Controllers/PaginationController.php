<?php

namespace App\Http\Controllers;

use App\Models\Appraisal;
use App\Traits\Admin;
use App\Traits\ManageKPI;
use Illuminate\Http\Request;

class PaginationController extends Controller
{
    use Admin, ManageKPI;
    public function usersPerPage()
    {
        return $this->getUsers();
    }
    public function appraisalsPerPage()
    {
        return $this->getAppraisals();
    }
    public function appraiseesPerPage(Appraisal $appraisal)
    {
        return $this->getAppraisees($appraisal);
    }
}
