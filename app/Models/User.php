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

    public function hasRole($role)
    {
        $userUser = $this->getUserRole($role);
        if (strtolower($role) === $userUser) {
            return true;
        }
        return false;
    }
    public function getUserRole($role)
    {
        if ($this->role) {
            $userRoles = json_decode($this->role);
            if (in_array(ucfirst($role), $userRoles)) {
                return strtolower($role);
            }
            return 'ess';
        }
    }
}
