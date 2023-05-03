<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Providers\RouteServiceProvider;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Inertia\Response;

class RegisteredUserController extends Controller
{
    /**
     * Display the registration view.
     */
    public function create(): Response
    {
        return Inertia::render('Auth/Register');
    }

    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request): RedirectResponse
    {
        
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:'.User::class,
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
            'type'=>'required',
            'age'=>'required|integer',
            'gender'=>'required',
        ]);
        
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'type'=> $request->type,
            'age' => $request->age,
            'gender' => $request->gender,
        ]);

        event(new Registered($user));

        Auth::login($user);

        if($user->type=='4'){
            return redirect(RouteServiceProvider::HOME);
        }
        elseif($user->type=='3'){
            return redirect('/dashboard');
        }
        elseif($user->type=='2'){
            return redirect('/dashboard');
        }
        else{
            return redirect('/dashboard');
        }

        return redirect(RouteServiceProvider::HOME);
    }
}
