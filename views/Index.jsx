const React = require('react');

class Index extends React.Component {
    render(){
        const { products } = this.props;
        return(
            <html>
            <head>
                <title>AGORA</title>
            </head>
            <body>
                <h1>The Capsule</h1><br/>
                <h3>Shop Women</h3>
                <h3>Shop Men</h3>
                {/* <ul>
                    {pokemon.map((mons) => {
                        return (
                            <li style={row}>
                                <h3>{mons.name}</h3>
                                <a href={`/pokemon/${mons.id}`}><img src="https://www.freeiconspng.com/uploads/file-pokeball-png-0.png" width="20px" height="20px"></img></a>
                                <br/>
                                <form action={`/pokemon/${mons.id}?_method=DELETE`} method="POST">
                                    <button type="submit" style={button}><h4 style={h4}>Delete Entry</h4></button>
                                </form>
                                <a href={`/pokemon/${mons.id}/edit`}><button type="submit" style={button}><h4 style={h4}>Edit Entry</h4></button></a>
                            </li>
                        );
                    })}
                </ul>
                <a href="/"><button style={button}><h3>Back to Main Directory!</h3></button></a><br/> */}
            </body>
            </html>
        )
    };
};

module.exports = Index;