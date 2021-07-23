<?php

namespace App\Providers;

use App\Models\User;
use Illuminate\Support\Facades\Gate;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;

class PermissionServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        $this->registerPolicies();

        /**Page Permissions */
        Gate::define('view_admin', function (User $user) {
            return $user->hasPermission('view_admin');
        });
        Gate::define('view_pim', function (User $user) {
            return $user->hasPermission('view_pim');
        });
        Gate::define('view_leave', function (User $user) {
            return $user->hasPermission('view_leave');
        });
        Gate::define('view_kpi', function (User $user) {
            return $user->hasPermission('view_kpi');
        });

        /**Tab Permissions */

        Gate::define('user_manament', function (User $user) {
            return $user->hasPermission('user_manament');
        });

        /**Organization Permissions */
        Gate::define('admin', function (User $user) {
            return $user->hasPermission('admin');
        });
        Gate::define('president', function (User $user) {
            return $user->hasPermission('president');
        });
        Gate::define('oft_president', function (User $user) {
            return $user->hasPermission('oft_president');
        });
        Gate::define('vice_president', function (User $user) {
            return $user->hasPermission('vice_president');
        });
        Gate::define('branch_manager', function (User $user) {
            return $user->hasPermission('branch_manager');
        });
        Gate::define('hod', function (User $user) {
            return $user->hasPermission('hod');
        });
        Gate::define('supervisor', function (User $user) {
            return $user->hasPermission('supervisor');
        });
    }
}
