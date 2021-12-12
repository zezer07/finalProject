const express = require('express');
const router = express.Router();
const usersBl = require('../BL/usersBl')


router.route('/')
    .get(async (req,resp) =>
    {
          let data = await usersBl.getUsers()
          return  resp.json(data)
    })

    router.route('/:id')
    .get(async (req,resp) =>
    {
          let response = await usersBl.getUsers()
          let user = response.find(x=>x.Id==req.params.id)
          let data 
          if(user)
          {
              data = user
          }
          else {data='Error ! This User doesnt exist'}

          return  resp.json(data)
    })

    
    router.route('/')
    .post(async(req,resp)=>
    {
        let users = await usersBl.getUsers()
        let obj = req.body;
        let newUsers = [...users,obj]
        let data = await usersBl.addUser(newUsers)
        return resp.json(data)

    })


router.route('/:id')
    .put(async(req,resp)=>
    {
    let allUsers = await usersBl.getUsers()
    let users = [...allUsers]
    let id = req.params.id
    let index = users.findIndex(x=>x.Id==id)
    if(index!=-1)
    {
    users.splice(index,1)
    let updateUser = req.body
    users.splice(index,0,updateUser)
    let status = await usersBl.addUser(users)
    return resp.json('Updated')
    }
    else {return resp.json('This user does not exist')}
    })

router.route('/:id')
 .delete(async(req,resp)=>
  {
   let allUsers = await usersBl.getUsers()
  let users = [...allUsers]
  let Id = req.params.id
  let index = users.findIndex(x=>x.id==Id)
  if(index!=-1)
  {
  users.splice(index,1)
  let status = await usersBl.addUser(users)
  return resp.json('Deleted')
  }
  else {return resp.json('This user does not exist')}
})


module.exports = router;