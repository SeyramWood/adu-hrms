<?php

namespace Database\Factories;

use App\Models\User;
use App\Models\Profile;
use Illuminate\Database\Eloquent\Factories\Factory;

class ProfileFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Profile::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $qualifications = [
            'workExperience' => [],
            'education' => [],
            'skills' => [],
            'languages' => [],
            'attachments' => [],
        ];
        $userPersonalDetails = [
            'avatar' => "",
            'title' => "Mr.",
            'firstName' => "Admin",
            'middleName' => "Admin",
            'lastName' => "Admin",
            'staffId' => "",
            'otherId' => "",
            'birthDate' => "",
            'maritalStatus' => "",
            'nationality' => "",
            'gender' => "",
            'attachments' => [],
        ];
        return [
            'user_id' => User::factory(),
            'slug' => 'admin-admin-admin',
            'personal_details' => json_encode((object)$userPersonalDetails),
            'qualifications' => json_encode((object)$qualifications),
        ];
    }
}
