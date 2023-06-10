var express = require('express')
var router1 = express.Router()

router1.use(function timeLog(req, res, next){
    console.log('Requested URL Path : ', req.url)
    next()
})

router1.get('/', function(req, res){
    res.send('Birds Home page')
})

router1.get('/about/', function(req,res){
    res.send('About birds')
})

module.exports = router1