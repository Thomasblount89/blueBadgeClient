import {useEffect, useState} from 'react';
import Movie from './Movie'

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
          {movies.length > 0 && movies.map(movie => (
          <Movie key={movie.id} movie={movie} setSingleMovie={setSingleMovie}/>
         ))};
        </div>
    )
}

export default MovieFlix;


