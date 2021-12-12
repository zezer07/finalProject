
  import {useState,useEffect} from 'react'
  import axios from 'axios'

function EditUserPageComp(props) {

  const [user,setUser] =useState({})
  const [userName,setUserName] = useState("")
  const [sessionTimeout,setSessionTimeOut] = useState("")
  const [createdDate,setCreatedData] = useState("")
  const [permissions,setPermissions] = useState([])
  
  useEffect(()=>
  
  {
    async function loadUser ()
    {

      let resp = await axios.get("http://localhost:8000/api/users/"+props.match.params.id)
      let userMatch =resp.data

      setUser(userMatch)
      setUserName(userMatch.UserName)
      setSessionTimeOut(userMatch.SessionTimeout)
      setCreatedData(userMatch.CreatedDate)
      setPermissions(userMatch.Permissions)
    
      if(userMatch.Permissions!=null) 

     {
      if(userMatch.Permissions.includes("ViewSubscriptions"))

      {document.getElementById("ViewSubscriptions").checked=true}

      if(userMatch.Permissions.includes("CreateSubscriptions"))

      {document.getElementById("CreateSubscriptions").checked=true}

      if(userMatch.Permissions.includes("DeleteSubscriptions"))

      {document.getElementById("DeleteSubscriptions").checked=true}

      
      if(userMatch.Permissions.includes("ViewMovies"))

      {document.getElementById("ViewMovies").checked=true}
      
      if(userMatch.Permissions.includes("CreateMovies"))

      {document.getElementById("CreateMovies").checked=true}
     
      if(userMatch.Permissions.includes("DeleteMovies"))

      {document.getElementById("DeleteMovies").checked=true}

      if(userMatch.Permissions.includes("UpdateMovies"))

      {document.getElementById("UpdateMovies").checked=true}

     }
      
    }
    
    loadUser()
    
  }
  
  ,[props.match.params.id])

  function updatePermissions(perm)
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

  const update=async()=>
  {
    let newUser = {Id: user.Id,FirstName : user.FirstName, LastName : user.LastName, UserName: userName, CreatedDate : createdDate,
      SessionTimeout : sessionTimeout, Permissions : permissions }

    let response = await axios.put("http://localhost:8000/api/users/"+props.match.params.id,newUser)

    //update also the userName in loginUsers 
    let respUser = await axios.get("http://localhost:8000/api/login/"+props.match.params.id)
    let userLog = respUser.data
    let password = userLog.Password

    let newUserLogin = {UserName:userName,Password:password}

    let resp = await axios.put("http://localhost:8000/api/login/"+props.match.params.id,newUserLogin)
    
    let statusUsers = response.data
    let statusLogin = resp.data

    if(statusUsers=='Updated'&& statusLogin=='Updated')
    {
      alert("Updated")
      props.history.push('/MainPage/UsersManagement')
    }

    else alert("An error that occured")

  }


  return (
   
    <div className="item">

        <div className="text">
      
      <h2> {user.FirstName} {user.LastName}</h2>

      <form onSubmit={update}>

        User Name: <input type = "text" className ="inputTextForm" id = "UserName" defaultValue ={user.UserName} onChange={e=>{setUserName(e.target.value)}}/> <br/> 
        Sesion time out (Minutes): <input type = "text" className ="inputTextForm" id = "SessionTimeout" defaultValue ={user.SessionTimeout} onChange={e=>{setSessionTimeOut(e.target.value)}}/> <br/>
        Created date : <input type = "text" className ="inputTextForm" id = "CreatedDate" defaultValue ={user.CreatedDate} onChange={e=>{setCreatedData(e.target.value)}}/> <br/>
        Permissions : <br/>  
        
        <input type="checkbox" id={"ViewSubscriptions"} onChange={e=>{updatePermissions("ViewSubscriptions")}} /> View Subscriptions <br/>
        <input type="checkbox" id={"CreateSubscriptions"} onChange={e=>{updatePermissions("CreateSubscriptions")}}/> Create Subscriptions <br/>
        <input type="checkbox" id={"DeleteSubscriptions"} onChange={e=>{updatePermissions("DeleteSubscriptions")}}/> Delete Subscriptions <br/>
        <input type="checkbox" id={"ViewMovies"} onChange={e=>{updatePermissions("ViewMovies")}}/> View Movies<br/>
        <input type="checkbox" id={"CreateMovies"} onChange={e=>{updatePermissions("CreateMovies")}}/> Create Movies <br/>
        <input type="checkbox" id={"DeleteMovies"} onChange={e=>{updatePermissions("DeleteMovies")}}/> Delete Movies <br/>
        <input type="checkbox" id={"UpdateMovies"} onChange={e=>{updatePermissions("UpdateMovies")}}/> Update Movies <br/> <br/>

        <input type="submit" value="Update" className="onelowbutton" />
        <input type="submit" value="Cancel" className="twolowbutton"onClick={e=>{props.history.push("/MainPage/UsersManagement")}}/>

      </form>

      </div>

    </div>

    
  );
}

export default EditUserPageComp;