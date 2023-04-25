<?php

namespace App\Http\Controllers;
use App\Models\Register;
use Illuminate\Http\Request;

class RegisterController extends Controller
{
    public function user_reg()
    {
        $register = Register::All();
        return json_encode($register);
    }
    public function user_cre(Request $req)
    {
        $register = new Register;
        $register->name = $req->input('name');
        $register->email = $req->input('email');
        $register->password = $req->input('password');
        $register->save();
        return $register;
    }

    public function update($id)
    {

        $todo = Register::find($id)
            ->update([
                'title' => request('title'),
                'description' => request('description'),
                'completion' =>  request('completion'),
                'user_id' => request('user_id')
            ]);
        $todo->save();
        return $todo;
    }
    public function destroy($id)
    {
        $todo =register::find($id);
        $todo->delete();
    }
}
