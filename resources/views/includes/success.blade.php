@if (session('success'))
    <div class="alert alert-success mt-3 mb-3 alert-dismissible ">
    <button type="button" aria-hidden="true"  data-dismiss="alert" style="margin-right: 20px;" class="close">
                <i class="fa fa-close"></i>
            </button> 
        <strong>{{ session('success') }}</strong>
    </div>
@endif