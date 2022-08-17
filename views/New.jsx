const React = require('react');


class New extends React.Component {
    render() {        
        return(
            <html>
                <head>
                <link rel="preconnect" href="https://fonts.googleapis.com"></link>
<link rel="preconnect" href="https://fonts.gstatic.com" ></link>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+SC:wght@300&display=swap" rel="stylesheet"></link>
            <link href='/css/new.css' rel='stylesheet'></link>
                <title>AGORA</title>
                </head>
                <body>
                    <div>
                        <h1>request item</h1>
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
                            <button>clear form</button><br/>
                <a href={`/`}><button>home</button></a>
                    </div>
                </body>
            </html>
        )
    }
}

module.exports = New;