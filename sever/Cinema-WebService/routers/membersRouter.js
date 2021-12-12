const express = require('express');
const router = express.Router();
const membersBl = require('../BL/membersBl')

router.route('/')
    .get(async (req,resp) =>
    {
        let data = await membersBl.getAllMembers();
        return  resp.json(data)
    })

module.exports = router;