import { AppDispatcher } from './Dispatcher.js';
import objectAssign from 'react/lib/Object.assign';
var EventEmitter = require('events').EventEmitter;

var CHANGE_EVENT = 'change';

var _store = {
    rethink: []
};

var rethinkHandle = function(data){
    _store.rethink = data
};

var testStore = objectAssign({}, EventEmitter.prototype, {
    emitChange (){
        this.emit(CHANGE_EVENT);
    },
    addChangeListener (cb){
        this.on(CHANGE_EVENT, cb);
    },
    removeChangeListener (cb){
        this.removeListener(CHANGE_EVENT, cb);
    },
    getRethink (){
        return _store.rethink
    }
});