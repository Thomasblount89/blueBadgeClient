import {useEffect, useState} from 'react';
import DisplayMovies from './DisplayMovie/DisplayMovie';
import SingleMovie from './SingleMovie/SingleMovie';

const featured_API = `https://api.themoviedb.org/3/movie/popular?api_key=58269892c382f28ba4692e1cab597755&language=en-US&page=1`
const search_API = `https://api.themoviedb.org/3/search/movie?api_key=5dcf7f28a88be0edc01bbbde06f024ab&language=en-US&query=`




const MovieFlix = () => {

const [movies, setMovies] = useState([]);
const [singleMovie, setSingleMovie] = useState({});
const [toggleSingleMovie, setToggleSingleMovie] = useState(false);
const [searchTerm, setSearchTerm] = useState('')

console.log(singleMovie);

    useEffect(() => {
        fetch(featured_API)
          .then(res => res.json())
          .then(data => { console.log(data);
            setMovies(data.results)});
      }, []);


      const handleOnSubmit= (e) => {
        e.preventDefault();
    
        fetch(search_API + searchTerm)
        .then((res) => res.json())
        .then((data) => {
            setMovies(data.results)
            
        })
    }

    const handleOnChange = (e) => {
        setSearchTerm(e.target.value)
    }

    return(
        <>

        <header>
        <h3 className='nav'  onClick={() => setToggleSingleMovie(false)}>Home</h3>
        <form onSubmit={handleOnSubmit}>
        <input className='search' placeholder='Search Movie' value={searchTerm} onChange={handleOnChange} />
        </form>
        <h3 className='nav'>Login</h3>
        </header>


         {
             toggleSingleMovie ? <SingleMovie singleMovie={singleMovie} setToggleSingleMovie={setToggleSingleMovie} /> : <DisplayMovies movies={movies} setSingleMovie={setSingleMovie} setToggleSingleMovie={setToggleSingleMovie} />
         }
        </>
        
    )
}

export default MovieFlix;