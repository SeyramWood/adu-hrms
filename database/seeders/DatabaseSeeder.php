<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        \App\Models\Profile::factory(1)->create();
        \App\Models\Role::factory(1)->create();
        $this->generateDefaultPermission();
    }

    public function generateDefaultPermission()
    {
        $page = [
            'view_admin', 'view_pim', 'view_leave', 'view_kpi'
        ];
        $tab = [
            'user_management', 'job', 'shift_management', 'organization', 'staff_list', 'work_shift', 'pim_reports', 'pim_configuration', 'appraisal', 'kpi_configuration'
        ];
        $other = ['review_appraisal', 'approve_it_equipment'];
        $organization = ['admin', 'president', 'oft_president', 'vice_president', 'branch_manager', 'hod', 'supervisor'];
        $crud = ['create', 'read', 'update', 'delete'];
        DB::table('permissions')->insert([
            'page' => json_encode($page),
            'tab' => json_encode($tab),
            'other' => json_encode($other),
            'crud' => json_encode($crud),
            'organization' => json_encode($organization),
        ]);
    }
}
