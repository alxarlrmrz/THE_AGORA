const React = require('react');
const style = {
    backgroundColor: 'white'
}; 

class Index extends React.Component {
    render(){
        const {products} = this.props;
        return(
            <html>
            <head>
                <title>AGORA</title>
            </head>
            <body style={style}>
            <nav>
                    <a href="/products/Women/">shop women</a>
                    <a href="/products/Men/">shop men</a>
                </nav>
                <h1>the capsule</h1>
                {products.map((products) => {
                    return(
                        <li>
                            <a href={`/products/${products.category}/${products.id}`}>
                             <img src={products.image} height="150px" width="150px"></img>   
                            </a>
                            {products.name.charAt(0).toUpperCase() + products.name.slice(1)}
                        </li>
                    );
                })}
                <a href={`/products/new`}><button>create new item</button></a><br/>
                <a href={`/`}><button>home</button></a>

            </body>
            </html>
        )
    };
};

module.exports = Index;