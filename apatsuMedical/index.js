const express = require('express');
const cookieParser = require('cookie-parser')
const app = express();
// const path = require('path');
const port = 4000;
const db = require('../config/mongoose')
// used for session cookie
const session = require('express-session');
const passport = require('passport');
const passprtLocal = require('./config/passport-local-strategy');
const MongoStore = require('connect-mongo')(session);
// flash
const flash = require('connect-flash');
const customMware = require('./config/middleware');

app.use(express.urlencoded());
app.use(cookieParser());

app.use(express.static('./assets'))

app.set('view engine', 'ejs');
app.set('views','./views');

// mongo  store is used to store the session cookie in db
app.use(session({
    name:'apatsu',
    secret:'helloworldMedical',                     //change the secrett before deployment in production
    saveUninitialized:false,
    resave:false,
    cookie:{
        maxAge:(1000*60*100*24)
    },
    store: new MongoStore(
        {
            mongooseConnection: db,
            autoRemove:'disabled'
        },
        function(err){
            console.log(err || 'connect-monogdb Medical setup ok');
        }
    )
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(passport.setAuthenticatedUser);

app.use('/', require('./routes'))

app.listen(port, function(err){
    if(err){
        console.log(`Error in running the Server on portNo.: ${port} 7 the error is : ${err}`)
    }
    console.log(`Server is Up & Runnig on port no.: ${port} By Gods Grace`)
})