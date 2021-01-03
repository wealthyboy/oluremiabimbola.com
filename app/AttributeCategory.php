<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class AttributeCategory extends Model
{
    protected $table = 'attribute_category';

    protected $appends = ['name'];

    public function attribute()
    {   
       return $this->belongsTo(Attribute::class,'attribute_id');
    }
    

    public function getNameAttribute()
    {   
       return $this->attribute->name;
	}
}
