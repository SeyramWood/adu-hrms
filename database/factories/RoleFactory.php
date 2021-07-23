<?php

namespace Database\Factories;

use App\Models\Role;
use Illuminate\Database\Eloquent\Factories\Factory;

class RoleFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Role::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $permissions = [
            "page" => ["view_admin", "view_kpi", "view_pim", "view_leave"],
            "tab" => ["user_management", "job", "shift_management", "organization", "staff_list", "work_shift", "pim_reports", "pim_configuration", "appraisal", "kpi_configuration"],
            "dashboard" => [],
            "crud" => ["read", "create", "update", "delete"],
            "organization" => ['admin', 'president', 'oft_president', 'vice_president', 'branch_manager', 'hod', 'supervisor'],
        ];
        return [
            'role' => 'Admin',
            'permissions' => json_encode((object)$permissions),
            'staff' => json_encode([1]),
        ];
    }
}
