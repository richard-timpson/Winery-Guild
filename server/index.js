const express = require('express')
// const morgan = require('morgan')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app = express()
const wineryRouter = require('./routes/wineries')
const filterRouter = require('./routes/filter')
const searchRouter = require('./routes/search')


app.use(bodyParser.json())
app.use(express.static(`${__dirname}/../client`)) //rendering the static views
// app.use(morgan('tiny')) 

app.use('/search', searchRouter)
app.use('/wineries', wineryRouter) //using the winery router for the home directory of the server
app.use('/filter', filterRouter)
app.use(express.static(`${__dirname}/uploads`))


// mongoose.connect('mongodb://richt3211:hetfield3211@ds119171.mlab.com:19171/winery-guild') //connecting to mlab database
mongoose.connect('mongodb://richt3211:hetfield3211@ds119171.mlab.com:19171/winery-guild', ({useNewUrlParser: true}))
	.then(() => {
		app.listen(process.env.Port || 3000, {useNewUrlParser: true})
	})
