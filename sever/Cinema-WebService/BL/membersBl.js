const axios = require('axios');

exports.getAllMembers = async function()
{
    let resp = await axios.get("http://localhost:5000/api/members");
    let movies = resp.data;
    return movies;
}
