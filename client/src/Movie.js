
import {useState,useEffect} from 'react'


function MovieComp(props) {

  const [show,setShow] = useState(false)
  
  useEffect(()=>
  { 

    // write instead function which compare each letter 

        if(props.film.Name.toLowerCase().includes(props.find) || props.find==""|| props.find==null)
        {  
          setShow(true)     
        }

    else 
    {
      setShow(false)
    }
        
    

  },[props.find])

  const deleteMovie=()=>
  { 
      
  }

  const editMovie=()=>
  { 
      
  }

 // Show the Component just if you don't search film, or if the film that you search is exist

  if(show)
  
  {
    return (
      
           <div className="item">
        
           <h2> {props.film.Name} , {props.film.Premiered} </h2> <br/>



           <ul className="MovieList">

           {props.film.Genres.map((item,index)=>{return <li key ={index} ><h3>{item}</h3></li>})}
           
           </ul>
           
           <img width="250" height="250" src= {props.film.Image}></img> <br/> <br/>

           <input type="button" className="owOnebuttonEditmovies" value="Edit" onClick={editMovie}/> <br/> <br/>
           
           <input type="button" className="lowTwobuttonEditmovies" value="Delete" onClick={deleteMovie}/> <br/> <br/>
        
      </div>
      
    );
  }

  else {return<div></div>}

  }
  
  export default MovieComp;