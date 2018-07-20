import template from './template.js'
import api from '../../../helpers/api.js'
const navigationComponent = Vue.component('winery-navigation', {
    template,
    data: function () {
        return {
            userState: '',
            userCounty: '',
            userCity: '',
            userFilters: [],
            query: '',
            filterState: [],
            filterCounty: [],
            filterCity: [],
            filterList: [],
        }
    },
    watch: {
        userState(val){
            this.filterCounty = []
            console.log(val)
            api.loadCounty(val)
                .then(counties => this.filterCounty = counties)
        },
        userCounty(val2){
            this.filterCity= []
            api.loadCounty(val2)
                .then(cities => this.filterCity = cities)
        },
        filterCounty(){
            if(this.filterCounty.length){
                var actBtn = document.querySelector("#activeBtn")
                actBtn.click() 
            }
        },
        filterCity(){
            if(this.filterCity.length){
                var actBtn = document.querySelector("#activeBtn2")
                actBtn.click()  
            }
        }
    },
    methods: {
        getFilters: function () {
            api.loadFilters()
                .then(filters => this.filterState = filters)
        },
        loadCities: function(){
            api.loadFilters()
        },
    },

    beforeMount(){
        this.getFilters()
    }
    
})

export default navigationComponent