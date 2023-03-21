<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Artisan;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/migrate', function () {
    Artisan::call('migrate');
    return 'Migrated';
});

Route::get('/db', function () {
    dump(env("DB_HOST", "somedefaultvalue"));
    dump(env("DB_PORT", "somedefaultvalue"));
    dump(env("DB_DATABASE", "somedefaultvalue"));
    dump(env("DB_USERNAME", "somedefaultvalue"));
    dump(env("DB_PASSWORD", "somedefaultvalue"));
});
