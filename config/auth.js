// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

    'facebookAuth' : {
        'clientID'      : '774251446037064', // your App ID
        'clientSecret'  : '0b936fb8f718a25722935bbd58ee7d15', // your App Secret
        'callbackURL'   : 'http://localhost:8080/auth/facebook/callback'
    },

    'twitterAuth' : {
        'consumerKey'       : 'your-consumer-key-here',
        'consumerSecret'    : 'your-client-secret-here',
        'callbackURL'       : 'http://localhost:8080/auth/twitter/callback'
    },

    'googleAuth' : {
        'clientID'      : '988792443624-vb1at0kbfnhrpihb00h9mo8u61u7e008.apps.googleusercontent.com',
        'clientSecret'  : 'MwVk6GyrPbsK_41pN5rOCQqf',
        'callbackURL'   : 'http://localhost:8080/auth/google/callback'
    }

};
