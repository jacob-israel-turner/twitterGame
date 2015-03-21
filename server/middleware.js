function* authed(next){
    this.session.passport.user ? yield next : this.body = "no";
}

function* responseTime(next){
    var time =  new Date();
    yield next;
    var ms = new Date - time;
    this.set('X-Response-Time', `${ms} ms`)
}

export { authed, responseTime }