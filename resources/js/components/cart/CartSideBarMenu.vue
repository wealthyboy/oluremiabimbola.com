<template>
    <div> 
        <div class="cart-sidebar-wrap" >
        <!--Cart sidebar Header-->
            <div class="cart-sidebar-header border-bottom bg--primary">
                <h5 class="cart-sidebar-title text--light"><i class="ti-bag"></i> SHOPPING CART</h5>
                <span class="close-cart-sidebar text--light"><i class="ti-close"></i></span>
            </div>
            <!--Cart sidebar Content-->
            <div class="cart-sidebar-content"  v-if="meta.sub_total">
                <ul  class="cart-widget-product"> 
                    <li v-for="cart in carts" :key="cart.id" class="cart-product-item">
                        <a class="cart-product-image" href="#">
                            <img :src="cart.image" :alt="cart.product_name">
                            <p v-if="cart.variations.length"> {{ cart.variations.toString() }} </p>
                        </a>
                        <div class="cart-product-content">
                            <a href="#">{{ cart.product_name }}</a>
                            <span class="cart-product-quantity bold">{{ cart.quantity }} × <span class="cart-product-amount">{{ cart.currency }}</span>{{ cart.price | priceFormat }}</span>
                            <span @click.prevent="removeFromCart(cart.id)" class="cart-product-item-close"><i class="ti-close"></i></span>
                        </div>
                    </li>
                </ul>
                <!--Cart sidebar Footer-->
                <div class="cart-widget-footer">
                    <div class="cart-footer-inner">
                        <h5 class="cart-total-hdding">
                            <span>Subtotal:</span>
                            <span class="cart_sub_total amount"><span class="currencySymbol">{{ meta.currency }}</span>{{ meta.sub_total | priceFormat }}</span>
                        </h5>
                        <div class="cart-buttons">
                            <a href="/cart" class="btn btn--gray bold">View Cart</a>
                            <a href="/checkout" class="btn btn--primary  bold">Checkout</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="cart-sidebar-content" v-else>
                <div class="text-center mt-5">
                    <img  width="100" height="100" src="/images/utilities/empty_product.svg" /> 
                    <p>Your cart is empty</p>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
import  { mapGetters,mapActions } from 'vuex'

export default {
    
    computed: {
        ...mapGetters({
            carts: 'carts',
            meta: 'meta'
        })
    },  
    mounted(){
       this.getCart()
    },
    methods: {
        ...mapActions({
            getCart:'getCart',
            deleteCart: 'deleteCart'
        }),
        removeFromCart(cart_id){
            this.deleteCart({
                cart_id:cart_id
            })
        }

    }
    
}
</script>