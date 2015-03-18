import React from "react";
import  {testActions} from "./../flux/testActions.js";

class Input extends React.Component {
    constructor() {
        this.state = {
            display: "nada"
        }
    }

    actionTry () {
        testActions.fetchData()
    }

    render() {
        return (
            <div>
                <input />
                <button onClick={this.actionTry}>Don't Push Me Yet</button>
                <div>{this.state.display}</div>
                <div>{this.props.here}</div>
            </div>
        )
    }
}

export default Input;