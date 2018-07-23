import template from './template.js'
import api from '../../../helpers/api.js'
const navigationComponent = Vue.component('winery-navigation', {
    template,
    data: function () {
        return {
            userState: '',
            userCounty: '',
            userCity: '',
            filterState: [],
            filterCounty: [],
            filterCity: [],
            dialog: false,
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
            const query = {
                state: val
            }
            this.userCounty = null
            api.loadFilters(query)
                .then(counties => this.filterCounty = counties)
        },
        userCounty: function (val) {
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
        searchWineries: function () {
            if (!this.userState) {
                this.$router.push({
                    name: 'all',
                    })
            }
            if (this.userState) {
                this.$router.push({
                    name: 'state',
                     params: {
                         state: this.userState
                        }
                    })
            }
            if (this.userCounty) {
                this.$router.push({
                    name: 'county', 
                    params: {
                        state: this.userState,
                        county: this.userCounty
                    }
                })
            }
            if (this.userCity) {
                this.$router.push({
                    name: 'city', 
                    params: {
                        state: this.userState,
                        county: this.userCounty,
                        city: this.userCity,
                    }
                })
            }
            console.log(this.dialog)
        },
        clear: function () {
            this.userState = null
            this.userCounty = null
            this.userCity = null
        }
    },

})

export default navigationComponent