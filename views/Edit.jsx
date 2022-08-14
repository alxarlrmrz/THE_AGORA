const React = require('react')
const style = {
    backgroundColor: 'hite'
  };

  class Edit extends React.Component {
    render() {
        const products = this.props.products        
        return(
            <html>
                <head></head>
                <body style = {style}>
                    <div >
                        <h1> edit quantity </h1>
                            <form action= {`/products/${products.category}/${products.id}?_method=PUT`} method="POST">
                            name: <input type="text" name="name"></input><br/>
                            brand: <input type="text" name="brand"></input><br/>
                            image: <input type="text" name="img"></input><br/>
                            price: <input type="text" name="price"></input><br/>
                            stock: <input type="text" name="stock"></input><br/>
                            description: <input type="text" name="description"></input><br/>
                            category: <input type="text" name="category"></input><br/>
                            <input type="submit" name="" value="Submit"></input>
                            </form><br/>
                            <button>clear form</button><br/>
                            <a href="/products"><button>home</button></a>
                    </div>
                </body>
            </html>
        )
    }
}
module.exports = Edit




// const React = require('react');
// const Products = require('../models/products');

// class Edit extends React.Component {
//     render() {
//         const products = this.props.products;
//         return (
//             <html>
//             <head>
//                 <title></title>
//             </head>
//             <body>
//                 <h1>Update Your Pokedex Entry</h1>
//                 <h3>Tell me about the Pokemon!</h3>
//                     {/* NOTE: action will be the route, method will be the HTTP verb */}
//                     <form action={`/products/${products.id}?_method=PUT`} method="POST">
//                         Name: <input type="text" name="name" placeholder='Name'/><br/>
//                         Image: <input type="text" name="img" placeholder='Image URL' /><br/>
//                         <input type="submit" name="" value="Edit Entry"/>
//                     </form>
//             </body>
//             </html>
//         );
//     }
// }

module.exports = Edit;