<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class UploadFile extends Model
{
    
    protected $fillable = [
        'user_id',
        'session_id',
    ];

    public function upload(){
        return $this->belongsTo(Upload::class);
    }
}