const React = require('react');
const style = {
    backgroundColor: 'white'
}; 

class New extends React.Component {
    render() {        
        return(
            <html>
                <head>
                <title>AGORA</title>
                </head>
                <body style = {style}>
                    <div>
                        <h1>new item</h1>
                            <form action='/products'method='POST'>
                            name: <input type="text" name="name"></input><br />
                            image: <input type="text" name="img"></input>
                            brand: <input type="text" name="brand"></input>
                            price: <input type="text" name="price"></input>
                            stock: <input type="text" name="stock"></input>
                            description: <input type="text" name="description"></input>
                            category: <input type="text" name="category"></input>
                            <input type="submit" name="" value="submit"></input>
                            </form>
                            <button>clear form</button>
                            <a href="/products">home</a>
                    </div>
                </body>
            </html>
        )
    }
}

module.exports = New;