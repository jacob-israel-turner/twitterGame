import React from 'react';
import Router from 'react-router';
import Dashboard from './dashboard/Dashboard';
import App from '../App';
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;

var routes = (
  <Route name="app" path="/" handler={App}>
    <DefaultRoute handler={Dashboard} />
  </Route>
)

export {routes};