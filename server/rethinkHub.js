var r = require('rethinkdbdash')();

var test = r.db("test").table("test");
var rethinkAPI = {
    testTable: {
        get (){
            return test.filter({});
        },
        post (data){
            return test.insert(data)
        }
    }
};

test.changes().run(function(err, result){
    result.each(function(err, row) {
        console.log(row);
    })
});



export default rethinkAPI;