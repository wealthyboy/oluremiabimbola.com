
<template>
    <ul>
        <li class="nav-icon-item d-lg-none">
            <div class="nav-icon-trigger menu-mobile-btn" title="Navigation Menu"><span><i class="ti-menu"></i></span></div>
        </li>
        <li class="nav-icon-item">
            <div class="nav-icon-trigger search-menu-btn" title="Search"><span><i class="ti-search"></i></span></div>
        </li>
        <li class="nav-icon-item">
            <div id="icon-trigger" class="nav-icon-trigger cart-sidebar-btn" title="Shopping Cart"><span><i class="ti-bag"></i><span class="nav-icon-count">{{ cartItemCount }}</span></span></div>
        </li>                   
      
   
    </ul>

</template>
<script>

import { mapGetters,mapActions } from 'vuex'

export default {
    data(){
        return {
          user:Window.auth,
          token:null
        } 
    },
    props:{
    },
    computed:{
        ...mapGetters({
            cartItemCount:'cartItemCount',
            wishlistCount:'wishlistCount'
        })
    } ,
    created(){
       this.getWislist()
       let token = document.head.querySelector('meta[name="csrf-token"]');
       this.token = token.content
       console.log(this.token)
    },
    methods:{
        ...mapActions({
             getWislist:'getWislist',
        })
    }
}
</script>