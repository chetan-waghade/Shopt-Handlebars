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

    const items = [
        {
            id: 0,
            item_name: 'Wildcat Tshirt YD',
            item_image_url: 'https://images.pexels.com/photos/3193731/pexels-photo-3193731.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            item_price: '345$'

        },
        {
            id: 1,
            item_name: 'Oklyo Tuy Tshirt Yz',
            item_image_url: 'https://images.pexels.com/photos/1666073/pexels-photo-1666073.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            item_price: '405$'

        },
        {
            id: 2,
            item_name: 'WebRyte XZ Pant',
            item_image_url: 'https://images.pexels.com/photos/3828245/pexels-photo-3828245.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            item_price: '700$'

        },
        {
            id: 3,
            item_name: 'Mintrat HelloKitty Shirt',
            item_image_url: 'https://images.pexels.com/photos/4352249/pexels-photo-4352249.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            item_price: '800$'

        },
    ]

    res.render("men", { results: items });
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