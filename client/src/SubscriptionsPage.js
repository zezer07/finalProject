

import {useEffect,useState} from 'react'
import axios from 'axios'
import MemberComp from './Member'


function SubscriptionsPageComp(props) {

 const [members,setMembers] = useState([])

  useEffect(()=>
  {

    async function allMembers ()
    
    {

    let resp = await axios.get("http://localhost:8000/api/members")
    let members = resp.data


     //Juste the first time or if there is not members in the DB, push the members in the DB 

    
     let allMembers =[]

     members.forEach(member=>{

     let Id = member._id
     let Name = member.Name
     let Email = member.Email
     let City = member.City

     let obj ={Id,Name,Email,City}

     allMembers.push(obj)


   })

      setMembers(allMembers)

     
    } 
    
    allMembers() 
  
  },[members])


    
  return (

    <div>

      <h2>Subscriptions</h2>

      <input type = "button" value= "Add Member" onClick={e=>{props.history.push("/AddMember/"+ props.match.params.userId)}}/> <br/> <br/>


      {


       members.map((membre,index)=>
 
         {
  
           return <MemberComp key ={index} member = {membre} userId={props.match.params.userId}/>

         })


      }
      
    </div>

    
  );
}

export default SubscriptionsPageComp;
