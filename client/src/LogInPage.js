import './App.css';
import axios from 'axios'
import {useState} from 'react'
import {Link,useHistory} from 'react-router-dom'

function LogInPageComp() {

const [username,setUsername]= useState("")
const [password,setPassword] = useState("")

let history = useHistory();

const checkUser=async()=>
{
  
  let resp = await axios.get("http://localhost:8000/api/login")
  let usersLogin = resp.data
  let user = usersLogin.find(user=>user.UserName===username && user.Password===password)
  
  if(user)
  {
    history.push('/MainPage')
  }

 else 
 {
  alert("Your username or password is incorrect. If you dont't have an account create on ! ")
 }

}

  return (
    <div className="login">
      
         <input type ="text" className = "inputText" onChange ={e=>{setUsername(e.target.value)}} placeholder="User Name"/><br/> 
         <input type="password" className = "inputText" onChange = {e=>{setPassword(e.target.value)}} placeholder="Password"/> <br/> <br/>
         <input type= "button" className ="buttonLogin" value = "login " onClick={checkUser}/> 

       <h3>New user ? </h3>  <Link className="linkDesign" to ="/CreateAccount">Create Account</Link>
       

    </div>
  );
}

export default LogInPageComp;