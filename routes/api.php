<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Stichoza\GoogleTranslate\GoogleTranslate;
use Illuminate\Support\Facades\App;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/bio', function () {
    App::setLocale('fr');
    session()->put('locale', 'fr');
    $tr = new GoogleTranslate('fr'); // Translates into English
    // return $tr->translate('my name is Seyram');
    return response()->json(['data' => 'What you could do is extract all those repetitions and fit them inside a helper service file that you can then import and use. You could also extract this into Vuex actions, but because it will not be used inside Vue components that often, it doesn’t make sense. That would also make them async.']);
});
