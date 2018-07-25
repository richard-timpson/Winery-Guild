import {stringify} from '../node_modules/query-string/index.js'

const getWineries = (filter) => {
    const url = `/wineries?${stringify(filter)}`
    return fetch(url) //calling an http request on the home directory of the page. Should be called whenever the home page is loaded
    .then(res => {
        return res.json()
    })
}
const getWineryById = (id) => {
    const url = `/wineries?_id=${id}`
    return fetch(url)
        .then( res => res.json())
}
const getWineryByName = (name) => {
    const url = `/wineries?wineryname=${name}`
    console.log(url)
    return fetch(url)
        .then( res => res.json())
}
const addWinery = winery =>
    //calling an http request on the home directory to add a winery based on the vue instance data on the form.
    fetch('/wineries', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },

        body: JSON.stringify(winery)
    })
    .then(res => res.send())
const updateWinery = winery => {
    const form = new FormData()
    form.append('bgImg', winery.bgImg)
    form.append('logo', winery.logo)
    console.log(form)
    console.log(winery.bgImg)
    console.log(winery.logo)
    return fetch(`/wineries/${winery._id}`, {
        method: 'PUT',
        body: form
    })
    .then(res => res.json())
    .catch(e => console.log(e))
}
const loadFilters = (query) => {
    const url = `/filter?${stringify(query)}`
    return fetch(url)
    .then(res => {
        return res.json()
    })
}
        

export default {
    loadFilters,
    getWineries,
    addWinery,
    updateWinery,
    getWineryById,
    getWineryByName,
}