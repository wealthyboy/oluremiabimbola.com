<template>
    <div class="">
        <div class="container product-gallery-style2 ">
            <div class="row ">
                <div v-if="images.length" class="col-lg-1  tn d-none d-lg-block animated fadeIn  col-12">
                    <div class="product-media-thumb-slider  mt-3">
                        <a    class="product-gallery-image active">
                            <img  class="animated "  @click.prevent="currentSlide(product.image_to_show)"  :data-image="image" :src="image_tn" alt="Shop Online">
                        </a>
                        <a class="product-gallery-image mt-2" @click.prevent="currentSlide(image.image)" v-for="image in images" :key="image.id" >
                            <img :src="image.image_tn"  :alt="image.image">
                        </a>   
                    </div>
                </div>
                <div :class="[!images.length ? 'col-lg-7' : 'col-lg-6']" class="   mt-2  col-12">
                    <div class="product-gallery-main">
                        <div    class="product-gallery-image mt-2 mb-2 " :data-mfp-src="image">
                            <img  :class="{'fadeIn': fadeIn}" class="animated" :src="image" alt="Shop Online">
                        </div>
                        <div class="product-gallery-image-m mfp-gallery-popup-link mt-2 mb-2"  v-for="image in images" :key="image.id"  :data-mfp-src="image.image">
                            <img :src="image.image" alt="">
                        </div>
                    </div>
                </div>

                <div v-if="images.length" class="col-lg-1  tn d-none d-block d-sm-none animated fadeIn  col-12">
                    <div class="product-gallery-media-thumb text-center mt-3">
                        <div class="product-media-thumb-slider ml-2">
                            <a    class="product-gallery-image">
                                <img  @click.prevent="currentSlide(product.image_to_show)"  :data-image="image" :src="image_tn" alt="Shop Online">
                            </a>
                            <template>
                                <a class="product-gallery-image mt-2 mr-1"  @click.prevent="currentSlide(image.image)" v-for="image in images" :key="image.id" >
                                    <img :src="image.image_tn" v-if="image.image !== ''"  :alt="image.image">
                                </a> 
                            </template>
                        </div>  
                    </div>
                </div>

                <div  class="col-lg-5  col-12 mt-3">
                    <div class="product-page-content">
                        <!--Brand Name-->
                        <div v-if="product.brand" class="tag brand-name"><a href="#">{{ product.brand.name }}</a></div>
                        <!--Product Title-->
                        <div class="title-area text-center text-md-left">
                            <h2 class="product-item-title">{{ product.product_name }}</h2>
                            <div class="product-rating mt-4">
                                <div class="star-rating" itemprop="reviewRating" itemscope="" itemtype="http://schema.org/Rating" title="Rated 4 out of 5">
                                    <span :style="{width: product.average_rating +'%'}"></span>

                                </div>
                                <span class="count bold"> <small>{{ product.average_rating_count }} REVIEW(S)</small></span> 
                            </div>
                            <div class="text-gold bold product-item-condition mt-3">
                                <span>
                                    <i class="fa fa-check-circle"></i>
                                    Made in USA
                                </span>
                                <!-- <span class="pull-right" >
                                    <div class="">
                                        <span class="">New</span>
                                    </div>
                                </span> -->
                            </div>
                        </div> 

                        <!--Product Title-->
                        <div class="product--share text-center text-md-left  mt-3">
                            <small><span class="bold">ITEM #:</span>  {{ product.sku }}</small>
                        </div>
                        <!--Product Ratting-->
                        <div class="product-item-price text-center text-md-left"  v-if="discounted_price">
                            <div class="product-price-amount">
                                <span class="retail-title text-gold">SALE PRICE</span>
                                <span class="product--price text-danger">{{ product.currency }}{{ discounted_price | priceFormat }}</span>
                                <span class="retail-title">{{ percentage_off }}% off</span>
                            </div>
                            <div class="product-price-amount retail">
                                <span class="retail-title text-gold">PRICE</span>
                                <span class="product--price retail-price text-gold">{{ product.currency }}{{ price | priceFormat }}</span>
                                <span class="retail-title"></span>
                            </div>
                        </div>

                        <div class="product-item-price text-center text-md-left" v-else>
                            <div class="product-price-amount">
                                <span class="retail-title text-gold">PRICE</span>
                                <span class="product--price">{{ product.currency }}{{ price | priceFormat }}</span>
                                <span class="retail-title"></span>
                            </div>
                        </div>
                        
                        <!--Product Variations Form-->
                        <form class="product-variations-form">
                            <!--Select Size-->
                            <div class="row mt-2">
                                <div   v-if="Object.keys(attributes).length !== 0" v-for="map, key in attributes" :key="key" class="form-group  col-lg-12   col-6">
                                    <label class="bold color--primary" :for="'productV-'+key">{{ key }}</label>
                                    <select :id="'productV-' +key" @change="getAttribute" :name="key"  class="product-select input--lg form-full  vs  product_attribute">
                                        <option   v-for="children in map" :key="children" :value="children">{{ children }}</option>
                                    </select>
                                </div>
                            </div>

                            <div class="clearfix"></div>
                            <!--Quantity and Adda to cart-->
                            <div class="product-variations-child">
                                <template v-if="quantity  >= 1">
                                <div class="row">
                                    <div class="col-3 form-field-wrapper pr-1 col-lg-3"> 
                                        <label class="bold color--primary">Qty</label>
                                        <div id="quantity_1234" class="">
                                            <select id="add-to-cart-quantity" name="qty"  class="input--lg form-full p-3">
                                                <option  v-for="x in parseInt(quantity)">{{ x }}</option>
                                            </select> 
                                        </div>
                                    </div>
                                    <div class="col-9  form-field-wrapper  pl-0 col-lg-9">
                                        <button @click.prevent="addToCart"  :class="canAddToCart"  type="button" name="add-to-cart" value="add_to_cart" class="bold btn btn-round  cart_btn btn-lg btn-block    btn--primary">
                                        {{ cartText }}
                                            <span  style=" margin-left: 8px; float: right;" v-if="loading"  class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                            <i  style=" margin-left: 8px; float: right;"  v-if="!loading" class="ti-bag text-left"></i>
                                        </button>
                                    </div>
                                </div>
                                
                                </template>
                                <template v-else>  
                                    <button   type="button" name="add-to-cart" value="add_to_cart" class="single_add_to_cart_button btn btn--lg product-cart-button  bold btn--primary">
                                        {{ cartText }}
                                        <i  style=" margin-left: 9px;" class="ti-bag text-left"></i>
                                    </button>
                                </template>
                            </div>
                        </form> 
                        <!--Product Add to Button Links-->
                        <div class="mt-4 text-center">
                        <section class="sec-padding--md page-divider-t bg--gray">
                            <div class="container">
                                <div class="row no-gutters nf-grid">
                                    <!--Promo Item-->
                                    <div class="col-md-4 col-4 nf-grid-item">
                                        <div class="promo-box">
                                            <div class="icon color--primary">
                                                <i class="ti-truck"></i>
                                            </div>
                                            <div class="info">
                                                <small>International Delivery</small>
                                                <p></p>
                                            </div>
                                        </div>
                                    </div>
                                    <!--Promo Item-->
                                    <div class="col-md-4 col-4  nf-grid-item">
                                        <div class="promo-box">
                                            <div class="icon color--primary">
                                                <i class="fa fa-shopping-bag"></i></div>
                                            <div class="info text-center">
                                                <small class="promo-titl">We do wholesale</small>
                                            </div>
                                        </div>
                                    </div>
                                    <!--Promo Item-->
                                    <div class="col-md-4 col-4 nf-grid-item">
                                        <div class="promo-box">
                                            <div class="icon color--primary">
                                                <i class="ti-headphone-alt"></i>
                                            </div>
                                            <div class="info">
                                                <small class="promo-title">info@ogram.org</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        </div>
                        
                            
                        <!--Product Meta-->
                        <div class="product-meta">
                            <div class="horizontal-tab row">
                                <div class="col-12">
                                    <div id="accordionOne" class="accordian-ele">
                                        <!--Accordian Pannel-->
                                        <div class="accordiongroup">
                                            <!--Header-->
                                            <div id="headingOne" class="accordion-header " data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                <h4 class="text-uppercase">Product Description</h4>
                                                <span class="accordion-header-icon"></span>
                                            </div>
                                            <!--Body-->
                                            <div id="collapseOne" class="accordion-content collapse show bg--gray" aria-labelledby="headingOne" data-parent="#accordionOne">
                                                <p class="p-3" v-html="product.description"></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                    
            
                <login-modal />
                <register-modal />
            </div>
        </div>
        <div class="container-fluid">
            <div class="product-tabs-wrapper">
                  <!--Tabs Content-->
                <div id="product-accordian-Content" class="product-Content-tabs">
                    <!--Description-->
                    <ul class="product-tabs-nav nav bg--primary" role="tablist">
                        <li>
                            <a class="active bold text-uppercase color--light font-weight-bold" href="#" role="tab" data-toggle="tab" aria-expanded="false"><i class="fa fa-comments"></i> Reviews</a>
                        </li>
                    </ul>
                    <div id="product-accordian-Content" class="product-Content-tabs">
                        <!--Description-->
                        <div id="tab_description" role="tabpanel" class="tab-pane fade show active">
                            <!--Header-->
                            <div id="accrodianOne" class="product-Content-toggle">
                                <a data-toggle="collapse" data-target="#collapseReview" aria-expanded="true" aria-controls="collapseReview"><h3>Reviews</h3></a>
                            </div>
                        </div>
                        <div id="collapseReview" class="product-tab-Content-body collapse show" aria-labelledby="accrodianOne" data-parent="#product-accordian-Content">
                            <div class="row">
                                <div class="col-12 col-lg-6">
                                    <div v-if="user" class="review-form-wrapper">
                                        <h3 class="review-title text-uppercase">Add a Review</h3>
                                        <p> Required fields are marked *</p>
                                        <form id="comment-form" @submit.prevent="submit" class="comment-form">
                                            <div class="form-field-wrapper">
                                                <label>Your Rating <span class="required">*</span></label>
                                                <p class="stars selected">
                                                    <span>
                                                        <a class="star-1 rating"  @click="getStarRating($event,20)"  href="javascript:void(0)"></a>
                                                        <a class="star-2 rating"  @click="getStarRating($event,40)"  href="javascript:void(0)"></a>
                                                        <a class="star-3 rating"  @click="getStarRating($event,60)"  href="javascript:void(0)"></a>
                                                        <a class="star-4 rating"  @click="getStarRating($event,80)"  href="javascript:void(0)"></a>
                                                        <a class="star-5 rating"  @click="getStarRating($event,100)" href="javascript:void(0)"></a>
                                                    </span>
                                                </p>
                                                <p v-if="noRating">
                                                    <strong class="help-block error  text-danger text-sm-left"> Please add a rating</strong>
                                                </p>
                                            </div>
                                            <div class="form-field-wrapper">
                                                <label>Upload Your Photo  </label>
                                                <p><small class="text-danger bold">Images only, And must not be greater than 8mb</small></p>

                                                <div id="m_image"  class="uploadloaded_image text-center pull-left mb-3">
                                                    <div @click.prevent="activateFile" v-if="!profile_photo" class="upload-text"> 
                                                        <a  class="activate-file first" href="#">
                                                            <img src="/store/img/upload_icon.png">
                                                            <b>Add Image </b> 
                                                        </a>
                                                    </div>
                                                    <div id="remove_image" :class="[ profile_photo ? '' : 'd-none']" class="remove_image">
                                                        <a  class="activate-file"  @click.prevent="undoImage" href="#">Remove</a> 
                                                    </div>
                                                    
                                                    <img v-if="profile_photo" id="stored_image" class="img-thumnail" :src="profile_photo" alt="">
                                                    
                                                    <input accept="image/*"   class="upload_input" data-msg="Upload  your image" @change="readURL($event)" type="file" id="file_upload_input" name="img"  />
                                                    <input type="hidden"  id="" data-msg="Uplaod  your art work" class="file_upload_input stored_image"  name="image">
                                                </div>
                                            </div>
                                            <div class="clearfix"></div>
                                            <div class="form-field-wrapper ">
                                                <label>Your Review<span class="req">*</span></label>
                                                <textarea   
                                                        id="comment" 
                                                        v-model="form.description" 
                                                        name="description" 
                                                        class="form-full rating_required" 
                                                        cols="45" 
                                                        rows="10"
                                                        @input="removeError($event)"
                                                        @blur="vInput($event)"  
                                                        aria-required="true" 
                                                >
                                                </textarea>
                                                    <span class="help-block error  text-danger text-sm-left" v-if="errors.description">
                                                        <strong class="text-danger">{{ formatError(errors.description) }}</strong>
                                                    </span>
                                                </div>
                                                <div class="form-field-wrapper">
                                                    <button  type="submit" class="btn bold btn--lg btn--primary btn--full" name="checkout_place_order" id="place_order" value="Place order" data-value="Place Order">
                                                        <span  v-if="submiting" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                                        Save
                                                    </button>
                                            </div>
                                        </form>
                                    </div>
                                    <div v-if="!user" class="review-form-wrapper">
                                        <button data-toggle="modal" data-target="#login-modal"  type="button" name="add-to-cart" value="add_to_cart" class="bold btn btn--primary btn-round btn-lg  btn--primary"> Add Review </button>
                                    </div>
                                </div>
                                <div class="col-12 col-lg-6">
                                    <div v-if="!loading && reviews.length" class="comments">
                                        <h5 class="review-title text-uppercase">{{ meta.total }} Review(s) for <span>This Product</span></h5>
                                        <ul class="commentlist">
                                                  <!--Item-->
                                            <li v-for="review in reviews" :key="review.id" class="comment-item">
                                                <img class="avtar" v-if="review.image" :src="review.image" alt="avtar" />
                                                <img class="avtar" v-else src="/img/avtar.jpg" alt="avtar" />

                                                <div class="comment-text">
                                                    <p class="meta">
                                                        <strong class="color--primary">{{ review.full_name }}</strong>
                                                        <span></span>
                                                        <time class="pull-right" datetime="">{{ review.date }}</time>
                                                        <div class="star-rating" itemprop="reviewRating" itemscope=""  title="Rated 4 out of 5">
                                                            <span :style="{width: review.rating + '%'}"></span>
                                                        </div> 
                                                    </p>
                                                    <div class="clearfix"></div>
                                                    <div class="description">
                                                        <p>{{ review.description }}</p>
                                                    </div>
                                                </div>
                                            </li><!--Item-->
                                        </ul>
                                    </div>
                                    <div  v-if="!loading  && !reviews.length" class="comments">
                                        No reviews yet.
                                    </div>
                                <!--Paginattion-->
                                    <div v-if="!loading && meta && meta.total > meta.per_page" class="pagination-wraper">
                                        <div class="pagination">
                                            <ul class="pagination-numbers">
                                                <pagination :useUrl="useUrl" :meta="meta" />
                                            </ul>
                                        </div>
                                    </div>
                                </div> 
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    </div>
</template>
<script>

