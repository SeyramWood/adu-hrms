<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Traits\Auth\Account;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Password;
use Illuminate\Auth\Events\PasswordReset;

class PasswordResetContoller extends Controller
{
    use Account;

    public function index()
    {
        return inertia('PasswordResetLink');
    }
    public function sendPasswordResetLink(Request $request)
    {
        $request->validate(['username' => 'required|email']);
        $status = Password::sendResetLink(
            ['email' => $request->username]
        );
        return $status === Password::RESET_LINK_SENT
            ? back()->with(['resetLinkStatus' => __($status)])
            : back()->withErrors(['username' => __($status)]);
    }
    public function passwordReset(Request $request, $token)
    {
        return inertia('PasswordReset', ['token' => $token, 'email' => $request->email]);
    }
    public function passwordRecover(Request $request)
    {
        $request->validate([
            'token' => 'required',
            'username' => 'required|email',
            'password' => 'required|min:8|confirmed',
        ]);
        $status = Password::reset(
            [
                'email' => $request->username,
                'password' => $request->password,
                'password_confirmation' => $request->password_confirmation,
                'token' => $request->token,
            ],
            function ($user, $password) use ($request) {
                $user->forceFill([
                    'password' => Hash::make($password)
                ])->setRememberToken(Str::random(60));

                $user->save();

                event(new PasswordReset($user));
            }
        );

        return $status == Password::PASSWORD_RESET
            ? redirect()->route('welcome')->with('status', __($status))
            : back()->withErrors(['email' => [__($status)]]);
    }

    public function changePassword(Request $request)
    {
        return $this->updatePassword($request);
    }
}
