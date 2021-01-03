@extends('layouts.app')
 
@section('content')
   
<section class="sec-padding--account bg--gray">
    <div class="container">
        <div class="row">
            <div class="col-md-3">
                @include('account.nav')
            </div>
            <div class="col-md-9">
                <h2 class="page-title">Account</h2>

                <div class="card card-plain">
                    <div class="card-body">
                       <form method="POST" action="">
                           @include('errors.errors')
                            <h2></h2>
                            @csrf
                             <p class="form-field-wrapper">
                                <label for="first_name">First Name</label>
                                <input id="first_name" type="text" class="input--lg form-full" name="first_name" value="{{ $user->name }}" required autofocus>
                            </p>
                             <p class="form-field-wrapper">
                                <label for="last_name">Last Name</label>
                                <input id="last_name" type="text" class="input--lg form-full" name="last_name" value="{{  $user->last_name }}" required autofocus>
                            </p>
                             <p class="form-field-wrapper">
                                <label for="phone_number">Phone Number</label>
                                <input id="phone_number" type="text" class="input--lg form-full" name="phone_number" value="{{  $user->phone_number }}" required autofocus>
                            </p>
                            <p class="form-field-wrapper lost_password">
                                <button type="submit" class="btn btn--lg bold btn--primary" name="register" value="Log in">Submit</button>
                            </p>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    </div>
    </div>
</section>
<!--End Contact Form & Info-->

@endsection