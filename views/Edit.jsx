const React = require('react')


  class Edit extends React.Component {
    render() {
        const products = this.props.products        
        return(
            <html>
                <head>
                <link rel="preconnect" href="https://fonts.googleapis.com"></link>
<link rel="preconnect" href="https://fonts.gstatic.com" ></link>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+SC:wght@300&display=swap" rel="stylesheet"></link>
            <link href='/css/edit.css' rel='stylesheet'></link>
                </head>
                <body>
                    <div >
                        <h1> edit </h1>
                            <form action= {`/products/${products.category}/${products.id}?_method=PUT`} method="POST">
                            category: <input type="text" name="category"></input><br/>
                            name: <input type="text" name="name"></input><br/>
                            image: <input type="text" name="image"></input><br/>
                            brand: <input type="text" name="brand"></input><br/>
                            description: <input type="text" name="description"></input><br/>
                            price: <input type="text" name="price"></input><br/>
                            stock: <input type="text" name="stock"></input><br/>
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