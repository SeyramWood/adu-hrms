<?php

namespace App\Traits\Auth;

use App\Models\User;
use App\Traits\Admin;
use App\Traits\Staff;
use App\Models\Profile;
use App\Traits\Generator;
use Illuminate\Support\Str;
use App\Jobs\AccountCreated;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Providers\RouteServiceProvider;

/**
 * CreateAccount
 */
trait Account
{
  use RedirectsUsers;
  use Generator;
  use Admin;
  use Staff;


  public function register($request)
  {
    $request->validate([
      'first_name' => 'required|string|max:255',
      'middle_name' => 'nullable|string|max:255',
      'last_name' => 'required|string|max:255',
      'email' => 'required|string|email|max:255|unique:users',
      'status' => 'required|integer',
    ]);
    $password = $this->generatePassword(8);
    $user = User::create([
      'email' => $request->email,
      'password' => Hash::make($password),
      'roles' => json_encode([]),
      'status' => $request->status,
    ]);
    if ($response = $this->registered($request, $user, $password)) {
      return $response;
    }
  }
  /**
   * The user has been registered.
   *
   * @param  \Illuminate\Http\Request  $request
   * @param  mixed  $user
   * @return mixed
   */
  protected function registered(Request $request, $user, $password)
  {
    $slug = $request->first_name . ' ' . $request->middle_name . ' ' . $request->last_name;
    $qualifications = [
      'workExperience' => [],
      'education' => [],
      'skills' => [],
      'languages' => [],
      'attachments' => [],
    ];
    Profile::create([
      'user_id' => $user->id,
      'personal_details' => json_encode((object)$request->userPersonalDetails),
      'qualifications' => json_encode((object)$qualifications),
      'slug' => Str::slug($slug, '-'),
    ]);
    AccountCreated::dispatchAfterResponse($user, $password, $request->all());
    return response()->json(['user' => $this->getUser($user->id), 'staffCount' => $this->getStaffCount()]);
  }


  public function login($request)
  {
    if ($request->hasHeader('Locale')) {
      Session()->put('locale', $request->header('Locale'));
      app()->setLocale(session('locale'));
    }
    $request->validate([
      'username' => 'required|email',
      'password' => 'required|string',
    ]);
    $credentials = $this->credentials($request);

    if (Auth::attempt($credentials, $request->remember)) {
      $request->session()->regenerate();
      return redirect()->intended(RouteServiceProvider::DASHBOARD);
    }
    return back()->withErrors([
      'credentialError' => trans("validation.attributes.credentialError"),
    ]);
  }


  public function logout($request)
  {
    Auth::logout();
    $request->session()->invalidate();

    $request->session()->regenerateToken();

    return redirect(route('welcome'));
  }

  /**
   * Get the login username to be used by the controller.
   *
   * @return string
   */
  public function credentials($request)
  {
    return [
      'email' => $request->username,
      'password' => $request->password
    ];
  }

  public function updatePassword($request)
  {
    // dd($request->session('locale'));
    $request->validate([
      'current_password' => [
        'required', 'string',
        function ($attribute, $value, $fail) {
          if (!Hash::check($value, Auth::user()->password)) {
            $fail("" . trans("validation.attributes.current_password_text") . ".");
          }
        }
      ],
      'new_password' => 'required|string|min:8',
      'confirm_new_password' => 'required|string|same:new_password',
    ]);
    $user = User::find(Auth::id());
    $user->password = Hash::make($request->new_password);
    $user->save();
    return response()->json(['changed' => true]);
  }
}
