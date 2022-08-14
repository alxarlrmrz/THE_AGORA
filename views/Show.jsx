const React = require('react');
const style = {
    backgroundColor: 'white'
  };
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
            <input type="hidden" name="name" value={products.name}></input>
            <input type="hidden" name="img" value={products.img}></input>
            <input type="hidden" name="price" value={products.price}></input>
            <input type="hidden" name="stock" value={products.stock -1}></input>
            <input type="hidden" name="description" value={products.description}></input>
            <input type="hidden" name="category" value={products.category}></input>
            <input type="submit" name="" value="Add to Cart"></input>
            </form>
        }       
        return(
            <div style = {style}>
                <h1> {products.category} </h1>
                <h2> {products.name} </h2>
                    <img src={products.img}></img>
                    <h5> {products.description} </h5>
                    <h3>Available: {qty}</h3>
                    {button}
                    
                    <a href={`/products/${products.category}/${products.id}/edit`}><button>Edit</button></a><br/>
                    <form action={`/products/${products.category}/${products.id}?_method=DELETE`} method='POST'>
                    <button>Delete</button><br/>
                    </form>
                    <a href="/products"><button>Back to Index</button></a>
            </div>
            
        )
    }
}

module.exports = Show;