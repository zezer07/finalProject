import {useState,useEffect} from 'react'
import MovieComp from './Movie'
import axios from 'axios';


function MoviesPageComp(props) {

  const [movies,setMovies] = useState([])
  const [movieFind,setMovieFind] = useState()
  
  useEffect(()=>
  {
    
    async function allMovies ()
    {
     let movs= []
     let resp = await axios.get("http://localhost:8000/api/movies")
     let movies = resp.data
   

     movies.forEach(movie=> {

        let id = movie._id
        let Name = movie.Name
        let Image =movie.Image
        let Premiered = movie.Premiered
        let Genres = movie.Genres
    
        let obj ={id,Name,Image,Premiered,Genres}
        movs.push(obj)

    })

     setMovies(movs)

    }
    
    allMovies()
  
  },[])

  

 const AddMovieClick=()=>

  {
    
    
  }


  return (

    <div >

      
     <input type ="button" value = "Add movie"  onClick={AddMovieClick}/> <br/> <br/>

     <div className="searchWrpper">

    <input type="text" id ="moveFind" className="inputhBar" placeholder="Search for a movie" onChange={e=>{setMovieFind(e.target.value)}}/> 

    </div>

     {


       movies.map(movie=>
        
        {
         
         return <MovieComp key={movie.id} film = {movie} find ={movieFind} userId= {props.match.params.userId} />

       })


     }
 
    </div>

    
  );
}

export default MoviesPageComp;