const React = require('react');
const style = {
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  };

class Index extends React.Component {
    render(){
        const {products} = this.props;
        return(
            <html>
            <head>
            <link rel="preconnect" href="https://fonts.googleapis.com"></link>
            <link rel="preconnect" href="https://fonts.gstatic.com"></link>
            <link href="https://fonts.googleapis.com/css2?family=Cormorant+SC:wght@300&display=swap" rel="stylesheet"></link>
            <link href='/css/index.css' rel='stylesheet'></link>
                <title>AGORA</title>
            </head>
            <body style={style}>
                <nav>
                    <a href="/products/Women/">shop women</a>
                    <a href="/products/Men/">shop men</a>
                </nav>
                <h1>the capsule</h1>
                <div class = "shop">
                {products.map((products) => {
                    return(
                         <div class = "skus" >
                             <a href={`/products/${products.category}/${products.id}`}>
                              <img src={products.image} height="150px" width="150px"></img>   
                             </a>
                             {products.name.charAt(0).toUpperCase() + products.name.slice(1)}
                         </div>
                    );
                })}
                </div>
                <a href={`/products/new`}><button>create new item</button></a><br/>
                <a href={`/`}><button>home</button></a>

            </body>
            </html>
        )
    };
};

module.exports = Index;