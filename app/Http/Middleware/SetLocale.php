<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class SetLocale
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        // app()->setLocale(config('app.locale'));
        // if (session()->has('locale')) {
        //     app()->setLocale(session('locale'));
        // }
        // $response = $next($request);
        // $request->header()['Accept-Language'] = 'fr';
        // dd($request->header()['Accept-Language'] = 'fr');
        // $request->header('Accept-Language', 'fr');
        // $response->header('another header', 'another value');
        // return $next($request);
    }
}
