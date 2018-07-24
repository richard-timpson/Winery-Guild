import template from './template.js'
import api from '../../helpers/api.js'
const wineryListComponent = Vue.component('winery-list', {
	template,
	data: function() {
		return {
			wineries: null,
			featured: null,
			premium: null,
			claimed: null,
			unclaimed: null,
			filter: {
				state: null,
				city: null,
				county: null,
				// unclaimed: false,
			},
		}
	},
	created () {
		this.filter.state = this.$route.params.state
		this.filter.county = this.$route.params.county
		this.filter.city = this.$route.params.city
		// this.filter.unclaimed = this.$props.unclaimedBoolean
		this.loadWineries(this.filter)
	},
	watch: {
		'$route' (to, from) {
			if ( !to.params.state && !to.params.county && !to.params.city) {
				const filter = {}
				this.clear()
				this.loadWineries(filter)
			}
			if (to.params.state && !to.params.county && !to.params.city) {
				const filter = {
					state: to.params.state
				}
				this.clear()
				this.loadWineries(filter)
			}
			if (to.params.state && to.params.county && !to.params.city) {
				const filter = {
					state: to.params.state,
					county: to.params.county,
				}
				this.clear()
				this.loadWineries(filter)
			}
			if (to.params.state && to.params.county && to.params.city) {
				const filter = {
					state: to.params.state,
					county: to.params.county,
					city: to.params.city,
				}
				this.clear()
				this.loadWineries(filter)
			}
		},
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
	},
	methods: {
		//get wineries list
		loadWineries: function(filter){ 
			api.getWineries(filter)
				.then(wineries => this.wineries = wineries).then(() => this.sortWineries)
		},
		getFilters: function(filter){
			api.loadFilters(filter)
				.then(filters => this.filterState = filters)
		},
		clear: function () {
			this.wineries = []
		}
	},
	computed:{
		//filter into status groups
		sortWineries: function(){
			const premiums = this.wineries.filter(winery => winery.status == 'Premium')
			this.premium = premiums
			
			const featureds = this.wineries.filter(winery => winery.status == 'Featured')
			this.featured = featureds
			
			const claimeds = this.wineries.filter(winery => winery.status == 'Claimed')
			this.claimed = claimeds

			const unclaimeds = this.wineries.filter(winery => !winery.status)
			this.unclaimed = unclaimeds
			
		},

		
	},
})

export default wineryListComponent