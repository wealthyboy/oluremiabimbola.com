<template>
   <div class="">
        <aside class="widget-area">
            <!--Widget-->
            <div class="widget">
           

                <!-- Content -->
                <div class="widget-content">
                <div class="horizontal-tab row">
                    <div class="col-12">
                        <form action=""  id="filter" method="get">
                            <div id="accordionOne" class="accordian-ele">
                                <!--Accordian Pannel-->
                                <div class="accordiongroup">
                                    <!--Header-->
                                    <div id="headingOne" class="accordion-header" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true">
                                        <h4>{{ categories.name }}</h4>
                                        <span class="accordion-header-icon"></span>
                                    </div>

                                    <!--Body-->
                                    <div id="collapseOne"  class="accordion-content collapse show" aria-labelledby="headingOne" >
                                        <ul>
                                            <li  v-for="sub_category in categories.children" :key="sub_category.id" >
                                                <div class="checkbox">
                                                    <label class="checkbox-label">
                                                        <input type="checkbox" class="filter-product" :name="sub_category.name" :value="sub_category.name">
                                                        <span class="checkbox-custom rectangular"></span>
                                                        <span class="checkbox-label-text">{{ sub_category.name }}</span>
                                                    </label>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>


                                  <div class="accordiongroup">
                                    <!--Header-->
                                    <div id="headingTow" class="accordion-header" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true">
                                        <h4>Prices</h4>
                                        <span class="accordion-header-icon"></span>
                                    </div>

                                    <!--Body-->
                                    <div id="collapseTwo"  class="accordion-content collapse show" aria-labelledby="headingTwo" >
                                        <ul>
                                            
                                            <li>
                                                <div class="checkbox">
                                                    <label class="checkbox-label">
                                                        <input type="checkbox" class="filter-product" name="price[]" value="1-2500" data-label="price">
                                                        <span class="checkbox-custom rectangular"></span>
                                                        <span class="checkbox-label-text">Under ₦2,500</span>
                                                    </label>
                                                </div>
                                            </li>

                                            <li>
                                                <div class="checkbox">
                                                    <label class="checkbox-label">
                                                        <input type="checkbox" class="filter-product" name="price[]" value="2500-5000" data-label="price">
                                                        <span class="checkbox-custom rectangular"></span>
                                                        <span class="checkbox-label-text">₦2,500 - ₦5000</span>
                                                    </label>
                                                </div>
                                                    </li>

                                                    <li>
                                                        <div class="checkbox">
                                                            <label class="checkbox-label">
                                                                <input type="checkbox" class="filter-product" name="price[]" value="5000-10000" data-label="price">
                                                                <span class="checkbox-custom rectangular"></span>
                                                                 <span class="checkbox-label-text">₦5,000 - ₦10,000</span>
                                                             </label>
                                                        </div>
                                                    </li>


                                                    <li>
                                                        <div class="checkbox">
                                                            <label class="checkbox-label">
                                                                <input type="checkbox" class="filter-product" name="price[]" value="20000-1000000" data-label="price">
                                                                <span class="checkbox-custom rectangular"></span>
                                                                <span class="checkbox-label-text">₦20,000 &amp; Above</span>
                                                            </label>
                                                        </div>
                                                    </li>
                                        </ul>
                                    </div>
                                </div>

                                

                                <!--Accordian Pannel-->
                                <div v-for="filter in categories.attributes" :key="filter.id"  class="accordiongroup">
                                    <!--Header-->
                                    <div :id="'headingTwo' + filter.id" class="accordion-header collapsed" data-toggle="collapse" :data-target="'#collapseTwo'+ filter.id" aria-expanded="false">
                                        <h4>{{ filter.name }}</h4>
                                        <span class="accordion-header-icon"></span>
                                    </div>

                                    <!--Body-->
                                    <div :id="'collapseTwo' + filter.id" class="accordion-content collapse" :aria-labelledby="'headingTwo' + filter.id" >
                                        <div class="well">
                                            <ul>
                                                <li v-for="children in filter.children" :key="children.id" >
                                                    <div class="checkbox">
                                                        <label @change="activateFilter(filter.name,children)" :id="'box'+ children" class="checkbox-label">
                                                        <input for="'box'+ children" :name="filter.name" :value="children" class="filter-product" type="checkbox">
                                                            <span class="checkbox-custom rectangular"></span>
                                                            <span class="checkbox-label-text">{{ children }}</span> 
                                                        </label>
                                                    </div>
                                            
                                                </li>
                                            </ul>
                                        </div>
                          
                                    </div>
                                </div>

                            
                            </div>
                        </form>
                        
                    </div>
                </div>
                </div>
                <!-- End Content -->
            </div>
            <!--End Widget-->

        </aside>
    </div>
</template>

<script>
export default {
    props:{
       category: Object
    },
    data(){
        return {
            isOpen: false,
            filters:[],
            categories:[],
            selectedFilters: _.omit(this.$route.query, ['page']),
            qS: [],
            filter: true
        }  
    },
    watch(){

    },
    mounted(){
        let path = this.$route.path
        axios.get("/api/filters" +path).then((response) => {
            this.filters = response.data.data
            this.categories = response.data.data
        })
    },
    methods:{
        toggleAccordion(){
           this.isOpen = !this.isOpen
        },
        activateFilter (key,value) {
            var inputs = document.querySelectorAll("input.filter-product:checked");
            var checkboxesChecked = [];
            var checked = []
            let values;
            let filters ={}
            console.log(inputs.length)
            for(var i = 0; i < inputs.length; i++) {
                checked.push(key)
                if (inputs[i].checked) {
                    filters = {
                        [inputs[i].name] : inputs[i].value,
                    }
                    checkboxesChecked.push(filters); 
                }  
            }
          // console.log(checkboxesChecked)

            const res = checkboxesChecked.reduce((acc, x) => {
            const key = Object.keys(x)[0];
            const index = acc.findIndex(obj => Object.keys(obj)[0].includes(key))
            if (index >= 0) {
                acc[index][key] = acc[index][key] + '-' + x[key];
            } else {
                acc.push(x)
            }
            return acc;
            }, [])
            if (res.length){
                for (const f in res) {
                    const element = res[f];
                    //console.log(res[f]) 
                    //console.log(Object.keys(res[0]).includes(key)) 
                    console.log(res)

                    if (element[key]){
                        this.selectedFilters = Object.assign({}, this.selectedFilters, { [key]: element[key] })  
                    }

                    console.log(this.selectedFilters) 
                      //  console.log(key)
                       // delete this.selectedFilters[key]
                  // }
                }
                this.selectedFilters = Object.assign({}, this.selectedFilters, { filter: true}) 

            } else {
                this.selectedFilters =  {} 
            }

            this.updateQueryString()


        },
       
        updateQueryString () {
            this.$router.replace({
                query: {
                   ...this.selectedFilters,
                }
            })
        }


    },
    computed: {
        accordionClasses: function(){
            return {
                'slideDown': this.isOpen
            }
        }
    }
    
}
</script>

<style>
.slideInDown {
   transition: all 0.4s;
   display: block;
}

</style>