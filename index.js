const express = require('express');
const app = express();
const path = require('path');
const port = 3000;
const router = require('./routes')


app.use(express.static('./assets'))

app.set('view engine', 'ejs');
app.set('views','./views');



// app.get('/',function(req,res){
//     return res.send('Hello This is Apatsu')
// })

app.use('/', require('./routes'))

app.listen(port, function(err){
    if(err){
        console.log(`Error in running the Server on portNo.: ${port} 7 the error is : ${err}`)
    }
    console.log(`Server is Up & Runnig on port no.: ${port} By Gods Grace`)
})