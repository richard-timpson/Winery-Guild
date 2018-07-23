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
			viewingList: [],
			selection: '', 
			
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
		},
		selection(){
			console.log("hi")
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
		loadCities: function(){
			api.loadFilters()
		}

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
			

			
		},

		
	},

	beforeMount(){
		this.loadWineries()
	}
})

export default wineryListComponent