import {useEffect, useState} from 'react';
import DisplayMovies from './DisplayMovies/DisplayMovies';
import SingleMovie from './SingleMovie/SingleMovie';

const featured_API = `https://api.themoviedb.org/3/movie/popular?api_key=58269892c382f28ba4692e1cab597755&language=en-US&page=1`


const MovieFlix = (props) => {
    console.log(props.userId)

//const [movies, setMovies] = useState([]);
const [singleMovie, setSingleMovie] = useState({});
//const [newtoggleSingleMovie, newsetToggleSingleMovie] = useState(false);
console.log(singleMovie);

    useEffect(() => {
        fetch(featured_API)
          .then(res => res.json())
          .then(data => { console.log(data);
            props.setMovies(data.results)});
      }, []);


    return(
        <>
         
        {
            props.toggleSingleMovie ? <SingleMovie userId={props.userId} singleMovie={singleMovie} newsetToggleSingleMovie={props.setToggleSingleMovie} token={props.token} userId={props.userId}/> : <DisplayMovies movies={props.movies} setSingleMovie={setSingleMovie} newsetToggleSingleMovie={props.setToggleSingleMovie} token={props.token}/>
        }         
        </>
    )
}

export default MovieFlix;