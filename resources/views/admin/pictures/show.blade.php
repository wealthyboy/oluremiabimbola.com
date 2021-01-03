@extends('admin.layouts.app')
@section('pagespecificstyles')
@stop
@section('content')
<div class="row">
   <div class="col-md-12">
      <div class="text-right">
         <a href="" rel="tooltip" title="Back" class="btn btn-primary btn-simple btn-xs">
         <i class="material-icons">reply</i>
         </a>
      </div>
   </div>
   <div class="col-md-12">
      <div class="card">
         <div class="card-header">
            <h4 class="card-title">Pictures</h4>
         </div>
         <div class="card-content">
            <ul class="nav nav-pills nav-pills-warning">
               <li class="active"><a href="panels.html#pill1" data-toggle="tab">General</a></li>
            </ul>
            <div class="tab-content">
                <div class="tab-pane active" id="pill1">
                   <div class="col-md-6 col-sm-6">
                      <img src="{{ $picture->link }}" />
                   </div>

                   <div class="col-md-6 col-sm-12">
                     <div class="table-responsive">
                        <table class="table">
                           <tbody>
                                <tr>
                                    <td colspan="4"><b>Full Name</b></td>
                                    <td class="text-right">{{ $picture->name . '' . $picture->last_name }}</td>
                                </tr>
                                <tr>
                                    <td colspan="4"><b>Email</b></td>
                                    <td class="text-right">{{ $picture->email }}</td>
                                </tr>
                                <tr>
                                    <td colspan="4"><b>Comment</b></td>
                                    <td class="text-right">{{  $picture->comments  }}</td>
                                </tr>
                             
                           </tbody>
                        </table>
                     </div>
                  </div>
                </div>
              
               

            </div>
         </div>
      </div>
   </div>
</div>
<!-- end row -->
@endsection
@section('page-scripts')
@stop

@section('inline-scripts')   
@stop
