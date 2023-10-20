<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Post;

class PostController extends Controller
{

    public function index()
    {
        $posts = Post::all();
        return response()->json([
            'status'=> 200,
            'posts'=>$posts,
        ]);
    }

    public function store(Request $request)
    {
        $post = new Post;
        $post->title = $request->input('title');
        $post->description = $request->input('description');
        $post->save();

        return response()->json([
            'status'=> 200,
            'message'=>'Post added successfully',
        ]);
    }

    public function destroy($id)
    {
        $post = Post::find($id);
        $post->delete();

        return response()->json([
            'status'=> 200,
            'message'=>'Post deleted successfully',
        ]);
    }
}
