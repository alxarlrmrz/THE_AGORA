const React = require('react')

class Home extends React.Component {
    render(){
        const { products } = this.props;
        return(
            <html>
            <head>
            <link rel="preconnect" href="https://fonts.googleapis.com"></link>
<link rel="preconnect" href="https://fonts.gstatic.com"></link>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+SC:wght@300&display=swap" rel="stylesheet"></link>
            <link href='./css/styles.css' rel='stylesheet'></link>
                <title>AGORA</title>
            </head>
            <body>
            <a href={`/products`}><h1>AGORA</h1></a>
            </body>
            </html>
        )
    };
};

module.exports = Home;