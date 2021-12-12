import {useState} from 'react'
import axios from 'axios'


function AddUserPageComp(props) {

  const [firstName,setFirstName] = useState("")
  const [lastName,setLastName] = useState("")
  const [userName,setUserName] = useState("")
  const [sessionTimeout,setSessionTimeOut] = useState("")
  const [permissions,setPermissions] = useState([])

  function updatePermissionss(perm)
  {

    if(document.getElementById(perm).checked)    
    { 
      
        let  newPerms =[...permissions,perm]
        setPermissions(newPerms)

    }
  
  
    else if(!(document.getElementById(perm).checked))
    {
  
        let index = permissions.indexOf(perm)
        let newPerms = [...permissions]
        newPerms.splice(index,1)
        setPermissions(newPerms)
  
    }


  }

  const AddUser=async (e)=>

   {

    e.preventDefault();

    let obj= { userName: userName,password : null}

        let statusPostLogin = await axios.post("http://localhost:8000/api/login",obj)
        let resp = await axios.get("http://localhost:8000/api/login")
        let users = resp.data
        let user = users.find(x=>x.UserName==userName)
        let id = user._id
        let objUser = {Id :id, FirstName : firstName, LastName : lastName, UserName : userName, 
            SessionTimeout : Number(sessionTimeout), CreatedDate : new Date().toLocaleDateString("en-GB"), 
            Permissions : permissions}
        let statusPostUsers = await axios.post("http://localhost:8000/api/users",objUser)

        alert('A new User has created')
        props.history.push("/MainPage/UsersManagement/" + props.match.params.userId)
      
   }



    return (
  
      
  
      <div className="item" >

<div className = "text">
        
     <h2>Add New User</h2>

     <form onSubmit={AddUser}>

        <b>First Name </b> <input className ="inputTextForm" type = "text" id = "FirstName" onChange={e=>{setFirstName(e.target.value)}}/> <br/>
        <b> Last Name:</b> <input className ="inputTextForm" type = "text" id = "LastName" onChange={e=>{setLastName(e.target.value)}}/> <br/>
        <b> User Name :</b> <input type = "text" className ="inputTextForm" id = "UserName" onChange={e=>{setUserName(e.target.value)}}/> <br/>
        <b>Sesion time out (Minutes):</b> <input type = "text" className ="inputTextForm" id = "SessionTimeout" onChange={e=>{setSessionTimeOut(e.target.value)}}/> <br/>
        <b>Permissions : </b>  <br/>
        
        <input type="checkbox" id={"ViewSubscriptions"} onChange={e=>{updatePermissionss("ViewSubscriptions")}}/> View Subscriptions <br/>
        <input type="checkbox" id={"CreateSubscriptions"} onChange={e=>{updatePermissionss("CreateSubscriptions")}}/> Create Subscriptions <br/>
        <input type="checkbox" id={"DeleteSubscriptions"} onChange={e=>{updatePermissionss("DeleteSubscriptions")}}/> Delete Subscriptions <br/>
        <input type="checkbox" id={"UpdateSubscriptions"} onChange={e=>{updatePermissionss("UpdateSubscriptions")}}/> Update Subscriptions <br/>
        <input type="checkbox" id={"ViewMovies"} onChange={e=>{updatePermissionss("ViewMovies")}}/> View Movies<br/>
        <input type="checkbox" id={"CreateMovies"} onChange={e=>{updatePermissionss("CreateMovies")}}/> Create Movies <br/>
        <input type="checkbox" id={"DeleteMovies"} onChange={e=>{updatePermissionss("DeleteMovies")}}/> Delete Movies <br/>
        <input type="checkbox" id={"UpdateMovies"} onChange={e=>{updatePermissionss("UpdateMovies")}}/> Update Movies <br/> <br/>

        <input type="submit" className="onelowbutton" value="Save" />
        <input type="submit" className="twolowbutton" value="Cancel" onClick={e=>{props.history.push("/MainPage/UsersManagement")}}/>
        
      </form>
        
      </div>

      </div>
  
      
    );
  }
  
  export default AddUserPageComp;