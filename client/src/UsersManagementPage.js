import {useState,useEffect} from 'react'
import axios from 'axios'
import UserComp from './UserCompPage'

const UsersManagementPageComp =(props)=>
{
    const [users,setUsers] = useState([])

    useEffect(()=>
  {

    async function loadUsers()
    {
     let pers= []
     let resp = await axios.get("http://localhost:8000/api/users")
     let users = resp.data
     
     users.forEach(user=> {

        let id = user.Id
        let FirstName = user.FirstName
        let LastName =user.LastName
        let UserName = user.UserName
        let CreatedDate = user.CreatedDate
        let SessionTimeout =user.SessionTimeout
        let Permissions = user.Permissions

        let obj ={id,FirstName,LastName,SessionTimeout,CreatedDate,UserName,Permissions}
        pers.push(obj)
    
     })

     setUsers(pers)
    
    }
       loadUsers();
  
  },[]
  
  )

    return (
        <div>
  
      <input type ="button" value = "Add user" className="top-button" onClick={e=>{props.history.push('/MainPage/AddUser')}}/> <br/> <br/>
 
 
      {
 
 
        users.map(pers=>
         
         {
          
          return <UserComp user = {pers} key={pers.id}/>
 
        })
 
 
      }

        </div>
    )

}

export default UsersManagementPageComp;