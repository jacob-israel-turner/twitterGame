import React from 'react';
import Router from 'react-router'; 
import routes from './routes/routes';
var RouteHandler = Router.RouteHandler;

require('./App.css');


class App extends React.Component {
  constructor(){
    this.state = {
      stuff: "So Much Stuff"
    }
  }
  render(){
    return (
      <div>

      </div>
    )
  }
}
React.render(<App />, document.getElementById("app"));