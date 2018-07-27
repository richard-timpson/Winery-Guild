const mongoose = require('mongoose')


//The winery schema
const winerySchema = mongoose.Schema ({
    wineryname: {
        type:String,
        required: true,
    },
    wineryowner: String,
    permitnumber: String,
    street: String,
    city: String,
    state: String,
    zipcode: Number,
    county: String,
    lat: Number,
    lng: Number,
    status: String,
    videourl: String,
    websiteurl: String,
    logo: String,
    background: String,
    description: String,
    phone: String,
    email: String,
    
})

winerySchema.index({wineryname: "text"})

module.exports = mongoose.model('Winery', winerySchema) //exporting the schema as 'Winery'