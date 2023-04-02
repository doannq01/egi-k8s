<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\DB;

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
    $info = DB::table('info')->first();
    return view('welcome', ['info' => $info]);
});

Route::get('/env', function () {
    return ['DB_HOST' => env('DB_HOST')];
});

