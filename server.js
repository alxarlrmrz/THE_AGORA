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

//DB connection ask melissa!
// mongoose.connect(process.env.MONGO_URI, {
//     useNewUrlParser: true, 
//     useUnifiedTopology: true});
// mongoose.connection.once('open', () => {
//     console.log('connected to mongo')
// });
mongoose.connect(process.env.MONGO_URI || 'mongo://localhost:3003/products', { useNewUrlParser: true })
        .then(connect => console.log('connected to mongo..'))
        .catch(e => console.log('could not connect to mongo', e))



//Middleware
app.use((req, res, next) => {
    console.log(`I run for all routes`);
    next();
});
app.use(express.urlencoded({extended:false}));
app.use(methodOverride('_method')) //Sets up methodoverride for use

//Connects to public and CSS. do I need this?
app.use(express.static('public')); 

//setting up views
app.set('view engine', "jsx"); //HTML template
app.engine('jsx', require('express-react-views').createEngine());
// app.use(express.urlencoded({extended:true}));

// Seed Route
app. get('/products/seed', async (req,res) =>{
    await Products.deleteMany({})
    await Products.create(productsData);    
    res.redirect('/products');
});

// app.get('/products/seed', (req, res)=>{
//     products.create([
//         {
//             name:"The Bow Large Leather Tote Bag",
//             price:"$2290USD",
//             // img: {https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/6b/P00697916.jpg}
//         },
//         {
//             name:"Tabi Leather Ballet Flats",
//             price:"$650USD",
//             // img: {https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/fb/P00591250_d3.jpg}
//         },
//         {
//             name:"Leather Platform Ankle Boots",
//             price:"$1390USD",
//             // img: {https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/be/P00695532.jpg}
//         }
//     ], (err, data)=>{
//         res.redirect('/products');
//     })
// });

// //Seed route
// app.get('/products/seed', (req, res) => {
    
//     Products.deleteMany({})
//     Products.create(productsData)
// });

// app.get('/products/seed', (req, res) => {
//     Products.create(productsData);
//     res.redirect('/products');
// })


//Home Page
app.get('/',(req, res) =>{
    res.render("Home")
});



//Index page
app.get('/products', (req, res) => {
    Products.find({}, (err, allProducts) => {
        console.log(allProducts)
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

//Index of Categories
app.get('/products/:category', (req, res) => {    
    Products.find({category: req.params.category},(err, allProducts)=>{
        res.render('Index', {
            products: allProducts  
        });
    });
});

//Show route
app.get('/products/:category/:id', (req, res) =>{
    Products.findById(req.params.id, (err,foundProducts) =>{
        res.render("Show", {
            products: foundProducts
        }); 
    });  
});

//Delete Route
// app.delete('/products/:id', (req, res) => {
//     Products.findByIdAndRemove(req.params.id, (err, data) => {
//         res.redirect('/products')
//     });
// });

// Edit
app.get('/products/:category/:id/edit', (req, res) => {
    Products.findById(req.params.id, (err, foundProducts) =>{
        if(!err){
            res.render('Edit', {
                products: foundProducts
        })} else {
            res.send({
                msg: err.message
            });
        }
    })
});

//Update DataBase
app.put('/products/:category/:id', (req, res) => {
    Products.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    }, (err, foundProducts) => {
        res.redirect(`/products/${req.params.category}/${req.params.id}`)
    });
});

//Delete
app.delete('/products/:category/:id', (req, res) => {
    console.log('Deleting...');
    //First arg is ID we want to delete, 2nd arg is callback func
     Products.findByIdAndRemove(req.params.id, (err, data) => {
         res.redirect('/products');
     });
 });



app.listen(port, function() {
    console.log('Listening on port', port)
});