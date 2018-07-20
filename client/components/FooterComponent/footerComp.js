import template from './template.js'

const footerComponent = Vue.component('winery-footer', {
    template,
    data: function () {
        return {
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
})

export default footerComponent