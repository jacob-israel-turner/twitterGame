/* App Imports */
import koa from 'koa';
import bodyParser from 'koa-bodyparser';
import koaRouter from 'koa-router';
import cors from 'koa-cors';
import request from 'koa-request';

/* Auth Imports */
import passport from 'koa-passport';
import TwitterStrategy from 'passport-twitter';
import session from 'koa-generic-session';

/* My Imports */
import rethink from "./rethinkHub";

/* My consts */
var replaceMe;
const publicUrl = replaceMe || 'localhost:3000';
const domainEnv = replaceMe || "localhost";
const consumerKey = 'Bi9gyTDmbvJON59t7bMb8aQsU';
const consumerSecret = 'fDMRNuU2DbQLjLb0oRWrkQqg5VB2ig1iStfdLPrPwkSjyX6QsS';

/* Fire up app */
var app = koa();
var router = koaRouter();


/* App Middleware */
app.use(bodyParser());
app.use(cors());
app.keys = ['keys', 'keykeys'];
app.use(session());
app.use(passport.initialize());
app.use(passport.session());


/* Authentication Crap */
var twitToken;
var twitTokenSecret;

passport.use(new TwitterStrategy({
    consumerKey: consumerKey,
    consumerSecret: consumerSecret,
    callbackURL: `http://${domainEnv}:3001/auth/callback`
}, function(token, tokenSecret, profile, done){
    twitToken =token;
    twitTokenSecret = tokenSecret;
    return done(null, profile);
}));

passport.serializeUser(function(user, done){
    done(null, user)
});

passport.deserializeUser(function(user, done){
    done(null, user)
});

/* My middleware */

function* authed(next){
    this.session.passport.user ? yield next : this.body = "no";
}

/* My Routes */
router.get('/test', function* (){
    this.body = yield rethink.testTable.get();
});

router.post('/test', function* (){
    this.body = yield rethink.testTable.post(this.request.body);
});

router.get('/auth/callback', passport.authenticate('twitter', {successRedirect: `http://${publicUrl}`, failureRedirect: '/'}));

router.get('/auth', passport.authenticate('twitter'));

router.get('/auth/test', authed, function* (){
    console.log(twitToken, twitTokenSecret);
    var options = {
        url:`https://api.twitter.com/1.1/followers/list.json?user_id${this.session.passport.user.id}&count=200`,
        headers: {
            Authorization: 'dunno yet'
        }
    };
    this.body = this.session.passport.user;
    //var response = yield request(`https://api.twitter.com/1.1/followers/list.json?user_id${this.session.passport.user.id}&count=200`);
});


app
    .use(router.routes())
    .use(router.allowedMethods());


app.listen(3001, function(){
    console.log("listening on 3001");
});
