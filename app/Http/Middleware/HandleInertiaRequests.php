<?php

namespace App\Http\Middleware;

use App\Traits\Organization;
use App\Traits\Staff;
use App\Traits\StaffProfile;
use Illuminate\Http\Request;
use Inertia\Middleware;

class HandleInertiaRequests extends Middleware
{
    use Organization;
    use StaffProfile;
    /**
     * The root template that's loaded on the first page visit.
     *
     * @see https://inertiajs.com/server-side-setup#root-template
     * @var string
     */
    protected $rootView = 'app';
    /**
     * Determines the current asset version.
     *
     * @see https://inertiajs.com/asset-versioning
     * @param  \Illuminate\Http\Request  $request
     * @return string|null
     */
    public function version(Request $request)
    {
        return parent::version($request);
    }

    /**
     * Defines the props that are shared by default.
     *
     * @see https://inertiajs.com/shared-data
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function share(Request $request)
    {
        return array_merge(parent::share($request), [
            // Lazily
            'authUser' => fn () => $this->authProfile()
                ? $this->authProfile()
                : null,
            'userRoles' => fn () => $this->getUserRoles($request->user()),
            'orgInfo' => fn () => $this->getOrganizationMetadata()
                ? $this->getOrganizationMetadata()
                : null,
            'locale' => fn () =>  app()->getLocale(),

        ]);
    }
    public function getUserRoles($user)
    {
        if ($user) {
            if ($user->role)
                return json_decode($user->role);
            return null;
        }
        return null;
    }
}
