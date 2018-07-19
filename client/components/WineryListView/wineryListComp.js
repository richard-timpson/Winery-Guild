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
			userFilters: [], 
			filterState: [],
			filterCounty: [],
			filterCity: [],
			filterList: [],

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
	methods: {
		//get wineries list
		loadWineries: function(){ 
			api.getWineries()
				.then(wineries => this.wineries = wineries).then(() => this.sortWineries)
		},
		getFilters: function(){
			api.loadFilters()
				.then(filters => this.filterState = filters)
		},
	},
	computed:{
		//filter into status groups
		sortWineries: function(){
			console.log(this.wineries)
			const premiums = this.wineries.filter(winery => winery.status == 'Premium')
			this.premium = premiums
			const featureds = this.wineries.filter(winery => winery.status == 'Featured')
			this.featured = featureds
			const claimeds = this.wineries.filter(winery => winery.status == 'Claimed')
			this.claimed = claimeds
			const unclaimeds = this.wineries.filter(winery => winery.status == 'Unclaimed')
			this.unclaimed = unclaimeds

			console.log(premiums)
			console.log(featureds)
			console.log(claimeds)
			console.log(unclaimeds)
			},
	},

	beforeMount(){
		this.loadWineries()
		this.getFilters()

	}
})

export default wineryListComponent