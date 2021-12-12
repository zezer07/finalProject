const User = require('../models/usersloginModel')

exports.getAllUser = ()=>
{
    return new Promise((resolve,reject)=>
    {
        User.find({},function(err,data)
        {
            if(err)
            {
                reject(err)
            }

            else resolve(data)
        })
    })

}

exports.getUser = (id)=>
{
    return new Promise((resolve,reject)=>
    {
        User.findById(id,function(err,data)
        {
            if(err)
            {
                reject(err)
            }

            else 
            {
                resolve(data)
            }
        })

    })
}

exports.addUser=(obj)=>
{
    return new Promise((resolve,reject)=>
    {
        let user = new User(
            {
                UserName : obj.userName,
                Password : obj.password,
                
            })

            user.save(err=>
                {
                    if(err)
                    {
                        reject(err)
                    }

                    else 
                    {
                        resolve('Created  with id : ' + user._id)
                    }
                })
    })
}

exports.updateUser=(id,obj)=>
{
    return new Promise((resolve,reject)=>
    {
        User.findByIdAndUpdate(id,
            {
                UserName : obj.userName,
                Password : obj.password,
                
            }, function(err)
            {
                if(err)
                {
                    reject(err)
                }

                else 
                {
                    resolve('Updated')
                }

            })
    })

}

exports.deleteUser=(id)=>
{
    return new Promise ((resolve,reject)=>
    {

        User.findByIdAndDelete(id,function(err)
        {
            if(err)
            {
              reject(err)
            }

            else 
            {
                resolve('Deleted')
            }
        })

    })
}