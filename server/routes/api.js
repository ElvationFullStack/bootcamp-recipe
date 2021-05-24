const express = require('express');
const router = express.Router();
const request = require('request');
var urllib = require('urllib');

let api_url=" https://recipes-goodness.herokuapp.com/recipes/"
router.get('/sanity', function (req, res) {
    console.log('runing server')
    res.send('ok')
})

// this is how we resive params in the route /path:params
// note bollean will always got send as string
router.get('/recipes/:ingredient', function (req, res) {
    let reseved_ingredient = req.params.ingredient;
    api_url+= reseved_ingredient;

    var resieved_data;

    request(api_url, (erroe, response, body) => {
        resieved_data=JSON.parse(body).results;
        // res.send('ok works')
        res.send(resieved_data)
    })

   
    // res.end()
})
router.get('/getTeam/:teamName', function (req, res) {

    res.end()
})
router.put('/putTeam', function (req, res) {

    res.end()
})




///////////////////////////dreamTeam
router.get('/dreamTeam', function (req, res) {
    res.end();

})
router.post('/roster', function (req, res) {
    res.end()
})








module.exports = router