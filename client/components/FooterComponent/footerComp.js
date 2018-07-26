import template from './template.js'

const footerComponent = Vue.component('winery-footer', {
    template,
    data: function () {
        return {
            icons: [
                'fab fa-facebook',
                'fab fa-twitter',
                'fab fa-pinterest',
                'fab fa-youtube',
                'fab fa-instagram'
                ],
            links: [
                'https://www.facebook.com/wineryguild',
                'https://twitter.com/wineryguild',
                'https://www.pinterest.com/wineryguild/',
                'https://www.youtube.com/channel/UCwgdbeR916av8TWQoZ4F_lA',
                'https://www.instagram.com/wineryguild/'
            ]

        }
        
    },
})

export default footerComponent