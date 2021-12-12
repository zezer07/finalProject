const express = require('express');
const router = express.Router();
const moviesBl = require('../BL/moviesBl')

router.route('/')
    .get(async (req,resp) =>
    {
        let data = await moviesBl.getAllMovies()
        return  resp.json(data)
    })

module.exports = router;