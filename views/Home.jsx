const React = require('react')

class Home extends React.Component {
    render(){
        const { products } = this.props;
        return(
            <html>
            <head>
                <title>AGORA</title>
            </head>
            <body>
                <h1>AGORA</h1>
            </body>
            </html>
        )
    };
};

module.exports = Home;