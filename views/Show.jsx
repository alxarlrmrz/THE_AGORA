const React = require('react');

const button = {
    cursor: 'pointer',
    borderRadius: '10px',
};

  class Show extends React.Component {
    render() {
        const products = this.props.products
        let qty;
        let button;
        if(products.stock == 0) {
            qty = "sold out"
            button = null
        } else {
            qty = products.stock
            button = <form action={`/products/${products.category}/${products.id}?_method=PUT`}method='POST'>
            <input type="hidden" name="category" value={products.category}></input>
            <input type="hidden" name="name" value={products.name}></input>
            <input type="hidden" name="img" value={products.img}></input>
            <input type="hidden" name="brand" value={products.brand}></input>
            <input type="hidden" name="description" value={products.description}></input>
            <input type="hidden" name="stock" value={products.stock -1}></input>
            <input type="hidden" name="price" value={products.price}></input>
            <input type="submit" name="" value="Add to Cart"></input>
            </form>
        }       
        return(<html>
            <head>
            <link rel="preconnect" href="https://fonts.googleapis.com"></link>
            <link rel="preconnect" href="https://fonts.gstatic.com"></link>
            <link href="https://fonts.googleapis.com/css2?family=Cormorant+SC:wght@300&display=swap" rel="stylesheet"></link>
            <link href='/css/show.css' rel='stylesheet'></link>
                <title>AGORA</title>
            </head>
            <body>
            <div>
                <h1> {products.category} </h1>
                <h2> {products.name} </h2>
                    <img src={products.image}height="500px" width="500px"></img>
                    <h4> {products.brand} </h4>
                    <h5> {products.description} </h5>
                    <h5> {products.price} </h5>
                    <h5>available: {qty}</h5>
                    {button}
                    
                    <a href={`/products/${products.category}/${products.id}/edit`}><button>edit</button></a><br/>
                    <form action={`/products/${products.category}/${products.id}?_method=DELETE`} method='POST'>
                    <button>delete</button><br/>
                    </form>
                    <a href="/products"><button>home</button></a>
            </div>
            </body>
            </html>
        )
    }
}

module.exports = Show;