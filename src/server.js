const express = require('express')
const path = require('path')
const hbs = require('hbs')
// init server
const app = express()

// configs views paths for handlebars
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

app.set('view engine', 'hbs');
app.set('views', viewsPath);
// register partials
hbs.registerPartials(partialsPath, () => {
    console.log("Partials Added");
})


// init static assets
const staticFiles = path.join(__dirname, '../public')
app.use(express.static(staticFiles))

// Routes

// Root
app.get('', (req, res) => {
    res.render("index");
})

// Men
app.get('/men', (req, res) => {
    res.render("men");
})

// Woman
app.get('/woman', (req, res) => {
    res.render("woman");
})

// Kids
app.get('/kids', (req, res) => {
    res.render("kids");
})

app.listen(3000, () => {
    console.log("Server started on port 3000")
});