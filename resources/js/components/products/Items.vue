<template>
    <div class="product-item-element animated fadeIn  p-1 col-lg-4 col-md-4   col-6 col-sm-6 col-xs-6">
        <div class="product-item raised bg--light">
            <!--Product Img-->
            <div class="product-item-img">
                <!--Image-->
                    <a :href="product.link" class="product-item-img-link ">
                        <img :src="product.image_to_show" :alt="product.product_name" />
                    </a>                                          
                    <div  v-if="!product.has_variants && product.quantity == 0" class="product-labels mt-3">
                        <span class="product-label   sold-out label-soldout bold color--light" >Sold Out</span>
                    </div>

                    <div v-if="product.default_percentage_off" class="product-labels p-off mt-3">
                        <span class="product-label label-sale  bold color--light">-{{ product.default_percentage_off }}%</span>
                    </div>
                </div>
                <!--Product Content-->
                <div class="product-item-content">
                <div class="brand  text-uppercase" v-if="product.brand_name"><h6>  {{ product.brand_name }} </h6></div>
                <a :href="product.link" title="'Shop online '+ product.product_name +'" class="product-item-title">
                    <span>{{ product.product_name }}</span>
                </a>
                <p class="product--item--price">
                    <span class="product--price--amount">
                        <template v-if="product.default_discounted_price">
                            <del>
                                <span class="product-price-currency-symbol sale-price mr-2">{{ product.currency }}{{ product.converted_price | priceFormat  }}</span>
                            </del>
                            <span class="product-price-currency-symbol text-danger">{{ product.currency }}{{ product.default_discounted_price | priceFormat }}</span>
                        </template>
                        <template v-else>
                            <span class="product-price-currency-symbol">{{ product.currency }}{{ product.converted_price | priceFormat }}</span>
                        </template>
                    </span>
                </p>
                <div class="add-to-link mb-3  d-none d-lg-block d-xl-block">
                    <a :href="product.link" class="single_add_to_cart_button bold btn btn--primary">Buy Now</a>
                </div>
              
            </div>
        </div>
        <login-modal />
    </div>
</template>

<script>
import  { mapGetters,mapActions } from 'vuex'
import  LoginModal from '../auth/LoginModal.vue'


export default {
    props:{
        product:Object,
        category:Object,
        user: Object,
    }, 
    components:{
       LoginModal
    },
    data(){
        return {
            product_variation_id: '',
            is_wishlist: this.product.item_is_wishlist
        }
    },
    computed: {
        ...mapGetters({
            loggedIn:'loggedIn',
            wishlist:'wishlist'
        }),
    },
    mounted(){

    },
    methods: {
        ...mapActions({
            addProductToWishList: 'addProductToWishList'
        }),
         addToWishList: function(evt,product_variation_id){
            this.addProductToWishList({
                product_variation_id:product_variation_id,
            }).then((response)=>{
                
            })
        }
    },
    
}
</script>