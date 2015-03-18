import { AppDispatch } from './Dispatcher.js';
import axios from 'axios';

var testActions = {
    addData (data) {

    },
    fetchData () {
        axios.get('http://localhost:3001/test').then(function(got){
            this.sendItAlong(got.data);
        })
    },
    sendItAlong (data) {
        AppDispatch.handleAction({
            actionType: "RETHINK",
            data: data
        })
    }
};

export { testActions };