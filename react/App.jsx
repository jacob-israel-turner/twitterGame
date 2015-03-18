import React from 'react';
require('./App.css');

import Input from './input/Input.jsx';
import Output from './output/Output.jsx';


class App extends React.Component {
    constructor(){
        this.state = {
            stuff: "So Much Stuff"
        }
    }
    render(){
        return (
            <div>
                <Input here={this.state.stuff}/>
                <Output />
            </div>
        )
    }
}
React.render(<App />, document.getElementById("app"));