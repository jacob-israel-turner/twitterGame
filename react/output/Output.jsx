import React from "react";

class Output extends React.Component{
    constructor(){
        this.state = {
            data: 'Here it is'
        }
    }
    render () {
        return (
            <div>
                <h1>{this.state.data}</h1>
            </div>
        )
    }
}

export default Output;