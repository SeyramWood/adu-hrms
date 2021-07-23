<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Traits\Admin;
use App\Traits\Staff;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AdminController extends Controller
{
    use Admin, Staff;
    public function checkPassword(User $user, $password)
    {
        return response()->json(['confirmed' => Hash::check($password, $user->password)]);
    }
    public function deleteUser(User $user)
    {
        $user->delete();
        return response()->json(['deleted' => true]);
    }
    public function deleteUsers($users)
    {
        User::whereIn('id', explode(',', $users))->delete();
        return response()->json(['deleted' => true, 'staffCount' => $this->getStaffCount()]);
    }
    public function assignUsersRole(Request $request)
    {
        return $this->assignRole($request);
    }
    public function assignUsersStatus(Request $request)
    {
        return $this->assignStatus($request);
    }
}
