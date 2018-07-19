import template from './template.js'
const claimedWineryView = Vue.component('claimed-winery-view', {
	template,
	data: function (){
		return {
			items1: [
				{ title: 'Filter' },
				{ title: 'Filter' },
				{ title: 'Filter' },
				{ title: 'Filter' }
			],
		}
		
	}
})
	
export default claimedWineryView