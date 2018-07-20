import template from './template'
import api from '../../helpers/api.js'
const navigationComponent = Vue.component('winery-navigation', {
    template,
    data: function () {
        return {
            query: '',
            filterState: [],
            filterCounty: [],
            filterCity: [],
            filterList: [],
        }
    },
    watch: {
        query(val){
            this.filterCounty = []
            console.log(val)
            api.loadCounty(val)
                .then(counties => this.filterCounty = counties)
        }
    },
    methods: {
        getFilters: function () {
            api.loadFilters()
                .then(filters => this.filterState = filters)
        }
    }
    
})

export default navigationComponent