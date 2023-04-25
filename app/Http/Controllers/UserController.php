<?php

namespace App\Http\Controllers;
use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function get (){
$user = User::all();
return json_encode($user);
    }

    public function register(Request $req)
    {
        $user = new user;
          $user -> name = $req->input('name');
          $user ->email = $req->input('email');
          $user ->password = $req->input('password');
          $user ->save();
        return   $user ;
    }
}