import  Images from './Images.vue'
import  LoginModal from '../auth/LoginModal.vue'
import  RegisterModal from '../auth/RegisterModal.vue'
import  { mapGetters,mapActions } from 'vuex'
import  Pagination from '../pagination/Pagination.vue'


export default {
    name: "Show",
    props:{
        product:Object,
        attributes:Object,
    },
    components:{
       Images,
       LoginModal,
       Pagination,
       RegisterModal
    },
    data(){
        return {
            canNotAddToCart: false,
            image:'',
            cText:   "Add To Cart",
            images:[],
            noRating: false,
            user: Window.auth,
            file:null,
            quantity: '',
            useUrl: false,
            price:null,
            discounted_price: null,
            percentage_off: '',
            product_variation_id:'',
            product_variation:[],
            category:'',
            cartSideBarOpen: false,
            loading: false,
            is_loggeIn:  false,
            image_m: '',
            image_tn: null,
            profile_photo: null,
            errorsBag:[],
            fadeIn: false,
            product_slug: this.product.slug,
            wishlistText: 'Add to Wishlist',
            allowedFileTypes: ['image/jpeg','image/png','image/gif'],
            form:{
                description: null,
                rating: null,
                product_id:this.product.id ,
                image: null
            },
            submiting:false
        }
    },
    computed: {
        ...mapGetters({
            cart: 'cart' ,
            loggedIn:'loggedIn',
            wishlist:'wishlist',
            reviews: 'reviews',
            meta: 'reviewsMeta',
            errors:'errors'
        }),
        cartText: function() {
            return this.cText
        },
        canAddToCart: function() {
            return [this.canNotAddToCart ? 'disabled' : '' ];
        },
        loggedIn: function(){
            return [this.user ? true: false]
        }
    },
    mounted(){
        this.getProduct()
        this.productReviews()
        this.image = this.product.image_to_show
        this.image_tn = this.product.image_tn
        this.images =  typeof this.product.variants[0]  !== 'undefined' && this.product.variants[0].images.length !== 0 ? this.product.variants[0].images : this.product.default_variation.images
        console.log(this.product.image_tn)
        this.product_variation_id =  typeof this.product.variants[0]  !== 'undefined'  ? this.product.variants[0].id   : this.product.default_variation.id
        this.percentage_off = typeof this.product.variants[0]  !== 'undefined'   && this.product.variants[0].percentage_off  ?  this.product.variants[0].percentage_off  : this.product.percentage_off
        this.quantity = typeof this.product.variants[0]  !== 'undefined'  ?  this.product.variants[0].quantity  : this.product.default_variation.quantity
        this.cText= this.quantity  < 1 ? 'Out of Stock' :" Add To Cart"
        this.price = typeof this.product.variants[0]  !== 'undefined'  ?  this.product.variants[0].converted_price  : this.product.default_variation.converted_price
        this.discounted_price = typeof this.product.variants[0]  !== 'undefined'   && this.product.variants[0].default_discounted_price > 0  ?  this.product.variants[0].default_discounted_price  : this.product.default_discounted_price
    },
    methods: {
        getStarRating(e,rating){
            this.form.rating = rating
            this.noRating = false
            let ratings = document.querySelectorAll('.rating')
                ratings.forEach(elm =>{
                    elm.classList.remove('active')
                })
            e.target.classList.add("active")
        },
        activateFile(evt){
            let fileInput = document.getElementById("file_upload_input")
            fileInput.click()
        },
        readURL(input) {
            this.file  = document.getElementById("file_upload_input").files[0];
            if ( !this.allowedFileTypes.includes(this.file.type) ){
                this.error = "Your selected  is not alllowed"
                return
            }
            //there I CHECK if the FILE SIZE is bigger than 8 MB (numbers below are in bytes)
            if ( this.file.size > 8388608 ){
                this.error = "Allowed file size exceeded. (Max. 8 MB)"
                return;
            }   
            var reader = new FileReader();
            let context = this

            reader.onload = function (e) {
                context.profile_photo = e.target.result
            }
            reader.readAsDataURL(this.file);
            
        },
        undoImage(){
            this.profile_photo = null
        },
        productReviews() {
            return axios.get('/reviews/'+ this.product_slug).then((response) => {
                this.loading = false;
                this.$store.commit('setReviews', response.data.data)
                this.$store.commit('setReviewsMeta', response.data.meta)
            }).catch((error) => {
                this.loading = false;
            }) 
        },
        getProduct() {
            axios.get('/api' + this.$route.path).then((response) => {
                let obj = response.data.data;
                this.product_variation = this.product.product_variation;
                window.Stock =  JSON.parse(obj.stock);
                window.Inventory =  JSON.parse(obj.inventory);
            })
        },
        currentSlide:  function(image) {
            this.fadeIn = !this.fadeIn;
            this.image = image 
            setTimeout(() =>{
                this.fadeIn = !this.fadeIn;
            }, 1000); // Will alert once, after a second.
           
        },
        getAttribute: function(evt) {
            console.log(evt.target.name)
            let attributes = document.querySelectorAll('select.product_attribute')
            let attr = null;
            attributes.forEach(function(elm,key){
                if (key == 0 ){
                   attr = elm.value
                } 
                return;
            })
            try {           
                let v = window.Inventory[0][attr];

                 
                for (let i in v){
                    if (i !== evt.target.name){
                        document.getElementById('productV-'+i).innerHTML =  Object.keys(v[i]).join(' ')
                    }
                }

                let variation = this.selectProductAttributes().join("_");
                let vTs = Stock[0][variation]
                this.image = vTs.image
                this.image_m = vTs.image_m
                this.images = vTs.images.length ? vTs.images : this.product.default_variation.images        
                this.quantity = vTs.quantity
                this.price = vTs.converted_price 
                this.percentage_off = vTs.percentage_off
                this.discounted_price = vTs.discounted_price ||  vTs.default_discounted_price 
                this.product_variation_id = vTs.id 
                this.canNotAddToCart = false
                this.cText = "Add To Cart"
            } catch (error) {
                this.canNotAddToCart = true
                this.cText = "Sold Out"
                this.quantity = 0;
            }
        },
        selectProductAttributes: function(){
            let values = [];
            let attributes = document.querySelectorAll('select.vs')
            attributes.forEach(function(elm,key){
                values.push(elm.value)
            }) 
            return values;
        },
        formatError(error){
            return Array.isArray(error) ? error[0] : error
        },
        removeError(e){
            let input = document.querySelectorAll('.rating_required');
            if (typeof input !== 'undefined'){
                this.clearErrors({  context:this, input:input })
            }
        },
        vInput(e){
            let input = document.querySelectorAll('.rating_required');
            if (typeof input !== 'undefined') {
                this.checkInput({ context: this, input:e })
            }
        }, 
        ...mapActions({
            addProductToCart:'addProductToCart',
            addProductToWishList: 'addProductToWishList',
            createReviews: 'createReviews',
            validateForm:  'validateForm',
            clearErrors:   'clearErrors',
            checkInput:    'checkInput',
            getReviews:    'getReviews'
        }),
        addToCart: function(){
            this.cText = "Adding...."
            this.loading = true;
            let qty =  document.getElementById('add-to-cart-quantity').value
            this.addProductToCart({
                product_variation_id:this.product_variation_id,
                quantity: qty
            }).then(() =>{
                this.cText = "Add To Cart"
                this.loading = false;
            }).catch((error) =>{
                this.cText = "Add To Cart"
                this.loading = false
            })
        },
        addToWishList: function(){
            this.wishlistText = "Saving...."
            this.addProductToWishList({
                product_variation_id:this.product_variation_id,
            }).then((response)=>{
                this.favorite = 'fas fa-heart left'
                this.wishlistText = "Saved"
                setTimeout(() => {
                    this.wishlistText = "Add To Wishlist"
                }, 3000);
            })
        }, 
        submit(){
            let input = document.querySelectorAll('.rating_required');
            this.validateForm({ context:this, input:input })
            if ( Object.keys(this.errors).length !== 0 ){ 
                if (!this.form.rating){
                   this.noRating = true
                }
                return false; 
            }
            this.submiting = true
            let form = new FormData();
             
            form.append('image',this.file)
            form.append('description',this.form.description)
            form.append('rating',this.form.rating)
            form.append('product_id',this.form.product_id)
            this.createReviews({ context: this ,form})
        }  
    }
}
</script>