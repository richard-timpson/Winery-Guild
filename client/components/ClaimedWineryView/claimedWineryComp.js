import template from './template.js'
import api from '../../helpers/api.js'
const claimedWineryView = Vue.component('claimed-winery-view', {
	template,
	data: function (){
		return {
			winery: null,
		}
	},
	created() {
		api.getWinery(this.$route.params._id)
			.then(winery => this.winery = winery)
	},
})
	
export default claimedWineryView