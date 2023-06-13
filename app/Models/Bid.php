<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Bid extends Model
{
    use HasFactory;

    protected $fillable = [
        'post_id',
        'msg',
        'bid_price',
        'user_id',
    ];
    
    public function post()
    {
        return $this->belongsTo('App\Models\Post');
    }
    public function user()
    {
        return $this->belongsTo('App\Models\User');
    }
}
