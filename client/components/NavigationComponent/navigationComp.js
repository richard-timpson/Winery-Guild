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
                state: null,
                county: null,
                city: null,
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
            const query = {
                state: val
            }
            this.userCounty = null
            api.loadFilters(query)
                .then(counties => this.filterCounty = counties)
        },
        userCounty: function (val) {
            console.log(val)
            const query = {
                state: this.userState,
                county: val
            }
            this.userCity = null
            api.loadFilters(query)
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