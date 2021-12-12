const express = require('express');
const router = express.Router();
const usersloginBl = require('../BL/usersloginBl')

router.route('/')
    .get(async (req,resp) =>
    {
          let data = await usersloginBl.getAllUser()
          return  resp.json(data)
    })

    router.route('/:id')
    .get(async (req,resp) =>
    {
        let data = await usersloginBl.getUser(req.params.id);
        return resp.json(data);
    })

    router.route('/')
    .post(async (req,resp) =>
    {
        let status = await usersloginBl.addUser(req.body);
        return resp.json(status);
    })

    router.route('/:id')
    .put(async (req,resp) =>
    {
        let status = await usersloginBl.updateUser(req.params.id,req.body);
        return resp.json(status);
    })

    router.route('/:id')
    .delete(async (req,resp) =>
    {
        let status = await usersloginBl.deleteUser(req.params.id);
        return resp.json(status);
    })

module.exports = router;