<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;


use App\Live;
use App\Banner;
use App\Product;
use App\Category;
use App\Review;
use App\Information;
use Stevebauman\Location\Location;
use App\Currency;
use App\SystemSetting;
use App\Http\Helper;

class HomeController extends Controller
{
    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index(Request $request)
    {    
        
        $site_status =Live::first();
        $banners =  Banner::banners()->get();
        $posts  =   Information::orderBy('created_at','DESC')->where('blog',true)->take(3)->get();
        $page_title = 'Mrs  Oluremi Abimbola  ';
        
        if ( empty($site_status->make_live) ) {
            return view('index',compact('banners','page_title','posts'));
        } else {
            //Show site if admin is logged in
            if ( auth()->check()  && auth()->user()->isAdmin()){
                return view('index',compact('banners','page_title','posts'));
            }
            return view('underconstruction.index');
        }
    }


    public function downloadFile()
    {
        //PDF file is stored under project/public/download/info.pdf
        $file= public_path(). "/images/MRS_OLUREMI_ABIMBOLA_NEW ++.pdf";
    
        $headers = array(
                  'Content-Type: application/pdf',
                );
    
        return \Response::download($file, 'funeral_for_mrs_oluremilekun_abimbola.pdf', $headers);
    }

    
}
