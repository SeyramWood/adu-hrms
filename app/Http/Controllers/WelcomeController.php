<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\URL;

class WelcomeController extends Controller
{
    public function index()
    {
        // return Inertia::render('Welcome', [
        //     'event' => 'Seyram',
        //     'create_url' => URL::route('welcome'),
        // ]);
        // Alternatively, you can use the inertia() helper
        return inertia('Welcome', [
            'event' => 'Seyram',
            'create_url' => URL::route('welcome'),
        ]);
    }
    // public function index()
    // {
    //     return Inertia::render('Users/Index', [
    //         'users' => User::all()->map(function ($user) {
    //             return [
    //                 'id' => $user->id,
    //                 'name' => $user->name,
    //                 'email' => $user->email,
    //                 'edit_url' => URL::route('users.edit', $user),
    //             ];
    //         }),
    //         'create_url' => URL::route('users.create'),
    //     ]);
    // }
}