var express = require('express')
var app = express()
const port = process.env.PORT || 8000

app.use(express.json());
app.use(express.urlencoded({extended: true}));

var server = app.listen(port, function(){
    console.log(`Listening on port ${port}`)
})


var router1 = require('./router1')
app.use('/api/', router1)

function logger(req, res, next){
    console.log(new Date(), req.url)
    next()
}

app.use(logger)

app.get('/api/users', function(req, res){
    const user_id= req.query.id;
    const token = req.query.token;
    const geo = req.query.geo;

    res.send({
        'user_id' : 1,
        'token' : 'afa3',
        'geo' : 'Uk'
    })
})

app.get('/api/:version', function(req, res){
    res.send(req.params.version);
})

app.param('name', function(req, res, next,name){
    const modified = name.toUpperCase();
    req.name = modified
    next();
})

app.get('/api/users/:name', function(req,res){
    res.send('Hello '+ req.name + '!');
})
