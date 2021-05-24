const express = require('express');
const router = express.Router();

router.get('/f', function (req, res) {
    console.log('runing server')
    res.send('ok')
})

// this is how we resive params in the route /path:params
// note bollean will always got send as string 
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