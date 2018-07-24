import template from './template.js'
import api from '../../helpers/api.js'
const claimedWineryView = Vue.component('claimed-winery-view', {
	template,
	data: function (){
		return {
			wineryNameU: 'GRANITE LION CELLARS',
			wineryName: '',
			wineriesView: null,
			wineryView: null,
			endLnk: '',
			bgLnk: '',
			src: '',
			email: ``,
			website: '',
		}
	},
	watch: {
		wineriesView(){
			var sName = this.wineryNameU
			this.getWinery(sName)
		}
	},
	methods: {

		loadWineries: function(){ 
			
			api.getWineries()
				.then(wineries => this.wineriesView = wineries)
		},
		getWinery: function(name) {
			
            const userWinery = this.wineriesView.filter(winery => winery.wineryname == name)
            this.wineryView = userWinery
            this.endLnk = this.wineryView[0].background
            this.bgLnk = 'localhost:3000' + this.endLnk
            this.src = this.bgLnk
            this.email = `mailto: ${this.wineryView[0].email}`
            this.website = this.wineryView[0].websiteurl
            // this.wineryName = this.wineryView[0].wineryname
        },
	},
	beforeMount(){
		this.loadWineries()
	}
})
	
export default claimedWineryView