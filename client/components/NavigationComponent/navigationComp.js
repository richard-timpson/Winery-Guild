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
            query: {
                state: '',
                county: '',
                city: '',
            },
            filterState: [],
            filterCounty: [],
            filterCity: [],
            filterList: [],
        }
    },
    watch: {
        query(){
            // console.log(val)
            api.loadFilters()
                .then(counties => this.filterCounty = counties)
        },
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