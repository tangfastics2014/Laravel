<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Topic;

class TopicsController extends Controller
{
    public function index()
    {
        return Topic::latest()->paginate();
    }
}