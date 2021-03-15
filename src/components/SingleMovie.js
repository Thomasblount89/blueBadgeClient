import {useEffect, useState} from 'react'
import Movie from './Movie'

const IMG_API = `https://image.tmdb.org/t/p/w1280`


const SingleMovie = ({title, poster_path, overview, vote_average, id} ) => {

    const [movies, setMovies] = useState([]);
    useEffect(() => {
        fetch(featured_API)
          .then(res => res.json())
          .then(data => { 
            setMovies(data.results)});
      }, []);

      

const featured_API = `https://api.themoviedb.org/3/movie/${id}?api_key=58269892c382f28ba4692e1cab597755&language=en-US`
        console.log()
    return(
        <div>

        </div>
        
    )
}

export default SingleMovie;

