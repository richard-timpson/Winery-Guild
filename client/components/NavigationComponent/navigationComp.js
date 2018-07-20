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
    created() {
        const query = {}
        api.loadFilters(query)
            .then(states => this.filterState = states)
        console.log(this.filterState)
    },
    watch: {
        userState: function (val){
            console.log(val)
            this.query.state = val
            api.loadFilters(this.query)
                .then(counties => this.filterCounty = counties)
        },
        userCounty: function (val) {
            this.query.county = val
            api.loadFilters(this.query)
                .then(cities => this.filterCity = cities)
        }
    },
    methods: {
        filterCounties: function () {
            api.loadFilters()
                .then(filters => this.filtercounty = filters)
        },
        filterCities: function () {
            api.loadFilters()
                .then(filters => this.filterCity = filters)
        },
    },

    beforeMount(){
        console.log('running initial filter load')
        const query = {}
    }
    
})

export default navigationComponent