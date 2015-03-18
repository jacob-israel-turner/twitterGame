import Dis from "flux";
var AppDispatch = new Dis.Dispatcher();

AppDispatch.handleAction = function(action){
    this.dispatch({
        source: 'VIEW_ACTION',
        action: action
    })
};

export { AppDispatch };