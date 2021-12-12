import './App.css'
import axios from 'axios'
import {useState} from 'react'

const CreateAccountPageComp=(props)=>
{
  const [username,setUsername] = useState("")
  const [password,setPassword]= useState("")

  const checkUserName=async()=>
  {
    let resp = await axios.get("http://localhost:8000/api/login")
    let usersLogin = resp.data
    let user = usersLogin.find(user=>user.UserName===username && user.Password===null)
    if(user)
    {
        let obj = {userName : username, password : password}
        let id = user._id
        let resp = await axios.put("http://localhost:8000/api/login/"+id,obj)
        let status = resp.data

        if(status==='Updated')
        {
            alert("Your account has been successfully created, you can now log in")
            props.history.push('/')
        }

    }
    else 
    {
        alert("You have not been registered to the system. Please consult the system administrator!")
    }

    }
  

   return (

       <div className="login">
             
             <h2>Create an account</h2>

             <input type ="text" className = "inputText" onChange ={e=>{setUsername(e.target.value)}} placeholder="User Name"/><br/> 
             <input type="password" className = "inputText" onChange = {e=>{setPassword(e.target.value)}} placeholder="Password"/> <br/> <br/>
             <input type= "button" className ="buttonLogin" value = "Create " onClick={checkUserName}/> <br/>

       </div>
   )
}


export default CreateAccountPageComp
