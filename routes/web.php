<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\Auth\RegisteredUserController;
use Illuminate\Support\Facades\Auth;
use App\Models\Post;
use App\Models\User;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('App', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('user/User',['posts'=>Auth::user()->posts()->with('bids.user')->get(),
'scrappers'=>User::where('type','3')->take(3)->oldest()->get(),
'repairers'=>User::where('type','2')->take(3)->get(),]);
})->middleware('auth')->name('dashboard');

// Route::middleware('auth')->group(function () {
//     Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
//     Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
//     Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
// });

Route::get('/about', function () {
    return Inertia::render('about/About');
});
Route::get('/services', function () {
    return Inertia::render('service/Service');
})->name('Services');
Route::get('/edit-profile', function () {
    return Inertia::render('edit-profile/EditProfile1',['auth'=>Auth::user()]);
});
Route::get('/chat', function () {
    return Inertia::render('Home',['auth'=>Auth::user()]);
});
Route::get('/post/{id}', function (string $id) {

    $post=Post::find($id);
    return Inertia::render('job-page/jobPage',['post'=>$post]);
});

Route::post('/bid/{id}', [RegisteredUserController::class, 'post_bid']);
Route::get('/post-job', function () {
    return Inertia::render('job-post/Jobpost',['auth'=>Auth::user()]);
});
Route::get('/updatepp', function () {
    return Inertia::render('updatepp/Layout',['path'=>Auth::user()]);
});
Route::get('/jobs', function () {
    return Inertia::render('jobs/Jobs',['posts'=>Post::latest()->with('user')->get()]);
});
Route::get('/dashboard-repairer', function () {
    return Inertia::render('repairer/Repairer');
});
Route::get('/dashboard-scrapper', function () {
    return Inertia::render('scraper/Scrap');
});
Route::post('/edit-profile',  [RegisteredUserController::class, 'edit_profile']);

Route::post('/post-job',  [RegisteredUserController::class, 'post_job']);

require __DIR__.'/auth.php';
