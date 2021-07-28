const express = require('express')
const path = require('path')
const hbs = require('hbs')

// Mongoose
require('./db/mongoose')

// Get all the routes
const userRouter = require('./router/userRoutes')
const productRouter = require('./router/productRoutes')

// init server
const app = express()

// convert request.body to json object
app.use(express.json())

// Register  routers
app.use(userRouter)
app.use(productRouter)


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

// Models
const Product = require('./models/product')

// Root
app.get('', (req, res) => {
    res.render("index");
})

// Men
app.get('/men', async (req, res) => {
    const items = await Product.find({})
    const count = await Product.count({})
    res.render("men", { results: items, resultsCount: count });
})
// Custom Route
app.get('/men/:id', async (req, res) => {
    try {
        const item = await Product.findOne({ product_name: req.params.id })
        if (!item) {
            console.log("Not Found");
        }
        res.render("selected_item", { item: item })
    }
    catch (e) {
        console.log(e);
    }
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