const request = require('request');
const express = require('express');
const router = express.Router();

const API_URL = " https://recipes-goodness.herokuapp.com/recipes/"

router.get('/sanity', function (req, res) {
    console.log('runing server')
    res.send('ok')
})

router.get('/recipes/:ingredient', function (req, res) {
    const { ingredient } = req.params

    request(API_URL + ingredient, (error, response, body) => {
        const { results } = JSON.parse(body);
        let res_filttered = results.map(r => {
            return {
                ingredients: r.ingredients,
                href: r.href,
                title: r.title,
                thumbnail: r.thumbnail
            }
        })
        res.send(res_filttered)
    })
})


module.exports = router