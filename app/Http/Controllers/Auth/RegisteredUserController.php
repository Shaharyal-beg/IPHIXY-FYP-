<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Models\Post;
use App\Models\Bid;
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
    public function update(Request $request)
    {
        $user=Auth::user();
        $request->validate([
            'name' => 'nullable|string|max:255',
            'email' => 'nullable|string|email|max:255|unique:'.User::class,
            'password' => ['nullable', 'confirmed', Rules\Password::defaults()],
            'dob' => 'nullable|max:255',
            'city' => 'nullable|string|max:255',
            'gender'=>'nullable|integer',
        ]);
        $update=[];
        if(!empty($request->password))
        {
            $update['password'] = Hash::make($request->password);
        }
        if(!empty($request->name))
        {
            $update['name'] = $request->name;
        }
        if(!empty($request->email))
        {
            $update['email'] = $request->email;
        }
        if(!empty($request->city))
        {
            $update['city'] = $request->city;
        }
        if(!empty($request->dob))
        {
            $update['dob'] = $request->dob;
        }
        if(!empty($request->gender))
        {
            $update['gender'] = $request->gender;
        }

            $user->update($update);
        return redirect('/dashboard');
        

    }
    public function storeAvatar(Request $request)
    {

        $request->validate([
            'image' => 'required|image',
        ]);
  
        $image = $request->file('image');

        if ($image) {
            // Store the image in your desired location
            $path = $image->store('images', 'public');
            Auth::user()->update([
                'avatar'=>$path,
            ]);
            
            return redirect('/updatepp');
        }
        
        
        return redirect('/updatepp');
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
        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'type'=> $request->type,
        ]);

        event(new Registered($user));

        Auth::login($user);

        return redirect('/dashboard');
    
    }
    public function edit_profile(Request $request){
        
        $request->validate([
            'institute'=>'required',
            'degree'=>'required',
            'company'=>'required',
            'position'=>'required',
            'detail'=>'required',
            'estartdate'=>'required',
            'eenddate'=>'required',
            'wstartdate'=>'required',
            'wenddate'=>'required'
        ]);
        $request->user()->update([
            'institute_uni'=>$request->institute,
            'degree_name'=>$request->degree,
            'uni_start'=>$request->estartdate,
            'detail'=>$request->detail,
            'uni_end'=>$request->eenddate,
            'institute_job'=>$request->company,
            'position_name'=>$request->position,
            'job_start'=>$request->wstartdate,
            'job_end'=>$request->wenddate,
        ]);
        $user=$request->user();

        return redirect('/dashboard');
    }
    public function post_job(Request $request){
        $post=new Post;
        $image = $request->file('image');

        if ($image) {
            // Store the image in your desired location
            $path = $image->store('posts', 'public');        
        }
        $post=Post::create([
            'productname'=>$request->productname,
            'area'=>$request->productname,
            'jobtype'=>$request->jobtype,
            'w_date'=>$request->date,
            'bid_price'=>$request->bidprice,
            'note'=>$request->note,
            'description'=>$request->description,
            'image_path'=>$path,
            'user_id'=>Auth::user()->id,
        ]);
        // $user=$post->user()->first();
        // dd($user->posts()->first());
        return redirect('/dashboard');
    }
    public function post_bid(Request $request,string $id){
        // dd($request);
 

        Bid::create([
            'user_id'=>Auth::user()->id,
            'post_id'=>$id,
            'bid_price'=>$request->bidAmount,
        ]);
        
    }
    
}
