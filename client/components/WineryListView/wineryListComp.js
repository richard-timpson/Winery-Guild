import template from './template.js'
import api from '../../helpers/api.js'
const wineryListComponent = Vue.component('winery-list', {
	template,
	props: {
		state: String,
		county: String,
		city: String,
		unclaimedBoolean: Boolean,
	},
	data: function() {
		return {
			wineries: null,
			featured: null,
			premium: null,
			claimed: null,
			unclaimed: null,
			viewingList: [],
			selection: '', 
			filter: {
				state: null,
				city: null,
				county: null,
				// unclaimed: false,
			},
			icons: [
				'fab fa-facebook',
				'fab fa-twitter',
				'fab fa-pinterest',
				'fab fa-linkedin',
				'fab fa-youtube',
				'fab fa-snapchat',
				'fab fa-instagram'
			],
		}
		
	},
	created () {
		this.filter.state = this.$route.params.state
		this.filter.county = this.$route.params.county
		this.filter.city = this.$route.params.city
		// this.filter.unclaimed = this.$props.unclaimedBoolean
		this.loadWineries(this.filter)
		console.log(this.$props)
	},
	// beforeRouteUpdate(to, from, next) {
	// 	console.log(to.params)
	// 	if (from.params.state) {
	// 		const filter = {
	// 			state: from.params.state
	// 		}
	// 	console.log(from.params.state)
	// 	this.loadWineries(filter)
	// 	}
	// 	console.log(from)
	// },
	watch: {
		'$route' (to, from) {
			console.log(to)
			if ( !to.params.state && !to.params.county && !to.params.city) {
				const filter = {}
				this.clear()
				this.loadWineries(filter)
			}
			if (to.params.state && !to.params.county && !to.params.city) {
				const filter = {
					state: to.params.state
				}
				console.log(filter)
				this.clear()
				this.loadWineries(filter)
				// this.sortWineries()
			}
			if (to.params.state && to.params.county && !to.params.city) {
				const filter = {
					state: to.params.state,
					county: to.params.county,
				}
				this.clear()
				this.loadWineries(filter)
				// this.sortWineries()
			}
			if (to.params.state && to.params.county && to.params.city) {
				const filter = {
					state: to.params.state,
					county: to.params.county,
					city: to.params.city,
				}
				this.clear()
				this.loadWineries(filter)
				// this.sortWineries()
			}
			console.log(to)
			console.log(from)
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
		},
		selection(){
			console.log("hi")
		}

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
		loadCities: function(){
			api.loadFilters()
		},
		// sortWineries: function(){
		// 	const premiums = this.wineries.filter(winery => winery.status == 'Premium')
		// 	this.premium = premiums

		// 	const featureds = this.wineries.filter(winery => winery.status == 'Featured')
		// 	this.featured = featureds

		// 	const claimeds = this.wineries.filter(winery => winery.status == 'Claimed')
		// 	this.claimed = claimeds

		// 	const unclaimeds = this.wineries.filter(winery => !winery.status)
		// 	this.unclaimed = unclaimeds

		// },
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
			console.log(this.unclaimed.length)

			this.unclaimed = unclaimeds
			
		},

		
	},
})

export default wineryListComponent