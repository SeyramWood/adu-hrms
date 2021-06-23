<?php

namespace Database\Factories;

use App\Models\RolePermission;
use Illuminate\Database\Eloquent\Factories\Factory;

class RolePermissionFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = RolePermission::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $data = [
            ['role' => 'ESS', 'permission' => 0],
            ['role' => 'Admin', 'permission' => 1],
            ['role' => 'Supervisor', 'permission' => 2],
        ];
        return [
            'role_permission' => json_encode($data)
        ];
    }
}
