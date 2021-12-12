import NewMovieComp from './NewMovie'
import {useState} from 'react'
import {Link} from 'react-router-dom'


const MoviesWatchedComp=(props) => {

  const [view,setView] = useState(false)
  const[movies,setMovies] = useState([])

 
   const allmovies=()=>
   { 
   
   }
  
  return (

    <div>
    
    <h3>Movies Watched</h3>
    
    
    <input type ="button" value="Subscribe to new movie" onClick={e=>setView(true)}/> 

    <ul>


    {
      movies.map((item,index)=>{
      return <li> <Link to = {"/Movies/" + props.userId + "/" + item}key = {index}>{item} </Link> </li>
     })
   }

   
  </ul>

    <br/>

    <NewMovieComp show = {view} callback={data=>setView(data)} memberId= {props.Id} userId ={props.userId}/>


     </div>

    
  );
}

export default MoviesWatchedComp;
