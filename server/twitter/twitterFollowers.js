import Twit from "twit";

var twitHub = {
    T: {},
    initialize(consumer_key, consumer_secret, access_token, access_token_secret, id){
        this.T = new Twit({
            consumer_key: consumer_key,
            consumer_secret: consumer_secret,
            access_token: access_token,
            access_token_secret: access_token_secret
        });
        return new Promise((resolve, reject)=>{
            this.T.get('followers/list', {user_id: id, count: 200}, function(err, data, response){
                if(data){
                    resolve(data);
                }
            })
        });

    },
    getFollowers(id){
        this.T.get('followers/list', {user_id: id, count: 200}, function(err, data, response){
            console.log(data);
        })
    }
};

export { twitHub };