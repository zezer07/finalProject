import {useState,useEffect} from 'react'


const NewMovieComp=(props)=>
{
  
  const [moviesName,setMoviesNAME] = useState([])
  const [dateMov,setDate] = useState("")

  useEffect (()=>{
  
 
  },[])

  const choseDate=()=>
  {

  }

  const addSub=()=>
  {
  
           
  }
    

  const hide=()=>
  {
    props.callback(false)
   
  }

   let items = moviesName.map((item,index)=>{
    return <option key ={index} value={item}>{item}</option> 
    })

 if (props.show==true)
 {
  return (<div className = "subscribe">

    <h4> Register for a new Movie</h4>
    
   <select id ="NameSelect"onChange={e=>{choseDate()}}>

   {items}

  </select>

  <br/> <br/>

   <input type="datetime-local" id = "movieDate" onChange={e=>setDate(e.target.value)}/>

  <br/> <br/>

  <input type ="button" value = "Subscribe" onClick={e=>{addSub()}}/> <br/> 
  <input type ="button" value = "Cancel" onClick={e=>hide()}/> <br/> 

  </div>)
}

else 
{
  return <div></div>
}

}

export default NewMovieComp;