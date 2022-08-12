const express = require('express');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 3003;
const {response} = require('express');
const mongoose = require('mongoose');
const Products = require('./models/products');
const methodOverride = require('method-override');
const productsData = require('./utilities/productsData');
const { populate } = require('./models/products');
const products = require('./models/products');

//DB connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true, 
    useUnifiedTopology: true});
mongoose.connection.once('open', () => {
    console.log('connected to mongo')
});

//Middleware
app.use((req, res, next) => {
    console.log(`I run for all routes`);
    next();
});
app.use(methodOverride('_method')) //Sets up methodoverride for use

//Connects to public and CSS. do I need this?
app.use(express.static('public')); 

//setting up views
app.set('view engine', "jsx");
app.engine('jsx', require('express-react-views').createEngine());
app.use(express.urlencoded({extended:true}));

//Landing Page
app.get('/',(req, res) =>{
    res.render("Home")
});

//Index page
app.get('/products', (req, res) => {
    Products.find({}, (error, allProducts) => {
        res.render('Index', {
            products: allProducts     
        })
    })
});

//Create products page
app.get('/products/new', (req, res) => {
    res.render('New');
});

//Create products POST route
app.post('/products/', (req, res) => {
    Products.create(req.body,(err, createdProducts) => {
       res.redirect('/products');
    });
});












app.listen(3000, function() {
    console.log('Listening on port', port)
});