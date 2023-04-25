<?php

namespace App\Http\Controllers;

use App\Models\Todo;
use Illuminate\Http\Request;

class TodoController extends Controller
{
    public function index()
    {
        $todo = Todo::All();
        return json_encode($todo);
    }
    public function create(Request $req)
    {
        $todo = new Todo;
        $todo->title = $req->input('title');
        $todo->description = $req->input('description');
        $todo->completion = $req->input('completion');
        $todo->user_id = $req->input('user_id');
        $todo->save();
        return $todo;
    }

    public function update($id)
    {

        $todo = Todo::find($id)
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
        $todo = Todo::find($id);
        $todo->delete();
    }
}
