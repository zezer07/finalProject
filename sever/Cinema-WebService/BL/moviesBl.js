const axios = require('axios');

exports.getAllMovies = async function()
{
    let resp = await axios.get("http://localhost:5000/api/movies");
    let movies = resp.data;
    return movies;
}
