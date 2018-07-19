import template from './template.js'
const claimComponent = Vue.component('claim-compnent', {
	template,
	data: function () {
		return {
			valid: false,
			name: '',
			nameRules: [
				v => !!v || 'Name is required',
				v => v.length <= 10 || 'Name must be less than 10 characters'
				],
			email: '',
			emailRules: [
				v => !!v || 'E-mail is required',
				v => /.+@.+/.test(v) || 'E-mail must be valid'
				],
			phone: '',
			wineryInf: '',
			items1: [
				{ title: 'Filter' },
				{ title: 'Filter' },
				{ title: 'Filter' },
				{ title: 'Filter' }
			],
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

	}
})
	
export default claimComponent