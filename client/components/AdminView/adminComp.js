import api from '../../helpers/api.js'
import template from './template.js'
const adminComp = Vue.component('admin-view', {
    template,
    data: function () {
        return {
            winery: {
                wineryname: '',
                wineryowner: '',
                permitnumber: '',
                street: '',
                city: '',
                state: '',
                zipcode: '',
                county: '',
                lat: null,
                lng: null,
                status: '',
                videourl: '',
                websiteurl: '',
                logo: '',
                bgImg: '',
                phone: '',
                email: '',
                description: '',
                wineryId: '',
                logoLink: '',
                backgroundLink: '',
            },
            search: 'GRANITE LION CELLARS',
            exists: false,
        }
    },
    created () {},
    methods: {
        upload1(){
            var upld1 = document.querySelector('#uploader1')
            upld1.click()
        },
        upload2(){
            var upld2 = document.querySelector('#uploader2')
            upld2.click()
        },
        addWinery () {
            const winery = {
                wineryname: this.winerywineryname,
                wineryowner: this.winery.wineryowner,
                permitnumber: this.winery.permitnumber,
                street: this.winery.street,
                city: this.winery.city,
                state: this.winery.state,
                zipcode: Number(this.winery.zipcode),
                county: this.winery.county,
                lat: Number(this.winery.lat),
                lng: Number(this.winery.lng),
                status: this.winery.status,
                videourl: this.winery.videourl,
                websiteurl: this.winery.websiteurl,
                logo: this.winery.logo,
                bgImg: this.winery.bgImg,
                phone: this.winery.phone,
                email: this.winery.email,
                description: this.winery.description,
            }
            //using the api to add a winery to the database
            api.addWinery(winery)
                .then(winery => this.wineries.unshift(winery)) //adding the winery to the vue instance.
        },
        logoData(e){
            this.winery.logo = e.target.files[0]
        },
        bgData(e){
            this.winery.bgImg = e.target.files[0]
        },
        getWinery (name) {
            api.getWineryByName(name)
                .then(winery => this.winery = winery)
        },
        updateWinery () {

            const winery = {
                wineryname: this.winery.wineryname,
                // wineryowner: this.wineryowner,
                // permitnumber: this.permitnumber,
                // street: this.street,
                // city: this.city,
                // state: this.state,
                // zipcode: Number(this.zipcode),
                // county: this.county,
                // lat: Number(this.lat),
                // lng: Number(this.lng),
                status: this.winery.status,
                videourl: this.winery.videourl,
                websiteurl: this.winery.websiteurl,
                bgImg: this.winery.bgImg,
                logo: this.winery.logo,
                phone: this.winery.phone,
                email: this.winery.email,
                description: this.winery.description,
                _id: this.winery.wineryId
            }
            console.log(winery)
            api.updateWinery(winery)
                .then(updatedWinery => this.winery = updatedWinery)
        }
    }
})

export default adminComp