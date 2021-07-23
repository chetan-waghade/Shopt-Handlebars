const express = require('express')
const path = require('path')
const hbs = require('hbs')
// init server
const app = express()

// configs views paths for handlebars
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')
app.set('view engine', viewsPath);
hbs.registerPartials(partialsPath, () => {
    console.log("Partials Added");
})


// init static assets
const staticFiles = path.join(__dirname, '../public')
app.use(express.static(staticFiles))


app.get('', (req, res) => {
    res.send("Hello World");