<template>
<div>
<div id="login-modal" class="modal fade bg--gray" role="dialog">
   <div class="modal-dialog" style="">        <!-- Modal content-->
        <div class="modal-content ">
            <div class="modal-header">
                <h4 class="modal-title">OHRAM</h4>
                 <span class="bold text-large "><button type="button" class="close" id="login_modal" data-dismiss="modal"><i class="ti-close fa-2x"></i></button></span>
            </div>
            <div class="modal-body">
                    <div class="login-box-body">
                        <form method="POST" @submit.prevent="authenticate" class="login_form" action="#">
                            <div class="text-center"> 
                                <h2>Login</h2>
                                <!-- <a href="/login/facebook" class="btn btn-facebook btn-round">
                                    <i class="fab fa-facebook-f"></i> Sign in with Facebook 
                                </a> -->
                            </div> 
                            <!--<p class="large">Great to have you back!</p>-->
                            <p class="form-field-wrapper">
                                <label for="username">Email address</label>
                                <input v-model="email"  id="email" type="email" class="form-control" name="email" value="" required autofocus>
                                <p class="text-danger" v-if="errors.length"> Login Failed</p>
                            </p>
                            <p class="form-field-wrapper">
                                <label for="password">Password</label>
                                <input v-model="password"  id="password" type="password" class="form-control" name="password" required>
                            </p>
                            <p class="form-field-wrapper">
                                <label class="">
                                    <input class="" name="rememberme" id="Checkbox1" value="forever" type="checkbox">
                                    <span>Remember me</span>
                                </label>
                            </p>
                            <p class="form-field-wrapper form-row">
                                <button type="submit"  id="login_form_button" data-loading="Loading" class="btn btn--lg bold btn--primary" name="login" value="Log in">
                                    <span  v-if="loading" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                    Log In
                                </button>
                            </p>
                            <p class="form-field-wrapper lost_password">
                                <a class="color--primary bold" href="/password/reset">Forget your password?</a>
                            </p>
                        </form>

                    </div> 
                </div>
                <div class="modal-footer">
                    <p class="">Don't have an account? <a data-toggle="modal" class="color--primary bold" @click="closeLogin" data-target="#register-modal"  href="#"> Create One </a></p>        
                </div>      
            </div>
        </div><!--modal-content-->

    </div><!--modal-dialog-->
</div>

<!--loginModal--> 
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import  RegisterModal from './RegisterModal.vue'

export default {
    data(){
        return {
            email: '',
            password: '',
            errors: [],
            loading:false
        }
    },
    components:{
       RegisterModal,
    },
    methods:{
        ...mapActions({
            login:'login',
        }),
        closeLogin(){
           document.getElementById('login_modal').click()
        },
        authenticate: function(){
            this.loading = true
            this.login({
                email:this.email,
                password:this.password
            }).catch((error)=>{
                this.loading = false
                this.errors = error.response.data.error ||  error.response.data.errors
            })
        }
    }
    
}
</script>