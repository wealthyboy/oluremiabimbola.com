<?php

namespace App\Filters\ArtProductsFilter;

use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\Builder;
use App\Filters\AbstractFilters;
use App\Filters\ProductsFilter\CategoryFilter;
use App\Filters\ProductsFilter\PriceFromFilter;
use App\Filters\ProductsFilter\PriceToFilter;
use App\Filters\ProductsFilter\TotalFilter;




class ProductFilters extends AbstractFilters
{
    
    protected $filters = [
        'category'=>CategoryFilter::class,
        'price_from'=>PriceFromFilter::class,
        'price_to'=>PriceToFilter::class, 
        'sort_by'=>SortByFilter::class,
    ];

    public static function mappings(){
        $map = [
            'Category' => [

            ],
            'Sizes' => [

            ],
            'Colors' => [

            ],
            'Prices' => [

            ],
        ];
    }
    
}
