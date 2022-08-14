const React = require('react')

class Home extends React.Component {
    render(){
        const { products } = this.props;
        return(
            <html>
            <head>
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