<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    use HasFactory, Notifiable;


    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $guarded = [];
    // protected static $user = $this;

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];
    public function profile()
    {
        return $this->hasOne(Profile::class);
    }
    public function hasPermission($permission)
    {
        $userPermission = $this->checkUserPermissions($permission);

        if ($permission === $userPermission) {
            return true;
        }
        return false;
    }
    public function checkUserPermissions($permission)
    {
        $permissions = $this->getUserPermissions();
        if ($this->roles) {
            if (in_array($permission, $permissions)) {
                return $permission;
            }
        }
        return '';
    }
    public function getUserPermissions()
    {
        if ($this->roles) {
            $userRoles = json_decode($this->roles);
            if (count($userRoles)) {
                $roles = Role::whereIn('role', $userRoles)->get();
                $permissions = [];
                for ($i = 0; $i < count($roles); $i++) {
                    $perm = json_decode($roles[$i]->permissions);
                    $permissions = array_values(array_merge($permissions, array_values(array_merge($perm->page, $perm->tab, $perm->other, $perm->crud, $perm->organization))));
                }
                return $permissions;
            }
            return $userRoles;
        }
    }
}
