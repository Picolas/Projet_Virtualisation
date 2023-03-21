<?php

namespace App\Http\Controllers\Message;

use App\Http\Controllers\Controller;
use App\Models\Message;
use Illuminate\Http\Request;

class MessageController extends Controller
{
    public function getMessage(Request $request)
    {
        $message = Message::all();
        return response()->json([
            'message' => $message,
        ]);
    }
}
