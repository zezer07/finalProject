
import {Link} from 'react-router-dom'

function UserComp(props) {



  const deleteUser=()=>

  {
   

  }

  const cancel =(e)=>
  {
    

  }

  
  return (

    <div className="item">

        <div className = "text">
      
       <b>Name  </b> {props.user.FirstName} &nbsp; {props.user.LastName} <br/> 

      <b>User Name </b> {props.user.UserName} <br/> 

      <b>Session timeout </b> {props.user.SessionTimeout} <br/> 

         <b> Created date </b> {props.user.CreatedDate} <br/> 

         <b> Permissions </b> 

          
          <ul>

           {props.user.Permissions.map(perm=>{return <li>{perm}</li>})}
           
           </ul>

           <Link className="linkDesignEdit" to = {"/MainPage/EditUser/" + props.user.id}>Edit/Update user</Link> <br/>
          <input type = "button" className="low-button" value ="Delete" onClick={e=>deleteUser(e)}/> 

          </div>

    </div>

    
  );
}

export default UserComp;
