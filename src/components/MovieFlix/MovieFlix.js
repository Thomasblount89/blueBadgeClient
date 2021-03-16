import {useEffect, useState} from 'react';
import DisplayMovies from './DisplayMovies/DisplayMovies';
import SingleMovie from './SingleMovie/SingleMovie';

const featured_API = `https://api.themoviedb.org/3/movie/popular?api_key=58269892c382f28ba4692e1cab597755&language=en-US&page=1`

const MovieFlix = () => {

const [movies, setMovies] = useState([]);
const [singleMovie, setSingleMovie] = useState({});
const [toggleSingleMovie, setToggleSingleMovie] = useState(false);
console.log(singleMovie);

    useEffect(() => {
        fetch(featured_API)
          .then(res => res.json())
          .then(data => { console.log(data);
            setMovies(data.results)});
      }, []);

    return(
    
        <div className='movie-container'>
         {
             toggleSingleMovie ? <SingleMovie singleMovie={singleMovie} setToggleSingleMovie={setToggleSingleMovie} /> : <DisplayMovies movies={movies} setSingleMovie={setSingleMovie} setToggleSingleMovie={setToggleSingleMovie} />
         }
        </div>
    )
}

export default MovieFlix;