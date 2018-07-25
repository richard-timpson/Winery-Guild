const Winery = require('../models/winery')

module.exports = {
    getWineries: (req, res, next) => {
        let query = {}
        if (!req.query.state && !req.query._id && !req.query.wineryname) {
            query = {
                status: ['Featured', 'Premium', 'Claimed']
            }
        }
        else {
            query = req.query
        }
        console.log(query)
        Winery.find(query)
        .then(wineries => {
            console.log(wineries)
            if (wineries.length === 1) {
                winery = wineries[0]
                return res.status(200).json(winery)
            }
            else {
                return res.status(200).json(wineries)
            }

        })
        .catch( e => {
            req.error = e
            next()
        })

    },

    getFilter: (req, res, next) => {
        const query = req.query
        const queryLength = Object.keys(query).length
        var filter = ''
        if (queryLength === 0) {
            filter = 'state'
        }
        else if ( queryLength === 1){
            filter = 'county'
        }
        else if ( queryLength === 2) {
            filter = 'city'
        }
        Winery.find(query).distinct(filter)
        .then(filter => {
            filter.sort()
            return res.status(200).json(filter)
        })
        .catch ( e => {
            req.error = e
            next()
        })
        
    },
    editAllWineries: (req,res, next) => {
        Winery.find({})
        .then( wineries => {
            console.log(wineries)
            for (var winery of wineries) {
                name = winery.wineryname.toUpperCase()
                winery.wineryname = name
                winery.save()

            }
            return res.status(200).json(wineries)
            
        })
        .catch ( e => {
            req.error = e
            next()
        })
    }

    
}